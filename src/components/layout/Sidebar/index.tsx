import useToggle from '@hooks/useToggle'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { AiFillHome } from 'react-icons/ai'
import { BiLogOutCircle } from 'react-icons/bi'
import { BsApple } from 'react-icons/bs'

import SidebarLink from './SidebarLink'
import styles from './sidebar.module.css'
import { classNames } from '@utils'
import { homeRoutes } from './routes'
import { useSelector } from '@hooks/reduxhooks'
import ToggleTheme from '@components/shared/ToggleTheme'
interface Props {
  onClose: () => void
  onToggle: () => void
  mobile: boolean
}

const Sidebar = ({ onClose, mobile = false }: Props) => {
  const { isOpen, onToggle } = useToggle(true)
  const { user } = useSelector((state) => state.auth)

  return (
    <div
      className={classNames([
        'relative h-full ease-out transition-all duration-300 overflow-hidden hover:w-[300px] shadow  hover:opacity-100',
        mobile ? '' : styles.sidebar,
        mobile ? 'w-[300px]' : isOpen ? `w-[300px] ${styles.anchor} ` : 'w-[72px]'
      ])}>
      <div className="h-screen pb-20 overflow-scroll bg-gray-100 dark:bg-gray-700 scroll-smooth no-scrollbar ">
        <div className="flex items-center justify-center pt-10 h-28">
          <div className={`px-5 flex  w-full justify-between`}>
            <BsApple className={styles.oculto} />
            {mobile ? (
              <button className="btn-icon btn-ghost-primary" onClick={onClose}>
                <IoClose className="w-4 h-4" />
              </button>
            ) : (
              <div>
                <ToggleTheme className={styles.oculto} />
                <button className={`btn-icon btn-ghost-gray `} onClick={onToggle}>
                  {isOpen ? <FaPlus /> : <FaMinus />}
                </button>
              </div>
            )}
          </div>
        </div>
        <p className={`px-5 mb-5 text-lg font-semibold leading-7 text-primary-600  ${styles.text}`}>
          {user?.name} {user?.lastname}
        </p>
        <div className="flex flex-col gap-2 px-4 pb-5">
          <SidebarLink
            to="/admin"
            name="Home"
            mobile={mobile}
            onClick={onClose}
            icon={AiFillHome}
            subMenu={{ value: false, paths: [] }}
          />

          {homeRoutes.map(({ icon, name, to, subMenu }) => (
            <SidebarLink key={to} onClick={onClose} {...{ icon, name, to, subMenu }} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 w-full p-5 bg-gray-100 dark:bg-gray-700">
        <button
          className={`w-full px-0 text-white bg-red-600 border-red-600 dark:bg-red-400 btn dark:border-red-400 ${
            mobile ? '' : 'hidden'
          }  ${styles.cerrar}`}
          onClick={() => {}}>
          <BiLogOutCircle />
          <p>Cerrar Sesión</p>
        </button>
      </div>
    </div>
  )
}

export default Sidebar

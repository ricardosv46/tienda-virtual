import { FiChevronUp } from 'react-icons/fi'
import { SidebarLinkType } from '@interface/index'
import { classNames } from '@utils'
import { useState } from 'react'
import styles from './sidebar.module.css'
import SubmenuLink from './SubmenuLink'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = SidebarLinkType & { onClick?: () => void; mobile?: boolean }

const SidebarLink = ({ icon: Icon, name, to, onClick, subMenu, mobile }: Props) => {
  const router = useRouter()
  const match = to === router.pathname
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div>
      <Link href={subMenu?.value ? router.pathname : to} passHref>
        <button
          className={`px-3 py-4 w-full rounded-lg cursor-pointer text-center flex h-12 justify-between transition-all duration-300 ease-linear hover:bg-white hover:text-primary-500 ${
            !subMenu.value && match ? 'bg-white text-primary-500' : 'bg-transparent text-gray-400'
          } ${match ? 'dark:bg-gray-700' : 'dark:bg-transparent'}`}
          onClick={() => {
            if (subMenu.value === false && typeof onClick === 'function') {
              onClick()
            }
            setIsOpen(!isOpen)
          }}>
          <div className={`flex gap-3 `}>
            <Icon className="w-4 h-4" />

            <p className={` text-base font-semibold leading-none ${styles.oculto}`}>{name}</p>
          </div>
          {subMenu.value && (
            <div
              className={`transition-all duration-500 ease-in-out flex justify-center items-center ${
                styles.oculto2
              }   ${isOpen ? '' : 'rotate-180'}`}>
              <FiChevronUp />
            </div>
          )}
        </button>
      </Link>

      {subMenu.value
        ? isOpen && (
            <div
              className={classNames(['flex md:hidden flex-col gap-2 py-2 w-full', styles.cerrar])}>
              {subMenu.paths
                .filter((path) => path.render)
                .map(({ icon, name, to }) => (
                  <SubmenuLink key={to} onClick={onClick} {...{ icon, name, to, subMenu }} />
                ))}
            </div>
          )
        : null}
    </div>
  )
}

export default SidebarLink

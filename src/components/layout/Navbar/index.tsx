import BtnBurger from '@components/shared/btnBurger'
import ModalLogin from '@components/shared/Modal/ModalLogin'
import useToggle from '@hooks/useToggle'
import { classNames } from '@utils'
import ToggleTheme from '../../shared/ToggleTheme'
import Container from '../Container'
import { MdShoppingCart } from 'react-icons/md'
import { BsApple } from 'react-icons/bs'
import { IconUser } from '@icons'
import SidebarCart from '@components/shared/SidebarCart'
import Modal from '@components/shared/Modal'
import { FaHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from '@hooks/reduxhooks'
import { logoutAction } from '@store/slices/authslice'

const Navbar = ({ container }: { container?: boolean }) => {
  const { isAuth, user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const { isOpen, onClose, onToggle } = useToggle()
  const { isOpen: isOpenAuth, onOpen: onOpenAuth, onClose: onCloseAuth } = useToggle()
  const { isOpen: isOpenCart, onClose: onCloseCart, onToggle: onToggleCart } = useToggle()
  const { isOpen: isOpenMenu, onClose: onCloseMenu, onToggle: onToggleMenu } = useToggle()

  return (
    <header className="relative shadow bg-primary-500 dark:bg-red-500">
      <Container className="grid items-center grid-cols-4 py-2 " container={container}>
        <div className="flex items-center gap-5">
          <BtnBurger isOpen={isOpenMenu} setIsOpen={onToggleMenu} />
          <button className="text-white btn-icon btn-ghost-primary">
            <BsApple className="w-4 h-4" />
          </button>
        </div>

        <nav className="flex justify-end col-span-3 gap-5">
          <ToggleTheme className="text-white" />
          <button className="text-white btn-icon btn-ghost-primary">
            <FaHeart className="w-4 h-4" />
          </button>
          {/* <button onClick={onToggle} className="text-white btn-icon btn-ghost-primary">
            <AiOutlineHeart className="w-4 h-4" />
          </button> */}

          <div className="relative">
            <button
              onClick={() => {
                onToggle()
                if (!isOpenAuth) {
                  onOpenAuth()
                }
              }}
              className="text-white btn-icon btn-ghost-primary">
              <IconUser className="w-4 h-4" />
            </button>
            {isAuth ? (
              <>
                {isOpen ? (
                  <div className="absolute z-50 p-5 rounded-lg bg-slate-100 w-60 top-16 -right-2">
                    <div className="  justify-end  -left-4 w-full absolute -top-2.5  z-50 flex">
                      <div className="w-5 h-5 rotate-45 bg-slate-100"></div>
                    </div>

                    <button
                      className="w-full py-3 font-bold text-white rounded-lg bg-primary-500"
                      onClick={onClose}>
                      Ver Perfil
                    </button>
                    <button
                      className="w-full py-3 mt-1 font-bold text-white bg-red-500 rounded-lg"
                      onClick={() => {
                        onClose()
                        dispatch(logoutAction())
                      }}>
                      Cerrar Sesión
                    </button>
                  </div>
                ) : null}
              </>
            ) : null}
          </div>
          <button onClick={onToggleCart} className="text-white btn-icon btn-ghost-primary">
            <MdShoppingCart className="w-4 h-4" />
          </button>
        </nav>
      </Container>

      <Modal isOpen={isOpenMenu} onClose={onCloseMenu} type="sidebar">
        <div
          className={classNames([
            isOpenMenu ? '-translate-x-0' : '-translate-x-full',
            'fixed left-0 z-50  h-full  top-0 transition-all duration-500 flex flex-col  gap-5 p-5 bg-white w-80'
          ])}>
          <h1>Menu Lateral</h1>
          <div></div>
        </div>
      </Modal>

      <SidebarCart isOpen={isOpenCart} onClose={onCloseCart} />

      {!isAuth && <ModalLogin isOpen={isOpenAuth} onClose={onCloseAuth} />}
    </header>
  )
}

export default Navbar

import React from 'react'
import Modal from '../Modal'
import { classNames } from '@utils'

const SidebarCart = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} type="sidebar">
      <div
        className={classNames([
          isOpen ? 'translate-x-0' : 'translate-x-full',
          'fixed right-0 z-50  h-full  top-0 transition-all duration-500 flex flex-col  gap-5 p-5 bg-white w-80'
        ])}>
        <h1>Carrito</h1>
        <div></div>
      </div>
    </Modal>
  )
}

export default SidebarCart

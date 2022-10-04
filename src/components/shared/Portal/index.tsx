import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ children }: { children?: ReactNode }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  return mounted
    ? createPortal(children, document.querySelector('#portal') as Element | DocumentFragment)
    : null
}

export default Portal

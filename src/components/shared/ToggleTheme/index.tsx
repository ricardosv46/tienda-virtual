import { FaSun, FaMoon } from 'react-icons/fa'
import { classNames } from '@utils'

import { ButtonHTMLAttributes, useEffect, useState } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ToggleTheme = ({ className, ...props }: Props) => {
  const [theme, setTheme] = useState(typeof window !== 'undefined' ? localStorage.theme : '')

  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)

    localStorage.setItem('theme', theme)
  }, [theme, colorTheme])

  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false)

  const toogleDarkMode = (checked: boolean) => {
    setTheme(colorTheme)
    setDarkSide(checked)
  }

  return (
    <button
      {...props}
      onClick={() => {
        toogleDarkMode(!darkSide)
      }}
      // TODO: Configurar botones en dark mode
      className={classNames(['btn-icon btn-ghost-primary dark:text-white', className])}>
      <FaSun className="hidden dark:block" />
      <FaMoon className="block dark:hidden" />
    </button>
  )
}

export default ToggleTheme

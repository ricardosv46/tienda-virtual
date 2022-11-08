import React from 'react'

interface Props {
  children: React.ReactNode
  bgColor?: string
  className?: string
  container?: boolean
}

const Container = ({ children, bgColor = '', className = '', container = true }: Props) => {
  return (
    <section className={bgColor}>
      <div
        className={`mx-auto my-0 ${container ? 'w-[90%] max-w-[1200px]' : 'px-10'}  ${className}`}>
        {children}
      </div>
    </section>
  )
}

export default Container

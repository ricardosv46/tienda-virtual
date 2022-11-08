import React, { ReactNode } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const LayoutAdmin = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-between h-screen">
      <div className="hidden h-full lg:block">
        <Sidebar mobile={false} onToggle={() => {}} onClose={() => {}} />
      </div>

      <div className="flex-col w-full h-full overflow-y-auto">
        <Navbar container={false} />

        {children}
      </div>
    </div>
  )
}

export default LayoutAdmin

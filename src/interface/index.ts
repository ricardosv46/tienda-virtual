import type { LazyExoticComponent, ReactElement, SVGProps } from 'react'

export interface Paths {
  to: string
  name: string
  render: boolean
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement
}

export interface SidebarLinkType {
  to: string
  name: string
  subMenu: { value: boolean; paths: Paths[] }
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement
}

export interface Product {
  id: string
  name: string
  price: string
  image: string
  category: string
}

export interface User {
  username: string
  email: string
  role: string
}

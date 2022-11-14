import { IconUser } from '@icons'
import { SidebarLinkType } from '@interface/index'
import { IoOptionsSharp } from 'react-icons/io5'
import { MdShoppingCart } from 'react-icons/md'

export const homeRoutes: SidebarLinkType[] = [
  {
    icon: IoOptionsSharp,
    name: 'Categorías',
    to: '/admin/category',
    subMenu: {
      value: false,
      paths: [
        {
          icon: IoOptionsSharp,
          name: 'Crear Categoría',
          to: '/admin/category/create',
          render: false
        },
        {
          icon: IoOptionsSharp,
          name: 'Editar Categoría',
          to: '/admin/category/:slug',
          render: false
        }
      ]
    }
  },
  {
    icon: MdShoppingCart,
    name: 'Productos',
    to: '/admin/product',
    subMenu: {
      value: false,
      paths: []
    }
  },
  {
    icon: IconUser,
    name: 'Users',
    to: '/admin/user',
    subMenu: {
      value: false,
      paths: []
    }
  }
]

export const getRoutes = () => {
  let subRoutes = [{}]
  let mainRoutes = [{}]

  for (const { subMenu, ...mainRoute } of homeRoutes) {
    mainRoutes = [...mainRoutes, mainRoute]

    for (const subMenu_ of subMenu.paths) {
      subRoutes = [...subRoutes, subMenu_]
    }
  }

  return { mainRoutes, subRoutes }
}

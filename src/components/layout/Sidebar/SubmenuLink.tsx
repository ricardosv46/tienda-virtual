import { SidebarLinkType } from '@interface/index'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = SidebarLinkType & { onClick?: () => void }

const SubmenuLink = ({ icon: Icon, name, to, onClick }: Props) => {
  const router = useRouter()
  const match = to === router.pathname

  return (
    <Link href={to} passHref>
      <button
        className={`px-8  py-4 rounded-lg cursor-pointer text-center flex gap-3 items-center transition-all duration-300 ease-linear hover:bg-white hover:text-primary-500 ${
          match ? 'bg-white text-primary-500' : 'bg-transparent text-gray-400'
        } ${match ? 'dark:bg-gray-700' : 'dark:bg-transparent'}`}
        onClick={onClick}>
        <Icon className="w-4 h-4" />

        <p className="font-semibold ">{name}</p>
      </button>
    </Link>
  )
}

export default SubmenuLink

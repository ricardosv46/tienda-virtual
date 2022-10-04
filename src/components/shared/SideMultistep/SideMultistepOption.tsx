import { classNames } from '@utils'
import { Fragment, ReactElement, SVGProps } from 'react'

interface Props {
  isActive?: boolean
  isMobile?: boolean
  isComplete?: boolean
  desc: string
  label: string
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement
}

const SideMultistepOption = ({ isActive, isComplete, isMobile, label, desc, icon: Icon }: Props) => {
  const getBGColor = () => {
    if (isActive) return 'bg-primary-500'
    if (isComplete) return 'bg-green-500'
    return 'bg-slate-300 dark:bg-slate-500'
  }

  const getTextColor = () => {
    if (isActive || isComplete) return 'dark:text-white'
    return 'text-slate-400'
  }

  return (
    <Fragment>
      <div className={classNames(['flex items-center justify-center', isMobile ? 'order-2' : ''])}>
        <div className={classNames([isMobile ? 'text-left' : 'text-right'])}>
          <p className={classNames([getTextColor(), 'font-bold transition-colors'])}>{label}</p>
          <p className='dark:text-slate-500 text-slate-400'>{desc}</p>
        </div>
      </div>

      <div className='flex items-center justify-center'>
        <div className={classNames([getBGColor(), 'w-[50px] h-[50px] rounded-full grid place-content-center text-white transition-colors'])}>
          <Icon className='icon-6' />
        </div>
      </div>
    </Fragment>
  )
}

export default SideMultistepOption

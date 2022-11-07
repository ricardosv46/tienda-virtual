import { classNames } from '@utils'

const Spinner = ({ className = '' }: { className?: string }) => {
  return (
    <div
      className={classNames([
        className,
        'rounded-[50%] border-[3.5px] border-t-primary-500 dark:border-t-primary-700 border-l-primary-500 dark:border-l-primary-500 border-r-transparent border-b-transparent animate-spin'
      ])}
    />
  )
}

export default Spinner

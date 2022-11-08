import { classNames } from '@utils'

interface IProps {
  value: boolean
  onClick: () => void
  disabled?: boolean
}
export const ToggleSwitch = ({ value, onClick, disabled }: IProps) => {
  return (
    <>
      {/* Switch Container */}
      <button
        type="button"
        disabled={disabled}
        className={classNames([
          'flex items-center w-11 h-6 p-0.5 rounded-full cursor-pointer  ',
          !value ? 'bg-slate-200 dark:bg-slate-300' : 'bg-primary-500',
          disabled ? 'opacity-50' : 'opacity-100'
        ])}
        onClick={onClick}>
        {/* Switch */}
        <div
          className={classNames([
            'h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out',
            !value ? 'bg-gray-400 dark:bg-gray-500 ' : 'transform translate-x-5 bg-white',
            disabled ? 'opacity-50' : 'opacity-100'
          ])}></div>
      </button>
    </>
  )
}

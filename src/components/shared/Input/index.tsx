import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { classNames, isEmpty } from '@utils'
import { ChangeEvent, InputHTMLAttributes, ReactElement, SVGProps, useId, useState } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  rightElement?: ReactElement
  icon?: (props: SVGProps<SVGSVGElement>) => ReactElement
  ref?: any
}

const Input = ({ label, icon: Icon, rightElement, ...props }: Props) => {
  const uid = useId()
  const [show, setShow] = useState(false)
  const [innerValue, setInnerValue] = useState('')

  const error = props?.error ?? null
  const value = props?.value ?? innerValue

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInnerValue(e.target.value)
  }

  const isValueEmpty = isEmpty((value as string) ?? '')

  return (
    <div className={`w-full ${props.className}`}>
      <div className="relative w-full bg-opacity-50 rounded-lg shadow bg-slate-200 h-14 dark:bg-slate-700 ">
        <input
          {...props}
          id={`input-${uid}`}
          ref={props.ref}
          value={value}
          autoComplete="new-password"
          onBlur={props?.onBlur}
          onChange={props?.onChange ?? handleChange}
          type={props.type === 'password' ? (show ? 'text' : 'password') : props.type}
          className={classNames([
            error
              ? 'border-red-600 focus:border-red-600'
              : isValueEmpty
              ? 'border-transparent focus:border-primary-500'
              : 'border-transparent  focus:border-primary-500',
            'peer bg-transparent outline-none w-full h-full pt-4 px-3 border-2 rounded-lg transition-colors  dark:text-white ease-in-out '
          ])}
        />
        <label
          htmlFor={`input-${uid}`}
          className={classNames([
            isValueEmpty
              ? 'top-[14px] left-3 text-slate-500 '
              : 'top-0.5 left-3 text-primary-500 dark:text-primary-400 text-opacity-80 ',
            error
              ? 'text-red-600'
              : 'peer-focus:text-primary-500 dark:peer-focus:text-primary-400 ',
            'absolute peer-focus:top-0.5 peer-focus:left-3  transition-all duration-300 ease-in-out   '
          ])}>
          {label}
        </label>

        {/* eslint-disable */}
        {props.type === 'password' ? (
          <button
            type="button"
            onClick={() => setShow((prev) => !prev)}
            className="btn-icon btn-ghost-primary absolute right-3 top-[10px]">
            {show ? <FaEyeSlash /> : <FaEye />}
          </button>
        ) : null}

        {typeof Icon === 'function' ? (
          <button
            type="button"
            onClick={() => setShow((prev) => !prev)}
            className="btn-icon btn-ghost-primary absolute right-3 top-[10px]">
            {<Icon />}
          </button>
        ) : null}

        {rightElement ? <div className="absolute right-3 top-[10px]">{rightElement}</div> : null}
        {/* eslint-enable */}
        <p className="absolute text-sm text-red-500 -bottom-5">{error}</p>
      </div>
    </div>
  )
}

export default Input

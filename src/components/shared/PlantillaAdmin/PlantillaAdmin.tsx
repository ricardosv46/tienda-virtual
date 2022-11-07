import { FiChevronLeft } from 'react-icons/fi'
import { classNames } from '@utils'
import React, { ReactElement, ReactNode } from 'react'
import { useRouter } from 'next/router'

interface Props {
  children: ReactNode
  title: string
  button?: ReactElement
  desc?: string
  goback?: boolean
}

const PlantillaAdmin = ({ children, title, button, desc, goback = false }: Props) => {
  const router = useRouter()
  return (
    <div className="flex flex-col flex-1 p-10 ">
      <div className="flex flex-col items-start gap-5 mb-5 sm:flex-row">
        <div className="">
          <div className={classNames([goback ? 'flex items-center' : ''])}>
            {goback && (
              <button
                className="p-1 mt-1 mr-3 rounded-full btn-icon btn-solid-primary"
                onClick={() => router.back()}>
                <FiChevronLeft />
              </button>
            )}

            <h1 className="text-3xl font-bold dark:text-slate-200">{title}</h1>
          </div>

          <p className="my-3 text-sm md:text-lg text-slate-400">{desc}</p>
        </div>

        <div className="w-full mb-3 ml-auto sm:w-max">{button}</div>
      </div>
      {children}
    </div>
  )
}
export default PlantillaAdmin

import { ReactElement, SVGProps } from 'react'
import SideMultistepOption from './SideMultistepOption'

export interface Step {
  desc: string
  label: string
  component: ReactElement
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement
}

interface Props {
  steps: Step[]
  stepper: number
  title?: string
  desc?: string
}

const SideMultistep = ({ title, desc, stepper, steps }: Props) => {
  return (
    <div className="max-w-[960px] mx-auto py-10 px-3">
      <div className="pb-8 border-b dark:border-b-slate-700">
        <h1 className="mb-1 title-6 md:title-5 dark:text-white">{title}</h1>
        <p className="paragraph-2 md:paragraph-1 text-slate-400 dark:text-slate-500">
          {desc}
        </p>
      </div>

      <div className="md:grid grid-cols-[300px_minmax(0,_1fr)]">
        {/* SIDE STEPS DESKTOP */}
        <div className="flex-col hidden pt-10 border-r md:flex dark:border-r-slate-700">
          <div className="grid items-center grid-cols-[minmax(0,_1fr)_100px] max-w-[280px] mx-auto gap-y-10">
            {Array.isArray(steps) &&
              steps.map((step, i) => (
                <SideMultistepOption
                  key={i}
                  isActive={stepper === i}
                  isComplete={stepper > i}
                  {...step}
                />
              ))}
          </div>
        </div>

        {/* Children */}
        <div className="flex flex-col gap-6 pt-3 md:pt-10 md:px-10">
          <div className="flex gap-4 md:hidden">
            <SideMultistepOption isActive isMobile {...steps[stepper]} />
          </div>

          <p className="hidden dark:text-slate-400 text-slate-400 md:block">
            Paso {stepper + 1}/{steps.length}
          </p>

          {steps[stepper].component}
        </div>
      </div>
    </div>
  )
}

export default SideMultistep

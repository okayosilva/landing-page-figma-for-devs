import { ReactNode, ComponentProps } from 'react'

type RootProps = ComponentProps<'div'> & {
  children: ReactNode
}

export function Root({ children, ...rest }: RootProps) {
  return (
    <div className="flex items-center gap-4" {...rest}>
      {children}
    </div>
  )
}

type TitleProps = ComponentProps<'span'>

export function Title({ ...rest }: TitleProps) {
  return (
    <span
      className="line-clamp-2 flex font-semibold leading-5 text-gray-01 sm:max-w-44"
      {...rest}
    />
  )
}

type subTitle = ComponentProps<'span'>

export function SubTitle({ ...rest }: subTitle) {
  return <span className="text-sm leading-7 text-gray-05" {...rest} />
}

export const Card = {
  Root,
  Title,
  SubTitle,
}

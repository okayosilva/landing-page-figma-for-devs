import { ReactNode, ComponentProps, ElementType } from 'react'

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

type IconProps = {
  icon: ElementType
}

export function Icon({ icon: Icon }: IconProps) {
  return <Icon className="" />
}

type TitleProps = ComponentProps<'span'>

export function Title({ ...rest }: TitleProps) {
  return (
    <span
      className="line-clamp-2 flex max-w-44 font-semibold leading-5 text-gray-01"
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
  Icon,
  Title,
  SubTitle,
}

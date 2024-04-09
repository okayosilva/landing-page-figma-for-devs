import { ReactNode, ComponentProps, ElementType } from 'react'

type RootProps = ComponentProps<'div'> & {
  children: ReactNode
}

export function Root({ children, ...rest }: RootProps) {
  return (
    <div
      className="flex max-w-[205px] items-center	gap-4 whitespace-pre-wrap"
      {...rest}
    >
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
  return <span className="line-clamp-2  font-semibold" {...rest} />
}

type subTitle = ComponentProps<'span'>

export function SubTitle({ ...rest }: subTitle) {
  return <span {...rest} />
}

export const Card = {
  Root,
  Icon,
  Title,
  SubTitle,
}

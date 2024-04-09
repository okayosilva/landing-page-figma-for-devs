import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'bg-indigo-07 rounded flex items-center justify-center text-gray-01 hover:bg-indigo-09 transition-colors duration-150',
  variants: {
    variant: {
      header: 'py-3 px-6 w-32 h-11 ',
      section: 'max-w-[288px] w-full h-[61px]',
    },
  },
  defaultVariants: {
    variant: 'header',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...rest }: ButtonProps) {
  return <button {...rest} className={button({ variant, className })}></button>
}

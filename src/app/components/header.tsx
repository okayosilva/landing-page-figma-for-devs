import Image from 'next/image'
import logoMonaco from '@/app/assets/monaco-white-purple.svg'
import { Button } from './button'

export function Header() {
  const hoverNav = 'hover:text-indigo-06 transition-colors duration-150 z-10'
  return (
    <header className="mx-auto flex h-11 max-w-size-Ui items-center justify-between ">
      <Image className="h-7 w-40" src={logoMonaco} alt="Monaco" />

      <nav className="z-10 hidden md:flex">
        <ul className="flex gap-6 leading-4 text-gray-04 ">
          <li>
            <a className={hoverNav} href="/">
              Home
            </a>
          </li>
          <li>
            <a className={hoverNav} href="/">
              Mentorias
            </a>
          </li>
          <li>
            <a className={hoverNav} href="/">
              Cursos
            </a>
          </li>
          <li>
            <a className={hoverNav} href="/">
              Sobre
            </a>
          </li>
        </ul>
      </nav>

      {/* <DropdownMenuDemo /> */}

      <Button className="z-10" variant="header">
        PARTICIPAR
      </Button>
    </header>
  )
}

import Image from 'next/image'
import { InstagramLogo, DiscordLogo, GithubLogo } from '@phosphor-icons/react'

import logoMonaco from '@/app/assets/monaco-white.svg'

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-8 border-t border-gray-08 py-10 text-center md:flex-row md:justify-between">
      <Image className="h-7 w-40" src={logoMonaco} alt="Monaco" />

      <div className="flex gap-8">
        <a href="">
          <InstagramLogo size={32} color="#A1A1AA" />
        </a>
        <a href="">
          <DiscordLogo size={32} color="#A1A1AA" />
        </a>
        <a href="">
          <GithubLogo size={32} color="#A1A1AA" />
        </a>
      </div>

      <div className="flex flex-col text-gray-05 md:text-right">
        <span>Desenvolvido por:</span>
        <span>Jonas Milan </span>
        <span>Kayo Silva</span>
      </div>
    </footer>
  )
}

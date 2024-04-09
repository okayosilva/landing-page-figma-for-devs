import Image from 'next/image'
import { InstagramLogo, DiscordLogo, GithubLogo } from '@phosphor-icons/react'

import logoMonaco from '@/app/assets/monaco-white.svg'

export function Footer() {
  return (
    <footer className="flex justify-between border-t border-gray-08 py-10">
      <Image className="h-7 w-40" src={logoMonaco} alt="Monaco" />

      <div className="flex gap-8">
        <InstagramLogo size={32} color="#A1A1AA" />
        <DiscordLogo size={32} color="#A1A1AA" />
        <GithubLogo size={32} color="#A1A1AA" />
      </div>

      <div className="flex flex-col text-right text-gray-05">
        <span>Desenvolvido por:</span>
        <span>Jonas Milan </span>
        <span>Kayo Silva</span>
      </div>
    </footer>
  )
}

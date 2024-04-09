import { Button } from './components/button'
import { Header } from './components/header'

import figmaLogo from '@/app/assets/Figma-ilustration.png'
import figmaUi from '@/app/assets/figmaUi.png'

import calendarCheck from '@/app/assets/CalendarCheck.svg'

import Image from 'next/image'
import { spaceGrotesk } from '@/app/fonts/space'
import { Footer } from './components/footer'
import { BannerInformation } from './components/bannerInformetion'

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-size-Ui">
        <section className="relative flex sm:h-section ">
          <div className="z-10 mt-20">
            <div className="flex items-center gap-4">
              <Image src={calendarCheck} alt="calendário" />
              <span
                className={`font-bold leading-3 text-gray-01 ${spaceGrotesk.className}`}
              >
                08 DE ABRIL - 19h
              </span>
            </div>
            <div className="max-w-size-text space-y-6">
              <h1 className="text-6xl font-semibold leading-[76.8px] text-gray-01">
                Mentoria Figma para Devs
              </h1>
              <p className="text-xl leading-7 text-gray-04">
                Aprenda como criar interfaces fabulosas no Figma e evolua para o
                próximo nível como dev!
              </p>
              <Button variant="section">PARTICIPAR GRATUITAMENTE</Button>
            </div>
          </div>

          <Image
            className="absolute max-h-bannerH w-full max-w-bannerW overflow-hidden  object-contain md:-right-[5%] md:-top-[5%] "
            src={figmaLogo}
            alt="Figma"
          />
        </section>
        <aside className="mt-24 flex flex-col flex-wrap justify-between gap-6 sm:flex-row ">
          <BannerInformation />
        </aside>
        <div className="pb-20 pt-16">
          <Image src={figmaUi} alt="" />
        </div>
        <Footer />
      </main>
    </>
  )
}

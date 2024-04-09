'use client'

import { Button } from './components/button'
import { Header } from './components/header'
import { CalendarCheck } from '@phosphor-icons/react'

import figmaLogo from '@/app/assets/Figma-ilustration.png'
import calendarCheck from '@/app/assets/CalendarCheck.svg'
import ChalkboardSimple from '@/app/assets/ChalkboardSimple.svg'
import ChalkboardTeacher from '@/app/assets/ChalkboardTeacher.svg'
import Devices from '@/app/assets/Devices.svg'

import Image from 'next/image'
import { spaceGrotesk } from './layout'
import { Card } from './components/card'

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative mx-auto max-w-size-Ui">
        <section className="flex ">
          <div className="mt-20">
            <div className="flex items-center gap-4">
              <Image src={calendarCheck} alt="calendário" />
              <span
                className={`font-bold leading-3 text-gray-01 ${spaceGrotesk.className}`}
              >
                08 de abril - 19h
              </span>
            </div>
            <div className="space-y-6">
              <h1 className="max-w-[500px] flex-1 text-6xl font-semibold leading-[76.8px] text-gray-01 ">
                Mentoria Figma para Devs
              </h1>
              <p className="text-5 max-w-[500px] flex-1 leading-7 text-gray-04">
                Aprenda como criar interfaces fabulosas no Figma e evolua para o
                próximo nível como dev!
              </p>
              <Button variant="section">PARTICIPAR GRATUITAMENTE</Button>
            </div>
          </div>
          <Image
            className="absolute -right-32 -top-10 max-h-[616px] min-h-full w-full max-w-[804px] overflow-hidden object-contain"
            src={figmaLogo}
            alt="Figma"
          />
        </section>
        <aside className="flex">
          <Card.Root>
            <Image src={Devices} />
            <Card.Title>Mentoria ao vivo no zoom</Card.Title>
          </Card.Root>
          <Card.Root>
            <Image src={ChalkboardSimple} />
            <Card.Title>Aprenda através de um projeto prático</Card.Title>
          </Card.Root>
          <Card.Root>
            <Image src={ChalkboardTeacher} />
            <Card.Title>Com certificado de participação</Card.Title>
          </Card.Root>
        </aside>
      </main>
    </>
  )
}
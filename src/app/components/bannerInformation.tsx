import { Card } from './card'
import Image from 'next/image'

import ChalkboardSimple from '@/app/assets/ChalkboardSimple.svg'
import ChalkboardTeacher from '@/app/assets/ChalkboardTeacher.svg'
import Devices from '@/app/assets/Devices.svg'
import userImage from '@/app/assets/userImage.png'

export function BannerInformation() {
  return (
    <>
      <Card.Root>
        <Image src={userImage} alt="Jonas Milan" />
        <div>
          <Card.Title>Jonas Milan</Card.Title>
          <Card.SubTitle>UI Designer</Card.SubTitle>
        </div>
      </Card.Root>
      <div className="border-r-2 border-gray-09"></div>
      <Card.Root>
        <Image src={Devices} alt="" />
        <Card.Title>Mentoria ao vivo no zoom</Card.Title>
      </Card.Root>
      <Card.Root>
        <Image src={ChalkboardSimple} alt="" />
        <Card.Title>Aprenda através de um projeto prático</Card.Title>
      </Card.Root>
      <Card.Root>
        <Image src={ChalkboardTeacher} alt="" />
        <Card.Title>Com certificado de participação</Card.Title>
      </Card.Root>
    </>
  )
}

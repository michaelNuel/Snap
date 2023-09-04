import React from 'react'
import Hugetext from '../heading/Hugetext'
import ContentImg from "../../../public/Images/image-hero-desktop.png"
import Image from 'next/image'
import Darkbtn from '../button/Darkbtn'
import SponsorImg1 from "../../../public/Images/client-databiz.svg"
import SponsorImg2 from "../../../public/Images/client-audiophile.svg"
import SponsorImg3 from "../../../public/Images/client-meet.svg"
import SponsorImg4 from "../../../public/Images/client-maker.svg"

export default function Content() {
  return (
    <div className='flex justify-evenly items-center mt-2'>
       <div className='flex flex-col gap-7'>
         <div>
            <Hugetext firstText='Make' secondText='remote work' />
         </div>
         <div className='w-80'>
            <h1 className='text-xs text-gray-600 font-extrabold'>get your team in sync, no matter the location. Streamline processes, create team rituals, and watch productivity soar</h1>
         </div>
         <div>
            <Darkbtn btnName='Learn More' />
         </div>

         <div className='flex flex-row gap-5 mt-12'>
           <Image
            alt={"#"}
            src={SponsorImg1}
            height={20}
           />
           <Image
            alt={"#"}
            src={SponsorImg2}
            height={20}
           />
            <Image
            alt={"#"}
            src={SponsorImg3}
            height={20}
           />
            <Image
            alt={"#"}
            src={SponsorImg4}
            height={20}
           />
         </div>
       </div>
       <div>
          <Image 
           alt={"#"}
           src={ContentImg}
           height={500}
           objectFit='contain'
          />
       </div>
    </div>
  )
}

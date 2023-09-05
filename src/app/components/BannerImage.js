import Image from "next/image";

import BannerImageXochilt from '../assets/image/logo-kokone.png';
import { ArrowText } from "./text";

export default function BannerImage() {
  return(
    // <section className="relative bg-[#0E3179] w-full max-w-full max-h-[1440px] overflow-hidden grid md:grid-cols-2 md:h-[1028px] bg-contain">
    //   <div className="flex justify-center items-center">
    //     <Image src={BannerImageXochilt} alt="banner-image" width={500} />
    //     <div className="absolute left-0 right-0 bg-yellow-200 flex md:hidden flex-col justify-center gap-10">
    //       <h1 className="max-w-[470px] break-words flex flex-col justify-center font-white font-resolute tracking-[2px] leading-tight font-normal capitalize text-center">
    //         <span className="text-[30px] md:text-[65px]">JUNTOS POR</span>
    //         <span className="text-[34px] md:text-[73px]">UN MEXICO</span>
    //         <span className="text-[34px] md:text-[73px]">SIN LIMITES</span>
    //       </h1>
    //       <ArrowText
    //         title={'ÚNETE AHORA'}
    //         href={'/#subscribe-section'}
    //         arrowColor={'white'}
    //       />
    //     </div>
    //   </div>
    //   <div className="hidden md:flex flex-col justify-center gap-10">
    //     <h1 className="max-w-[470px] break-words flex flex-col justify-center font-white font-resolute tracking-[2px] leading-tight font-normal capitalize text-center">
    //       <span className="text-[30px] md:text-[65px]">JUNTOS POR</span>
    //       <span className="text-[34px] md:text-[73px]">UN MEXICO</span>
    //       <span className="text-[34px] md:text-[73px]">SIN LIMITES</span>
    //     </h1>
    //     <ArrowText
    //       title={'ÚNETE AHORA'}
    //       href={'/#subscribe-section'}
    //       arrowColor={'white'}
    //     />
    //   </div>
    // </section>
    <section className="relative bg-[#0E3179] h-screen max-h-[1440px] md:h-[1028px] w-full flex overflow-hidden">
      <Image src={BannerImageXochilt} alt="banner-image" className="absolute top-20 md:top-24 md:left-10" width={700}/>
      <div className="absolute bottom-10 lg:bottom-96 left-0 right-0 w-full flex flex-col items-start md:items-end px-10 md:px-28 md:pb-16 gap-4">
        <div className="flex flex-col gap-5 md:gap-10">
          <h1 className="max-w-[470px] break-words flex flex-col justify-center font-white font-resolute tracking-[2px] leading-tight font-normal capitalize text-center">
            <span className="text-[30px] md:text-[65px]">JUNTOS POR</span>
            <span className="text-[34px] md:text-[73px]">UN MEXICO</span>
            <span className="text-[34px] md:text-[73px]">SIN LIMITES</span>
          </h1>
          <ArrowText
            title={'ÚNETE AHORA'}
            href={'/#subscribe-section'}
            arrowColor={'white'}
          />
        </div>
      </div>
    </section>
  )
}
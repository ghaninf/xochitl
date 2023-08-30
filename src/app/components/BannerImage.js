import Image from "next/image";

import BannerImageXochilt from '@/assets/image/banner-image.png';
import { ArrowText } from "./text";

export default function BannerImage() {
  return(
    <section className="relative w-full max-w-full max-h-[1440px] overflow-hidden flex flex-col h-[550px] md:h-[1028px] bg-contain">
      <div className="absolute w-[150%] md:w-full top-0 md:-top-20 left-0 right-0 py-[550px] md:py-[810px] ">
        <Image
          fill
          placeholder={"blur"}
          quality={100}
          sizes={'100vw'}
          priority={true}
          title={'Xóchitl Gálvez'}
          alt={'Xóchitl Gálvez'}
          src={BannerImageXochilt}
          className={'object-contain md:object-cover object-top aspect-video'}
        />
      </div>
      <div className="absolute left-8 bottom-10 md:left-auto md:bottom-[267px] md:right-[136px]">
        <h1 className="relative max-w-[470px] break-words flex flex-col justify-center font-white font-resolute tracking-[2px] leading-tight font-normal capitalize text-center">
          <span className="text-[30px] md:text-[65px]">JUNTOS POR</span>
          <span className="text-[34px] md:text-[73px]">UN MEXICO</span>
          <span className="text-[34px] md:text-[73px]">SIN LIMITES</span>
        </h1>
        <ArrowText
          title={'ÚNETE AHORA'}
          href={'#subscribe-section'}
        />
      </div>
    </section>
  )
}
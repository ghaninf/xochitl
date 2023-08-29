import Image from "next/image";

import BannerImageXochilt from '../assets/image/banner-image.png';
import { ArrowText } from "./text";

export default function BannerImage() {
  return(
    <section className="relative w-full max-w-full max-h-[1440px] overflow-hidden flex flex-col h-[810px] bg-contain">
      <div className="absolute max-w-full top-0 left-0 right-0 py-[810px] ">
        <Image
          title={'Xóchitl Gálvez'}
          alt={'Xóchitl Gálvez'}
          src={BannerImageXochilt}
          fill={true}
          sizes="100%"
          priority={true}
          className={'object-cover aspect-video'}
        />
      </div>
      <div className="absolute bottom-[267px] right-[136px]">
        <h1 className="relative max-w-[470px] break-words flex flex-col justify-center font-white font-resolute tracking-[2px] leading-tight font-normal capitalize text-center">
          <span className="text-[65px]">JUNTOS POR</span>
          <span className="text-[73px]">UN MEXICO</span>
          <span className="text-[73px]">SIN LIMITES</span>
        </h1>
        <ArrowText
          title={'ÚNETE AHORA'}
          href={'#'}
        />
      </div>
    </section>
  )
}
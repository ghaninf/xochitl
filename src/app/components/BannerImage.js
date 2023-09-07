import Image from "next/image";

import BannerImageXochilt from '../assets/image/logo-kokone.png';
import UnMexico from '../assets/image/text/image-un-mexico.webp';
import { ArrowText } from "./text";

export default function BannerImage() {
  return(
    <section className="relative bg-[color:var(--secondary-color)] font-resolute h-screen max-h-[1045px] md:h-[1028px] w-full flex overflow-hidden">
      <Image
        width={751}
        src={BannerImageXochilt}
        alt="banner-image"
        className="absolute top-20 md:top-6 md:left-10"
      />
      <div className="absolute bottom-10 lg:bottom-80 left-0 right-0 w-full flex flex-col items-start md:items-end px-10 md:px-28 md:pb-16 gap-4">
        <div className="flex flex-col gap-5 md:gap-10">
          <h1 className="max-w-[470px] break-words flex flex-col justify-center font-white tracking-[2px] leading-tight font-normal capitalize text-center">
            <span className="text-[30px] md:text-[65px]">JUNTOS POR</span>
            <div className="relative w-56 md:w-[465px] h-9 md:h-[81.25px]">
              <Image
                fill
                sizes="100%"
                alt="Un Mexico"
                src={UnMexico}
                className="object-cover"
              />
            </div>
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
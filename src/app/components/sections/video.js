import Link from "next/link";
import Icon from "../icon/Icon";

import ArrowWhite from '../../assets/image/vector-arrow-white.svg';

export default function VideoSection() {
  return(
    <section className="relative w-full md:mt-20 md:h-[667px] lg:h-[550px] flex flex-col md:flex-row-reverse bg-[color:var(--secondary-color)]">
      <div className="md:absolute flex px-2 md:p-0 -top-10 md:-top-20 lg:-top-40 md:w-[400px] lg:w-[650px] h-[398px] md:h-[400px] lg:h-[500px] bg-white">
        <video src={"./video/xochitlvideo1.mp4"} className='w-full h-full object-cover' autoPlay loop muted/>
      </div>
      <div className="basis-1/2 md:basis-full flex justify-start md:items-center lg:items-start p-10 md:px-16 lg:px-20 md:py-20 lg:py-28">
        <div className="md:basis-8/12 lg:basis-5/12 md:pt-10 lg:pt-0">
          <div className="relative flex flex-col gap-y-7 font-white">
            <h2 className="font-resolute text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] tracking-[2px] xl:leading-[140%]">SIN MIEDO<br/>A NADA</h2>
            <h4 className="font-appliedSans font-normal tracking-[1px] leading-8 text-base lg:text-lg">Xóchitl toda su vida se ha enfrentado y ha luchado contra la desigualdad en México.</h4>
            {/* <h4 className="font-appliedSans font-normal tracking-[1px] leading-8 text-lg lg:text-[21px]">Xóchitl Gálvez conoce los desafíos que se enfrentan los mexicanos todos los días y tiene las soluciones que México necesita para un futuro sin límites.</h4> */}
            <div className="relative mt-4 group w-fit pb-1 box-border cursor-pointer before:w-full before:border-b-2 lg:before:border-b-[3px] before:border-pink-500 before:absolute before:bottom-[-2px] lg:before:-bottom-1 before:left-0 before:transform before:scale-x-100">
              <Link href={'/xochitl'} className={`relative max-w-fit font-version font-normal tracking-[2px] flex flex-row gap-x-4 items-center text-white text-base md:text-lg lg:text-xl xl:text-2xl`} >
                CONOCE A XÓCHITL
                <div className={`relative w-fit h-fit`} >
                  <Icon
                    title={'CONOCE A XÓCHITL'}
                    width={17.5}
                    height={14}
                    src={ArrowWhite}
                    additionalCSS={'w-[17.5px] h-[14px]'}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
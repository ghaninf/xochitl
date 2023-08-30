'use client'

import Link from "next/link";
import Button from "./Button";
import Logo from "./Logo";
import LogoWhite from "@/assets/image/logo-xochitl.svg";
import LogoBlue from "@/assets/image/logo-xochitl-secondary.svg";
import ScrollEffect from "@/assets/js/navbarScroll";
import Hamburger from "./Hamburger";

export default function Navbar(props) {
  return(
    <nav id="container-navbar" className="fixed top-0 left-0 right-0 z-50">
      <div id="navbar" className="relative px-[33px] py-2 md:py-4 flex flex-row flex-nowrap justify-between items-center ease-in-out duration-300">
        <ul className={`max-md:hidden relative px-[30px] w-full flex flex-row flex-nowrap gap-x-[18px] font-resolute text-[17px] tracking-[1px] leading-[26px] font-normal ${ props?.page === '/' ? 'text-white' : 'font-secondary'}`}>
          <li className="hover:scale-110 ease-in-out duration-200"><Link href={'/'}>XÓCHITL</Link></li>
          <li className="hover:scale-110 ease-in-out duration-200"><Link href={'/proposal'}>PROPUESTAS</Link></li>
          <li className="hover:scale-110 ease-in-out duration-200"><Link href={'/events'}>EVENTOS</Link></li>
          <li className="hover:scale-110 ease-in-out duration-200"><Link href={'https://xochitl.io'} target="_blank" rel="noopener" >TIENDA</Link></li>
        </ul>
        <div className="min-w-[47.5px] md:hidden" />
        <Logo src={props?.page !== '/' ? LogoBlue : LogoWhite} />
        <div className="max-md:hidden relative w-full flex flex-row flex-nowrap justify-end">
          <Button
            href={props?.page === '/' ? '#subscribe-section' : '/#subscribe-section'}
            typeButton="link"
            typeColor="primary"
            text="ÚNETE AHORA"
            customClass="text-[18px]"
          />
        </div>
        <div className="md:hidden flex flex-col gap-y-0 justify-center items-center">
          <h4 className='font-resolute text-white z-50'>Menu</h4>
          <Hamburger />
        </div>
      </div>
      <ScrollEffect page={props.page} />
    </nav>
  )
}
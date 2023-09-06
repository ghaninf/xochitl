'use client'

import Link from "next/link";
import Button from "./Button";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import LogoWhite from "../assets/image/logo-xochitl.svg";
import LogoBlue from "../assets/image/logo-xochitl-secondary.svg";
import ScrollEffect from "../assets/js/navbarScroll";

export default function Navbar(props) {
  const listColorNav = {
    '/': {
      text: 'text-white',
      logo: LogoWhite
    },
    xochitl: {
      text: 'text-white',
      logo: LogoWhite
    },
    propuestas: {
      text: 'font-secondary',
      logo: LogoBlue
    },
    eventos: {
      text: 'font-secondary',
      logo: LogoBlue
    },
  }

  return(
    <nav id="container-navbar" className="fixed top-0 left-0 right-0 z-50">
      <div id="navbar" className="relative px-[33px] py-2 md:py-4 flex flex-row flex-nowrap justify-between items-center ease-in-out duration-300">
        <ul className={`max-lg:hidden relative lg:w-[calc(100%-16px)] xl:w-[calc(100%-48px)] 2xl:w-[calc(100%-60px)] lg:px-2 xl:px-6 2xl:px-[30px] flex flex-row flex-nowrap lg:gap-x-3 2xl:gap-x-[18px] font-resolute text-[17px] tracking-[1px] leading-[26px] font-normal box-border ${listColorNav[props?.page].text}`}>
          <li className={`${props.page === 'xochitl' ? 'before:scale-x-100' : ''} relative hover:before:scale-x-100 before:w-full before:border-b-2 before:border-pink-500 before:absolute before:bottom-0 before:left-0 before:transform before:scale-x-0 before:duration-200`}><Link href={'/xochitl'}>XÓCHITL</Link></li>
          <li className={`${props.page === 'propuestas' ? 'before:scale-x-100' : ''} relative hover:before:scale-x-100 before:w-full before:border-b-2 before:border-pink-500 before:absolute before:bottom-0 before:left-0 before:transform before:scale-x-0 before:duration-200`}><Link href={'/propuestas'}>PROPUESTAS</Link></li>
          <li className={`${props.page === 'eventos' ? 'before:scale-x-100' : ''} relative hover:before:scale-x-100 before:w-full before:border-b-2 before:border-pink-500 before:absolute before:bottom-0 before:left-0 before:transform before:scale-x-0 before:duration-200`}><Link href={'/eventos'}>EVENTOS</Link></li>
          <li className={`relative hover:before:scale-x-100 before:w-full before:border-b-2 before:border-pink-500 before:absolute before:bottom-0 before:left-0 before:transform before:scale-x-0 before:duration-200`}>
            <Link href={'https://xochitl.io'} target="_blank" rel="noopener" className="group-hover:scale-110">TIENDA</Link>
          </li>
        </ul>
        <div className="min-w-[47.5px] lg:hidden" />
        <Logo src={listColorNav[props?.page].logo} />
        <div className="max-lg:hidden relative w-full flex flex-row flex-nowrap justify-end">
          <Button
            href={props?.page === '/' ? '#subscribe-section' : '/#subscribe-section'}
            typeButton="link"
            typeColor="primary"
            text="ÚNETE AHORA"
            customClass="text-[18px]"
          />
        </div>
        <div className="lg:hidden flex flex-col gap-y-0 justify-center items-center">
          <h4 className='font-resolute text-white z-50'>Menu</h4>
          <Hamburger />
        </div>
      </div>
      <ScrollEffect page={props.page} />
    </nav>
  )
}
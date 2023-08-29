import Link from "next/link";
import Button from "./Button";
import Logo from "./Logo";

export default function Navbar () {

  return(
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="relative px-[33px] py-[8px] flex flex-row flex-nowrap justify-between items-center">
        <ul className="relative px-[30px] w-full flex flex-row flex-nowrap gap-x-[18px] font-resolute text-[17px] tracking-[1px] leading-[26px] font-normal font-white">
          <li><Link href={'#'}>XÓCHITL</Link></li>
          <li><Link href={'#'}>PROPUESTAS</Link></li>
          <li><Link href={'#'}>EVENTOS</Link></li>
          <li><Link href={'#'}>TIENDA</Link></li>
        </ul>
        <Logo />
        <div className="relative w-full flex flex-row flex-nowrap justify-end">
          <Button
            href="#subscribe-section"
            typeButton="link"
            typeColor="primary"
            text="ÚNETE AHORA"
            customClass="text-[18px]"
          />
        </div>
      </div>
    </nav>
  )
}
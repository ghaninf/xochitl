import Link from "next/link";
import XochitlLogo from '../assets/image/xochitl-galvez.png';
import JuntosX from '../assets/image/juntos-x.png';
import Logo from "./Logo";

export default function Footer () {
  return (
    <footer className="flex flex-col gap-5 md:gap-14 p-10 md:px-20 md:py-10">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="basis-1/2 lg:basis-2/3 flex flex-col gap-5 md:gap-10">
          <div className="w-max">
            <Logo
              src={XochitlLogo}
              width="w-[135px] md:w-[224px]"
              height="h-[48.25px] md:h-[80.06px]"
            />
          </div>
          <ul className="flex flex-col gap-5">
            <li><Link href="/" className="font-bold text-[#0E3179]">XÓCHITL</Link></li>
            <li><Link href="/propuestas" className="font-bold text-[#0E3179]">PROPUESTAS</Link></li>
            <li><Link href="/eventos" className="font-bold text-[#0E3179]">EVENTOS</Link></li>
            <li><Link href="/tienda" className="font-bold text-[#0E3179]">TIENDA</Link></li>
          </ul>
        </div>
        <div className="basis-1/2 lg:basis-1/3 flex flex-col gap-5 md:mt-5">
          <Logo
            src={JuntosX}
            width="w-[205px] md:w-[365px]"
            height="h-[73.75px] md:h-[131.57px]"
          />
          <ul className="flex flex-col gap-3">
            <li><Link href="/politica-de-privacidad">Política de Privacidad</Link></li>
            <li><Link href="/terminos-y-conditiones">Términos y Condiciones</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse gap-5 md:gap-0">
        <div className="basis-1/2 lg:basis-1/3">
          <p className="text-sm md:text-base flex flex-row gap-1">
            <span>&copy;</span>
            <span>Xochitl Galvez. Todos los derechos reservados. Norte, 27, Nueva Vallejo, 07750, Ciudad de Mexico, Mexico.</span>
          </p>
        </div>
        <div className="basis-1/2 lg:basis-2/3 flex md:items-center">
          <ul className="flex flex-row w-full justify-evenly md:justify-normal md:gap-10">
            <li><a href="https://www.facebook.com/">Fb</a></li>
            <li><a href="https://www.twitter.com/">Tw</a></li>
            <li><a href="https://www.instagram.com/">Ig</a></li>
            <li><a href="https://www.youtube.com/">Yt</a></li>
            <li><a href="https://www.discord.com/">Dc</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
};
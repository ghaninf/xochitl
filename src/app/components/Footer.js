import Link from "next/link";
import XochiltLogo from '../assets/image/xochitl-galvez.png';
import JuntosX from '../assets/image/juntos-x.png';
import Image from "next/image";

export default function Footer () {
  return (
    <footer className="flex flex-col gap-5 p-5">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex flex-col gap-2">
          <Image src={XochiltLogo} alt="xochitl-logo" width={135}/>
          <ul className="flex flex-col gap-2">
            <li><Link href="/" className="font-bold text-[#0E3179]">XOCHITL</Link></li>
            <li><Link href="/propuestas" className="font-bold text-[#0E3179]">PROPUESTAS</Link></li>
            <li><Link href="/eventos" className="font-bold text-[#0E3179]">EVENTOS</Link></li>
            <li><Link href="/tienda" className="font-bold text-[#0E3179]">TIENDA</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <Image src={JuntosX} alt="juntos-x" width={205}/>
          <ul className="flex flex-col gap-2">
            <li><Link href="/politica-de-privacidad">Politica de Privacidad</Link></li>
            <li><Link href="/terminos-y-conditiones">Terminos y Conditiones</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse gap-5">
        <div>
          <p className="flex flex-row gap-1">
            <span>&copy;</span>
            <span>Xochitl Galvez. Todos los derechos reservados. Norte, 27, Nueva Vallejo, 07750, Ciudad de Mexico, Mexico.</span>
          </p>
        </div>
        <div>
          <ul className="flex flex-row justify-evenly">
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
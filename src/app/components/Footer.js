import Link from "next/link";

import XochitlLogo from '../assets/image/xochitl-galvez.png';
import JuntosX from '../assets/image/text/image-juntos.webp';
import FacebookIcon from '../assets/image/socmed/facebook.png';
import TwitterIcon from '../assets/image/socmed/twitter.png';
import InstagramIcon from '../assets/image/socmed/instagram.png';
import YoutubeIcon from '../assets/image/socmed/youtube.png';
import TiktokIcon from '../assets/image/socmed/tiktok.png';
// import DiscordIcon from '../assets/image/socmed/discord.png';
import Logo from "./Logo";
import FooterLogo from "./FooterLogo";

export default function Footer ({borderStyle = ""}) {
  const socMeds = [
    { src: FacebookIcon, width: "w-[10.03px] md:w-[14.18px]", height: "h-[19.11px] md:h-[27.01px]", href: "https://www.facebook.com/Xochitl.Galvez.R/", target: '_blank', rel: 'noopener'},
    { src: TwitterIcon, width: "w-[21.73px] md:w-[30.72px]", height: "h-[17.66px] md:h-[24.96px]", href: "https://twitter.com/XochitlGalvez", target: '_blank', rel: 'noopener'},
    { src: InstagramIcon, width: "w-[19.11px] md:w-[27.01px]", height: "h-[19.11px] md:h-[27.01px]", href: "https://www.instagram.com/XochitlGalvez/" , target: '_blank', rel: 'noopener'},
    { src: YoutubeIcon, width: "w-[29px] md:w-[41px]", height: "h-[29px] md:h-[41px]", href: "https://www.youtube.com/@XochitlGalvezR" , target: '_blank', rel: 'noopener'},
    { src: TiktokIcon, width: "w-6 md:w-8", height: "h-6 md:h-8", href: "https://www.tiktok.com/@xochitlgalvezr"  , target: '_blank', rel: 'noopener'},
    // { src: DiscordIcon, width: "w-[22.63px] md:w-[32px]", height: "h-[17.25px] md:h-[24.39px]", href: "https://www.discord.com" , target: '_blank', rel: 'noopener'},
  ];

  return (
    <footer className={`flex flex-col gap-5 md:gap-14 p-10 md:px-20 md:py-10 font-appliedSans ${borderStyle}`}>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="basis-1/2 lg:basis-2/3 flex flex-col gap-5 md:gap-10">
          <div className="w-max">
            <FooterLogo
              src={XochitlLogo}
              width="w-[135px] md:w-[224px]"
              height="h-[48.25px] md:h-[80.06px]"
            />
          </div>
          <ul className="flex flex-col font-resolute gap-5 md:gap-10 text-sm md:text-[18px] tracking-[1px]">
            <li><Link href="/xochitl" className="font-bold text-[color:var(--secondary-color)]">XÓCHITL</Link></li>
            <li><Link href="/propuestas" className="font-bold text-[color:var(--secondary-color)]">PROPUESTAS</Link></li>
            <li><Link href="/eventos" className="font-bold text-[color:var(--secondary-color)]">EVENTOS</Link></li>
            <li><Link href="https://www.xochitl.io/" className="font-bold text-[color:var(--secondary-color)]" target="_blank" rel="noopener">TIENDA</Link></li>
          </ul>
        </div>
        <div className="basis-1/2 lg:basis-1/3 flex flex-col gap-5 md:mt-5">
          <div className="w-max">
            <FooterLogo
              src={JuntosX}
              width="w-[205px] md:w-[365px]"
              height="h-[73.75px] md:h-[131.57px]"
            />
          </div>
          <ul className="flex flex-col font-openSans justify-start items-start md:items-end gap-2 md:gap-9 leading-6 tracking-[1px] text-sm md:text-[17px]">
            <li><Link href="https://www.xochitl.io/policies/privacy-policy" target="_blank" rel="noopener">Política de Privacidad</Link></li>
            <li><Link href="https://www.xochitl.io/policies/terms-of-service" target="_blank" rel="noopener">Términos y Condiciones</Link></li>
            <li><Link href="https://www.xochitl.io/pages/contacto" target="_blank" rel="noopener">Contacto</Link></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse gap-5 md:gap-0">
        <div className="basis-1/2 lg:basis-1/3">
          <p className="text-xs leading-6 tracking-[1px] font-normal font-openSans uppercase break-words">© 2023 Xóchitl Gálvez. Todos los derechos reservados. Norte 27, Nueva Vallejo, 07750, Ciudad de México, México.</p>
        </div>
        <div className="basis-1/2 lg:basis-2/3 flex md:items-center">
          <ul className="flex flex-row w-full items-center justify-evenly md:justify-normal md:gap-10">
            {socMeds.map((socMed, index) => (
              <li key={index}>
                <Logo {...socMed}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
};
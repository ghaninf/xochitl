'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import IconExpand from '@/assets/image/vector-expand.svg';
import Icon from "../icon/Icon";
import { ArrowText } from "../text";

export default function ProposalSection() {
  const router = useRouter();
  const [menu, setMenu] = useState({
    menu1: [
      { title: 'Xóchitlnomics', expand: false, submenu: [{ title: 'sub1', href: '#' }] },
      { title: 'Sistema Universal de Salud', expand: false, href: '#', submenu: [{ title: 'sub1', href: '#' }] },
      { title: 'Internet para todo México', expand: false, href: '#', submenu: [{ title: 'sub1', href: '#' }] },
      { title: 'Vivienda', expand: false, href: '#', submenu: [{ title: 'sub1', href: '#' }] },
      { title: 'Seguridad', expand: false, href: '#', submenu: [{ title: 'sub1', href: '#' }] },
    ],
    menu2: [
      { title: 'Empleo', expand: false, href: '#', submenu: [{ title: 'sub1', href: '#' }] },
      { title: 'Cambio climático', expand: false, href: '#', submenu: [{ title: 'sub1', href: '#' }] },
      { title: 'Proteccion de animales', expand: false, href: '#', submenu: [{ title: 'sub1', href: '#' }] },
      { title: 'Equidad de género', expand: false, href: '#', submenu: [{ title: 'sub1', href: '#' }] },
    ]
  })

  const handleMenu = (menuArr, index) => {
    let listMenu = menu[menuArr]
    if (listMenu[index]?.href) {
      router.push(listMenu[index]?.href)
      return
    }
    listMenu[index].expand = !listMenu[index].expand
    setMenu(prev => ({
      ...prev,
      [menuArr]: listMenu
    }))
  }

  return(
    <section className="relative w-full h-auto px-44 py-20">
      <div className="relative w-full max-w-[550px]">
        <h1 id="font-secondary" className="text-[55px] font-resolute tracking-[2px] leading-loose">PROPUESTAS</h1>
        <h4 className="text-black font-appliedSans text-[18px] leading-[160%]">Xóchitl sabe los desafíos y obstáculos que los Mexicanos se enfrentan al querer superarse. Reconoce que la historia no ha sido justa con México y por eso propone una agenda enfocada en impulsar a México y a los mexicanos hacia un futuro más justo, verde y sin límites.</h4>
      </div>
      <article className="relative flex flex-row justify-evenly font-secondary font-appliedSans text-[30px] font-normal">
        <ul className="relative flex flex-col gap-y-8" style={{ marginBlockStart: 60 }}>
          {
            menu.menu1.map((el, key) => (
              <li key={key} >
                <div onClick={() => handleMenu('menu1' ,key)} className='inline-flex items-center gap-x-4 w-fit cursor-pointer'>
                  <Icon
                    src={IconExpand}
                    width={11}
                    height={16}
                    title={'Xóchitlnomics'}
                    additionalCSS={el?.expand ? 'rotate-90' : ''}
                  />
                  <span className="border-b-2 border-pink-500">{el.title}</span>
                </div>
                {
                  el.expand
                  ? <ul className="pl-12">
                      {
                        el?.submenu.map((subMenu, index) => (
                          <li key={index}><Link href={subMenu?.href}>{subMenu.title}</Link></li>
                        ))
                      }
                    </ul>
                  : ''
                }
              </li>
            ))
          }
        </ul>
        <ul className="relative flex flex-col gap-y-8" style={{ marginBlockStart: -22 }}>
          {
            menu.menu2.map((el, key) => (
              <li key={key} >
                <div onClick={() => handleMenu('menu2' ,key)} className='inline-flex items-center gap-x-4 w-fit cursor-pointer'>
                  <Icon
                    src={IconExpand}
                    width={11}
                    height={16}
                    title={'Xóchitlnomics'}
                    additionalCSS={el?.expand ? 'rotate-90' : ''}
                  />
                  <span className="border-b-2 border-pink-500">{el.title}</span>
                </div>
                {
                  el.expand
                  ? <ul className="pl-12">
                      {
                        el?.submenu.map((subMenu, index) => (
                          <li key={index}><Link href={subMenu?.href}>{subMenu.title}</Link></li>
                        ))
                      }
                    </ul>
                  : ''
                }
              </li>
            ))
          }
          <ArrowText title={'VER TODAS'} color={'font-secondary'} arrowCollor={'#0E3179'} href={'/'}  width={30} height={24} additionalClass={'mt-28 text-[30px]'} />
        </ul>
      </article>
    </section>
  )
}
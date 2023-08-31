"use client"

import { useState } from 'react'
import { usePathname } from 'next/navigation'

import '@/assets/css/hamburger.css';
import Link from 'next/link';
import Logo from './Logo';

import LogoWhite from '@/assets/image/logo-xochitl.svg';
import Button from './Button';

export default function Hamburger(props) {
  const pathname = usePathname();
  const [popup, setPopup] = useState(false)

  return(
    <>
      <div className="block relative w-8 h-8 lg:hidden z-50">
        <input className="hidden" type="checkbox" id="menu-toggle" />
        <label onClick={() => setPopup(!popup)} htmlFor="menu-toggle" className="menu-button-container">
          <div className="menu-button"/>
        </label>
      </div>
      {
        popup
        ? <div className='absolute top-0 left-0 right-0 w-full min-h-screen bg-secondary z-40 pt-4'>
            <ul className='relative w-full flex flex-col gap-y-10 justify-center items-center font-resolute text-white lg:hidden'>
              <Logo src={LogoWhite} />
              <li className='relative w-fit pb-1 border-b border-pink-600 cursor-pointer'><Link href={'/'}>XÓCHITL</Link></li>
              <li className='relative w-fit pb-1 border-b border-pink-600 cursor-pointer'><Link href={'/events'}>AGENDA</Link></li>
              <li className='relative w-fit pb-1 border-b border-pink-600 cursor-pointer'><Link href={'/proposal'}>PROPUESTAS</Link></li>
              <li className='relative w-fit pb-1 border-b border-pink-600 cursor-pointer'><Link href={'https://xochitl.io'} target="_blank" rel="noopener" >TIENDA</Link></li>
              <Button
                href={'/#subscribe-section'}
                typeButton="link"
                typeColor="primary"
                text="ÚNETE AHORA"
                customClass="text-[16px]"
              />
            </ul>
          </div>
        : ''
      }
    </>
  )
}
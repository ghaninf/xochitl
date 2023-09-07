"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import Logo from './Logo';
import Button from './Button';
import LogoWhite from '../assets/image/logo-xochitl.svg';
import '../assets/css/hamburger.css';

export default function Hamburger({ page }) {
  const router = useRouter();
  const [popup, setPopup] = useState(false)
  const listColorNav = {
    '/': 'white',
    xochitl: 'white',
    propuestas: 'blue',
    eventos: 'blue',
  }

  const navigateTo = (link) => {
    router.push(link)
  }

  const openTab = (link) => {
    window.open(link, '_blank')
  }

  return(
    <>
      <div className="block relative w-8 h-8 lg:hidden z-50">
        <input className="hidden" type="checkbox" name='toggle' id="menu-toggle" />
        <label onClick={() => setPopup(!popup)} htmlFor="menu-toggle" className={`menu-button-container`}>
          <div className={`menu-button ${listColorNav[page]}`}/>
        </label>
      </div>
      {
        popup
        ? <div className='absolute top-0 left-0 right-0 w-full min-h-screen bg-secondary z-40 pt-4'>
            <ul className='relative w-full flex flex-col gap-y-12 justify-center items-center text-[16px] font-medium tracking-widest font-resolute text-white lg:hidden'>
              <Logo src={LogoWhite} />
              <li className='relative w-fit pb-1 border-b border-pink-600 cursor-pointer' onClick={() => navigateTo('/xochitl')} >XÓCHITL</li>
              <li className='relative w-fit pb-1 border-b border-pink-600 cursor-pointer' onClick={() => navigateTo('/eventos')} >AGENDA</li>
              <li className='relative w-fit pb-1 border-b border-pink-600 cursor-pointer' onClick={() => navigateTo('/propuestas')} >PROPUESTAS</li>
              <li className='relative w-fit pb-1 border-b border-pink-600 cursor-pointer' onClick={() => openTab('https://xochitl.io')} >TIENDA</li>
              <label onClick={() => setPopup(false)} htmlFor='menu-toggle' className='mt-12'>
                <Button
                  href={'/#subscribe-section'}
                  typeButton="link"
                  typeColor="primary"
                  text="ÚNETE AHORA"
                  customClass="text-[16px]"
                />
              </label>
            </ul>
          </div>
        : ''
      }
    </>
  )
}
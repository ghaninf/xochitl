"use client"

import { useState } from "react";

import Button from "../Button";
import { SubscribeService } from "@/app/services";
import { checkFormIsFill } from "@/app/utils";
import InputForm from "./InputForm";

import Laexperanza from '../../assets/image/text/image-la-experanza.webp';
import Image from "next/image";
import Link from "next/link";
import Icon from "../icon/Icon";
import ArrowWhite from '../../assets/image/vector-arrow-white.svg';

export default function SubscribeForm() {
  const [state, setState] = useState({
    input: {
      name: '',
      email: '',
      checked: false,
    },
    valid: {
      name: true,
      email: true,
      checked: true
    },
    isFill: false,
    disabled: false,
    success: false
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let valid = false;
    if (name === 'email') {
      valid = value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
    }
    if (name === 'name') {
      valid = value.match(/^(\w+[a-zA-ZñÑáéíóúÁÉÍÓÚ\s])$/)
    }
    setState(prev => ({
      ...prev,
      input: {
        ...prev.input,
        [e.target.name]: e.target.value
      },
      valid: {
        ...prev.valid,
        [e.target.name]: valid
      },
      isFill: !checkFormIsFill({ ...state.input, [e.target.name]: e.target.value })
    }))
  }

  const handleClick = () => {
    setState(prev => ({
      ...prev,
      input: {
        ...prev.input,
        checked: !prev.input.checked
      },
      valid: {
        ...prev.valid,
        checked: !prev.valid.checked
      },
      isFill: !checkFormIsFill({ ...state.input, checked: !state.input.checked })
    }))
  }

  const [isLoading, setIsLoading] = useState(false)
 
  async function onSubmit(event) {
    if (state.isFill) {
      event.preventDefault();
      setIsLoading(true)
      try {
        const res = await SubscribeService.subscribe(state.input);
        if (res) {
          setState(prev => ({
            ...prev,
            success: true,
          }))
        }
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const resetForm = () => {
    setState(prev => ({
      ...prev,
      input: {
        name: '',
        email: '',
        checked: false,
      },
      valid: {
        name: true,
        email: true,
        checked: true
      },
      isFill: false,
      success: false,
      disabled: false
    }))
  }

  return(
    <div id="subscribe-section" className="relative lg:absolute lg:-top-[116px] w-full max-w-full lg:max-w-[calc(50%+20px)] bg-secondary pt-6 pb-16 sm:pb-20 sm:pt-10 lg:py-16 xl:pb-[92px] xl:pt-[60px] px-8 sm:px-16 lg:px-20 xl:px-20 box-border z-10">
      <div className="relative flex flex-col gap-y-[10px] font-white">
        <div className="relative w-full max-w-sm lg:max-w-[400px] h-5 sm:h-7 lg:h-[30px]">
          <Image
            fill
            sizes="100%"
            alt={'La Experanza De Mexico'}
            src={Laexperanza}
            className={'aspect-auto object-cover'}
          />
        </div>
        <h4 className="mt-4 font-appliedSans font-normal tracking-wider leading-8 text-lg lg:text-xl">Xóchitl Gálvez conoce los desafíos que se enfrentan los mexicanos todos los días y tiene las soluciones que México necesita para un futuro sin límites.</h4>
        <div className="relative mt-4 group w-fit pb-1 box-border cursor-pointer before:w-full before:border-b-2 before:border-pink-500 before:absolute before:bottom-[-2px] lg:before:-bottom-1 before:left-0 before:transform before:scale-x-100">
          <Link href={'/xochitl'} className={`relative max-w-fit font-version font-normal tracking-[0.945px] flex flex-row gap-x-4 items-center text-white text-sm md:text-base lg:text-[17.5px]`} >
            CONOCER MÁS
            <div className={`relative w-fit h-fit`} >
              <Icon
                title={'CONOCER MÁS'}
                width={17.5}
                height={14}
                src={ArrowWhite}
                additionalCSS={'w-[17.5px] h-[14px]'}
              />
            </div>
          </Link>
        </div>
      </div>
      <form className="relative mt-12 sm:mt-16 lg:mt-[82px] font-white" onSubmit={onSubmit}>
        <h2 className="relative mx-auto w-[318px] mb-4 text-[22px] tracking-[1.32px] font-version text-center">HAGAMOS ESTO JUNTOS</h2>
        <p>{state?.errorMessage}</p>
        <div className={`relative w-[318px] sm:w-[370px] mx-auto ${state.success ? 'flex' : 'hidden'} flex-col gap-[2px] justify-center items-center`}>
          <h4 className="text-center">You have been subscribe</h4>
          <Button
            text="Ok"
            onClick={resetForm}
            typeButton="button"
            typeColor="tertiary"
          />
        </div>
        <div className={`relative ${state.success ? 'hidden' : 'flex'} flex-col gap-[2px] justify-center items-center`}>
          <div className={`relative flex flex-col gap-[2px]`}>
            <InputForm
              labelText={'Nombre:'}
              labelFor={'name'}
              inputType={'text'}
              inputId={'name'}
              inputName={'name'}
              inputPlaceholder={'tu nombre'}
              inputValue={state.name}
              onChange={handleChange}
            />
            {
              !state.valid.name
              ? <div className="text-center w-[318px]">
                  <p>{'Please provide a valid name "John Doe"'}</p>
                </div>
              : ''
            }
          </div>
          <div className="mt-1 relative flex flex-col gap-[2px]">
            <InputForm
              labelText={'Correo electrónico:'}
              labelFor={'email'}
              inputType={'email'}
              inputId={'email'}
              inputName={'email'}
              inputPlaceholder={'ejemplo@email.com'}
              inputValue={state.email}
              onChange={handleChange}
            />
            {
              !state.valid.email
              ? <div className="text-center w-[318px]">
                <p>{`Please provide a valid email address "example@domain.com"`}</p>
              </div>
              : ''
            }
          </div>
          <Button
            typeButton={'button'}
            typeColor={'tertiary'}
            text={isLoading ? 'CARGANDO...' : 'UNIRME AHORA'}
            onClick={onSubmit}
            customClass={'min-w-[318px] mt-4'}
          />
          <div id="suscribir" onClick={handleClick} className={`w-[318px] relative mt-8 flex flex-row items-center md:items-start flex-nowrap gap-x-4 cursor-pointer`}>
            <input type="checkbox" id="myCheck" name="test" checked={state.input.checked} readOnly  required className={`${state.input.checked ? '' : 'hidden'}`}  />
            <div className={`${state.input.checked ? 'hidden' : ''} w-[28px] h-[28px] flex-shrink-0 border border-solid border-white rounded-[3px]`} />
            <span className="relative w-[317px] -mr-6 text-[7.63px] md:text-xs font-normal font-appliedSans">*Enviando este formulario otorgas tu consentimiento para recibir comunicación relacionada con Xóchitl Gálvez.</span>
          </div>
        </div>
      </form>
    </div>
  )
}
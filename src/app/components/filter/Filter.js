"use client"

import { Dropdown } from "../form";

export default function Filter({ values, data, handleChange }) {

  return(
      <div className="relative w-full px-0 py-3 md:py-5 flex flex-row justify-evenly md:justify-normal font-appliedSans font-normal font-secondary text-[10px] md:text-base">
        <div className="relative flex flex-row gap-x-2 md:gap-x-6 pr-3 md:pr-3 items-center border-r-2 border-slate-400">
          <label htmlFor="" className="text-[10px] md:text-base font-semibold">FILTRAR POR:</label>
          <Dropdown
            name={'date'}
            value={values.date}
            placeholder={'FECHA'}
            data={data.date}
            isDate={true}
            handleChange={handleChange}
          />
        </div>
        <div className="flex flex-row gap-x-2 md:gap-x-6 px-2 md:px-6 items-center">
          <label htmlFor="" className="text-[10px] md:text-base">ESTADO:</label>
          <Dropdown
            name={'state'}
            value={values.state}
            placeholder={'TODOS'}
            data={data.state}
            arrow={'hidden'}
            customClassButton={'text-[10px] md:text-xs md:leading-8 tracking-normal font-bold p-1.5 text-zinc-800 bg-stone-300 rounded-md italic uppercase appearance-none cursor-pointer'}
            handleChange={handleChange}
          />
        </div>
        <div className="flex flex-row gap-x-2 md:gap-x-6 md:px-6 items-center">
          <label htmlFor="" className="text-[10px] md:text-base">MUNICIPIO:</label>
          <Dropdown
            name={'city'}
            value={values.city}
            placeholder={'TODOS'}
            data={data.city}
            arrow={'hidden'}
            customClassButton={'text-[10px] md:text-xs md:leading-8 tracking-normal font-bold p-1.5 text-zinc-800 bg-stone-300 rounded-md italic uppercase appearance-none cursor-pointer'}
            handleChange={handleChange}
          />
        </div>
      </div>
  )
}
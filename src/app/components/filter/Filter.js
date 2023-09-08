"use client"

import moment from "moment";
import { Dropdown } from "../form";

export default function Filter({ values, data, handleChange, handleDate }) {
  const datePicker = () => {
    document.getElementById('date').showPicker();
  }
  return(
      <div className="relative w-full px-0 py-3 md:py-5 flex flex-row justify-evenly md:justify-normal font-appliedSans font-normal font-secondary text-[10px] md:text-base">
        <div className="relative flex flex-row gap-x-2 md:gap-x-3 pr-3 md:pr-3 items-center border-r-2 border-slate-400">
          <label htmlFor="date" className="text-[10px] md:text-base font-semibold">FILTRAR POR:</label>
          <input
            id="date"
            name="date"
            type="date"
            onChange={handleDate}
            placeholder="Fecha"
            value={typeof values?.date === 'string' ? '' : moment(values?.date).format('YYYY-MM-DD')}
            className="appearance-none max-w-0"
          />
          <span onClick={datePicker} className="cursor-pointer">{typeof values.date === 'number' ? moment(values.date).format('YYYY-MM-DD') : 'Fecha'}</span>
        </div>
        <div className="flex flex-row gap-x-2 md:gap-x-6 md:px-6 items-center">
          <label htmlFor="" className="text-[10px] md:text-base">ESTADO:</label>
          <Dropdown
            name={'city'}
            value={values.city}
            placeholder={'todos'}
            data={data.city}
            arrow={'hidden'}
            customClassButton={'text-[10px] md:text-xs md:leading-8 tracking-normal font-bold p-1.5 text-zinc-800 bg-stone-300 rounded-md italic uppercase appearance-none cursor-pointer'}
            handleChange={handleChange}
          />
        </div>
      </div>
  )
}
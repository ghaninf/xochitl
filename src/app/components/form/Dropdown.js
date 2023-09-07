"use client"

import Icon from "../icon/Icon"

import IconDropDown from '../../assets/image/vector-dropdown.svg';
import { useState } from "react";
import moment from "moment";

export default function Dropdown({ name, value, placeholder, data, isDate, arrow, customClassButton, customClassDropdown, handleChange }) {
  const [state, setState] = useState(false)

  const onChange = (name, value) => {
    handleChange(name, value)
    setState(prev => !prev)
  }

  const typeValue = (value) => {
    const type = typeof value
    if (type === 'number') {
      if (isDate) {
        return moment(value).format('dddd, dd MMMM')
      }
      return value
    }
    if (type === 'string') {
      if (value === '') {
        return placeholder
      }
      return value
    }
  }

  return(
    <div className="relative">
      <button onClick={() => setState(prev => !prev)} className={`p-0 md:p-2 font-medium text-center inline-flex items-center uppercase gap-x-2 ${customClassButton || ''} text-[10px] md:text-base`} type="button">
        { typeValue(value) }
        <Icon
          src={IconDropDown}
          height={12}
          width={12}
          additionalCSS={arrow || ''}
        />
      </button>
      <div className={`${state ? 'block' : 'hidden'} absolute top-12 -left-6 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700`}>
        <ul className={`py-2 text-sm text-gray-700 dark:text-gray-200 ${customClassDropdown || ''}`}>
          {
            data.map((el, key) => (
              <li key={key} onClick={() => onChange(name, el)} className="block px-4 py-2 capitalize hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                { typeValue(el) }
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
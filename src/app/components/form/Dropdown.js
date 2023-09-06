"use client"

import Icon from "../icon/Icon"

import IconDropDown from '../../assets/image/vector-dropdown.svg';
import { useState } from "react";

export default function Dropdown({ name, value, data, arrow, customClassButton, customClassDropdown, handleChange }) {
  const [state, setState] = useState(false)

  const onChange = (name, value) => {
    handleChange(name, value)
    setState(prev => !prev)
  }

  return(
    <div className="relative">
      <button onClick={() => setState(prev => !prev)} class={`p-2 font-medium text-center inline-flex items-center uppercase gap-x-2 ${customClassButton || ''}`} type="button">
        {value}
        <Icon
          src={IconDropDown}
          height={12}
          width={12}
          additionalCSS={arrow || ''}
        />
      </button>
      <div class={`${state ? 'block' : 'hidden'} absolute top-10 -left-6 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
        <ul class={`py-2 text-sm text-gray-700 dark:text-gray-200 ${customClassDropdown || ''}`}>
          {
            data.map((el, key) => (
              <li key={key} onClick={() => onChange(name, el)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                {el}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
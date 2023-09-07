import Link from "next/link";

import Icon from "../icon/Icon";

import ArrowWhite from '../../assets/image/vector-arrow-white.svg';
import ArrowBlue from '../../assets/image/vector-arrow-blue.svg';

export default function Arrow({ title, color, arrowColor, href, width, height, additionalClass }) {
  const listIcon = {
    white: ArrowWhite,
    blue: ArrowBlue
  }

  return(
    <div className="relative group w-fit pb-1 box-border cursor-pointer before:w-full before:border-b-[3px] before:border-pink-500 before:absolute before:-bottom-1 before:left-0 before:transform before:scale-x-100">
      <Link href={href} className={`relative max-w-fit font-version font-normal hover:font-bold tracking-wide flex flex-row gap-x-4 items-center ${ color || 'text-white'} ${ additionalClass || ''} text-sm md:text-base lg:text-[17.5px]`} >
        {title}
        <div className={`relative w-fit h-fit`} title={title} >
          <Icon
            title={title}
            width={width}
            height={height}
            src={listIcon[arrowColor]}
          />
        </div>
      </Link>
    </div>
  )
}
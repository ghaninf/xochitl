import Link from "next/link";

import Icon from "../icon/Icon";

import ArrowWhite from '@/assets/image/vector-arrow-white.svg';
import ArrowBlue from '@/assets/image/vector-arrow-blue.svg';

export default function Arrow({ title, color, arrowColor, href, width, height, additionalClass }) {
  const listIcon = {
    white: ArrowWhite,
    blue: ArrowBlue
  }

  return(
    <div className="relative w-fit pb-1 border-b-2 border-pink-500 box-border">
      <Link href={href} className={`relative max-w-fit font-appliedSans flex flex-row gap-x-4 items-center ${ color || 'text-white'} ${ additionalClass || ''} text-[26.75px]`} >
        {title}
        <div className={`relative w-fit h-fit`} title={title} >
          <Icon
            width={width}
            height={height}
            src={listIcon[arrowColor]}
          />
        </div>
      </Link>
    </div>
  )
}
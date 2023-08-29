import Link from "next/link";

import Icon from "../Icon";

import ArrowRight from '../../assets/image/vector-arrow-right.svg';

export default function Arrow({ title, href, size, width, height }) {


  return(
    <div className="relative w-fit pb-1 border-b-2 border-pink-500 box-border">
      <Link href={href} className={`relative max-w-fit flex flex-row gap-x-4 items-center font-white text-[${size || '26.75px'}]`} >
        {title}
        <Icon
          src={ArrowRight}
          title={title}
          width={width}
          height={height}
        />
      </Link>
    </div>
  )
}
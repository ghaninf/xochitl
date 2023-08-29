import Image from "next/image";

import ImageLogo from "../assets/image/logo-xochitl.svg";
import Link from "next/link";

export default function Logo () {

  return(
    <div className="relative min-w-[160px] min-h-[57px]">
      <Link href={'/'} className="" >
        <Image
          width={160}
          height={57}
          src={ImageLogo}
          alt="logos"
        />
      </Link>
    </div>
  )
}
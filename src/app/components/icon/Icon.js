import Image from "next/image";
import Link from "next/link";


export default function Icon({ src, title, width, height, additionalCSS, href }) {
  if (!href) {
    return (
      <div className={`relative w-fit h-fit`}>
        <Image
          width={width}
          height={height}
          title={title}
          alt={title}
          src={src}
          className={`w-auto h-auto aspect-auto ${additionalCSS || ''}`}
        />
      </div>
    )
  } else {
    return(
      <Link href={href} className={`relative w-fit h-fit`}>
        <Image
          width={width}
          height={height}
          title={title}
          alt={title}
          src={src}
          className={`w-auto h-auto aspect-auto ${additionalCSS || ''}`}
        />
      </Link>
    )
  }
}
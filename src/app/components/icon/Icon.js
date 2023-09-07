import Image from "next/image";


export default function Icon({ src, title, width, height, additionalCSS }) {

  return(
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
}
import { handleRichText } from ".";

const { default: Image } = require("next/image");

export default function generateContentItem(item, index) {
  switch (item.type) {
    case 'image':
      return (
        <article key={index} className="w-11/12 lg:w-full mx-auto lg:mx-0">
          <Image src={item.image} alt={"image"} className="w-full object-cover"/>
        </article>
      )
      break;
    case 'quote':
      return (
        <article key={index} className="px-2 md:px-0">
          <div className="flex flex-col gap-3 px-5 md:px-10 w-10/12 mx-auto border-s-2 md:border-s-8 border-[color:var(--primary-color)]">
            <h2 className="font-resolute text-md md:text-[27px] text-[color:var(--secondary-color)] decoration-[color:var(--primary-color)] underline underline-offset-4 md:underline-offset-[6px]">{item.quote}</h2>
            <p className="font-version text-sm md:text-[25px] leading-[17px] md:leading-8">{item.author.toUpperCase()}</p>
          </div>
        </article>
      )
      break;
    default:
      return (
        <article key={index} className="relative">
          <div className="flex flex-col gap-3 px-10 md:px-20">
            <h2 className="font-resolute lg:w-max text-md md:text-[27px] text-[color:var(--secondary-color)] decoration-[color:var(--primary-color)] underline underline-offset-[5px] md:underline-offset-[6px]">{item.title}</h2>
            {handleRichText(item.excerpt, "font-light text-base md:text-[25px] leading-8 lg:leading-[38.04px]")}
          </div>
        </article>
      )
      break;
  }
};

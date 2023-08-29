import Button from "../Button"
import ArrowText from "../text/Arrow.text"

export default function TitleCaption({ title, caption, textLink, typeTextLink, link, onClick, color }) {


  const listType = {
    button: <Button text={textLink} typeColor={color} onClick={onClick} />,
    arrow: <ArrowText title={textLink} href={link} size={16} width={15} height={12} />
  }

  return(
    <div className="relative flex flex-col gap-y-[10px] font-white">
      <h2 className="text-[25px]">{title}</h2>
      <h4 className="text-[18px]">{caption}</h4>
      <div className="mt-4">
        {listType[typeTextLink]}
      </div>
    </div>
  )
}
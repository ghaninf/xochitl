import Button from "../Button"
import ArrowText from "./Arrow.text"

export default function TitleCaption({ title, caption, textLink, typeTextLink, link, onClick, color }) {


  const listType = {
    button: <Button text={textLink} typeColor={color} onClick={onClick} />,
    arrow: <ArrowText title={textLink} href={link} />
  }

  return(
    <div className="relative flex flex-col gap-y-[10px] font-white">
      <title>
        <h2>{title}</h2>
      </title>
      <caption>
        <h4>{caption}</h4>
      </caption>
      <div className="m-t-4">
        {listType[typeTextLink]}
      </div>
    </div>
  )
}
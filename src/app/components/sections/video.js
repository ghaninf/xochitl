import { TitleCaptionText } from "../text";
import VideoPlayer from '../VideoPlayer'

export default function VideoSection() {
  const linkVideo = "https://drive.google.com/file/d/1-_rJuePFCO2jIiJf6S6KaaO7KFttycqL/preview";

  return(
    <section className="relative w-full h-auto mt-64 pl-[78px] py-[138px] box-border bg-secondary">
      <div className="relative max-w-[390px]">
        <TitleCaptionText
          title={'SIN MIEDO'}
          title2={'A NADA'}
          caption={'Xóchitl toda su vida se ha enfrentado y ha luchado contra la desigualdad en México y está aquí para luchar por la gente de México.'}
          typeTextLink={'arrow'}
          textLink={'CONOCE A XÓCHITL'}
          link={'#'}
        />
      </div>
      <div className="absolute -top-[230px] right-0 w-fit h-full">
        <VideoPlayer src={linkVideo} width={680} height={680} />
      </div>
    </section>
  )
}
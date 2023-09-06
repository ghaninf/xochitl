import { TitleCaptionText } from "../text";

export default function VideoSection() {
  // const linkVideo = "https://mega.nz/embed/lyt1zBDA#oXLwhWOgNly83QKydaPKcMmlrG2b6UB2twkVms0EkbU!1a1m"

  return(
    <section className="relative w-full md:mt-20 md:h-[667px] lg:h-[500px] flex flex-col md:flex-row-reverse bg-[color:var(--secondary-color)]">
      <div className="md:absolute flex px-2 md:p-0 -top-10 md:-top-20 lg:-top-40 md:w-[400px] lg:w-[650px] h-[398px] md:h-[400px] lg:h-[500px] bg-white">
        <video src={"./video/xochitlvideo1.mp4"} className='w-full h-full object-cover' autoPlay loop muted/>
      </div>
      <div className="basis-1/2 md:basis-full flex justify-start md:items-center lg:items-start p-10 md:p-20">
        <div className="md:basis-8/12 lg:basis-5/12 md:pt-10 lg:pt-0">
          <TitleCaptionText
            title={'SIN MIEDO'}
            title2={'A NADA'}
            caption={'Xóchitl toda su vida se ha enfrentado y ha luchado contra la desigualdad en México y está aquí para luchar por la gente de México.'}
            typeTextLink={'arrow'}
            textLink={'CONOCE A XÓCHITL'}
            link={'#'}
          />
        </div>
      </div>
    </section>
  )
}
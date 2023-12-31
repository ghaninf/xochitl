import moment from "moment"
require('moment/locale/es-mx');

import Icon from '../icon/Icon';

import IconClock from '../../assets/image/vector-clock.svg';
import IconLocation from '../../assets/image/vector-pin-location.svg';

export default function EventSection({ data, animation }) {

  const listColor = ['border-red-600', 'border-pink-500', 'border-yellow-500', 'border-blue-600', 'border-sky-500', 'border-green-500']
  return(
    <section className={`relative w-full flex flex-col gap-y-5 ease-in-out duration-300 ${animation}`}>
      {
        data?.map((event, key) => (
          <div key={key} className={`relative mb-2 mr-2 py-6 px-5 md:px-14 flex flex-row flex-nowrap gap-x-10 md:gap-x-20 bg-white shadow-[6.31px_6.31px_2.1px_1.05px_rgba(0,0,0,0.12)] border-l-4 ${listColor[key]}`}>
            <div className="relative font-resolute font-secondary text-center">
              <h3 className="text-6xl md:text-[65px]">{moment(event.date).locale('es-MX').format('DD')}</h3>
              <h4 className="absolute md:top-[72px] left-1/2 -translate-x-1/2 text-xs md:text-[21px]">{moment(event.date).locale('es-MX').format('MMM').toUpperCase().replace('.', '')}</h4>
            </div>
            <div className="relative flex flex-col gap-y-2 max-w-[400px] text-black">
              {
                event.status === 'cancel'
                ? <div className="w-fit p-1 font-version font-normal text-white bg-[#DB3921] rounded-md">EVENTO CANCELADO</div>
                : ''
              }
              <h2 className="font-version text-[13px] md:text-[21px] tracking-[2px] leading-[200%]">{event.title}</h2>
              <h4 className="font-appliedSans text-xs md:text-[17px] leading-[113%] font-normal italic">{event.description}</h4>
              {
                event.timeline.map((timeline, index) => (
                  <div key={index} className="font-appliedSans text-xs md:text-[17px] font-normal">
                    <div className="flex flex-row items-center flex-nowrap gap-x-3">
                      <Icon
                        width={22}
                        height={22}
                        title={'clock'}
                        src={IconClock}
                      />
                      <span>
                        {moment(timeline.startTimestamp).locale('es-MX').format('HH:mm')}
                        {
                          timeline?.endTimestamp
                          ? ' - ' + moment(timeline.endTimestamp).locale('es-MX').format('HH:mm')
                          : ''
                        }
                        {
                          timeline?.timeDescription !== ''
                          ? ' ' + timeline.timeDescription 
                          : ''
                        }
                      </span>
                    </div>
                  </div>
                ))
              }
              <div className="flex flex-row flex-nowrap gap-x-3 text-sm md:text-base">
                <div className="px-1.5 min-w-[22px]">
                  <Icon
                    width={10}
                    height={22}
                    title={'location'}
                    src={IconLocation}
                  />
                </div>
                <span>
                  {
                    event?.location !== ''
                    ? event.location + ', '
                    : event.location
                  }
                  { event?.city + ' ' || '' }
                  { event?.state + ' ' || '' }
                </span>
              </div>
            </div>
          </div>
        ))
      }
    </section>
  )
}
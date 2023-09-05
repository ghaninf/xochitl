'use client'

import moment from "moment"
require('moment/locale/es-mx');
import { useEffect, useState } from "react";

import Icon from '../icon/Icon';

import IconClock from '../../assets/image/vector-clock.svg';
import IconLocation from '../../assets/image/vector-pin-location.svg';

export default function EventSection(props) {
  const [state, setState] = useState([])

  useEffect(() => {
    
  }, [])

  const listColor = ['border-red-600', 'border-pink-500', 'border-yellow-500', 'border-blue-600', 'border-sky-500', 'border-green-500']
  return(
    <section className="relative w-full flex flex-col gap-y-5">
      {
        state?.map((event, key) => (
          <div key={key} className={`relative py-6 px-14 flex flex-row flex-nowrap gap-x-20 bg-white drop-shadow-lg border-l-4 ${listColor[key]}`}>
            <div className="relative font-resolute font-secondary text-center">
              <h3 className="text-[65px]">{moment(event.date).locale('es-MX').format('DD')}</h3>
              <h4 className="absolute top-[72px] left-1/2 -translate-x-1/2 text-[21px]">{moment(event.date).locale('es-MX').format('MMM').toUpperCase().replace('.', '')}</h4>
            </div>
            <div className="relative flex flex-col gap-y-2 max-w-[400px] text-black">
              {
                event.status === 'cancel'
                ? <div className="p-1 font-version font-normal text-white bg-[#DB3921] rounded-md">EVENTO CANCELADO</div>
                : ''
              }
              <h2 className="font-version text-[21px] tracking-[2px] leading-[200%]">{event.title}</h2>
              <h4 className="font-appliedSans text-[17px] leading-[113%] font-normal italic">{event.description}</h4>
              {
                event.timeline.map((timeline, index) => (
                  <div key={index} className="font-appliedSans text-[17px] font-normal">
                    <div className="flex flex-row flex-nowrap gap-x-3">
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
              <div className="flex flex-row flex-nowrap gap-x-3">
                <div className="px-1.5 min-w-[22px]">
                  <Icon
                    width={10}
                    height={22}
                    title={'location'}
                    src={IconLocation}
                  />
                </div>
                <span>{moment(event.date).locale('es-MX').format('DD, MMM')}</span>
              </div>
            </div>
          </div>
        ))
      }
    </section>
  )
}
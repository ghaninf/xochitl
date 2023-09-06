'use client'

import { Filter, HeaderFilter, Icon, EventSection, Navbar } from '../components';

import Watermark from '../assets/image/vector-watermark.svg';
import { useEffect, useState } from 'react';
import { AgendaService } from '../services';
import moment from 'moment';

export default function Events() {
  const [state, setState] = useState({
    data: [],
    filter: {
      filter: 'FECHA',
      state: 'TODOS',
      city: 'TODOS',
      startDate: moment().startOf('month').valueOf(),
      endDate: moment().endOf('month').valueOf()
    }
  })
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 10
  })
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    AgendaService.getList({ ...state.filter, ...pagination})
      .then(res => {
        setState(prev => ({
          ...prev,
          data: res.data
        }))
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false);
      })
  }, [state.filter.filter, state.filter.state, state.filter.city])

  useEffect(() => {

  }, [pagination.page])

  const handleNext = () => {
    const nextMonth = moment(state.filter.startDate).add(1, 'M')
    setState(prev => ({
      ...prev,
      filter: {
        ...prev.filter,
        startDate: nextMonth.startOf('month').valueOf(),
        endDate: nextMonth.endOf('month').valueOf()
      }
    }))
  }

  const handlePrev = () => {
    const nextMonth = moment(state.filter.startDate).subtract(1, 'M')
    setState(prev => ({
      ...prev,
      filter: {
        ...prev.filter,
        startDate: nextMonth.startOf('month').valueOf(),
        endDate: nextMonth.endOf('month').valueOf()
      }
    }))
  }

  return(
    <>
      <Navbar page={'eventos'} />
      <main className="relative min-h-screen mt-[90px] px-40 py-16 flex flex-col">
        <section className="">
          <HeaderFilter
            month={state.filter.startDate}
            next={handleNext}
            prev={handlePrev}
          />
          <Filter />
        </section>
        <EventSection data={state.data} />
        <Icon
          additionalCSS={'fixed bottom-0 right-0 '}
          title={'xochitl watermark'}
          src={Watermark}
          width={400}
          height={500}
        />
      </main>
    </>
  )
}
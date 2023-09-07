'use client'

import { Filter, HeaderFilter, Icon, EventSection, Navbar } from '../components';

import Watermark from '../assets/image/vector-watermark.svg';
import { useEffect, useState } from 'react';
import { AgendaService } from '../services';
import moment from 'moment';
import Footer from '../components/Footer';

export default function Events() {
  const [state, setState] = useState({
    data: [],
    filter: {
      date: '',
      state: '',
      city: '',
      startDate: moment().startOf('month').valueOf(),
      endDate: moment().endOf('month').valueOf()
    },
    dataFilter: {
      date: [ 'Fecha' ],
      state: [ 'Todos' ],
      city: [ 'Todos' ]
    },
    animateHeader: '',
  })
  const [pagination, setPagination] = useState({
    index: 1,
    limit: 10,
    total: 10
  })
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(state.animateHeader);
    const promises = [];
    promises.push(AgendaService.getFilter({ startDate: state.filter.startDate, endDate: state.filter.endDate }))
    promises.push(AgendaService.getList({ ...state.filter, ...pagination}))
    Promise.all(promises)
      .then(values => {
        setState(prev => ({
          ...prev,
          data: values[1].data,
          dataFilter: {
            ...prev.dataFilter,
            state: values[0].state,
            city: values[0].city,
            date: values[0].date
          }
        }))
        setPagination(prev => ({
          ...prev,
          index: values[1].page.index,
          total: values[1].page.total
        }))
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        if (state.animateHeader === 'animate-hide-to-left') {
          setLoading('animate-show-to-left');
        } else {
          setLoading('animate-show-to-right');
        }
      })
  }, [state.filter.startDate])

  useEffect(() => {
    setLoading('animate-to-bottom');
    AgendaService.getList({ ...state.filter, ...pagination})
      .then(res => {
        setState(prev => ({
          ...prev,
          data: res.data,
        }))
        setPagination(prev => ({
          ...prev,
          index: res.page.index,
          total: res.page.total
        }))
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        setLoading('animate-from-top');
      })
  }, [state.filter.date, state.filter.state, state.filter.city])

  const handleChange = (menu, value) => {
    setState(prev => ({
      ...prev,
      filter: {
        ...prev.filter,
        [menu]: value
      },
      animateHeader: ''
    }))
  }

  const handleNext = () => {
    const nextMonth = moment(state.filter.startDate).add(1, 'M')
    setState(prev => ({
      ...prev,
      filter: {
        ...prev.filter,
        startDate: nextMonth.startOf('month').valueOf(),
        endDate: nextMonth.endOf('month').valueOf()
      },
      animateHeader: 'animate-hide-to-left',
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
      },
      animateHeader: 'animate-hide-to-right',
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
          <Filter
            values={state.filter}
            data={state.dataFilter}
            handleChange={handleChange}
          />
        </section>
        <div className={`relative overflow-hidden w-full h-auto`}>
          <EventSection data={state.data} animation={loading} />
        </div>
        <div className='absolute bottom-0 right-0'>
          <Icon
            title={'xochitl watermark'}
            src={Watermark}
            width={400}
            height={500}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
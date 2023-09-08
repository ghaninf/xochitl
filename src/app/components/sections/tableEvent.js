'use client'

import { useEffect, useState } from 'react';
import moment from 'moment';

import { Filter, HeaderFilter } from '../filter';
import EventSection from './event';
import { AgendaService } from '@/app/services';

export async function generateMetadata() {
  return await metaData('eventos')
}

export default function Events() {
  const [state, setState] = useState({
    data: [],
    filter: {
      date: '',
      city: '',
    },
    filterByMonth: {
      startDate: moment().startOf('month').valueOf(),
      endDate: moment().endOf('month').valueOf()
    },
    dataFilter: {
      city: [ 'Todos' ]
    },
    animateHeader: '',
    inital: true
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
    promises.push(AgendaService.getFilter())
    promises.push(AgendaService.getListByMonth(state.filterByMonth))
    Promise.all(promises)
      .then(values => {
        setState(prev => ({
          ...prev,
          data: values[1].data,
          dataFilter: {
            ...prev.dataFilter,
            city: values[0].city,
          },
          inital: false
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
  }, [state.filterByMonth.startDate])

  useEffect(() => {
    if (!state.inital) {
      setLoading('animate-to-bottom');
      AgendaService.getListByFilter({ ...state.filter, ...pagination})
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
    }
  }, [state.filter.date, state.filter.city])

  const handleDate = (e) => {
    let value = e.target.value
    if (value === "" || value === '') {
      value = ''
    } else {
      value = moment(value).valueOf()
    }
    setState(prev => ({
      ...prev,
      filter: {
        ...prev.filter,
        date: value
      },
      animateHeader: ''
    }))
  }

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
    const nextMonth = moment(state.filterByMonth.startDate).add(1, 'M')
    setState(prev => ({
      ...prev,
      filterByMonth: {
        ...prev.filterByMonth,
        startDate: nextMonth.startOf('month').valueOf(),
        endDate: nextMonth.endOf('month').valueOf()
      },
      animateHeader: 'animate-hide-to-left',
    }))
  }

  const handlePrev = () => {
    const nextMonth = moment(state.filterByMonth.startDate).subtract(1, 'M')
    setState(prev => ({
      ...prev,
      filterByMonth: {
        ...prev.filterByMonth,
        startDate: nextMonth.startOf('month').valueOf(),
        endDate: nextMonth.endOf('month').valueOf()
      },
      animateHeader: 'animate-hide-to-right',
    }))
  }

  return(
    <div className='relative md:min-h-[400px]'>
      <section className="">
        <HeaderFilter
          month={state.filterByMonth.startDate}
          next={handleNext}
          prev={handlePrev}
        />
        <Filter
          values={state.filter}
          data={state.dataFilter}
          handleChange={handleChange}
          handleDate={handleDate}
        />
      </section>
      <div className={`relative overflow-hidden w-full h-auto`}>
        <EventSection data={state.data} animation={loading} />
      </div>
    </div>
  )
}
import { NextResponse } from 'next/server'
import agenda from '../agenda.json';
import moment from 'moment';

export async function GET(req) {
  const filter = {
    date: [],
    state: [],
    city: []
  }

  let data = agenda.agenda
  
  const { searchParams } = new URL(req.url);
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');

  if (startDate && endDate) {
    data = data.filter(el => (el.date >= startDate && el.date <= endDate ))
  }
  
  data.forEach(event => {
    if (!filter.state.includes(event.state)) {
      filter.state.push(event.state);
    }
    if (!filter.city.includes(event.city)) {
      filter.city.push(event.city);
    }
    if (!filter.date.includes(event.date)) {
      filter.date.push(moment(event.date).startOf('day').valueOf());
    }
  });
 
  return NextResponse
    .json(filter);
}
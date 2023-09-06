import { NextResponse } from 'next/server'
import agenda from '../agenda.json';
import moment from 'moment';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const date = searchParams.get('date');
  const state = searchParams.get('state');
  const city = searchParams.get('city');
  const index = searchParams.get('index');
  const limit = searchParams.get('limit');

  let data = agenda.agenda

  if (startDate && endDate) {
    data = data.filter(el => (el.date >= startDate && el.date <= endDate ))
  }
  
  if (date && date !== 'fecha') {
    data = data.filter(el => moment(el.date).startOf('day').valueOf() === Number(date) )
  }
  
  if (state && state !== 'todos') {
    data = data.filter(el => el.state === state )
  }
  
  if (city && city !== 'todos') {
    data = data.filter(el => el.city === city )
  }
 
  return NextResponse
    .json({
      data: data,
      page: {
        index: 1,
        total: data.length,
        limit: 10
      }
    });
}
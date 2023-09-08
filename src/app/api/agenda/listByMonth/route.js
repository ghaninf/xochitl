import { NextResponse } from 'next/server'
import agenda from '../agenda.json';
import moment from 'moment';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const index = searchParams.get('index');
  const limit = searchParams.get('limit');

  let data = agenda.agenda

  if (startDate && endDate) {
    data = data.filter(el => (el.date >= startDate && el.date <= endDate ))
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
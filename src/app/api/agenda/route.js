import { NextResponse } from 'next/server'
import agenda from './agenda.json';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const month = searchParams.get('month');
  const filter = searchParams.get('filter');
  const state = searchParams.get('state');
  const city = searchParams.get('city');
  const page = searchParams.get('page');
  const limit = searchParams.get('limit');

  let data = agenda
  if (filter) {
    data.filter
  }
 
  return NextResponse
    .json({
      data: data.agenda,
      page: {
        page: 0,
        total: data.agenda.length,
        limit: 10
      }
    });
}
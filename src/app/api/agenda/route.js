import { NextResponse } from 'next/server'
import agenda from './agenda.json';

export async function POST(req) {
  const body = await req.json();

  const data = agenda
 
  return NextResponse.json(data)
}
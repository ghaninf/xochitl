import { NextResponse } from 'next/server'
 
export async function POST(req) {
  const body = await req.json();
  const URL = process.env.BEEHIIV_URL
  const PUB = process.env.BEEHIIV_PUB_KEY
  const KEY = process.env.BEEHIIV_API_KEY

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${KEY}`,
    },
    body: JSON.stringify({
      email: body?.email,
      reactivate_existing: false,
      send_welcome_email: false,
      utm_source: 'localhost:3000',
      utm_campaign: 'fall_2023',
      utm_medium: 'organic',
      referring_site: 'http://localhost:3000',
      api_key: KEY,
      custom_fields: [
        {
          name: "Name",
          value: body?.name
        },
      ]
    }),
  };

  const res = await fetch(`${URL}/publications/${PUB}/subscriptions`, requestOptions)

  const data = await res.json()
 
  return NextResponse.json(body)
}
import { NextResponse } from 'next/server'
 
export async function POST(req) {
  const body = await req.json();
  const URL = process.env.BEEHIIV_URL
  const PUB = process.env.BEEHIIV_PUB_KEY
  const KEY = process.env.BEEHIIV_API_KEY
  const WEBSITE = process.env.NAME_WEBSITE

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
      utm_source: WEBSITE,
      utm_campaign: 'xochitl',
      utm_medium: 'organic',
      referring_site: WEBSITE,
      custom_fields: [
        {
          name: "Name",
          value: body?.name
        },
      ]
    }),
  }
  // {
  //   "email": "ghaninf@gmail.com",
  //   "reactivate_existing": false,
  //   "send_welcome_email": false,
  //   "utm_source": "WEBSITE",
  //   "utm_campaign": "xochitl",
  //   "utm_medium": "organic",
  //   "referring_site": "WEBSITE",
  //   "custom_fields": [
  //     {
  //       "name": "Name",
  //       "value": "Ghani"
  //     },
  //   ]
  // }

  const res = await fetch(`${URL}/publications/${PUB}/subscriptions`, requestOptions)

  return NextResponse.json({
    message: 'success'
  })
}
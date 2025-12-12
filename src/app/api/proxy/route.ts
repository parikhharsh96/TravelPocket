import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const endpoint = searchParams.get('endpoint')
  
  if (!endpoint) {
    return NextResponse.json({ error: 'Endpoint parameter required' }, { status: 400 })
  }

  try {
    const response = await fetch(`https://api.crmtravelpocket.cloud${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'API request failed' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const endpoint = searchParams.get('endpoint')
  
  if (!endpoint) {
    return NextResponse.json({ error: 'Endpoint parameter required' }, { status: 400 })
  }

  try {
    const body = await request.json()
    
    const response = await fetch(`https://api.crmtravelpocket.cloud${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'API request failed' }, { status: 500 })
  }
}
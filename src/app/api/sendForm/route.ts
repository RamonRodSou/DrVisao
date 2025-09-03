import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const payload = await req.json();

    if (!process.env.NEXT_PUBLIC_WEBHOOK) {
        return NextResponse.json({ error: 'WEBHOOK não definido' }, { status: 500 });
    }

    try {
        const response = await fetch(process.env.NEXT_PUBLIC_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        const data = await response.text();
        return NextResponse.json({ status: 'ok', webhookResponse: data });
    } catch (err) {
        return NextResponse.json({ error: 'Erro ao enviar para o webhook', details: err }, { status: 500 });
    }
}

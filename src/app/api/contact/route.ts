import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Rate limiting in-memory (for production, use Redis)
const ipRequests = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per minute

// Zod validation schema
const ContactFormSchema = z.object({
  name: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'Mensagem muito curta'),
  honeypot: z.string().optional() // Spam trap field
});

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIp = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const existingRequest = ipRequests.get(clientIp);

    if (existingRequest && now - existingRequest.timestamp < RATE_LIMIT_WINDOW_MS) {
      if (existingRequest.count >= RATE_LIMIT_MAX) {
        return NextResponse.json(
          { error: 'Muitos pedidos, tente novamente mais tarde' },
          { status: 429 }
        );
      }
      existingRequest.count += 1;
    } else {
      ipRequests.set(clientIp, { count: 1, timestamp: now });
    }

    // Clean up old entries
    for (const [ip, data] of ipRequests) {
      if (now - data.timestamp > RATE_LIMIT_WINDOW_MS) {
        ipRequests.delete(ip);
      }
    }

    const body = await request.json();

    // Check honeypot
    if (body.honeypot) {
      return NextResponse.json({ error: 'Bot detected' }, { status: 400 });
    }

    // Validate form
    const validatedData = ContactFormSchema.parse(body);

    // TODO: Implement EmailJS/SMTP sending here (use process.env.EMAIL_SERVICE_KEY)
    console.log('Contact form submitted:', validatedData);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.error('Error in contact form:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}

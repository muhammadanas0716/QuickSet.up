import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { WelcomeEmail } from '@/emails/welcome';

export async function POST(request: NextRequest) {
  try {
    const { to, type, data } = await request.json();

    if (!to || !type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    let result;

    switch (type) {
      case 'welcome':
        result = await sendEmail({
          to,
          subject: 'Welcome to our platform!',
          react: WelcomeEmail({
            name: data?.name || 'there',
            actionUrl: data?.actionUrl,
          }),
        });
        break;

      default:
        return NextResponse.json(
          { error: 'Unknown email type' },
          { status: 400 }
        );
    }

    if (result.success) {
      return NextResponse.json({ success: true, data: result.data });
    } else {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Email API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

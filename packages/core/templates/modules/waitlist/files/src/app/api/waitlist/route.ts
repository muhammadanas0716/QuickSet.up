import { NextRequest, NextResponse } from 'next/server';

// In-memory store for demo purposes
// In production, replace with database storage
const waitlist = new Set<string>();

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    if (waitlist.has(email)) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 400 }
      );
    }

    // Add to waitlist
    waitlist.add(email);

    // TODO: In production, you would:
    // 1. Save to database
    // 2. Send confirmation email via your email provider
    // 3. Optionally add to email marketing tool

    console.log(`New waitlist signup: ${email}`);

    return NextResponse.json({
      success: true,
      message: 'Successfully joined the waitlist',
    });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Return count for admin purposes
  return NextResponse.json({
    count: waitlist.size,
  });
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

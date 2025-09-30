import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for now (in production, use a database)
const waitlistEntries: WaitlistEntry[] = [];

interface WaitlistEntry {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  organization?: string;
  role?: string;
  interestAreas?: string[];
  createdAt: Date;
  ipAddress?: string;
  userAgent?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { email, firstName, lastName, organization, role, interestAreas } = body;
    
    if (!email || !firstName || !lastName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Check if email already exists (in production, check database)
    const existingEntry = waitlistEntries.find(entry => entry.email === email);
    if (existingEntry) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }
    
    // Create new entry
    const newEntry: WaitlistEntry = {
      id: Date.now().toString(),
      email,
      firstName,
      lastName,
      organization,
      role,
      interestAreas,
      createdAt: new Date(),
      ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined,
      userAgent: request.headers.get('user-agent') || undefined,
    };
    
    // Add to waitlist (in production, save to database)
    waitlistEntries.push(newEntry);
    
    // TODO: Send confirmation email
    // await sendConfirmationEmail(email, firstName);
    
    // Log for monitoring (in production, use proper logging service)
    console.log('New waitlist entry:', {
      email,
      firstName,
      lastName,
      organization,
      timestamp: new Date().toISOString()
    });
    
    return NextResponse.json(
      { 
        success: true,
        message: 'Successfully added to waitlist',
        data: {
          id: newEntry.id,
          email: newEntry.email
        }
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // For development only - return count of waitlist entries
  return NextResponse.json({
    count: waitlistEntries.length,
    message: 'Waitlist API is running'
  });
}
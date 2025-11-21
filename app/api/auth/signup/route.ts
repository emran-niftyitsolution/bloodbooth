import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/User';
import { generateToken } from '@/lib/jwt';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { fullName, email, password, phone, bloodType, dateOfBirth } = body;

    // Validation
    if (!fullName || !email || !password) {
      return NextResponse.json(
        { error: 'Please provide all required fields' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }

    // Create new user
    const user = await User.create({
      fullName,
      email,
      password,
      phone,
      bloodType,
      dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
    });

    // Generate JWT token
    const token = generateToken({
      userId: user._id.toString(),
      email: user.email,
    });

    // Return user data (without password)
    return NextResponse.json(
      {
        success: true,
        message: 'Account created successfully',
        token,
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          bloodType: user.bloodType,
          phone: user.phone,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
}


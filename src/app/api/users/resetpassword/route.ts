import { connect } from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/userModel';

connect();

export async function POST(request: NextRequest) {
  // Check if the email exists for the password reset
  // Trigger an email to be sent to change the password
}

import { connect } from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/userModel';

connect();

export async function PUT(request: NextRequest) {
  // Verify the token from email
  // Hash and save the new password for the user
}

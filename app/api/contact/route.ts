import connectMongo from '@/lib/connectMongo';
import Contact from '@/models/contactSchema';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    await connectMongo();

    const { name, email, phone, message } = await request.json();

    const contact = new Contact({
      name,
      email,
      phone,
      message,
    });

    await contact.save();

    return NextResponse.json({ success: true, message: 'Contact saved successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}

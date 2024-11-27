'use server'

import connectMongo from '@/lib/connectMongo';
import Contact from '@/models/contactSchema';

type ContactData = {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function submitContact(data: ContactData) {
  try {
    await connectMongo();

    const contact = new Contact({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });

    await contact.save();

    return { success: true, message: 'Contact saved successfully' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Internal server error' };
  }
}

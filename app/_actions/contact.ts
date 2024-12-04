'use server'
import admin from 'firebase-admin';
import axios from 'axios';

interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
  recaptchaToken: string;
}

const initializeFirebaseAdmin = () => {
  if (!admin.apps.length) {
    try {
      const serviceAccount = JSON.parse(
        process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
      );
      
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    } catch (error) {
      console.error('Firebase admin initialization error:', error);
      throw new Error('Failed to initialize Firebase Admin');
    }
  }
  return admin.firestore();
};

async function verifyRecaptcha(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  try {
    const response = await axios.post<{ success: boolean }>(verificationUrl);
    return response.data.success;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

export async function submitContact(data: ContactData) {
  try {
    const isHuman = await verifyRecaptcha(data.recaptchaToken);
    if (!isHuman) {
      return { 
        success: false, 
        message: 'reCAPTCHA verification failed' 
      };
    }

    const db = initializeFirebaseAdmin();
    const contactRef = db.collection('contacts').doc();
    
    await contactRef.set({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return { 
      success: true, 
      message: 'Contact saved successfully' 
    };
  } catch (error) {
    console.error('Contact submission error:', error);
    return { 
      success: false, 
      message: 'Failed to save contact information' 
    };
  }
}

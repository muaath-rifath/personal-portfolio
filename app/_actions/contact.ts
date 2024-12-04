'use server'
import admin from 'firebase-admin';

interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
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

export async function submitContact(data: ContactData) {
  try {
    const db = initializeFirebaseAdmin();
    const contactRef = db.collection('contacts').doc();
    
    await contactRef.set({
      ...data,
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

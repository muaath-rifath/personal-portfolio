// global.d.ts
import mongoose, { Mongoose } from 'mongoose';

declare global {
  namespace NodeJS {
    interface Global {
      mongoose?: {
        conn: Mongoose | null;
        promise: Promise<Mongoose> | null;
      };
    }
  }
}

export {};
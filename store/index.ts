import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/store/slices/authSlice';
// or if you prefer relative path:
// import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

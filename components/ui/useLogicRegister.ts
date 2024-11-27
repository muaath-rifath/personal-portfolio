import { useState } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { login } from '../../../store/authSlice';
import { useDispatch } from 'react-redux';

interface useLogicRegisterProps {
    email: string;
    phone: string;
    password: string;
    firstname: string;
    lastname: string;
    handlePhoneChange: (value: string | undefined) => void;
  }

export const useLogicRegister = (navigate: NavigateFunction ): useLogicRegisterProps => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [phone , setPhone]  = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
  
   
      const handlePhoneChange = (value: string | undefined) => {
        if (value) {
          setPhone(value);
        }
      };
  
    return {
      email,
      phone,
      password,      
      firstname,
      lastname     
    };
  };
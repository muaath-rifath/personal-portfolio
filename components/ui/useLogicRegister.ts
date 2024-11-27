import { useState } from 'react';
import { useRouter } from 'next/router';
// import { login } from '../../../store/authSlice'; // Ensure the path is correct or the module exists
import { useDispatch } from 'react-redux';

interface useLogicRegisterProps {
    email: string;
    phone: string;
    password: string;
    firstname: string;
    lastname: string;
    handlePhoneChange: (value: string | undefined) => void;
    navigate: ReturnType<typeof useRouter>;
  }

  export const useLogicRegister = (): useLogicRegisterProps => {
    const dispatch = useDispatch();
    const router = useRouter();
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
      lastname,
      handlePhoneChange,
      navigate: router,
    };
  };
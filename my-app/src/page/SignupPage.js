import React,{useState} from 'react'
import { Signup } from '../componets/SignupForm';

export const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  return (
    <>
    <Signup  data={formData} setData={setFormData}/>
    </>
  )
}



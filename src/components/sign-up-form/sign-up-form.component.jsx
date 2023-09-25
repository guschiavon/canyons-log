import {
  signInWithGoogleRedirect,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../form-input/form-input.component'


const SignUpForm = () => {
  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [ formFields, setFormFields ] = useState(defaultFormFields)
  
  const resetFormFields = () => setFormFields(defaultFormFields)
  
  const {
    displayName,
    email,
    password,
    confirmPassword } = formFields;
  
  const navigateTo = useNavigate()
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      
      if (password !== confirmPassword) {
        alert('Passwords do not match')
        return;
      }
      
      try {        
        const { user } = await createAuthUserWithEmailAndPassword(email, password);
        const userDoc = await createUserDocumentFromAuth(user, { displayName });
        
        if (userDoc) {          
          alert("Account Created! Welcome to the community!")
          resetFormFields();          
        }              

      } catch (err) {
        if (err.code === 'auth/weak-password') {
          alert('Password should be at least 6 characters long');
        }
      }
            
      navigateTo('/canyons');
    }
  
  const googleSignIn = async () => {
    try {
      const googleUser = await signInWithGoogleRedirect();
    } catch (err) {
      console.log(err);
    }
    
    navigateTo('/canyons')

  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;    
    setFormFields({...formFields, [name]: value });    
  }

  return (
    <div className="w-full">
      <p className='text-xs pb-2'>Create a free account</p>
      <h2 className='font-heading text-3xl'>Sign Up</h2>
      <form>
        <FormInput name="displayName" label='Name' type="text" placeholder="Your name" onChangeHandler={handleInputChange} required  />
        <FormInput name="email" label='Email' type="email" placeholder="Your email" onChangeHandler={handleInputChange} required  />
        <FormInput name="password" label='Password' type="password" placeholder="Set a strong password" onChangeHandler={handleInputChange} required  />
        <FormInput name="confirmPassword" label='Confirm Password' type="password" placeholder="Confirm Password" onChangeHandler={handleInputChange} required  />        
        <div className='py-3 text-center'>
          <input type='submit' className='btn btn-warning' value={'Create account'} onClick={handleSubmit} />
        </div>
      </form>              
        <div className="divider">OR</div>            
        <div className='text-center py-3'>
          <button className="btn btn-info" onClick={googleSignIn}>Sign In With Google</button>
        </div>
    </div>
  )
}

export default SignUpForm;
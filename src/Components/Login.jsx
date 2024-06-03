import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {login as authLogin} from '../Store/authSlice'
import {Button,Input,Logo,} from './index'
import { useDispatch } from 'react-redux'
import authService from '../Appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {register,handleSubmit}=useForm()
    const [error,setError]=useState('')

    const login= async(data)=>{
        setError('')
        try {
            const session = await authService.login(data)
            if (session) {
                const userData=await authService.getCurrentUser()
                if (userData) dispatch(authLogin(userData));
                navigate('/')
            } 
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div
    className='flex items-center justify-center w-full'>
        <div className={`mb-2 flex justify-center`}>
            <span className='inline-block w-full max-w-[100px]'>
                <Logo width='100%'/>
            </span>
        </div>
        <h2 className="text-center text-2xl font-bold
                leading-tight">Sign in to your account</h2>

        <p className='mt-2 text-center text-base text-black/60'>
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className='font-medium text-primary
                        transition-all duration-200
                        hover:underline'>
                        Sign Up
                    </Link>
            </p>
        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y05'>
                <Input
                label='Email:'
                placeholder='Enter your mail'
                type='email'
                {...register('email'),{
                    required:true,
                    validate:{
                        matchPattern:(value)=>/[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/.test(v) || 
                        "Email address must be valid"
                    }
                }} //spreading so that it does not overwrite
                />
                <Input
                label='Password:'
                placeholder='Enter your password'
                type='password'
                {...register('passwprd'),{
                    required:true,
                }}
                />
                <Button type='submit'
                className='w-full'>Sign in</Button>
            </div>
        </form>
    </div>
  )
}

export default Login
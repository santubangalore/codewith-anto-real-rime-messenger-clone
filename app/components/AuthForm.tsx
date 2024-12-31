"use client"

import React, { useCallback, useState } from 'react';
import { FieldValues, useForm } from "react-hook-form";
import Input from '@/app/components/inputs/Input';
import Button from '@/app/components/Button';
import AuthSocialButton from './AuthSocialButton';

type Variant="LOGIN"|"REGISTER";

const AuthForm = () => {
  const [variant,setVariant] = useState<Variant>("LOGIN");
  const [isLoading,setIsLoading] = useState(false);

  const toggleVariant=useCallback(()=>{
    if(variant === "LOGIN"){
      setVariant("REGISTER");
    }
    else {
        setVariant("LOGIN");
    }
  },[variant]);

  const {register, handleSubmit, formState:{errors}} = useForm<FieldValues>({
    defaultValues:{
        name:'',
        email:'',
        password:''
    }
  });

  const onSubmit:SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true);
      if(variant === "REGISTER"){
        //axios register
      }
      else {
        //NextAuth signIn
      }
  }

  const socialAction = (action:string) => {
    setIsLoading (true);
    //nextAuth Social Sign in
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <p className="mb-4">Sign in to your account</p>
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id={"name"}
              type="name"
              label="Name"
              register={register}
              errors={errors}
            />
          )}
          <Input
            id={"email"}
            type="email"
            label="Email address"
            register={register}
            errors={errors}
          />
          <Input
            id={"password"}
            type="password"
            label="Password"
            register={register}
            errors={errors}
          />
          <div>
            <Button type="submit" disabled={isLoading} fullWidth={false}>
              {variant === "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div
              className="
             absoloute
             inset-0
             flex
             items-center
            "
            >
              <div
                className="
              w-full
              border-t
            border-gray-300"
              />
            </div>
            <div className="relative flex justify-center text-sm items-center">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className='mt-6 flex gap-2'>
            <AuthSocialButton />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AuthForm
'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';
import { AuthApi } from '@/app/api/auth/auth.api';
import { LoginPayload } from '@/app/api/auth/auth.types';
import { useToast } from '../useToast';
import HandleError from '@/app/lib/ErrorEradication';

export const useLogin = () => {
  const router = useRouter();
  const toast = useToast()
  return useMutation({
    mutationFn: (payload: LoginPayload) => AuthApi.login(payload),
    onSuccess: (data : any) => {
      setCookie('token', data?.data?.data?.accessToken ); 
      const redirectPath = "/dashboard";
      router.push(redirectPath);
    },onError:(err)=>{
      toast.error("Oh ops!" ,HandleError(err))
    }
  });
};
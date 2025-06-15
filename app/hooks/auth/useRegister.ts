'use client';

import { AuthApi } from '@/app/api/auth/auth.api';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { RegisterPayload } from '@/app/api/auth/auth.types';
import HandleError from '@/app/lib/ErrorEradication';
import { useToast } from '../useToast';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';

export const useRegister = () => {
  const router = useRouter()
  const toast = useToast();

  return useMutation({
    mutationFn: (payload: RegisterPayload) => AuthApi.register(payload),
    onSuccess: (data: any) => {
      const existingToken = getCookie('token');

      if (existingToken) {
        deleteCookie('token');
      }

      setCookie('token', data?.data?.data?.accessToken);

      const redirectPath = "/dashboard";
      router.push(redirectPath);
    },
    onError: (error) => {
      toast.error('Oh ops!', HandleError(error));
    },
  });
};

export const useConfirmEmail = () => {
  const router = useRouter()
  const toast = useToast();
  return useMutation({
    mutationFn: (payload: RegisterPayload) => AuthApi.confirmEmail(payload),
    onSuccess: (data: any) => {
      const existingToken = getCookie('token');

      if (existingToken) {
        deleteCookie('token');
      }

      setCookie('token', data?.data?.data?.token);

      const redirectPath = "/sign-in/otp";
      router.push(redirectPath);
    },
    onError: (error) => {
      toast.error('Oh ops!', HandleError(error));
    },
  });
}
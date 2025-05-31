'use client';

import { AuthApi } from '@/app/api/auth/auth.api';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { RegisterPayload } from '@/app/api/auth/auth.types';

export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: RegisterPayload) => AuthApi.register(payload),
    onSuccess: (data) => {
    console.log(data)
      router.push('/dashboard');
    },
  });
};
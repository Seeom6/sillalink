// lib/api/auth/auth.api.ts
import apiClient from './../apiClient';
import {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  ForgotPasswordPayload,
  ResetPasswordPayload,
  VerifyTokenResponse,
} from './auth.types';

export const AuthApi = {
  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    return apiClient.post('/website/auth/log-in', payload);
  },

  register: async (payload: RegisterPayload): Promise<LoginResponse> => {
    return apiClient.post('/auth/register', payload);
  },

  forgotPassword: async (payload: ForgotPasswordPayload) => {
    return apiClient.post('/auth/forgot-password', payload);
  },

  resetPassword: async (payload: ResetPasswordPayload) => {
    return apiClient.post('/auth/reset-password', payload);
  },

  verifyResetToken: async (token: string): Promise<VerifyTokenResponse> => {
    return apiClient.get(`/auth/verify-reset-token/${token}`);
  },

  getCurrentUser: async (): Promise<LoginResponse['user']> => {
    return apiClient.get('/auth/me');
  },
};
export interface LoginPayload {
  email: string;
  password: string;
}

export interface EmailConfirmResponse {
  token : string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: 'user' | 'admin';
  };
}

export interface RegisterPayload {
  firstName : string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Otp {
  otp : string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ResetPasswordPayload {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface VerifyTokenResponse {
  valid: boolean;
  email?: string;
}
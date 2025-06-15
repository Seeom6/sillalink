"use client";
import { useState } from "react";
import { AuthFormInput } from './../components/AuthFormInput';
import { AuthTabs } from './../components/AuthTabs';
import { AuthFormContainer } from './../components/AuthFormContainer';
import { useRegister } from "../../../hooks/auth/useRegister";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../../lib/validation/auth.validation";
import { RegisterPayload } from "@/app/api/auth/auth.types";
import Link from "next/link";
import { useRouteLoading } from "@/app/hooks/useRouteLoading";

const SignupPage = () => {
  const { mutate, isPending } = useRegister();
  const isRouting = useRouteLoading()

  const [activeTab, setActiveTab] = useState<"login" | "signup">("signup");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterPayload>({
    resolver: zodResolver(registerSchema),
  });


  const onSubmit: SubmitHandler<RegisterPayload> = (data) => {
    mutate(data)
  }


  return (
    <>

      {isRouting && (
        <div className="fixed top-0 left-0 w-full h-1 bg-primary animate-pulse z-50"></div>
      )}
      <AuthFormContainer
        title="Welcome to Sillalink..!"
        subtitle="Create your account to get started"
      >
        <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="w-full flex gap-3">

            <AuthFormInput
              id="firstName"
              label="firstName"
              type="text"
              {...register('firstName')}
              error={errors.firstName?.message}
            />
            <AuthFormInput
              id="lastName"
              label="lastName"
              type="text"
              {...register('lastName')}
              error={errors.lastName?.message}
            />
          </div>

          <AuthFormInput
            id="email"
            label="Email Address"
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />

          <AuthFormInput
            id="password"
            label="Password"
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />

          <AuthFormInput
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />

          <div className="w-full flex justify-center md:justify-end my-10">
            <button
              type="submit"
              disabled={isPending}
              className="bg-primary text-small md:text-regular w-44 md:w-64 rounded-[33px] py-2 md:py-4 px-5 md:px-10 text-white hover:bg-white focus:ring-purple-500 hover:text-primary disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isPending ? 'Creating account...' : 'Sign Up'}
            </button>
          </div>

          <div className="text-center text-sm">
            Already have an account?{' '}
            <Link
              href="/auth/login"
              className="text-primary hover:underline"
              onClick={() => setActiveTab('login')}
            >
              Login here
            </Link>
          </div>
        </form>
      </AuthFormContainer>
    </>

  );
};

export default SignupPage;
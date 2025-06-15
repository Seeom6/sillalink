"use client";
import { AuthFormInput } from '../../components/AuthFormInput';
import { AuthFormContainer } from '../../components/AuthFormContainer';
import { useRegister } from "../../../../hooks/auth/useRegister";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ConfirmOtp } from "@/app/lib/validation/auth.validation";
import { Otp } from "@/app/api/auth/auth.types";
import Link from "next/link";
import { useRouteLoading } from "@/app/hooks/useRouteLoading";
import { useConfirmOtp } from '@/app/hooks/auth/useConfirmOtp';

const page = () => {
  const { mutate, isPending } = useConfirmOtp();
  const isRouting = useRouteLoading()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Otp>({
    resolver: zodResolver(ConfirmOtp),
  });


  const onSubmit: SubmitHandler<Otp> = (data : any) => {
    mutate(data)
  }

  return (
    <>

      {isRouting && (
        <div className="fixed top-0 left-0 w-full h-1 bg-primary animate-pulse z-50"></div>
      )}
      <AuthFormContainer
        title="We send OTP to your email"
        subtitle="please enter OTP here"
      >

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">


          <AuthFormInput
            id="otp"
            label="OTP"
            type="otp"
            {...register('otp')}
            error={errors.otp?.message}
          />

          <div className="w-full flex justify-center md:justify-end my-10">
            <button
              type="submit"
              disabled={isPending}
              className="bg-primary text-small md:text-regular w-44 md:w-64 rounded-[33px] py-2 md:py-4 px-5 md:px-10 text-white hover:bg-white focus:ring-purple-500 hover:text-primary disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isPending ? 'Creating account...' : 'confirm'}
            </button>
          </div>

          <div className="text-center text-sm">
            Already have an account?{' '}
            <Link
              href="/auth/login"
              className="text-primary hover:underline"
            >
              Login here
            </Link>
          </div>
        </form>
      </AuthFormContainer>
    </>

  );
};

export default page;
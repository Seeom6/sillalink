"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSendEmail } from "@/app/hooks/auth/useSendEmail";
import { forgetPasswordSchema } from "@/app/lib/validation/auth.validation";
import { ForgotPasswordPayload } from "@/app/api/auth/auth.types";
import { AuthFormContainer } from "../../components/AuthFormContainer";
import { AuthFormInput } from "../../components/AuthFormInput";

const EmailPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordPayload>({
    resolver: zodResolver(forgetPasswordSchema)
  });

  const { mutate, isPending } = useSendEmail();

  const SubmitForm: SubmitHandler<ForgotPasswordPayload> = (data)=>{
    mutate(data)
  }

  return (
    <AuthFormContainer
      title="Check your email"
      subtitle="Enter your email to get a verification code"
    >
      <form onSubmit={handleSubmit(SubmitForm)} className="space-y-4">
        <AuthFormInput
          id="email"
          label="Email Address"
          type="email"
          {...register("email")}
          error={errors.email?.message}
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-primary text-white py-3 px-6 rounded-xl w-full"
        >
          {isPending ? "Sending OTP..." : "Send Code"}
        </button>
      </form>
    </AuthFormContainer>
  );
};

export default EmailPage;

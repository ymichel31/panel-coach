import SignUpForm from "@/components/auth/SignUpForm";
import { signUpAction } from "@/actions/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regístrate",
  description: "Crear cuenta en Tribu Performance",
};

export default function SignUp() {
  return <SignUpForm onSubmit={signUpAction} />;
}

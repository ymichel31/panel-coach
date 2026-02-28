import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar sesión | Panel Coach",
  description: "Iniciar sesión en Panel Coach",
};

export default function SignIn() {
  return <SignInForm />;
}

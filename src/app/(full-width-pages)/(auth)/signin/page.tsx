import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Iniciar sesión en Tribu Performance",
};

export default function SignIn() {
  return <SignInForm />;
}

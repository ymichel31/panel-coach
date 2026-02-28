import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regístrate | Panel Coach",
  description: "Crear cuenta en Panel Coach",
};

export default function SignUp() {
  return <SignUpForm />;
}

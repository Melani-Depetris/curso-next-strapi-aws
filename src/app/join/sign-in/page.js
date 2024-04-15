import Link from "next/link";
import LoginForm from "@/components/auth/login-form/login-form";

const SignInPage = () => {
  return (
    <div className="w-1/2">
      <h3 className="mb-[20px]">Iniciar sesión</h3>

      {/* LOGINFORM */}
      <LoginForm />

      <div className="mt-[10px]">
        <Link href="/join/sign-up" className="flex justify-center py-2">
          ¿No tienes una cuenta?
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;

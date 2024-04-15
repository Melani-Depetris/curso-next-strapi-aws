import Link from "next/link";
import RegisterForm from "../../../components/auth/register-form/register-form.js";
const SignUpPage = () => {
  return (
    <div className="">
      <h3 className="text-2xl py-4">Crear cuenta</h3>
      {/* FORM */}
      <RegisterForm />
      <div>
        <Link href="/join/sign-in" className="flex justify-center py-2">Atrás</Link>
      </div>
    </div>
  );
};

export default SignUpPage;

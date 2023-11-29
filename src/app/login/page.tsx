import LoginForm from "../UI/login-form";
import AcsterLogo from "../UI/AcsterLogo";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="mx-auto  flex max-w-sm flex-col items-center justify-center gap-4 py-8">
      <div className="flex h-20 w-full shrink-0 items-end rounded-lg bg-emerald-300 p-3 px-6 pb-4 pt-8 md:h-28">
        <AcsterLogo />
      </div>
      <LoginForm />
    </main>
  );
}

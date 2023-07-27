import { useAppStore } from "@/lib/store";
import Button from "@/components/core/button";
import Footer from "@/modules/register/register-footer";
import InfoRegister from "@/modules/register/info";
import Header from "@/modules/register/register-Header";
import { useRouter } from "next/router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import PasswordInput from "@/components/form/password-input";
import UsernameInput from "@/components/form/username-input";
import Seo from "@/components/core/seo";

type Inputs = {
  username: string;
  password: string;
};

export default function RegisterModule() {
  const { registerUser } = useAppStore();
  const router = useRouter();
  const methods = useForm<Inputs>({
    mode: "onTouched",
  });
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await registerUser(data.username, data.password);
    router.push("/");
    console.log({ data });
    return;
  };
  return (
    <main className="screen">
      <Seo
        title="Registrasi Akun Layanan LNSW"
        description="Registrasi Akun terlebih dahulu untuk menggunakan layanan LNSW!"
      />
      <section className="bg-white p-5 rounded-xl shadow-xl w-[400px] absolute top-0">
        <Header />
        <form onSubmit={handleSubmit(onSubmit)} className="mt-2 mb-4">
          <FormProvider {...methods}>
            <UsernameInput
              id="username"
              label="Username"
              placeholder="Enter your username"
            />
            <PasswordInput
              id="password"
              label="Password"
              placeholder="Enter your password"
            />
            <InfoRegister />
            <div className="flex justify-end mt-2">
              <Button type="submit" variant="default" size="default">
                Register
              </Button>
            </div>
          </FormProvider>
        </form>
        <Footer />
      </section>
    </main>
  );
}

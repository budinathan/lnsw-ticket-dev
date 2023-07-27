import { useAppStore } from "@/lib/store";
import { useRouter } from "next/router";
import Button from "@/components/core/button";
import Header from "@/modules/login/login-header";
import Footer from "@/modules/register/register-footer";
import InfoLogin from "@/modules/login/info";
import PasswordInput from "@/components/form/password-input";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import UsernameInput from "@/components/form/username-input";
import Seo from "@/components/core/seo";

type Inputs = {
  username: string;
  password: string;
};

export default function LoginModule() {
  const { loginUser } = useAppStore();
  const router = useRouter();

  const methods = useForm<Inputs>({
    mode: "onTouched",
  });
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await loginUser(data.username, data.password);
    router.push("/home");
    console.log({ data });
    return;
  };
  return (
    <main className="screen">
      <Seo
        title="Login Layanan LNSW"
        description="Login terlebih dahulu untuk menggunakan layanan LNSW!"
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
            <InfoLogin />
            <div className="flex justify-end mt-2">
              <Button variant="default" size="default" type="submit">
                Masuk
              </Button>
            </div>
          </FormProvider>
        </form>
        <Footer />
      </section>
    </main>
  );
}

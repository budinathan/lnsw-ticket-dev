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
import { redirectUser } from "@/hooks/redirect-user";
import { GetServerSidePropsContext } from "next";

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
    return;
  };
  return (
    <main className="screen">
      <Seo
        templateTitle="Login"
        description="Login terlebih dahulu untuk menggunakan layanan LNSW!"
      />
      <section className="bg-white p-5 rounded-xl shadow-xl w-[400px]  max-sm:relative max-sm:w-full">
        <Header />
        <form onSubmit={handleSubmit(onSubmit)} className="mt-2 mb-4">
          <FormProvider {...methods}>
            <UsernameInput
              id="username"
              label="Username"
              placeholder="Enter your username"
              required
            />
            <PasswordInput
              id="password"
              label="Password"
              placeholder="Enter your password"
              required
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

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await redirectUser(ctx);
}

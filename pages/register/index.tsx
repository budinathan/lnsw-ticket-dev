import { useAppStore } from "@/lib/store";
import Button from "@/components/core/button";
import Footer from "@/modules/register/register-footer";
import InfoRegister from "@/modules/register/info";
import Header from "@/modules/register/register-Header";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import PasswordInput from "@/components/form/password-input";
import UsernameInput from "@/components/form/username-input";
import Seo from "@/components/core/seo";
import { GetServerSidePropsContext } from "next";
import { redirectUser } from "@/hooks/redirect-user";
import ModalErrorRegister from "@/components/modals/modal-error-register";

type Inputs = {
  username: string;
  password: string;
};

export default function RegisterModule() {
  const { registerUser, errorMessageRegister } = useAppStore();
  const methods = useForm<Inputs>({
    mode: "onTouched",
  });
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await registerUser(data.username, data.password);
    return;
  };
  return (
    <main className="screen py-6 max-md:py-3 px-16 max-md:px-6">
      <Seo
        templateTitle="Registrasi Akun"
        description="Registrasi Akun terlebih dahulu untuk menggunakan layanan LNSW!"
      />
      <section className="bg-white p-5 rounded-xl shadow-xl w-[400px] max-sm:relative max-sm:w-full">
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
            <InfoRegister />
            <div className="flex justify-end mt-2">
              <Button type="submit" variant="default" size="default">
                Register
              </Button>
            </div>
          </FormProvider>
        </form>
        <Footer />
        {errorMessageRegister && (
          <ModalErrorRegister errorMessageRegister={errorMessageRegister} />
        )}
      </section>
    </main>
  );
}
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await redirectUser(ctx);
}

import Seo from "@/components/core/seo";
import Head from "@/components/others/header";
import useForm from "@/hooks/get-form-client";
import { getUser } from "@/hooks/get-user-server";
import HeaderRiwayat from "@/modules/riwayat/header-riwayat";
import Table from "@/modules/riwayat/table";
import { GetServerSidePropsContext } from "next";

export default function Riwayat() {
  const { search, setSearch, formsFilter } = useForm();
  return (
    <>
      <Head />
      <main className="h-screen translate-y-[35px] py-6 max-md:py-3 px-16 max-md:px-6">
        <Seo
          templateTitle="Riwayat"
          description="Riwayat layanan LNSW akun anda."
        />
        <section className="bg-white p-10 rounded-lg w-full max-sm:overflow-auto max-sm:p-7">
          <HeaderRiwayat search={search} setSearch={setSearch} />
          <Table formsFilter={formsFilter} />
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getUser(ctx);
}

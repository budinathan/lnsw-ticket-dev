import * as React from "react";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import { getUser } from "@/hooks/get-user-server";
import { User } from "@/lib/slices/user-slices";
import NavHome from "@/modules/home/nav";
import { GetServerSidePropsContext } from "next";

import Head from "@/components/others/header";

export default function Home({ user }: { user: User }) {
  return (
    <>
      <Head />
      <main className="h-screen py-6 max-md:py-3 px-16 max-md:px-6">
        <Seo
          templateTitle="Home"
          description="Riwayat pengajuan, Pengajuan, dan Chatroom."
        />
        <section className="flex justify-between">
          <Typography variant="large">Welcome, {user?.username}</Typography>
        </section>
        <section className="grid grid-cols-3 gap-5 mt-5 max-md:grid-cols-2 max-sm:grid-cols-1">
          <NavHome />
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getUser(ctx);
}

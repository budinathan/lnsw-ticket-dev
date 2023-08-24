import * as React from "react";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import { getUser } from "@/hooks/get-user-server";
import { User } from "@/lib/slices/user-slices";
import NavHome from "@/modules/home/nav";
import { GetServerSidePropsContext } from "next";

import { useRouter } from "next/router";
import Button from "@/components/core/button";
import { useAppStore } from "@/lib/store";

export default function Home({ user }: { user: User }) {
  const router = useRouter();
  const { logout } = useAppStore();
  async function logoutUser() {
    await logout();
    router.push("/");
  }
  return (
    <main className="h-screen">
      <Seo
        templateTitle="Home"
        description="Riwayat pengajuan, Pengajuan, dan Chatroom."
      />
      <section className="flex justify-between">
        <Typography variant="large">Welcome, {user?.username}</Typography>
        <div className="-translate-y-[58px]">
          <Button variant="default" size="default" onClick={logoutUser}>
            Logout
          </Button>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-5 mt-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        <NavHome />
      </section>
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getUser(ctx);
}

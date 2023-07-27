import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import { getUser } from "@/hooks/get-user-server";
import { User } from "@/lib/slices/user-slices";
import NavHome from "@/modules/home/nav";
import { GetServerSidePropsContext } from "next";

export default function Home({ user }: { user: User }) {
  return (
    <main className="h-screen">
      <Seo
        title="Home Layanan LNSW"
        description="Riwayat pengajuan, Pengajuan, dan Chatroom."
      />
      <section>
        <Typography variant="large">Welcome {user?.username}</Typography>
      </section>
      <section className="grid grid-cols-3 gap-5 mt-5 ">
        <NavHome />
      </section>
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getUser(ctx);
}

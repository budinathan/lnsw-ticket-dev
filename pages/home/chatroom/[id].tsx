import Layout from "@/components/core/layout";
import Seo from "@/components/core/seo";
import Head from "@/components/others/header";
import useForm from "@/hooks/get-form-client";
import { getUser } from "@/hooks/get-user-server";
import ChatRoom from "@/modules/chat/chat-room";
import ContactList from "@/modules/chat/contact-list";
import { GetServerSidePropsContext } from "next";

export default function ChatroomId() {
  const { search, setSearch, formsFilter } = useForm();
  return (
    <>
      <Head />
      <Layout className="h-[80vh] flex bg-[#fbfbfb] rounded-lg">
        <Seo
          templateTitle="Chat"
          description="Cek progress layanan yang anda ajukan."
        />
        <section className=" border-opacity-25  w-1/3  mx-2 p-2 overflow-auto max-sm:hidden">
          <ContactList
            search={search}
            setSearch={setSearch}
            formsFilter={formsFilter}
          />
        </section>
        <div className="h-full w-[4px] bg-greybg max-sm:hidden"></div>
        <section className="w-2/3 mx-2 relative overflow-auto max-sm:w-full p-2">
          <ChatRoom />
        </section>
      </Layout>
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getUser(ctx);
}

import Seo from "@/components/core/seo";
import useForm from "@/hooks/get-form-client";
import { getUser } from "@/hooks/get-user-server";
import ChatRoom from "@/modules/chat/chat-room";
import ContactList from "@/modules/chat/contact-list";
import { GetServerSidePropsContext } from "next";

export default function ChatroomId() {
  const { search, setSearch, formsFilter } = useForm();
  return (
    <main className="h-[75vh] flex bg-white rounded-lg">
      <Seo
        title="Chat Layanan LNSW"
        description="Cek progress layanan yang anda ajukan."
      />
      <section className=" border-opacity-25  w-1/3  mx-2 p-2 overflow-auto">
        <ContactList
          search={search}
          setSearch={setSearch}
          formsFilter={formsFilter}
        />
      </section>
      <div className="h-full w-[4px] bg-greybg"></div>
      <section className="w-2/3 mx-2 relative overflow-auto  p-2">
        <ChatRoom />
      </section>
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getUser(ctx);
}

import useForm from "@/hooks/get-form-client";
import { getUser } from "@/hooks/get-user-server";
import ChatKosong from "@/modules/chat/chat-kosong";
import ContactList from "@/modules/chat/contact-list";
import { GetServerSidePropsContext } from "next";

export default function Chatroom() {
  const { search, setSearch, formsFilter } = useForm();
  return (
    <main className="h-[75vh] flex bg-white rounded-lg">
      <section className=" border-opacity-25  w-1/3  mx-2 p-2 overflow-auto">
        <ContactList
          search={search}
          setSearch={setSearch}
          formsFilter={formsFilter}
        />
      </section>
      <div className="h-full w-[4px] bg-greybg"></div>
      <section className="w-2/3 mx-2 relative flex flex-col items-center justify-center">
        <ChatKosong />
      </section>
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getUser(ctx);
}

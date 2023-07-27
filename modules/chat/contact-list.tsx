import Button from "@/components/core/button";
import Typography from "@/components/core/typography";
import { AiOutlineSearch } from "@/constant/icons";
import { Form } from "@/lib/slices/form-slices";
import { useRouter } from "next/router";

type contactprops = {
  search: string;
  setSearch: (search: string) => void;
  formsFilter: Form["rows"]; // Update the type here to access the nested properties
};
export default function ContactList({
  search,
  setSearch,
  formsFilter,
}: contactprops) {
  const router = useRouter();
  console.log(formsFilter);
  return (
    <main className="flex items-center relative flex-col">
      <section className="flex items-center w-full sticky top-0 mb-4">
        <input
          placeholder="Search"
          className="bg-greybg p-2 w-full rounded-md text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <AiOutlineSearch className="absolute right-2 opacity-50 focus:outline-none" />
      </section>
      <section className="w-full">
        {formsFilter?.map((item, index) => {
          return (
            <div
              key={index}
              className={`mb-2 px-4 py-2 rounded-md w-full ${
                router.asPath === `chatroom/${item?.tiketid}`
                  ? "bg-[#CBCDD1]"
                  : ""
              }`}
            >
              <Button
                className=" flex flex-col items-start"
                onClick={() => {
                  router.push(`/home/chatroom/${item?.tiketid}`);
                  window.location.reload();
                }}
              >
                <Typography variant="mediumbold">{item?.jenis}</Typography>
                <Typography
                  variant="small"
                  className="white-space:nowrap overflow-hidden text-start"
                >
                  {`${item?.keterangan.substring(0, 57)}.....`}
                </Typography>
              </Button>
            </div>
          );
        })}
      </section>
    </main>
  );
}

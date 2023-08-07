import Typography from "@/components/core/typography";
import { HiChatAlt2 } from "@/constant/icons";
import useForm from "@/hooks/get-form-client";
import Link from "next/link";

export default function ChatKosong() {
  const { formsFilter } = useForm();
  console.log(formsFilter);
  return (
    <main className="flex justify-center items-center flex-col">
      <HiChatAlt2 className="text-[10rem] text-greybg" />
      {formsFilter.length > 0 ? (
        <Typography variant="small">Ketuk untuk memulai percakapan.</Typography>
      ) : (
        <Typography variant="small">
          Anda belum mengajukan laporan.{" "}
          <Link href="/home/laporan" className="text-blue-500">
            Ajukan Laporan
          </Link>
        </Typography>
      )}
    </main>
  );
}

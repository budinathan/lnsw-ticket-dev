import Typography from "@/components/core/typography";
import useChat from "@/hooks/get-chat-client";
import { GoPaperAirplane } from "@/constant/icons";
import { useRouter } from "next/router";

export default function ChatRoom() {
  const router = useRouter();
  const id = router.query.id as any;
  const chatforms = useChat({ id });

  return (
    <main className="relative h-[75vh]">
      <section className="bg-[#EAEBEC] p-2 rounded-md flex justify-between shadow-md sticky top-0">
        <div>
          <Typography variant="largebold">{chatforms?.rows?.jenis}</Typography>
          <Typography variant="small">
            Tanggal Laporan : {chatforms?.rows?.tanggalpengajuan}
          </Typography>
        </div>
        <div className="flex items-center flex-col justify-center">
          <Typography variant="largebold">
            {chatforms?.rows?.tiketid}
          </Typography>
          <div>
            <Typography
              variant="small"
              className={` bg-opacity-30 border-[2px] rounded-[3px] w-20 flex justify-center  ${
                chatforms?.rows?.status === "Diterima"
                  ? "bg-[#7DD3FC] text-gray-500 border-[#7DD3FC]"
                  : chatforms?.rows?.status === "Diproses"
                  ? "bg-[#7DD3FC] text-gray-500 border-[#7DD3FC]"
                  : chatforms?.rows?.status === "Selesai"
                  ? "bg-[#297A46] border-green-600 text-green-700"
                  : "text-green-500 bg-[#FAC000] border-[#FAC000]"
              } w-20 px-3 py-[1px] `}
            >
              {chatforms?.rows?.status}
            </Typography>
          </div>
        </div>
      </section>
      <section className="absolute bottom-0 w-full">
        <div className="flex relative items-center shadow-md">
          <input
            placeholder="Tuliskan pesan anda"
            className={`bg-[#EAEBEC]  rounded-md px-2 py-3 w-full text-sm ${
              chatforms?.rows?.status === "Selesai" ? "cursor-not-allowed" : ""
            }`}
            disabled={chatforms?.rows?.status === "Selesai"}
          />
          <GoPaperAirplane className="absolute right-2 opacity-50 focus:outline-none" />
        </div>
      </section>
    </main>
  );
}

import Typography from "@/components/core/typography";
import { HiChatAlt2 } from "@/constant/icons";

export default function ChatKosong() {
  return (
    <main className="flex justify-center items-center flex-col">
      <HiChatAlt2 className="text-[10rem] text-greybg" />
      <Typography variant="small">Ketuk untuk memulai percakapan.</Typography>
    </main>
  );
}

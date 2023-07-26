import Typography from "@/components/core/typography";
import { BsMoon, LiaLanguageSolid } from "@/constant/icons";
export default function Header() {
  return (
    <main>
      <div className="flex justify-between mb-2">
        <img src="/logoLNSW.png" alt="logo insw" className="h-[45px]" />
        <div className="flex gap-2">
          <BsMoon />
          <LiaLanguageSolid />
        </div>
      </div>
      <div>
        <Typography variant="largebold">Masuk</Typography>
        <Typography variant="under">Anda akan diarahkan ke</Typography>
        <Typography variant="smallbold">Beranda Menu Aplikasi</Typography>
      </div>
    </main>
  );
}

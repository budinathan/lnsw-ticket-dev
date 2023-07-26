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
        <Typography variant="largebold">Registrasi Akun</Typography>
        <Typography variant="under">
          Anda akan mendaftar ke sistem INSW
        </Typography>
      </div>
    </main>
  );
}

import Typography from "@/components/core/typography";
import Link from "next/link";
export default function InfoLogin() {
  return (
    <div>
      <Typography variant="small">Lupa password</Typography>
      <div className="text-[12px]">
        <Link href="/register">Buat Akun</Link> | Tracking Registrasi
      </div>
      <Typography variant="small">Panduan | FAQ</Typography>
      <Typography variant="small">Opsi Lain</Typography>
    </div>
  );
}

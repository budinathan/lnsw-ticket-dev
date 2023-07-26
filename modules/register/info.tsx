import Typography from "@/components/core/typography";
import Link from "next/link";
export default function InfoRegister() {
  return (
    <div>
      <Typography variant="small">Panudan | FAQ</Typography>
      <Typography variant="small">Opsi Lain</Typography>
      <Link href="/" className="text-[12px]">
        Sudah punya akun?
      </Link>
    </div>
  );
}

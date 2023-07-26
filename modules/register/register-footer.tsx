import Typography from "@/components/core/typography";
import LineComponent from "@/components/others/line";
export default function Footer() {
  return (
    <>
      <LineComponent />
      <div className="flex items-center mt-2 gap-6">
        <img src="/logokunci.png" alt="logo kunci" className="h-[45px]" />
        <Typography className="text-end" variant="small">
          Sertifikat Tanda Tangan Digital Diterbitkan oleh BSrE, BSSN
        </Typography>
      </div>
    </>
  );
}

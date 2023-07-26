import Typography from "@/components/core/typography";
import { AiFillMinusCircle, BiSolidCheckCircle } from "@/constant/icons";

export default function CircleSelesai() {
  return (
    <main className="text-start">
      <section className="flex gap-3 items-center mb-2">
        <div className="text-[3rem] text-[#FAC000]">
          <BiSolidCheckCircle />
        </div>
        <div>
          <Typography variant="smallbold">Draft</Typography>
          <Typography variant="small">26 Juli 2023</Typography>
        </div>
      </section>
      <section className="flex gap-3 items-center mb-2">
        <div className="text-[3rem] text-[#7DD3FC]">
          <BiSolidCheckCircle />
        </div>
        <div>
          <Typography variant="smallbold">Permohonan Diterima</Typography>
          <Typography variant="small">28 Juli 2023</Typography>
        </div>
      </section>
      <section className="flex gap-3 items-center mb-2">
        <div className="text-[3rem] text-[#7DD3FC]">
          <BiSolidCheckCircle />
        </div>
        <div>
          <Typography variant="smallbold">Permohonan Diproses</Typography>
          <Typography variant="small">30 Juli 2023</Typography>
        </div>
      </section>
      <section className="flex gap-3 items-center">
        <div className="text-[3rem] text-[#4ADE80]">
          <BiSolidCheckCircle />
        </div>
        <div>
          <Typography variant="smallbold">Permohonan Selesai</Typography>
          <Typography variant="small">1 Agustus 2023</Typography>
        </div>
      </section>
    </main>
  );
}

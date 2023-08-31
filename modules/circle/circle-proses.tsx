import Typography from "@/components/core/typography";
import { AiFillMinusCircle, BiSolidCheckCircle } from "@/constant/icons";

export default function CircleProses() {
  return (
    <main className="text-start">
      <section className="flex gap-3 items-center mb-2">
        <div className="text-[3rem] text-[#FAC000]">
          <BiSolidCheckCircle />
        </div>
        <div>
          <Typography variant="smallbold">Draft</Typography>
          <Typography variant="small">1 September 2023</Typography>
        </div>
      </section>
      <section className="flex gap-3 items-center mb-2">
        <div className="text-[3rem] text-[#7DD3FC]">
          <BiSolidCheckCircle />
        </div>
        <div>
          <Typography variant="smallbold">Permohonan Diterima</Typography>
          <Typography variant="small">2 September 2023</Typography>
        </div>
      </section>
      <section className="flex gap-3 items-center mb-2">
        <div className="text-[3rem] text-[#7DD3FC]">
          <BiSolidCheckCircle />
        </div>
        <div>
          <Typography variant="smallbold">Permohonan Diproses</Typography>
          <Typography variant="small">3 September 2023</Typography>
        </div>
      </section>
      <section className="flex gap-3 items-center">
        <div className="text-[3rem] text-[#6F747C]">
          <AiFillMinusCircle />
        </div>
        <div>
          <Typography variant="smallbold">Permohonan Selesai</Typography>
          <Typography variant="small">-</Typography>
        </div>
      </section>
    </main>
  );
}

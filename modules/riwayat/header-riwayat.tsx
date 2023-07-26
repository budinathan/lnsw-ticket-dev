import Button from "@/components/core/button";
import Typography from "@/components/core/typography";
import { AiOutlineSearch } from "@/constant/icons";
import { useRouter } from "next/router";
type HeaderRiwayatProps = {
  search: string;
  setSearch: (search: string) => void;
};
export default function HeaderRiwayat({
  search,
  setSearch,
}: HeaderRiwayatProps) {
  const router = useRouter();
  function handleRiwayat() {
    router.push("/home/laporan");
  }
  return (
    <main className="flex justify-between items-center">
      <section>
        <Typography variant="largebold">Riwayat Laporan</Typography>
      </section>
      <section className="flex items-center">
        <div className="flex items-center">
          <input
            placeholder="Search"
            className="bg-greybg p-1 rounded-md text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <AiOutlineSearch className="text-xl -translate-x-6 text-gray-500 opacity-50" />
        </div>
        <div>
          <Button variant="lightblue" size="small" onClick={handleRiwayat}>
            +
          </Button>
        </div>
      </section>
    </main>
  );
}

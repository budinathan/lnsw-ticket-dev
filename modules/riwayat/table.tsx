import { Form } from "@/lib/slices/form-slices";
import ButtonsRiwayat from "./buttons-riwayat";
import handlePagination from "@/hooks/pagination";
import Pagination from "./pagination";
import Typography from "@/components/core/typography";

export default function Table({ formsFilter }: { formsFilter: Form["rows"] }) {
  const {
    indexOfFirstItem,
    setCurrentPage,
    indexOfLastItem,
    itemsPerPage,
    currentPage,
  } = handlePagination();
  const currentItems = formsFilter?.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <table className="table-auto w-full  mt-3 rounded border-separate border-spacing-y-3">
        <thead>
          <tr className="bg-[#B1BCCD]">
            <th className="p-2 rounded-l-lg">
              <Typography variant="smallbold">No</Typography>
            </th>
            <th>
              <Typography variant="smallbold">Judul Laporan</Typography>
            </th>
            <th>
              <Typography variant="smallbold">No.Antrian</Typography>
            </th>
            <th>
              <Typography variant="smallbold">Status Terkini</Typography>
            </th>
            <th>
              <Typography variant="smallbold">Tanggal Laporan</Typography>
            </th>
            <th className="rounded-r-lg">Aksi</th>
          </tr>
        </thead>
        <tbody className=" text-center">
          {currentItems?.map((item: any, index: any) => {
            return (
              <tr className="bg-[#D1D5DA]" key={index}>
                <td className="p-2 rounded-l-lg ">
                  <Typography variant="small">
                    {indexOfFirstItem + index + 1}
                  </Typography>
                </td>
                <td>
                  <Typography variant="small">{item?.jenis} </Typography>
                </td>
                <td>
                  <Typography variant="small">{item?.tiketid} </Typography>
                </td>
                <td className="flex justify-center items-center">
                  <Typography
                    variant="small"
                    className={` bg-opacity-30 border-[2px] rounded-[3px] w-20  ${
                      item?.status === "Diterima"
                        ? "bg-[#7DD3FC] text-gray-500 border-[#7DD3FC]"
                        : item?.status === "Diproses"
                        ? "bg-[#7DD3FC] text-gray-500 border-[#7DD3FC]"
                        : item?.status === "Selesai"
                        ? "bg-[#297A46] border-green-600 text-green-700"
                        : "text-green-500 bg-[#FAC000] border-[#FAC000]"
                    } w-20 px-3 py-[1px] translate-y-[4px] `}
                  >
                    {item?.status}
                  </Typography>
                </td>
                <td>
                  <Typography variant="small">
                    {item?.tanggalpengajuan}
                  </Typography>
                </td>
                <td className="rounded-r-lg">
                  <ButtonsRiwayat
                    status={item?.status}
                    id={item?.tiketid}
                    judul={item?.jenis}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {formsFilter?.length > itemsPerPage && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={formsFilter.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      )}
    </>
  );
}

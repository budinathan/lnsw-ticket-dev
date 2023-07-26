import { Form } from "@/lib/slices/form-slices";
import { useAppStore } from "@/lib/store";
import { useEffect, useState } from "react";

export default function useForm() {
  const { getForm, forms } = useAppStore();
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    getForm();
  }, []);
  const formsFilter: Form["rows"] = forms?.rows?.filter(
    (item) =>
      item?.jenis.toLowerCase().includes(search.toLowerCase()) ||
      item?.tanggalpengajuan.toLowerCase().includes(search.toLowerCase()) ||
      item?.status.toLowerCase().includes(search.toLowerCase())
  );
  return { formsFilter, search, setSearch };
}

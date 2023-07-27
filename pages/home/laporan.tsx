import Button from "@/components/core/button";
import LaporanInput from "@/components/form/laporan-input";
import TextArea from "@/components/form/text-area";
import ModalBalik from "@/components/modals/modal-balik-laporan";
import ModalBerhasil from "@/components/modals/modal-berhasil-laporan";
import { getUser } from "@/hooks/get-user-server";
import { useAppStore } from "@/lib/store";
import { GetServerSidePropsContext } from "next";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import ModalSalah from "@/components/modals/modal-tidaklengkap-laporan";
import DropzoneInput from "@/components/form/dropzone-input";
import Typography from "@/components/core/typography";
import Seo from "@/components/core/seo";

type Inputs = {
  name: string;
  email: string;
  judulLaporan: string;
  deskripsiLaporan: string;
  url: string;
};

export default function Laporan() {
  const [open, setOpen] = useState<boolean>(false);
  const [opens, setOpens] = useState<boolean>(false);
  const { postForm } = useAppStore();
  const methods = useForm<Inputs>({
    mode: "onTouched",
  });
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (
      !data.email ||
      !data.name ||
      !data.judulLaporan ||
      !data.deskripsiLaporan
    ) {
      setOpen(true);
      return;
    } else {
      await postForm(
        data.name,
        data.email,
        data.judulLaporan,
        data.deskripsiLaporan,
        data.url
      );
      setOpens(true);
    }
  };
  return (
    <main>
      <Seo
        title="Laporan Layanan LNSW"
        description="Isi form untuk mengajukan layanan kepada LNSW."
      />
      <Typography variant="largebold">Formulir Laporan</Typography>
      <section className="bg-white rounded-md shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <FormProvider {...methods}>
            <LaporanInput
              id="name"
              label="Nama"
              placeholder="Masukkan nama anda"
            />
            <LaporanInput
              id="email"
              label="Email"
              placeholder="Masukkan email anda"
              type="email"
            />
            <LaporanInput
              id="judulLaporan"
              label="Judul Laporan"
              placeholder="Tuliskan inti dari laporan anda"
            />
            <TextArea
              id="deskripsiLaporan"
              label="Deskripsi Laporan"
              placeholder="Tuliskan laporan anda"
            />
            <LaporanInput
              id="url"
              label="URL"
              placeholder="Masukkan file URL"
            />
            <DropzoneInput
              id="photo"
              label="Unggah bukti laporan"
              accept={{ "image/*": [".png", ".jpg", ".jpeg"] }}
            />
            <div className="flex justify-between">
              <ModalBalik>
                {({ openModal }) => (
                  <Button
                    onClick={openModal}
                    variant="default"
                    size="submit"
                    type="button"
                  >
                    Balik
                  </Button>
                )}
              </ModalBalik>
              <Button variant="default" size="submit" type="submit">
                Submit Laporan
              </Button>
            </div>
          </FormProvider>
        </form>
      </section>
      {opens && <ModalBerhasil />}
      {open && <ModalSalah />}
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getUser(ctx);
}

import * as React from "react";
import Button from "../core/button";
import Modal from "../core/modal";
import { PiWarningFill } from "react-icons/pi";
import Link from "next/link";
import Typography from "../core/typography";

type ModalReturnType = {
  openModal: () => void;
};

export default function ModalBalik({
  children,
}: {
  children: (props: ModalReturnType) => JSX.Element;
}) {
  const [open, setOpen] = React.useState(false);
  const modalReturn: ModalReturnType = {
    openModal: () => setOpen(true),
  };

  return (
    <>
      {children(modalReturn)}
      <Modal open={open} setOpen={setOpen} title="Modal Title">
        <Modal.Section>
          <div className="text-[8rem] flex justify-center text-[#FAC000]">
            <PiWarningFill />
          </div>
          <Typography variant="largebold">Kemabali ke menu utama?</Typography>
          <Typography variant="small" className="text-center">
            Apabila anda akan kembali ke menu utama, data yang anda isi akan
            terhapus, Anda yakin?
          </Typography>
        </Modal.Section>
        <Modal.Section>
          <div className="flex  justify-center gap-2">
            <Button
              variant="default"
              size="modal"
              onClick={() => setOpen(false)}
            >
              Batal
            </Button>
            <Link href="/home">
              <Button variant="approve" size="modal">
                Ya
              </Button>
            </Link>
          </div>
        </Modal.Section>
      </Modal>
    </>
  );
}

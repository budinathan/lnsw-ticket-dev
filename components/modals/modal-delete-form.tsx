import * as React from "react";
import Button from "../core/button";
import Modal from "../core/modal";
import { PiWarningFill } from "react-icons/pi";
import Typography from "../core/typography";

type ModalReturnType = {
  openModal: () => void;
};

type ModalProps = {
  handleButtonDelete: (id: number) => Promise<void>;
  id: number;
  judul: string;
  children: (props: ModalReturnType) => JSX.Element;
};

export default function ModalDeleteForm({
  children,
  handleButtonDelete,
  id,
  judul,
}: ModalProps) {
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
          <Typography variant="largebold">Hapus Laporan?</Typography>
          <Typography variant="small" className="text-center">
            {judul} akan dihapus, Anda yakin?
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
            <Button
              variant="approve"
              size="modal"
              onClick={() => handleButtonDelete(id)}
            >
              Ya
            </Button>
          </div>
        </Modal.Section>
      </Modal>
    </>
  );
}

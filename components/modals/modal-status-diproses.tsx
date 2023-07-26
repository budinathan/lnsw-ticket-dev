import * as React from "react";
import Button from "../core/button";
import Modal from "../core/modal";
import { AiOutlineArrowLeft } from "@/constant/icons";
import LineComponent from "../others/line";
import Typography from "../core/typography";
import CircleProses from "@/modules/circle/circle-proses";

export interface ModalDraftProps {
  id: any;
  judul: string;
}

export default function ModalProses({ id, judul }: ModalDraftProps) {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <Modal open={open} setOpen={setOpen} title="Modal Title">
        <Modal.Section>
          <Typography variant="largebold" className="text-start">
            Informasi Status Permohonan
          </Typography>
          <div className="w-16 h-[8px] bg-black mb-3"></div>
          <div className="flex items-center justify-between mb-3">
            <Typography variant="small" className="bg-greybg px-2 py-1">
              {judul}
            </Typography>
            <Typography variant="largebold">{id}</Typography>
          </div>
          <LineComponent />
        </Modal.Section>
        <Modal.Section>
          <CircleProses />
        </Modal.Section>
        <Modal.Section className="items-end">
          <Button
            variant="kembali"
            size="modal"
            className="gap-2"
            onClick={() => setOpen(false)}
          >
            <AiOutlineArrowLeft />
            Kembali
          </Button>
        </Modal.Section>
      </Modal>
    </>
  );
}

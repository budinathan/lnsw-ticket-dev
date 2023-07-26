import * as React from "react";
import Button from "../core/button";
import Modal from "../core/modal";
import { BiSolidCheckCircle } from "react-icons/bi";
import Link from "next/link";
import Typography from "../core/typography";

export default function ModalBerhasil() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <Modal open={open} setOpen={setOpen} title="Modal Title">
        <Modal.Section>
          <div className="text-[8rem] flex justify-center text-[#4ADE80]">
            <BiSolidCheckCircle />
          </div>
          <Typography variant="largebold">Data berhasil diunggah</Typography>
          <Typography variant="small" className="text-center">
            Mohon menunggu antrian laporan
          </Typography>
        </Modal.Section>
        <Modal.Section>
          <Link href="/home/riwayat">
            <Button variant="default" size="modal" className="w-full">
              Ok
            </Button>
          </Link>
        </Modal.Section>
      </Modal>
    </>
  );
}

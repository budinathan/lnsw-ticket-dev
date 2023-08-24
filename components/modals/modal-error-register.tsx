import * as React from "react";
import Button from "../core/button";
import Modal from "../core/modal";
import { RxCross2 } from "@/constant/icons";
import Typography from "../core/typography";

type errorProps = {
  errorMessageRegister: string;
};

export default function ModalErrorRegister({
  errorMessageRegister,
}: errorProps) {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <Modal open={open} setOpen={setOpen} title="Modal Title">
        <Modal.Section className="items-center">
          <div className="text-[8rem] flex justify-center bg-[#F87272] rounded-[50%] h-32 w-32 items-center ">
            <RxCross2 className="text-white text-[4rem]" />
          </div>
          <Typography variant="largebold" className="mt-2">
            Terjadi Kesalahan
          </Typography>
          <Typography variant="small" className="text-center">
            {errorMessageRegister}
          </Typography>
        </Modal.Section>
        <Modal.Section>
          <Button
            variant="default"
            size="modal"
            onClick={() => setOpen(false)}
            className="w-full"
          >
            Ok
          </Button>
        </Modal.Section>
      </Modal>
    </>
  );
}

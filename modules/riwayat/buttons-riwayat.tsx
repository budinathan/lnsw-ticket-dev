import Button from "@/components/core/button";
import ModalDeleteForm from "@/components/modals/modal-delete-form";
import ModalProses from "@/components/modals/modal-status-diproses";
import ModalDiterima from "@/components/modals/modal-status-diterima";
import ModalDraft from "@/components/modals/modal-status-draft";
import ModalSelesai from "@/components/modals/modal-status-selesai";
import { BsFillTrashFill, IoChatbox, IoTime } from "@/constant/icons";
import { useAppStore } from "@/lib/store";
import { useRouter } from "next/router";
import { useState } from "react";

export interface ButtonsRiwayatProps {
  status: string;
  id: number;
  judul: string;
}
export default function ButtonsRiwayat({
  status,
  id,
  judul,
}: ButtonsRiwayatProps) {
  const { deleteForm } = useAppStore();
  const [showModalDraft, setShowModalDraft] = useState<boolean>(false);
  const [showModalProses, setShowModalProses] = useState<boolean>(false);
  const [showModalDiterima, setShowModalDiterima] = useState<boolean>(false);
  const [showModalSelesai, setShowModalSelesai] = useState<boolean>(false);
  const router = useRouter();

  const handleButtonClick = () => {
    if (status === "Draft") {
      setShowModalDraft(true);
    } else if (status === "Diproses") {
      setShowModalProses(true);
    } else if (status === "Diterima") {
      setShowModalDiterima(true);
    } else if (status === "Selesai") {
      setShowModalSelesai(true);
    }
  };

  const handleButtonDelete = async (id: number) => {
    await deleteForm(id);
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center gap-3">
      <Button variant="time" size="icons" onClick={handleButtonClick}>
        <IoTime />
      </Button>
      <Button
        variant="chat"
        size="icons"
        onClick={() => router.push(`/home/chatroom/${id}`)}
      >
        <IoChatbox />
      </Button>
      <ModalDeleteForm
        id={id}
        judul={judul}
        handleButtonDelete={handleButtonDelete}
      >
        {({ openModal }) => (
          <Button variant="trash" size="icons" onClick={openModal}>
            <BsFillTrashFill />
          </Button>
        )}
      </ModalDeleteForm>

      {showModalDraft && <ModalDraft id={id} judul={judul} />}
      {showModalProses && <ModalProses id={id} judul={judul} />}
      {showModalDiterima && <ModalDiterima id={id} judul={judul} />}
      {showModalSelesai && <ModalSelesai id={id} judul={judul} />}
    </div>
  );
}

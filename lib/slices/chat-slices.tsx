import { StateCreator } from "zustand";
import axios from "axios";
import { apiUrl } from "@/constant/env";

export interface ChatForm {
  rows: {
    tiketid: number;
    jenis: string;
    tanggalpengajuan: string;
    status: string;
  };
}

export interface ChatFormState {
  chatforms: ChatForm;
  getById: (id: number) => void;
}

export const chatFormSlice: StateCreator<ChatFormState> = (set, get) => ({
  chatforms: {
    rows: {
      tiketid: 0,
      jenis: "",
      tanggalpengajuan: "",
      status: "",
    },
  },
  getById: async (id: number) => {
    try {
      const chat = await axios.get(`${apiUrl}/chat/${id}`);
      set({ chatforms: chat.data });
    } catch (err) {
      console.log(err);
    }
  },
});

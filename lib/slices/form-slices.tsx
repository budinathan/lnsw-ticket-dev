import { StateCreator } from "zustand";
import axios from "axios";
import { apiUrl } from "@/constant/env";

export interface Form {
  rows: {
    tiketid: number;
    jenis: string;
    keterangan: string;
    tanggalpengajuan: string;
    status: string;
    pengaju: string;
    email: string;
    url?: string;
    filepengajuan?: string;
  }[];
}

export interface FormState {
  forms: Form;
  postForm: (
    name: string,
    email: string,
    judulLaporan: string,
    deskripsiLaporan: string,
    url?: string,
    filepengajuan?: string
  ) => Promise<void>;
  getForm: () => void;
  deleteForm: (id: number) => void;
}

export const formSlice: StateCreator<FormState> = (set, get) => ({
  forms: { rows: [] },
  postForm: async (
    name: string,
    email: string,
    judulLaporan: string,
    deskripsiLaporan: string,
    url?: string
  ) => {
    try {
      axios.post(`${apiUrl}/form`, {
        name,
        email,
        judulLaporan,
        deskripsiLaporan,
        url,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getForm: async () => {
    try {
      const form = await axios.get(`${apiUrl}/form`);
      set({ forms: form.data });
    } catch (err) {
      console.log(err);
    }
  },
  deleteForm: async (id: number) => {
    try {
      await axios.delete(`${apiUrl}/delete/${id}`);
    } catch (err) {
      console.log(err);
    }
  },
});

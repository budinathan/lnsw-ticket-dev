import { StateCreator } from "zustand";
import axios from "axios";

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
    url?: string
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
      axios.post("http://localhost:3000/api/form", {
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
      const form = await axios.get("http://localhost:3000/api/form");
      set({ forms: form.data });
    } catch (err) {
      console.log(err);
    }
  },
  deleteForm: async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/api/delete/${id}`);
    } catch (err) {
      console.log(err);
    }
  },
});

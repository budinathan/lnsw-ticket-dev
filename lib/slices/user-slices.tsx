// Type: User State Management
// This file is used to manage the state of the user feature.
// It has 1 state which is users and 3 actions which registerUser, loginUser, and getUserInfo.
import { StateCreator } from "zustand";
import axios from "axios";
import { apiUrl } from "@/constant/env";

export interface User {
  id: number;
  username: string;
  ait: number;
}

export interface UserState {
  users: User | null;
  registerUser: (username: string, password: string) => Promise<void>;
  loginUser: (username: string, password: string) => Promise<void>;
  getUserInfo: () => void;
  errorMessage?: string;
  errorMessageRegister?: string;
}
export const userSlice: StateCreator<UserState> = (set, get) => ({
  users: null,
  errorMessage: "",
  errorMessageRegister: "",
  registerUser: async (username: string, password: string) => {
    try {
      await axios.post(`${apiUrl}/register`, {
        username,
        password,
      });
    } catch (err: any) {
      set({ errorMessageRegister: err.response.data.message });
    }
  },
  loginUser: async (username: string, password: string) => {
    try {
      await axios.post(`${apiUrl}/login`, {
        username,
        password,
      });
    } catch (err: any) {
      set({ errorMessage: err.response.data.message });
    }
  },
  getUserInfo: async () => {
    const userInfo = await axios.get(`${apiUrl}/login`);
    set({ users: userInfo.data });
  },
});

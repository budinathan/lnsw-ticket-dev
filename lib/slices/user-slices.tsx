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
}
export const userSlice: StateCreator<UserState> = (set, get) => ({
  users: null,
  registerUser: async (username: string, password: string) => {
    try {
      await axios.post(`${apiUrl}/register`, {
        username,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  },
  loginUser: async (username: string, password: string) => {
    try {
      await axios.post(`${apiUrl}/login`, {
        username,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getUserInfo: async () => {
    const userInfo = await axios.get(`${apiUrl}/login`);
    set({ users: userInfo.data });
  },
});

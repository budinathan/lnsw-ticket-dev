import { StateCreator } from "zustand";
import axios from "axios";

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
      await axios.post("http://localhost:3000/api/register", {
        username,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  },
  loginUser: async (username: string, password: string) => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getUserInfo: async () => {
    const userInfo = await axios.get("http://localhost:3000/api/login");
    set({ users: userInfo.data });
  },
});

//Type : Function
//This file is used to run a function that returns the chatforms state from client side.

import { useEffect } from "react";
import { useAppStore } from "@/lib/store";

export interface chatprops {
  id: number;
}

export default function useChat({ id }: chatprops) {
  const { getById, chatforms } = useAppStore();
  useEffect(() => {
    getById(id);
  }, []);
  return chatforms;
}

//client

import { useEffect } from "react";
import { useAppStore } from "@/lib/store";

export default function useUser() {
  const { getUserInfo, users } = useAppStore();
  useEffect(() => {
    getUserInfo();
  }, []);
  return users;
}

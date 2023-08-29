import * as React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/popover/popover";
import { ExtractProps } from "@/type/helper";
import IconButton from "../core/icon-button";

import { useRouter } from "next/router";
import { useAppStore } from "@/lib/store";

type ExamplePopoverProps = ExtractProps<typeof Popover>;

export default function PopoverIcon({ ...rest }: ExamplePopoverProps) {
  const router = useRouter();
  const { logout } = useAppStore();
  async function logoutUser() {
    await logout();
    router.push("/");
  }
  return (
    <Popover {...rest}>
      <PopoverTrigger asChild>
        <IconButton
          variant="ghost"
          size="lg"
          className="rounded-full"
          icon={RiAccountCircleFill}
        />
      </PopoverTrigger>
      <PopoverContent side="bottom">
        <div className="flex justify-center">
          <button
            onClick={logoutUser}
            className="w-full outline-none hover:bg-[#fbfbfb] px-5 py-1 rounded-sm transition-colors duration-200 ease-in-out hover:shadow-sm"
          >
            Logout
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

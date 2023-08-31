import * as React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/popover/popover";
import { ExtractProps } from "@/type/helper";
import IconButton from "../core/icon-button";

import { useRouter } from "next/router";
import { useAppStore } from "@/lib/store";
import clsx from "clsx";

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
            className={clsx(
              "w-full outline-none hover:bg-[#fbfbfb] px-3 rounded-sm",
              "flex gap-2 items-center text-sm",
              "transition-colors duration-200 ease-in-out hover:shadow-sm"
            )}
          >
            <CiLogout size={20} />
            Logout
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

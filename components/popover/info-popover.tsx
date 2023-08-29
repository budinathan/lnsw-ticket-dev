import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { ExtractProps } from "@/type/helper";
import { cn } from "@/type/utils";
import IconButton from "../core/icon-button";

type InfoPopoverProps = {
  children: React.ReactNode;
  classNames?: {
    content?: string;
    trigger?: string;
  };
} & ExtractProps<typeof Popover>;

export default function InfoPopover({
  classNames,
  children,
  ...rest
}: InfoPopoverProps) {
  return (
    <Popover {...rest}>
      <PopoverTrigger asChild>
        <IconButton
          variant="ghost"
          size="lg"
          className={cn([
            "rounded-full text-typo-icons text-2xl",
            classNames?.trigger,
          ])}
        />
      </PopoverTrigger>
      <PopoverContent
        side="top"
        className={cn(["w-60 p-2", classNames?.content])}
      >
        {children}
      </PopoverContent>
    </Popover>
  );
}

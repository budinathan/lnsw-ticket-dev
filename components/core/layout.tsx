import { cn } from "@/type/utils";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
} & React.ComponentPropsWithoutRef<"div">;

export default function Layout({ className, children, ...rest }: LayoutProps) {
  return (
    <div
      className={cn("py-6 max-md:py-3 px-16 max-md:px-6", className)}
      {...rest}
    >
      {children}
    </div>
  );
}

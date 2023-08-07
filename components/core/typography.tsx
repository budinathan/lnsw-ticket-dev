import { cn } from "@/type/utils";
import * as React from "react";

const TypographyVariant = [
  "h1",
  "h2",
  "h3",
  "h4",
  "p",
  "blockquote",
  "code",
  "largebold",
  "smallbold",
  "under",
  "mediumbold",
  "large",
  "small",
  "muted",
] as const;

const TypographyColor = ["default", "muted", "danger", "ready"] as const;

type TypographyProps<T extends React.ElementType> = {
  /** @default <p> tag */
  as?: T;
  className?: string;
  color?: (typeof TypographyColor)[number];

  variant?: (typeof TypographyVariant)[number];
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

type TypographyComponent = <T extends React.ElementType = "p">(
  props: TypographyProps<T>
) => React.ReactElement | null;
//@ts-ignore
const Typography: TypographyComponent = React.forwardRef(
  <T extends React.ElementType = "p">(
    {
      as,
      children,
      className,
      color,
      variant = "p",
      ...rest
    }: TypographyProps<T>,
    ref?: React.ComponentPropsWithRef<T>["ref"]
  ) => {
    const Component = as || "p";
    return (
      <Component
        ref={ref}
        className={cn(
          //#region  //*=========== Variants ===========
          [
            variant === "h1" && [
              "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl",
            ],
            variant === "h2" && [
              "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
            ],
            variant === "h3" && [
              "scroll-m-20 text-2xl font-semibold tracking-tight",
            ],
            variant === "h4" && [
              "scroll-m-20 text-xl font-semibold tracking-tight",
            ],
            variant === "p" && ["leading-7"],
            variant === "blockquote" && ["mt-6 border-l-2 pl-6 italic"],
            variant === "code" && [
              "relative w-fit rounded bg-brand-200 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold dark:bg-brand-700",
            ],
            variant === "large" && ["text-lg font-barlow font-weight-500"],
            variant === "largebold" && [
              "text-lg font-barlow font-bold font-weight-500",
            ],
            variant === "smallbold" && [
              "text-xs font-barlow font-bold font-weight-500",
            ],

            variant === "mediumbold" && [
              "text-sm font-barlow font-bold font-weight-500",
            ],
            variant === "small" && ["text-xs font-weight-400 font-barlow "],
            variant === "under" && [
              "text-xs font-weight-400 font-barlow underline",
            ],
            variant === "muted" && ["text-sm text-typography-500"],
          ],
          //#endregion  //*======== Variants ===========
          //#region  //*=========== Color ===========
          [
            color === "default" && ["text-black"],
            color === "muted" && ["text-typography-500"],
            color === "danger" && ["text-danger-500 dark:text-danger-600"],
            color === "ready" && ["text-ready-500 dark:text-ready-600"],
          ],
          //#endregion  //*======== Color ===========
          "transition-colors duration-200",
          className
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

export default Typography;

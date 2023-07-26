import { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/type/utils";

const buttonVariants = cva("flex items-center justify-center", {
  variants: {
    variant: {
      default: "bg-[#02275d] text-[#fff] border-none",
      approve: "bg-[#883F3F] text-[#fff] border-none ",
      lightblue: "bg-[#35527D] text-[#fff] border-none ",
      icon: "text-greybg absolute right-2 top-2 focus:outline-none",
      time: "bg-bluebg text-white",
      chat: "bg-[#43CA74] text-white",
      trash: "bg-[#F87272] text-white",
      kembali: "bg-[#5996B3] text-white",
    },
    size: {
      default: "rounded-md px-[40px] py-[5px] text-[12px] font-weight-[400]",
      small: "rounded-md px-[20px] py-[5px] text-[12px] font-weight-[400]",
      icon: "",
      modal:
        "w-[160px] rounded-md px-[40px] py-[5px] text-[12px] font-weight-[400]",
      submit:
        "w-[180px] rounded-md px-[40px] py-[5px] text-[12px] font-weight-[400]",
      icons: "w-6 h-6 rounded-lg",
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({ className, size, variant, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export default Button;

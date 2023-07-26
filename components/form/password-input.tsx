import clsx from "clsx";
import { useState } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import {
  AiFillEye,
  AiOutlineEyeInvisible,
  BiSolidLockAlt,
} from "../../constant/icons";

export type PasswordInputProps = {
  label: string | null;
  id: string;
  placeholder?: string;
  helperText?: string;
  type?: React.HTMLInputTypeAttribute;
  readOnly?: boolean;
  hideError?: boolean;
  validation?: RegisterOptions;
  containerClassName?: string;
} & React.ComponentPropsWithoutRef<"input">;

export default function PasswordInput({
  label,
  placeholder = "",
  helperText,
  id,
  readOnly = false,
  hideError,
  validation,
  disabled,
  containerClassName,
  ...rest
}: PasswordInputProps) {
  const { register } = useFormContext();

  const withLabel = label !== null;

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className={clsx("w-full", containerClassName)}>
      <label
        className="bg-bluebg flex text-white items-center  gap-2 px-1 py-1 w-[130px] text-sm"
        style={{ borderRadius: "6px 6px 0px 0px" }}
      >
        <BiSolidLockAlt />
        Password
      </label>
      <div className={clsx("relative", withLabel && "")}>
        <input
          {...register(id, validation)}
          {...rest}
          type={showPassword ? "text" : "password"}
          name={id}
          id={id}
          readOnly={readOnly}
          disabled={disabled}
          className={clsx(
            "py-1 px-2  text-black  border-[1px] border-black mb-3 w-full text-sm"
          )}
          style={{ borderRadius: "0px 6px 6px 6px" }}
          placeholder={placeholder}
          aria-describedby={id}
        />
        <button
          onClick={togglePassword}
          type="button"
          className="absolute top-[8.5px] px-2 right-0  flex items-center focus:outline-none "
        >
          {showPassword ? (
            <AiFillEye className="opacity-50" />
          ) : (
            <AiOutlineEyeInvisible className="opacity-50" />
          )}
        </button>
      </div>
    </div>
  );
}

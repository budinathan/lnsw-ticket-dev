import clsx from "clsx";
import { RegisterOptions, useFormContext } from "react-hook-form";
import { BiSolidUser } from "../../constant/icons";

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

export default function UsernameInput({
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

  return (
    <div className={clsx("w-full", containerClassName)}>
      <label
        className="bg-bluebg flex text-white items-center  gap-2 px-1 py-1  w-[130px] text-sm"
        style={{ borderRadius: "6px 6px 0px 0px" }}
      >
        <BiSolidUser />
        Username
      </label>
      <div className={clsx("relative", withLabel && "")}>
        <input
          {...register(id, validation)}
          {...rest}
          type={"text"}
          name={id}
          id={id}
          readOnly={readOnly}
          disabled={disabled}
          className={clsx(
            "py-1 px-2  text-black border-[1px] border-black mb-3 w-full text-sm"
          )}
          style={{ borderRadius: "0px 6px 6px 6px" }}
          placeholder={placeholder}
          aria-describedby={id}
        />
      </div>
    </div>
  );
}

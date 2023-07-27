import clsx from "clsx";
import { RegisterOptions, useFormContext } from "react-hook-form";
import Typography from "../core/typography";

export type LaporanInputProps = {
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
}: LaporanInputProps) {
  const { register } = useFormContext();

  const withLabel = label !== null;

  return (
    <div className={clsx("w-full", containerClassName)}>
      <label className="label-user w-full mb-2">
        <Typography variant="mediumbold">{label}</Typography>
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
          className={clsx("p-4 rounded-md bg-[#d9d9d9] w-full mt-2 text-sm")}
          style={{ borderRadius: "6px 6px 6px 6px" }}
          placeholder={placeholder}
          aria-describedby={id}
        />
      </div>
    </div>
  );
}

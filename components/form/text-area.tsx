import clsx from "clsx";
import get from "lodash.get";
import { RegisterOptions, useFormContext } from "react-hook-form";
import Typography from "../core/typography";

export type TextAreaProps = {
  label: string | null;
  id: string;
  placeholder?: string;
  helperText?: string;
  readOnly?: boolean;
  hideError?: boolean;
  validation?: RegisterOptions;
  containerClassName?: string;
} & React.ComponentPropsWithoutRef<"textarea">;

export default function TextArea({
  label,
  placeholder = "",
  helperText,
  id,
  readOnly = false,
  hideError = false,
  validation,
  disabled,
  containerClassName,
  ...rest
}: TextAreaProps) {
  const { register } = useFormContext();
  const withLabel = label !== null;

  return (
    <div className={containerClassName}>
      <label className="label-user w-full mb-2">
        <Typography variant="mediumbold">{label}</Typography>
      </label>
      <div className={clsx("relative", withLabel && "mt-1")}>
        <textarea
          {...register(id, validation)}
          rows={6}
          {...rest}
          name={id}
          id={id}
          readOnly={readOnly}
          disabled={disabled}
          className={clsx(
            "p-4 rounded-md bg-[#EAEBEC] w-full mt-2 text-sm border-black border-[0.5px]"
          )}
          placeholder={placeholder}
          aria-describedby={id}
        />
      </div>
    </div>
  );
}

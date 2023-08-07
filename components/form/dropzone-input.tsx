/* eslint-disable jsx-a11y/alt-text */
import { MouseEvent, useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import { Accept, useDropzone } from "react-dropzone";
import { Controller, useFormContext } from "react-hook-form";
import FilePreview from "./file-preview";
import { FileWithPreview } from "@/type/dropzone";
import { PiUploadSimpleLight } from "@/constant/icons";
import Typography from "../core/typography";

type DropzoneInputProps = {
  accept?: Accept;
  helperText?: string;
  id: string;
  label: string;
  maxFiles?: number;
  readOnly?: boolean;
  validation?: object;
  type?: "image" | "file";
};

export default function DropzoneInput({
  accept,
  helperText = "",
  id,
  label,
  maxFiles = 2,
  validation,
  readOnly,
  type,
}: DropzoneInputProps) {
  const {
    control,
    getValues,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const [files, setFiles] = useState<FileWithPreview[]>(getValues(id) || []);

  const onDrop = useCallback(
    (acceptedFiles: any, rejectedFiles: any) => {
      if (rejectedFiles && rejectedFiles.length > 0) {
        setValue(id, files ? [...files] : null);
        const errorCode = rejectedFiles[0]?.errors[0]?.code;
        // rejectedFiles[0].errors[0].message => generated error message
        setError(id, {
          type: "manual",
          message:
            errorCode === "file-too-large"
              ? "File(s) should not be larger than 0.5 MB"
              : "Please select the correct file format",
        });
      } else {
        const acceptedFilesPreview = acceptedFiles.map(
          (file: FileWithPreview) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
        );

        setFiles(
          files
            ? [...files, ...acceptedFilesPreview].slice(0, maxFiles)
            : acceptedFilesPreview
        );

        setValue(
          id,
          files
            ? [...files, ...acceptedFiles].slice(0, maxFiles)
            : acceptedFiles,
          {
            shouldValidate: true,
          }
        );
        clearErrors(id);
      }
    },
    [clearErrors, files, id, maxFiles, setError, setValue]
  );

  useEffect(() => {
    return () => {
      () => {
        files.forEach((file) => URL.revokeObjectURL(file.preview));
      };
    };
  }, [files]);

  const deleteFile = (e: MouseEvent, file: FileWithPreview) => {
    e.preventDefault();
    const newFiles = [...files];

    newFiles.splice(newFiles.indexOf(file), 1);

    if (newFiles.length > 0) {
      setFiles(newFiles);
      setValue(id, newFiles, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    } else {
      setFiles([]);
      setValue(id, null, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    maxFiles,
    maxSize: 5000000,
  });

  return (
    <div>
      <Typography variant="mediumbold">{label}</Typography>
      {readOnly && !(files?.length > 0) ? (
        <div className="divide-y divide-brand-400 rounded-md border border-brand-300 py-3 pl-3 pr-4 text-sm dark:divide-brand-500 dark:border-brand-600">
          No file uploaded
        </div>
      ) : files?.length >= maxFiles ? (
        <ul className="mt-2 divide-y divide-brand-300 rounded-md dark:divide-brand-500 dark:border-brand-600">
          {files.map((file, index) => (
            <FilePreview
              key={index}
              readOnly={readOnly}
              file={file}
              deleteFile={deleteFile}
              files={files}
              fileIndex={index}
            />
          ))}
        </ul>
      ) : (
        <Controller
          control={control}
          name={id}
          rules={validation}
          render={({ field }) => (
            <>
              <div
                className="focus:ring-dark-400 group mt-1 focus:outline-none"
                {...getRootProps()}
                {...field}
              >
                <input {...getInputProps()} />
                <div
                  className={clsx(
                    "w-full p-2 bg-[#d9d9d9]  rounded-md cursor-pointer",
                    errors[id]
                      ? "border-danger-500 group-focus:border-danger-500"
                      : "group-focus:border-primary-500"
                  )}
                >
                  <div className="flex  flex-col justify-center items-center my-20 space-y-2 text-center">
                    <PiUploadSimpleLight className="text-[5rem]" />
                    <p>Drag or click to select PDF</p>
                    <p className="text-xs">{`${
                      maxFiles - (files?.length || 0)
                    } file(s) remaining`}</p>
                  </div>
                </div>
              </div>

              <div className="mt-2">
                {helperText !== "" && (
                  <p className="mt-1 text-sm">{helperText}</p>
                )}
              </div>
              {!readOnly && !!files?.length && (
                <ul className="mt-2  rounded-lg  ">
                  {files.map((file, index) => (
                    <FilePreview
                      key={index}
                      readOnly={readOnly}
                      file={file}
                      deleteFile={deleteFile}
                      files={files}
                      fileIndex={index}
                    />
                  ))}
                </ul>
              )}
            </>
          )}
        />
      )}
    </div>
  );
}

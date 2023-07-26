import { FileWithPreview } from "@/type/dropzone";
import * as React from "react";
import {
  HiOutlineExternalLink,
  HiOutlinePaperClip,
  HiOutlinePhotograph,
  HiX,
} from "react-icons/hi";

type FilePreviewProps = {
  file: FileWithPreview;
} & (
  | {
      deleteFile?: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        file: FileWithPreview
      ) => void;
      readOnly?: true;
    }
  | {
      deleteFile: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        file: FileWithPreview
      ) => void;
      readOnly?: false;
    }
);

export default function FilePreview({
  deleteFile,
  file,
  readOnly,
}: FilePreviewProps): React.ReactElement {
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    deleteFile?.(e, file);
  };

  const imagesType = ["image/png", "image/jpg", "image/jpeg"];

  return imagesType.includes(file.type) ? (
    <>
      <li
        className="flex min-h-[2.25rem] mb-2 bg-[#d9d9d9] items-center justify-between py-0 pl-3 pr-4 text-sm "
        key={file.name}
      >
        <div className="flex w-0 flex-1 items-center">
          <HiOutlinePhotograph
            className="h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          <span className="ml-2 w-0 flex-1 truncate">{file.name}</span>
        </div>
        <div className="ml-4 flex flex-shrink-0 items-center space-x-2">
          {!readOnly && (
            <button
              type="button"
              onClick={handleDelete}
              className="rounded text-xl font-medium text-red-500 hover:text-red-700 focus:outline-none focus:ring focus:ring-red-500"
            >
              <HiX />
            </button>
          )}
        </div>
      </li>
    </>
  ) : (
    <li
      key={file.name}
      className="flex min-h-[2.25rem] items-center justify-between py-0 pl-3 pr-4 text-sm md:min-h-[2.5rem]"
    >
      <div className="flex w-0 flex-1 items-center">
        <HiOutlinePaperClip
          className="h-5 w-5 flex-shrink-0 text-gray-400"
          aria-hidden="true"
        />
        <span className="ml-2 w-0 flex-1 truncate">{file.name}</span>
      </div>
      <div className="ml-4 flex flex-shrink-0 items-center space-x-2">
        <a
          href={file.preview}
          className="rounded text-gray-500 hover:text-gray-700 focus:outline-none focus:ring focus:ring-primary-500"
        >
          <HiOutlineExternalLink size={20} />
        </a>
        {!readOnly && (
          <button
            className="cursor-pointer rounded text-red-200 hover:text-red-400 focus:outline-none focus:ring focus:ring-red-500"
            type="button"
            onClick={(e) => deleteFile?.(e, file)}
          >
            <HiX size={24} />
          </button>
        )}
      </div>
    </li>
  );
}

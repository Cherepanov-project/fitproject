import { FileError } from "react-dropzone";

export interface IUploadableFileProps {
    id: number
    file: File
    errors: FileError[]
    url?: string
}

export interface IFileHeaderProps {
    file: File
    onDelete: (file: File) => void
}

export interface IUploadErrorProps {
    file: File
    onDelete: (file: File) => void
    errors: FileError[]
}

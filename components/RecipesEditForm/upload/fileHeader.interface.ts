import { FileError } from "react-dropzone"

export interface IFileHeaderProps {
    file: File
    onDelete: (file: File) => void
}

export interface IUploadbleFileProps {
    id: number
    file: File
    errors: FileError[]
    url?: string
}

export interface ISingleFileUploadWithProgressProps {
    file: File
    onDelete: (file: File) => void
    onUpload: (file: File, url: unknown) => void
}

export interface IUploadErrorProps {
    file: File
    onDelete: (file: File) => void
    errors: FileError[]
}

import React, { useCallback, useEffect, useState } from "react"
import { FileRejection, FileError, useDropzone } from "react-dropzone"
import { Box, Grid } from "@material-ui/core"
import { useField } from "formik"

import { SingleFileUpload } from "./singleFileUpload"
import UploadError from "./uploadError"
import styles from "./FileUpload.module.scss"
import classnames from "classnames/bind"
import {IUploadbleFileProps} from "./fileHeader.interface"
import { DefaultDropZone } from "../../RecipesEditForm/upload/fileUpload.styles"

let currentId = 0

function getNewId() {
    // we could use a fancier solution instead of a sequential ID :)
    return (currentId += 1)
}

const FileUpload = ({ name }: { name?: string }) => {
    // const [_, __, helpers] = useField(name)
    const [files, setFiles] = useState<IUploadbleFileProps[]>([])

    const onDrop = useCallback(
        (accFiles: File[], rejFiles: FileRejection[]) => {
            const mappedAcc = accFiles.map(file => ({
                file,
                errors: [],
                id: getNewId(),
            }))
            const mappedRej = rejFiles.map(rValue => ({
                ...rValue,
                id: getNewId(),
            }))
            setFiles(curr => [...curr, ...mappedAcc, ...mappedRej])
        },
        []
    )
    /*
	 useEffect(() => {
		helpers.setValue(files)
		//helpers.setTouched(true)
	}, [files])
*/

    const onDelete = (file: File) => {
        setFiles(curr => curr.filter(fw => fw.file !== file))
    }

    const uploadFile = (file: File, url: string) => (curr: any) =>
        curr.map((fw: any) => {
            if (fw.file === file) {
                return { ...fw, url }
            }
            return fw
        })

    const onUpload = (file: File, url: string) => {
        setFiles(uploadFile(file, url))
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: ["image/*"],
        maxSize: 10000 * 1024, // 300KB
    })

    return (
        <>
            <Grid item>
                <DefaultDropZone {...getRootProps()}>
                    <input {...getInputProps()} />

                    <p>Drag n drop some files here, or click to select files</p>
                    {files.map((fileWrapper, index) => (
                        <Grid item key={index}>
                            {fileWrapper.errors.length ? (
                                <UploadError
                                    file={fileWrapper.file}
                                    errors={fileWrapper.errors}
                                    onDelete={onDelete}
                                />
                            ) : (
                                <SingleFileUpload
                                    onDelete={onDelete}
                                    onUpload={onUpload}
                                    file={fileWrapper.file}
                                />
                            )}
                        </Grid>
                    ))}
                </DefaultDropZone>
            </Grid>
        </>
    )
}

export default FileUpload

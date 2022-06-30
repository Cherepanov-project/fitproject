import React, { useCallback, useEffect, useState } from "react"
import { FileRejection, FileError, useDropzone } from "react-dropzone"
import styled from "styled-components"
import { Box, Grid } from "@material-ui/core"
import { useField } from "formik"

import { SingleFileUpload } from "./singleFileUpload"
import UploadError from "./uploadError"
import styles from "./FileUpload.module.scss"
import classnames from "classnames/bind"

let currentId = 0

export interface IUploadableFileProps {
    id: number
    file: File
    errors: FileError[]
    url?: string
}

function getNewId() {
    // we could use a fancier solution instead of a sequential ID :)
    return (currentId += 1)
}

const DefaultDropZone = styled.div`
    border-radius: 4px;
    min-height: 100px;
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
        0px 4px 16px rgba(51, 51, 51, 0.08);
    padding: 20px;
`
const isDroppingActive = styled.div`
    width: 100%;
    background: #6e41e2;
    min-height: 100px;
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
        0px 4px 16px rgba(51, 51, 51, 0.08);
    border-radius: 4px;
`

const MainParagraph = styled.p`
    font-size: 16px;
`

const SecondParagraph = styled.p`
    padding-top: 8px;
    font-size: 13px;
`

const FileUpload = ({ name }: { name: string }) => {
    const [_, __, helpers] = useField(name)
    const [files, setFiles] = useState<IUploadableFileProps[]>([])

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

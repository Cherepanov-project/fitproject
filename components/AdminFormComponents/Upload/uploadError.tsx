import React from "react"
import { FileError } from "react-dropzone"
import {
    createStyles,
    LinearProgress,
    Typography,
    withStyles,
    Grid,
} from "@material-ui/core"

import { FileHeader } from "./fileHeader"
import { IUploadErrorProps } from "./upload.interface"

const ErrorLinearProgress = withStyles(theme =>
    createStyles({
        bar: {
            backgroundColor: theme.palette.error.main,
        },
    })
)(LinearProgress)

const UploadError = ({ file, onDelete, errors }: IUploadErrorProps) => {
    return (
        <>
            {console.log("error")}
            <FileHeader file={file} onDelete={onDelete} />
            <ErrorLinearProgress variant="determinate" value={100} />
            {errors.map(error => (
                <Grid item key={error.code}>
                    <Typography color="error">{error.message}</Typography>
                </Grid>
            ))}
        </>
    )
}

export default UploadError

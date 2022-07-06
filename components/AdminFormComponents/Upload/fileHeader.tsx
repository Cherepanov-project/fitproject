import { Grid, Button } from "@material-ui/core"
import React from "react"

import { IFileHeaderProps } from "./upload.interface"

const FileHeader = ({ file, onDelete }: IFileHeaderProps) => {
    return (
        <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>{file.name}</Grid>
            <Grid item>
                <Button size="small" onClick={() => onDelete(file)}>
                    Delete
                </Button>
            </Grid>
        </Grid>
    )
}

export { FileHeader }

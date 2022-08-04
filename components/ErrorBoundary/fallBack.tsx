import React, {useState} from "react"

import Link from "next/link"
import { Button } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

import { StyledWrapper, StyledErrorContainer, StyledTitle, StyledPre } from "@/components/ErrorBoundary/fallBack.styles"

const FallBack = ({error, stack}) => {
    const [close, setClose] = useState(false)

    if (error && !close) {
        return (
            <StyledErrorContainer>
                <StyledWrapper>
                    <StyledTitle>{error}</StyledTitle>
                    <StyledTitle>Stack:</StyledTitle>
                    <StyledPre>{stack}</StyledPre>
                    <Link href={`/admin/overview`} passHref>
                        <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={() => {setClose(true)}}>
                            Close and redirect to overview 
                        </Button>
                    </Link>
                </StyledWrapper>
        </StyledErrorContainer>
        )
    }
    return null;
    
}

export default FallBack
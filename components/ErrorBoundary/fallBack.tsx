import React, {useState} from "react"
import { useRouter } from "next/router"

import Link from "next/link"
import { Button } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

import { StyledWrapper, StyledErrorContainer, StyledTitle, StyledPre } from "@/components/ErrorBoundary/fallBack.styles"

const FallBack = ({error, stack}) => {
    const [close, setClose] = useState(false)
    const router = useRouter();

    if (error && !close) {
        return (
            <StyledErrorContainer onMouseDown={(e) => {
                if(e.target === e.currentTarget) {
                    router.replace(`/admin/overview`)
                    setClose(true)
                }
                }}>
                <StyledWrapper>
                    <StyledTitle>{error}</StyledTitle>
                    <StyledTitle>Stack:</StyledTitle>
                    <StyledPre>{stack}</StyledPre>
                    <Link href={`/admin/overview`} passHref>
                        <Button variant="outlined" startIcon={<CloseIcon />} onClick={() => {setClose(true)}}>
                            Close
                        </Button>
                    </Link>
                </StyledWrapper>
        </StyledErrorContainer>
        )
    }
    return null;
    
}

export default FallBack
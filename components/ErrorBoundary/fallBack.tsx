import React, { useState } from "react"
import { useRouter } from "next/router"

import Link from "next/link"
import { Button } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

import {
  StyledWrapper,
  StyledAdminErrorContainer,
  StyledUserErrorContainer,
  StyledTitle,
  StyledPre,
} from "@/components/ErrorBoundary/fallBack.styles"

const FallBack = ({ error, stack }) => {
  const [close, setClose] = useState(false)
  const router = useRouter()

  const isAdmin = !!router["components"]["/admin"]

  const Container = isAdmin
    ? StyledAdminErrorContainer
    : StyledUserErrorContainer

  const goToUrl = isAdmin ? "/admin/overview" : "/user/statistics"

  if (error && !close) {
    return (
      <Container
        onMouseDown={e => {
          if (e.target === e.currentTarget) {
            router.replace(goToUrl)
            setClose(true)
          }
        }}
      >
        <StyledWrapper>
          <StyledTitle>
            {isAdmin ? error : "Something went wrong..."}
          </StyledTitle>
          {isAdmin ? (
            <>
              {" "}
              <StyledTitle>Stack:</StyledTitle>
              <StyledPre>{stack}</StyledPre>
            </>
          ) : null}
          <Link href={goToUrl} passHref>
            <Button
              variant="outlined"
              startIcon={<CloseIcon />}
              onClick={() => {
                setClose(true)
              }}
            >
              Close
            </Button>
          </Link>
        </StyledWrapper>
      </Container>
    )
  }
  return null
}

export default FallBack

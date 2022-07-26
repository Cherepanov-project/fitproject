import styled from "styled-components"

export const MainWrapper = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
`

export const RightSideBarWrapper = styled.div`
  width: 244px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  //border-radius: 0 50px 50px 0;
`

export const UserInfoWrapper = styled.div`
    display: flex;
    margin-top: 34px;
    &:hover {
        cursor: pointer;
    }
`

export const UserInfo = styled.div`
    align-self: center;
`

export const WeightLoosGoalWrapper = styled.div`
    margin: 0 auto;
    text-align: center;
`

export const Loss = styled.div`
    margin: 15px 0;
`

export const IconArrow = styled.img`
  position: absolute;
  padding: 10px 12px 10px;
  left: 185px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 32px;
  height: 31px;
`

export const Meter = styled.img``

export const Avatar = styled.img`
    width: 64px;
    height: 65px;
    margin: 0px 10px 0px 24px;
    border: 2px solid #6d63ff;
    box-sizing: border-box;
    border-radius: 100px;
    img {
        border-radius: 35%;
    }
`

export const UserName = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.005em;
`

export const LastVisitTime = styled.div`
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.005em;
    color: #787878;
`

export const Icon = styled.img`
    width: 27px;
`

export const IconWrapper = styled.div``

export const PaperProps = {
    elevation: 0,
    sx: {
        overflow: "visible",
        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
        mt: 1.5,
        "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
        },
        "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
        },
    },
}

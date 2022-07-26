import styled from "styled-components"

export const ContentWrapper = styled.div`
  width: 100%;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  margin: 0 auto;
  background-color: #ffffff;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
`

export const ContentWrapperUser = styled.div`
  padding: 20px;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  background-color: #ffffff;
`

export const TitleHeader = styled.h4`
  font-weight: 400;
  font-size: 21px;
  line-height: 24px;
  color: #252733;
`

export const UsersContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #dfe0eb;
  border-bottom: 1.5px solid #dfe0eb;
  height: 80px;
`

export const UserName = styled.p`
  font-weight: 700;
  font-size: 21px;
  line-height: 24px;
  color: #6e41e2;
`
export const Title = styled.h3`
  font-weight: 700;
  border-bottom: 1px solid #dfe0eb;
  padding: 15px 0;
  margin: 0;
`
export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dfe0eb;
`
export const TextInfo = styled.p`
  width: 150px;
  color: rgba(17, 17, 17, 0.48);
  line-height: 35px;
`
export const BtnContainer = styled.div`
  display: flex;
  padding-top: 20px;
`

export const StyledLink = styled.a`
  text-decoration: none;
  color: green;
`
// color: ${({ color }) => (color ? color : `rgba(17, 17, 17, 0.48)`)};

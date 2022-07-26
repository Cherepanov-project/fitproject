import { GetServerSideProps } from "next"
import Image from "next/image"
import Link from "next/link"

// ui libs
import { Avatar, Button } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"

// image
import avatarUser from "@/common/images/userTableItem/avatarUser.jpg"

// components
import ColorfulTeg from "../../ColorfulTeg"

// styles
import {
  ContentWrapperUser,
  TitleHeader,
  UsersContainer,
  UserName,
  Title,
  InfoItem,
  TextInfo,
  BtnContainer,
  StyledLink,
} from "./pageUser.styles"
import { useEffect, useState } from "react"

// API
import { deleteUserById } from "@/API/users"
import { useRouter } from "next/router"

// models
import { initalStateUser } from "@/models/user/user"

// utils
import { getQueryStringParams } from "@/utils/subscribePageName"

const PageUser = props => {
  const router = useRouter()

  const [data, setData] = useState(initalStateUser)

  useEffect(() => {
    const { data } = getQueryStringParams(decodeURI(window.location.search))

    setData(() => JSON.parse(data))
  }, [])

  const deleteUser = async () => {
    const response = await deleteUserById(data.id)
    router.back()
  }

  return (
    <ContentWrapperUser>
      <TitleHeader>(Role) Profile</TitleHeader>
      <UsersContainer>
        <Avatar sx={{ height: "50px", width: "50px", marginRight: "10px" }}>
          <Image src={avatarUser} alt="avatar" />
        </Avatar>
        <UserName>{data.username}</UserName>
      </UsersContainer>
      <Title>User information</Title>
      <div className="InfoList">
        <InfoItem>
          <TextInfo>Name</TextInfo>
          <span>
            {data.firstName
              ? data.firstName + data.lastName
              : "Name is not specified"}
          </span>
        </InfoItem>
        <InfoItem>
          <TextInfo>Email</TextInfo>
          <span>{data.email ? data.email : "Email is not specified"}</span>
        </InfoItem>
        <InfoItem>
          <TextInfo>Phone</TextInfo>
          <span>{data.phone ? data.phone : "Phone is not specified"}</span>
        </InfoItem>
        <InfoItem>
          <TextInfo>Age</TextInfo>
          <span>{data.age ? data.age : "Age is not specified"}</span>
        </InfoItem>
        <InfoItem>
          <TextInfo>Gender</TextInfo>
          <span>{data.gender ? data.gender : "Gender is not specified"}</span>
        </InfoItem>
        <InfoItem>
          <TextInfo>Role</TextInfo>
          {data.coach ? (
            <ColorfulTeg backgroundColor="#F12B2C" text="admin" />
          ) : (
            <ColorfulTeg text="user" />
          )}
        </InfoItem>
      </div>
      <BtnContainer>
        <Link href={`/admin/users/`} passHref>
          <Button variant="outlined" startIcon={<ArrowBackIcon />}>
            Back
          </Button>
        </Link>
        <Button
          onClick={deleteUser}
          sx={{ margin: "0 30px" }}
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
        >
          delete
        </Button>

        <Link
          href={{
            pathname: `/admin/users/edit-form/${data.id}`,
            query: {
              data: JSON.stringify(data),
            },
          }}
          passHref
        >
          <Button variant="outlined" startIcon={<EditIcon />} color="success">
            Edit
          </Button>
        </Link>
      </BtnContainer>
    </ContentWrapperUser>
  )
}
export default PageUser

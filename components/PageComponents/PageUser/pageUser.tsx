import { GetServerSideProps } from "next"
import Image from "next/image"
import { Avatar, Button } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import Link from "next/link"

import avatarUser from "../../../components/UserTableItem/images/avatarUser.jpg"
import ColorfulTeg from "../../ColorfulTeg"
import {
    ContentWrapperUser,
    TitleHeader,
    UsersContainer,
    UserName,
    Title,
    InfoItem,
    TextInfo,
    BtnContainer,
} from "./pageUser.styles"

export const getServerSideProps: GetServerSideProps = async context => {
    return {
        props: { user: context.params.id },
    }
}

const PageUser = () => {
    return (
        <ContentWrapperUser>
            <TitleHeader>(Role) Profile</TitleHeader>
            <UsersContainer>
                <Avatar
                    sx={{ height: "50px", width: "50px", marginRight: "10px" }}
                >
                    <Image src={avatarUser}></Image>
                </Avatar>
                <UserName>Ivan Stepanov</UserName>
            </UsersContainer>
            <Title>User information</Title>
            <div className="InfoList">
                <InfoItem>
                    <TextInfo>Email</TextInfo>
                    <span>rasl@sd.rr</span>
                </InfoItem>
                <InfoItem>
                    <TextInfo>Phone</TextInfo>
                    <span>123213124</span>
                </InfoItem>
                <InfoItem>
                    <TextInfo>Password</TextInfo>
                    <span>123214124</span>
                </InfoItem>
                <InfoItem>
                    <TextInfo>Age</TextInfo>
                    <span>22</span>
                </InfoItem>
                <InfoItem>
                    <TextInfo>Gender</TextInfo>
                    <span>Man</span>
                </InfoItem>
                <InfoItem>
                    <TextInfo>Role</TextInfo>
                    <ColorfulTeg backgroundColor="#F12B2C" text="admin" />
                </InfoItem>
            </div>
            <BtnContainer>
                <Link href={`/admin/users/`}>
                    <Button variant="outlined" startIcon={<ArrowBackIcon />}>
                        Back
                    </Button>
                </Link>
                <Button
                    sx={{ margin: "0 30px" }}
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                >
                    delete
                </Button>
                <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    color="success"
                >
                    Edit
                </Button>
            </BtnContainer>
        </ContentWrapperUser>
    )
}
export default PageUser

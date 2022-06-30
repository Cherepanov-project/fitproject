import styled from "styled-components"

import SignUpForm from "../../components/FormAdmin/signUpForm"

const ContainerAdminRegistration = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #363740;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Admin = () => {
    return (
        <ContainerAdminRegistration>
            <SignUpForm />
        </ContainerAdminRegistration>
    )
}
export default Admin

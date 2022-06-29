import styled from "styled-components"
import SingInForm from "../../components/FormAdmin/singInForm"

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
            <SingInForm />
        </ContainerAdminRegistration>
    )
}

export default Admin

import styled from 'styled-components';
import SignUpForm from "../../common/form-admin/signUpForm";
import {QueryClient, QueryClientProvider} from "react-query";

const ContainerAdminRegistration = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #363740;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default function Admin() {
    return (
        <ContainerAdminRegistration>
            <SignUpForm/>
        </ContainerAdminRegistration>
    )
}

// Admin.getLayout = function PageLayout(page) {
//     return (
//         <>
//             {page}
//         </>
//     )
// };
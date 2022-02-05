import {FC} from 'react'
import Link from 'next/link'
import Image from "next/image";
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  width: 100%;
  padding:30px;
  background: #F7F8FC;
  display: flex;
  justify-content: space-between;
  align-self: center;
`;

const PageName = styled.div`
font-size:24px;
font-weight: bold;
`;

const DivAdminInformation = styled.div`
 display: flex;
 align-items: center;
`;

const DivInformation = styled.div`
  display: flex;
  border-right: 1px solid #DFE0EB;
  padding: 5px; 
  height: 32px;
  align-items: center;
`;

const DivAdmin = styled.div`
  display: flex;
  align-items: center;
  padding: 5px; 
`;

const Anavbar = styled.a`
  margin-right:24px;
  font-size: 14px;
`;

const ImagedLink = styled(Image)`
    border: 1px solid red;
    background: yellow;
`;

const Navbar: FC = () => {
    return (
        <NavbarWrapper>
            <PageName>
                Overview
            </PageName>
            <DivAdminInformation>
                <DivInformation>
                    <Link href='/'><Anavbar><ImagedLink src='/search.png' width='16' height='16' alt='search'/></Anavbar></Link>
                    <Link href='/'><Anavbar><Image src='/bell.png' width='16' height='16' alt='search'/></Anavbar></Link>
                </DivInformation>
                <DivAdmin>
                    <Link href='/'><Anavbar>Jones Ferdinand</Anavbar></Link>
                    <Image src='/sidebarIcons/photo_admin.png' width='40' height='40' alt='search'/>
                </DivAdmin>
            </DivAdminInformation>
        </NavbarWrapper>
    );
};

export default Navbar;
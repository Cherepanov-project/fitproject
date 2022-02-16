import {FC} from 'react'
import Link from 'next/link'
import {useRouter} from "next/router";
import Image from "next/image";
import styled from 'styled-components';
import Cookies from 'js-cookie';

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

const Navbar: FC = () => {

    // Cookies.set('auth-token', request.data.user.token);
    // Cookies.set('user', request.data.user);
  const {username,image} = JSON.parse(Cookies.get('user'));
  console.log(username,image);

    return (
        <NavbarWrapper>
            <PageName>
                Overview
            </PageName>
            <DivAdminInformation>
                <DivInformation>
                    <Link href='/'><Anavbar><Image src='/navbarIcons/search.png' width='16' height='16' alt='search'/></Anavbar></Link>
                    <Link href='/'><Anavbar><Image src='/navbarIcons/bell.png' width='16' height='16' alt='search'/></Anavbar></Link>
                </DivInformation>
                <DivAdmin>
                    <Link href='/'><Anavbar>{username}</Anavbar></Link>
                    <Image loader={()=>image} src={image} width='40' height='40' alt='search'/>
                </DivAdmin>
            </DivAdminInformation>
        </NavbarWrapper>
    );
};

export default Navbar;

export const getServerSideProps = async (context) => {
    console.log(context);
};
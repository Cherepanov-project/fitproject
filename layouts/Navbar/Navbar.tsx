import {FC, useState, useEffect} from 'react'
import Link from 'next/link'
import {useRouter} from "next/router";
import Image from "next/image";
import styled from 'styled-components';
import Cookies from 'js-cookie';
import PositionedMenu from "./dashboard";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import SearchAppBar from "./searchInput";
// import Search from '../../public/navbarIcons/search.png'

const NavbarWrapper = styled.nav`
  width: 100%;
  padding: 30px;
  background: #F7F8FC;
  display: flex;
  justify-content: space-between;
  align-self: center;
`;

const PageName = styled.div`
  font-size: 24px;
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
  padding-right: 24px;
`;

const DivAdmin = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const Anavbar = styled.a`
  margin-right: 14px;
  margin-left: 32px;
  font-size: 14px;
  font-weight: 500;
`;

const ImageAdmin = styled(Image)`
  border-radius: 20px;
`;


const Navbar: FC = () => {

    console.log('Navbar')

    const [username, setusername] = useState("admin")
    const [page, setPage] = useState("")

    useEffect(() => {
        const userNameCookies = Cookies.get('username');
        setusername(userNameCookies);
    }, []);

    useEffect(() => {
        setPage(Cookies.get('page'));
    }, [Cookies.get('page')]);

    const image = Cookies.get('image');


    return (
        <NavbarWrapper>
            <PageName>
                {page}
            </PageName>
            <DivAdminInformation>
                <DivInformation>
                    <SearchAppBar/>
                    <PositionedMenu/>
                </DivInformation>
                <DivAdmin>
                    <Link href='/'><Anavbar>{username}</Anavbar></Link>
                    <ImageAdmin loader={() => image} src='/sidebarIcons/articles.svg' width='40' height='40'
                                alt='search'/>
                </DivAdmin>
            </DivAdminInformation>
        </NavbarWrapper>
    );
};

export default Navbar;

export const getServerSideProps = async (context) => {
    console.log(context);
};
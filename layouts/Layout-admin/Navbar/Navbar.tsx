import {FC, useState, useEffect} from 'react'
import Link from 'next/link'
import {useRouter} from "next/router";
// OTHER LIBRARIES
import Cookies from 'js-cookie';
// CUSTOM COMPONENTS
import PositionedMenu from "./dashboard";
import SearchAppBar from "./searchInput";
// Icons
import imageAdmin from '../images/navbarIcons/photo_admin.png'

import {NavbarWrapper,PageName,DivAdmin,DivAdminInformation,DivInformation,ImageAdmin,Anavbar} from "./Navbar.styled";

const Navbar: FC = () => {

    const router = useRouter();
    const page = router.asPath.split('/').pop();

    console.log('Navbar');

    const [username, setusername] = useState("admin")

    useEffect(() => {
        const userNameCookies = Cookies.get('username');
        setusername(userNameCookies);
    }, []);

    const image = Cookies.get('image');


    return (
        <NavbarWrapper>
            <PageName>
                {(page[0].toUpperCase() + page.slice(1))}
            </PageName>
            <DivAdminInformation>
                <DivInformation>
                    <SearchAppBar/>
                    <PositionedMenu/>
                </DivInformation>
                <DivAdmin>
                    <Link href='/'><Anavbar>{username}</Anavbar></Link>
                    <ImageAdmin loader={() => image} src={imageAdmin} width='40' height='40'
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
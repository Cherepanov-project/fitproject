import {FC} from 'react'
import Link from 'next/link'
import Image from "next/image";
import styles from './navbar.module.scss';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  width: 100%;
  min-height: 100px;
  background: #F7F8FC;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Navbar:FC = () => {
  return (
    <NavbarWrapper className={styles.nav}>
      <div className={styles.overview}>
        Overview
      </div>
      <div>
        <Link href='/'><a className={styles.search}><Image src='/search.png' width='16' height='16' alt='search' />  </a></Link>
        <Link href='/'><a className={styles.bell}>Posts</a></Link>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
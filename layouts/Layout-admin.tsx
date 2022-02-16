import React, {FC, ReactNode, useState} from 'react'
import styled from 'styled-components';
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import AuthProvider from "../context/AuthProvider";
import useAuth from "../common/hooks/useAuth";
import {useRouter} from "next/router";
import Router from 'next/router'
import Link from 'next/link'
import Cookies from 'js-cookie';

type layoutAdminProps = {
    children: ReactNode;
}

const Container = styled.div`
  display: flex;
  width: 1440px;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  background-color: #F7F8FC;
`;


const LayoutAdmin: FC<layoutAdminProps> = ({children}) => {

    // const auth = useAuth();
    // const router = useRouter();
    //
    // console.log(auth.isLoaded);
    // console.log(auth.user);

    return (
        <Container>
            <Sidebar/>
            <Content>
                <header>
                    < Navbar/>
                </header>
                <main>
                    {children}
                </main>
            </Content>
        </Container>

    )
}

export default LayoutAdmin;

export const withLayout = (Component) => {

    class LayoutAdminComponent extends React.Component {

        componentDidMount(){
            if(!Cookies.get('auth-token')){
                Router.push('/admin')
            }
        }

        render() {
            return (
                <AuthProvider>
                    <LayoutAdmin>
                        <Component {...this.props}/>
                    </LayoutAdmin>
                </AuthProvider>
            )
        }
    }
    return LayoutAdminComponent;
}
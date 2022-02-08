import * as React from 'react';
import Head from 'next/head';
import styled from "styled-components";

const UserWrapper = styled.div`
	max-width: 1440px;
	background-color: #E5E5E5;
	padding 1rem;
	margin: 0 auto;
`;

type Props = {
	title?: string;
}

const Layout: React.FC<Props> = ({ children, title = 'default title' }) => (
	<>
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
		</Head>
		<UserWrapper>{children}</UserWrapper>
	</>
)

export default Layout;
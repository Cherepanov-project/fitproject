import * as React from "react"
import Head from "next/head"

import { IProps } from "./userLayout.interface"
import { UserWrapper } from "./userLayout.styles"
import { FontPoppins } from "@/utils/fonts/fontStyles"

const Layout: React.FC<IProps> = ({ children, title = "default title" }) => (
  <>
    <FontPoppins />
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <UserWrapper>{children}</UserWrapper>
  </>
)

export default Layout

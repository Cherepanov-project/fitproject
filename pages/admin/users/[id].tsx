import { GetServerSideProps } from "next"
import { withLayout } from "../../../containers/Layout-admin/Layout-admin"

import PageUser from "../../../components/page-components/PageUser/PageUser"

export const getServerSideProps: GetServerSideProps = async context => {
    return {
        props: { user: context.params.id },
    }
}

const UserIten = () => {
    return <PageUser />
}

export default withLayout(UserIten)

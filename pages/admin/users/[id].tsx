import { GetServerSideProps } from "next"

import { withLayout } from "../../../containers/Layout-admin/layoutAdmin"
import PageUser from "../../../components/PageComponents/PageUser/pageUser"

// export const getServerSideProps: GetServerSideProps = async context => {
//     return {
//         props: { user: context.params.id },
//     }
// }

const UserItem = () => {
    return <PageUser />
}

export default withLayout(UserItem)

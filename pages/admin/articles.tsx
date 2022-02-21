import {withLayout} from "../../layouts/Layout-admin/Layout-admin";

const Articles = () => {
    return (
        <div>
            Articles
        </div>
    );
};

export default withLayout(Articles);

// Articles.getLayout = function PageLayout(page) {
//     return(
//         <LayoutAdmin>
//             {page}
//         </LayoutAdmin>
//     )
// };
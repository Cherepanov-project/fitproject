import React from 'react';
import LayoutAdmin, {withLayout} from "../../layouts/Layout-admin/Layout-admin";

const Settings = () => {
    return (
        <div>
            Settings
        </div>
    );
};

export default withLayout(Settings);

Settings.getLayout = function PageLayout(page) {
    return(
        <LayoutAdmin>
            {page}
        </LayoutAdmin>
    )
};
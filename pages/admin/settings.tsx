import React from 'react';
import LayoutAdmin from "../../layouts/Layout-admin";

const Settings = () => {
    return (
        <div>
            Settings
        </div>
    );
};

export default Settings;

Settings.getLayout = function PageLayout(page) {
    return(
        <LayoutAdmin>
            {page}
        </LayoutAdmin>
    )
};
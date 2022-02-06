import React from 'react';
import LayoutAdmin from "../../layouts/Layout-admin";

const Users = () => {
    return (
        <div>
            Users
        </div>
    );
};

export default Users;

Users.getLayout = function PageLayout(page) {
    return(
        <LayoutAdmin>
            {page}
        </LayoutAdmin>
    )
};
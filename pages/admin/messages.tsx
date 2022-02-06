import React from 'react';
import LayoutAdmin from "../../layouts/Layout-admin";

const Messages = () => {
    return (
        <div>
            Messages
        </div>
    );
};

export default Messages;

Messages.getLayout = function PageLayout(page) {
    return(
        <LayoutAdmin>
            {page}
        </LayoutAdmin>
    )
};
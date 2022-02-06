import React from 'react';
import LayoutAdmin from "../../layouts/Layout-admin";

const Subscription = () => {
    return (
        <div>
            Subscription
        </div>
    );
};

export default Subscription;

Subscription.getLayout = function PageLayout(page) {
    return(
        <LayoutAdmin>
            {page}
        </LayoutAdmin>
    )
};
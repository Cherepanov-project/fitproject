import React, {FC} from 'react';
import {IsidebarMenuItem} from "./menu.interface";
import FpIcon from './icon/users.svg'

const sidebarMenu: IsidebarMenuItem[] = [
    {route: 'statistics', name: 'Statistics', icon: <FpIcon/>, id: 1},
    {route: 'users', name: 'Users', icon: <FpIcon/>, id: 2},
    {route: 'recipies', name: 'Recipies', icon: <FpIcon/>, id: 3},
    {route: 'exercises', name: 'Exercises', icon: <FpIcon/>, id: 4},
    {route: 'messages', name: 'Messages', icon: <FpIcon/>, id: 5},
    {route: 'articles', name: 'Articles', icon: <FpIcon/>, id: 6},
    {route: 'settings', name: 'Settings', icon: <FpIcon/>, id: 7},
    {route: 'subscription', name: 'Subscription', icon: <FpIcon/>, id: 8},
];

const Sidebar: FC = () => {

    const firstLavel = () => {
        return (
            <>
                {sidebarMenu.map(menu => (
                    <div key={menu.route}>
                        <a href={`/${menu.route}`}>
                            {menu.icon}
                            <span>{menu.name}</span>
                        </a>
                    </div>
                ))}
            </>
        )
    }


    const secondLavel = () => {
    }


    return (
        <div>
            <ul>
                {firstLavel()}
            </ul>
        </div>
    );
};

export default Sidebar;
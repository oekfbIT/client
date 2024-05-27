import React from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Menu, Tag } from "antd";

// Import different navigation configurations based on the section
import { navigation, teamNavigation, refereeNavigation } from "../../../../navigation/vertical";
// import { teamNavigation, refereeNavigation } from "../../../../navigation/vertical";

const { SubMenu } = Menu;

export default function MenuItem(props) {
    const history = useHistory();

    // Redux state access
    const customise = useSelector(state => state.customise);

    // Use React Router's location to handle active links
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    // Read the current section from session storage
    const currentSection = sessionStorage.getItem('current_section');

    // Determine which navigation array to use based on currentSection
    let activeNavigation;
    switch (currentSection) {
        case 'admin':
            activeNavigation = navigation;
            // activeNavigation = [];
            break;
        case 'team':
            activeNavigation = teamNavigation;
            break;
        case 'referee':
            activeNavigation = refereeNavigation;
            break;
        default:
        // Redirect to the root if the section is not recognized
        history.push('/');
        return null; // Prevent rendering while redirecting
    }

    // Generate menu items from the active navigation structure
    const menuItem = activeNavigation.map((item, index) => {
        if (item.header) {
            return <Menu.ItemGroup key={index} title={item.header}></Menu.ItemGroup>;
        }

        if (item.children) {
            return (
                <SubMenu key={item.id} icon={item.icon} title={item.title}>
                    {item.children.map((itemChildren) => {
                        if (!itemChildren.children) {
                            const childrenNavLink = itemChildren.navLink.split("/");

                            return (
                                <Menu.Item
                                    key={itemChildren.id}
                                    className={
                                        splitLocation[splitLocation.length - 2] +
                                        "/" +
                                        splitLocation[splitLocation.length - 1] ===
                                        childrenNavLink[childrenNavLink.length - 2] +
                                        "/" +
                                        childrenNavLink[childrenNavLink.length - 1]
                                            ? "ant-menu-item-selected"
                                            : "ant-menu-item-selected-in-active"
                                    }
                                    onClick={props}
                                >
                                    <Link to={itemChildren.navLink}>{itemChildren.title}</Link>
                                </Menu.Item>
                            );
                        } else {
                            return (
                                <SubMenu key={itemChildren.id} title={itemChildren.title}>
                                    {/*{itemChildren.children.map((childItem, index) => {*/}
                                    {itemChildren.children.map((childItem) => {
                                        const childrenItemLink = childItem.navLink.split("/");

                                        return (
                                            <Menu.Item
                                                key={childItem.id}
                                                className={
                                                    splitLocation[splitLocation.length - 2] +
                                                    "/" +
                                                    splitLocation[splitLocation.length - 1] ===
                                                    childrenItemLink[childrenItemLink.length - 2] +
                                                    "/" +
                                                    childrenItemLink[childrenItemLink.length - 1]
                                                        ? "ant-menu-item-selected"
                                                        : "ant-menu-item-selected-in-active"
                                                }
                                                onClick={props}
                                            >
                                                <Link to={childItem.navLink}>{childItem.title}</Link>
                                            </Menu.Item>
                                        );
                                    })}
                                </SubMenu>
                            );
                        }
                    })}
                </SubMenu>
            );
        } else {
            const itemNavLink = item.navLink ? item.navLink.split("/") : '';

            return (
                <Menu.Item
                    key={item.id}
                    icon={item.icon}
                    onClick={props}
                    className={
                        splitLocation[splitLocation.length - 2] +
                        "/" +
                        splitLocation[splitLocation.length - 1] ===
                        itemNavLink[itemNavLink.length - 2] +
                        "/" +
                        itemNavLink[itemNavLink.length - 1]
                            ? "ant-menu-item-selected"
                            : "ant-menu-item-selected-in-active"
                    }
                    style={item.tag && { pointerEvents: 'none' }}
                >
                    {
                        item.tag ? (
                            <a href="#" className="hp-d-flex hp-align-items-center hp-d-flex-between">
                                <span>{item.title}</span>
                                <Tag className="hp-mr-0 hp-border-none hp-text-color-black-100 hp-bg-success-3 hp-border-radius-full hp-px-8" style={{ marginRight: -14 }}>{item.tag}</Tag>
                            </a>
                        ) : (
                            <Link to={item.navLink}>{item.title}</Link>
                        )
                    }
                </Menu.Item>
            );
        }
    });

    return (
        <Menu
            mode="inline"
            defaultOpenKeys={[
                splitLocation.length === 5
                    ? splitLocation[splitLocation.length - 3]
                    : null,
                splitLocation[splitLocation.length - 2],
            ]}
            theme={customise.theme === "light" ? "light" : "dark"}
            className="hp-bg-black-20 hp-bg-dark-90"
        >
            {menuItem}
        </Menu>
    );
}
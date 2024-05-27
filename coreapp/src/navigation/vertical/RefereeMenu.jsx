import { Award } from 'iconsax-react';
import IntlMessages from "../../layout/components/lang/IntlMessages";

const refereeNavigation = [
    {
        id: "sidebar-ref-dashboard",
        title: <IntlMessages id="sidebar-ref-dashboard" />,
        icon: <Award size={18} />,
        navLink: "referee/dashboard", // Adjust the link as necessary
    },
    {
        id: "sidebar-assignments",
        title: <IntlMessages id="sidebar-assignments" />,
        icon: <Award size={18} />,
        navLink: "/referee/assignments", // Adjust the link as necessary
    }
];

export default refereeNavigation;

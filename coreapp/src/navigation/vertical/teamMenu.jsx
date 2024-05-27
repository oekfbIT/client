import { Award } from 'iconsax-react';
import IntlMessages from "../../layout/components/lang/IntlMessages";

const teamNavigation = [
    {
        id: "dashboard",
        title: <IntlMessages id="sidebar-team-dashboard" />,
        icon: <Award size={18} />,
        navLink: "/team/myteam/dashboard", // Adjust the link as necessary
    },
    {
        title: <IntlMessages id="sidebar-team-menu" />,
        icon: <Award size={18} />,
        children: [
            {
                id: "sidebar-kader",
                title: "Kader",
                navLink: "/team/myteam/kader",
            },
            {
                id: "sidebar-playerregister",
                title: "Spieler Anmelden",
                navLink: "/team/myteam/registerplayer",
            },
            {
                id: "sidebar-captain",
                title: "Kapitan ändern",
                navLink: "/team/myteam/captain",
            },
            {
                id: "sidebar-trainer",
                title: "Trainer ändern",
                navLink: "/team/myteam/trainer",
            },
        ],
    },
    {
        id: "transfers",
        title: "Transfers",
        icon: <Award size={18} />,
        navLink: "/team/transfers", // Adjust the link as necessary
    },
];

export default teamNavigation;

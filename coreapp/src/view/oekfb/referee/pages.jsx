import { Award } from 'iconsax-react';

import IntlMessages from "../../../layout/components/lang/IntlMessages";

const pages = [
    {
        header: <IntlMessages id="sidebar-headers-tools" />,
    },
    {
        id: "Admin",
        title: <IntlMessages id="sidebar-headers-tools" />,
        icon: <Award size={18} />,
        children: [
            {
                id: "components-page",
                title: "All Components",
                navLink: "/pages/tools/components_overview",
            },
            {
                id: "sample-page",
                title: "Sample Page",
                navLink: "/pages/invoice/",
            }
        ],
    },
];
export default pages
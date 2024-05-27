import { Award } from 'iconsax-react';

import IntlMessages from "../../layout/components/lang/IntlMessages";

const pages = [
    {
        header: <IntlMessages id="sidebar-headers-tools" />,
    },
    {
        id: "MEINE MANNSCHAFT",
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
            },
            {
                id: "knowledgeBase",
                title: "Knowledge Base",
                navLink: "/knowledgeBase/",
            }
        ],
    },
    // {
    //     header: <IntlMessages id="sidebar-pages-library" />,
    // },
    // {
    //     id: "library",
    //     title: <IntlMessages id="sidebar-pages-library" />,
    //     icon: <Award size={18} />,
    //     children: [
    //         {
    //             id: "error-404",
    //             title: "Categories",
    //             navLink: "/pages/error-404",
    //         },
    //         {
    //             id: "error-404",
    //             title: "Warehouses",
    //             navLink: "/pages/error-404",
    //         },
    //         {
    //             id: "error-404",
    //             title: "Collections",
    //             navLink: "/pages/error-404",
    //         },
    //         {
    //             id: "error-404",
    //             title: "Marketing",
    //             navLink: "/pages/error-404",
    //         },
    //     ],
    // }
];

export default pages


// const pages = [
//     {
//         header: <IntlMessages id="sidebar-headers-tools" />,
//     },
//     {
//         id: "Sample",
//         title: <IntlMessages id="sidebar-headers-tools" />,
//         icon: <Award size={18} />,
//         children: [
//             {
//                 id: "components-page",
//                 title: "All Components",
//                 navLink: "/pages/tools/components_overview",
//             },
//             {
//                 id: "sample-page",
//                 title: "Sample Page",
//                 navLink: "/pages/invoice/",
//             },
//             {
//                 id: "knowledgeBase",
//                 title: "Knowledge Base",
//                 navLink: "/knowledgeBase/",
//             }
//         ],
//     },
//     // {
//     //     header: <IntlMessages id="sidebar-pages-library" />,
//     // },
//     // {
//     //     id: "library",
//     //     title: <IntlMessages id="sidebar-pages-library" />,
//     //     icon: <Award size={18} />,
//     //     children: [
//     //         {
//     //             id: "error-404",
//     //             title: "Categories",
//     //             navLink: "/pages/error-404",
//     //         },
//     //         {
//     //             id: "error-404",
//     //             title: "Warehouses",
//     //             navLink: "/pages/error-404",
//     //         },
//     //         {
//     //             id: "error-404",
//     //             title: "Collections",
//     //             navLink: "/pages/error-404",
//     //         },
//     //         {
//     //             id: "error-404",
//     //             title: "Marketing",
//     //             navLink: "/pages/error-404",
//     //         },
//     //     ],
//     // }
// ];
//
// export default pages


// {
//     id: "blank-page",
//     title: <IntlMessages id="sidebar-pages-blank-page" />,
//     icon: <Award size={18} />,
//     navLink: "/pages/blank-page",
// },

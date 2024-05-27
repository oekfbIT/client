import pages from "./pages";
import teamNavigation from "./teamMenu";
import refereeNavigation from "./RefereeMenu";

// Use the imported navigations directly or transform them if needed
const navigation = [...pages];  // Assuming 'pages' is an array you want to spread into 'navigation'

// Appropriately renamed to avoid conflict and clearly indicate they are imported
const teamNav = [...teamNavigation];
const refereeNav = [...refereeNavigation];

// Export each navigation setup as named exports
export { navigation, teamNav as teamNavigation, refereeNav as refereeNavigation };

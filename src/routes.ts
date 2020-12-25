import { HomePage } from "./pages/home";
import { ProfilePage } from "./pages/profile";

export const routes = [
    { path: "/", component: HomePage, exact: true },
    { path: "/home", component: HomePage, exact: true },
    { path: "/profile", component: ProfilePage, exact: true },
    { path: "/:id", component: HomePage, exact: false },
];

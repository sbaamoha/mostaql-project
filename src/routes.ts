// import Dashboard from "./pages/Dashboard";
import Demands from "./pages/Demands";
import Main from "./pages/Main";

export const routes: RoutesType = [
  { path: "/", component: Main },
  { path: "/main", component: Main },
  { path: "/demands", component: Demands },
];

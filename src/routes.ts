// import Dashboard from "./pages/Dashboard";
import Bucket from "./pages/Bucket";
import Data from "./pages/Data";
import Demands from "./pages/Demands";
import Main from "./pages/Main";
import Processes from "./pages/Processes";
import Settings from "./pages/Settings";

export const routes: RoutesType = [
  { path: "/", component: Main },
  { path: "/main", component: Main },
  { path: "/demands", component: Demands },
  { path: "/data", component: Data },
  { path: "/processes", component: Processes },
  { path: "/bucket", component: Bucket },
  { path: "/settings", component: Settings },
];

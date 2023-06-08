import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
// import ForgotPassword from "./pages/forgotPassword";
// import Login from "./pages/login";
// import Profile from "./pages/profile";
// import Signup from "./pages/signup";

export const routes: RoutesType = [
  { path: "/", component: Dashboard },
  { path: "/main", component: Main },
  //   { path: "/Profile", component: Profile },
  //   { path: "/signup", component: Signup },
  //   { path: "/dashboard", component: Dashboard },
  //   { path: "/forgot-password", component: ForgotPassword },
];


import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Error from "../Pages/Error";
import User from "../Pages/User";
import ListDisplay from "../Pages/ListDisplay";


const publicRoutes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/login", component: Login },
  { path: "/listdisplay", component: ListDisplay },
  { path: "/user/:id", component: User },
  { path: "*", component: Error },
];

export { publicRoutes };

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import { navLinks } from "./utils/utils";
import { useState } from "react";
function App() {
  const currentPage = navLinks.filter(
    (link) => link.url === window.location.href.split("/")[3]
  );
  const [activeLink, setactiveLink] = useState(currentPage[0].name);
  const [sideBarOpen, setsideBarOpen] = useState(false);
  const setactiveLinkFunction = (value: string) => {
    setactiveLink(value);
  };

  const sideBarToggle = (value: boolean) => {
    setsideBarOpen(value);
  };

  return (
    <>
      <BrowserRouter>
        <div className="flex items-start">
          <Sidebar
            sideBarToggle={sideBarToggle}
            sideBarOpen={sideBarOpen}
            activeLink={activeLink}
            setactiveLink={setactiveLinkFunction}
          />
          <div className="w-full">
            <Navbar sideBarToggle={sideBarToggle} activeLink={activeLink} />
            <Routes>
              {routes.map(({ path, component }, i) => (
                <Route key={i} path={path} Component={component} />
              ))}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

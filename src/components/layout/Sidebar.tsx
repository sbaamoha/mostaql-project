import { Link } from "react-router-dom";
import { navLinks } from "../../utils/utils";
import { BiMenuAltRight } from "react-icons/bi";
interface SidebarProps {
  sideBarOpen: boolean;
  sideBarToggle: (status: boolean) => void;
  activeLink: string;
  setactiveLink: (value: string) => void;
}

export default function Sidebar({
  sideBarOpen,
  activeLink,
  setactiveLink,
  sideBarToggle,
}: SidebarProps) {
  return (
    <nav
      className={`absolute -right-[100%] z-10 ${
        sideBarOpen && "right-0"
      } md:relative md:right-0 p-6 w-1/2 md:w-1/5 transition-all bg-lightGray md:flex  h-[120vh] `}
    >
      {sideBarOpen && (
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => sideBarToggle(false)}
        >
          <BiMenuAltRight />
        </div>
      )}
      <ul className="flex flex-col justify-between">
        <div>
          <div className="py-8 pb-12">
            <img src="/logo.svg" alt="logo" />
          </div>
          {navLinks.map((link, i) => (
            <Link
              key={i}
              onClick={() => setactiveLink(link.name)}
              to={`/${link.url}`}
              //   to={`#`}
            >
              <li
                className={`flex items-center gap-3 py-4 px-4 rounded-lg ${
                  activeLink === link.name
                    ? `bg-primary text-white`
                    : `text-gray`
                } `}
              >
                <img src={link.img} alt={link.name} />
                {link.name}
              </li>
            </Link>
          ))}
        </div>
        <div className="">
          <li
            className={`flex items-center gap-3 py-4 px-4 rounded-lg text-gray cursor-pointer`}
          >
            <img src="/sidebar7.svg" alt="الدعم والمساعدة" />
            الدعم والمساعدة
          </li>
          <li
            className={`flex items-center gap-3 py-4 px-4 rounded-lg text-gray cursor-pointer`}
          >
            <img src="/sidebar8.svg" alt="تسجيل الخروج" />
            تسجيل الخروج
          </li>
        </div>
      </ul>
    </nav>
  );
}

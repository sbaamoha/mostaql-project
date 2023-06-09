import { AiOutlineMenu } from "react-icons/ai";

interface NavbarProps {
  activeLink: string;
  sideBarToggle: (status: boolean) => void;
}

export default function Navbar({ activeLink, sideBarToggle }: NavbarProps) {
  return (
    <div className="p-6 flex items-center justify-between gap-3 w-full">
      <div
        onClick={() => sideBarToggle(true)}
        className="md:hidden cursor-pointer ml-3"
      >
        <AiOutlineMenu />
      </div>
      <h2 className="lg:text-2xl">{activeLink}</h2>
      <div className="flex items-center gap-1 md:gap-3 cursor-pointer">
        <img src="/search.svg" alt="search" />
        <img src="/notifications.svg" alt="notification" />
        <div className="flex items-center gap-2 bg-lightGray py-2">
          <img src="/avatar.svg" alt="avatar" />
          <h2 className="hidden md:inline-block">محمد حسان</h2>
          <img src="/dropdown.svg" alt="dropdown" />
        </div>
      </div>
    </div>
  );
}

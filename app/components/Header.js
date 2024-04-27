import Link from "next/link";
import { FaTicketAlt, FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="bg-header flex justify-between items-center p-3">
      <div className="flex gap-3 items-center">
        <Link href="/" className="text-default text-xl bg-blue-accent hover:bg-blue-accent-hover tracking-wider w-full text-center  font-bold uppercase px-3 py-1 cursor-pointer rounded-md transition-colors duration-300 block">
          <FaHome />
        </Link>

        <Link href="/TicketPage/new" className="text-default text-xl   bg-blue-accent hover:bg-blue-accent-hover tracking-wider w-full text-center  font-bold uppercase px-3 py-1 cursor-pointer rounded-md transition-colors duration-300 block">
          <FaTicketAlt  />
        </Link>
      </div>

      <div>
        <p className="text-default">abood@gmail.com</p>
      </div>
    </nav>
  );
};

export default Header;

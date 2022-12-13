import { Link, useLocation } from "react-router-dom";
import SciCalImage from "../Images/sciencecalendar.mast.gif";
// import Button from "./Button";

export default function Header({ signOut }) {
  const { pathname } = useLocation();

  const activeLink = (path) => {
    return pathname === path ? "text-blue-900 font-bold" : "text-gray-500";
  };

  return (
    <header className="w-full bg-white text-white border-b border-gray-500">
      <nav className="container mx-auto max-w-6xl flex justify-between py-2 px-4">
        <img src={SciCalImage} alt="Johns Hopkins Science Calendar letters." />
        <ul className="flex items-center">
          <li className={`${activeLink("/")} mr-3`}>
            <Link to="/">All Events</Link>
          </li>
          <li className={`${activeLink("/events/new")} mr-3`}>
            <Link to="/events/new">Submit an event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

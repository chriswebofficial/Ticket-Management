import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800">
      <div className="flex items-center space-x-4 ">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="text-amber-500 text-2xl" />
        </Link>
        <Link href="/TicketPage">
          <FontAwesomeIcon
            icon={faTicket}
            className="text-amber-500 text-2xl"
          />
        </Link>
      </div>

      <div>
        <p className="text-amber-50">chris@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;

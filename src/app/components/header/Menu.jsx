import React from "react";
import Link from "next/link";

function Menu(props) {
  return (
    <div className="menu-container">
      <ul className="list-menu">
        <li>
          <Link href="#">about us</Link>
        </li>
        <li>
          <Link href="/register">become a trader</Link>
        </li>
        <li>
          <Link href="/register">become an investor</Link>
        </li>
        <li>
          <Link href="/login">login</Link>
        </li>
        <li className="text-center">
          <Link href="/register" className="get-started">
            get started
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;

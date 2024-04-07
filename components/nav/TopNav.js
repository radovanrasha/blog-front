"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "../theme/ThemeToggle";

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="topnav">
      <div className="menu">
        <div className="hamburger" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
        <div className={`nav-left ${isMenuOpen ? "show" : ""}`}>
          <Link className="nav-item" href={"/"}>
            Home
          </Link>
          <Link className="nav-item" href={"/blogs"}>
            Blogs
          </Link>
          <Link className="nav-item" href={"/create"}>
            Create
          </Link>
          <Link className="nav-item" href={"/about"}>
            About me
          </Link>
        </div>
      </div>
      <div className="nav-right">
        <Link className="reg-item" href={"/auth"}>
          <button className="reg-button">
            <span>Sign in</span>
          </button>
        </Link>
        <ThemeToggle></ThemeToggle>
      </div>
    </nav>
  );
}

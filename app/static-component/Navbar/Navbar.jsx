"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import logo from "@/app/images/Connect-events.png";

const NavBar = () => {
  const links = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 3,
      name: "Events",
      link: "../services/event",
    },
    {
      id: 4,
      name: "Branding",
      link: "../services/branding",
    },
    {
      id: 5,
      name: "Activation",
      link: "../services/activation",
    },
    {
      id: 6,
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <nav className="bg-black text-white h-[60px] items-center flex justify-center ">
      <div className="flex justify-between items-center h-[60px] w-11/12">
        <div className="text-white font-bold">
          <Link href="/">
            <Image
              src={logo}
              priority
              alt="logo"
              width={"auto"}
              height={"auto"}
              className="w-[190px] h-full"
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {links.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </div>
        <div className="md:hidden">
          <MobileMenuIcon links={links} />
        </div>
      </div>
    </nav>
  );
};

// MobileMenuIcon component
const MobileMenuIcon = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cursor-pointer text-white p-4" onClick={handleToggle}>
      <FaBars size={24} />
      {isOpen && (
        <div className="absolute top-[60px] left-0 bg-black z-10 w-full">
          {links.map((item) => (
            <NavItem key={item.id} item={item} isMobile href />
          ))}
        </div>
      )}
    </div>
  );
};

// NavItem component
const NavItem = ({ item, isMobile }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleSubmenuToggle = () => {
    if (!isMobile) {
      setIsSubmenuOpen(!isSubmenuOpen);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsSubmenuOpen(false);
    }
  };

  return (
    <div
      className={`relative group ${
        isMobile
          ? " cursor-pointer ml-5 mb-8 "
          : "hover:text-[#000000] hover:bg-slate-100 px-4 py-2"
      }`}
      onClick={handleSubmenuToggle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={isMobile ? item.link : item.link}>{item.name}</Link>
    </div>
  );
};

export default NavBar;

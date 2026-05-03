"use client";

import { Bars } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";
import NavLink from "./NavLink";

const navLinks = (
  <>
    <li>
      <NavLink href={"/"}>Home</NavLink>
    </li>
    <li>
      <NavLink href={"/all-images"}>All Courses</NavLink>
    </li>
    <li>
      <NavLink href={"/pricing"}>Pricing</NavLink>
    </li>
    <li>
      <NavLink href={"/profile"}>Profile</NavLink>
    </li>
  </>
);

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-[#00000010] dark:bg-slate-900/70 border-b border-white/20">
      <nav className="flex justify-between items-center py-3 px-3 md:px-6 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="cursor-pointer">
          <Link href="/" className="flex gap-2 items-center">
            <h3 className="font-extrabold text-xl bg-linear-to-r from-[#5271FF] to-indigo-400 bg-clip-text text-transparent">
              CodeAloy
            </h3>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks}
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href={"/signin"}>
            <Button
              variant="outline"
              className="border-[#5271FF] text-[#5271FF] hover:bg-[#5271FF] hover:text-white transition-all duration-300 rounded-xl px-5"
            >
              SignIn
            </Button>
          </Link>

          <Link href={"/signup"}>
            <Button className="bg-[#5271FF] text-white hover:bg-[#3f5ce0] transition-all duration-300 rounded-xl px-5 shadow-lg shadow-[#5271FF]/30">
              SignUp
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="p-2 rounded-lg border border-gray-300 dark:border-gray-700">
            <Bars />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden pl-8 list-none pb-4 space-y-3 flex flex-col gap-2 text-sm font-medium">
        {navLinks}

        <div className="flex gap-2 pt-2">
          <Link href={"/login"} className="w-full">
            <Button
              variant="outline"
              className="w-full border-[#5271FF] text-[#5271FF] hover:bg-[#5271FF] hover:text-white rounded-xl"
            >
              SignIn
            </Button>
          </Link>

          <Link href={"/registration"} className="w-full">
            <Button className="w-full bg-[#5271FF] text-white hover:bg-[#3f5ce0] rounded-xl">
              SignUp
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

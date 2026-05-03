"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import NavLink from "./NavLink";

const navLinks = (
  <>
    <li>
      <NavLink href="/">Home</NavLink>
    </li>
    <li>
      <NavLink href="/all-images">All Courses</NavLink>
    </li>
    <li>
      <NavLink href="/pricing">Pricing</NavLink>
    </li>
    <li>
      <NavLink href="/profile">Profile</NavLink>
    </li>
  </>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-linear-to-b from-slate-900 via-slate-950 to-black text-white">
      <nav className="flex justify-between items-center py-3 px-3 md:px-6 max-w-7xl mx-auto w-full">
        <Link href="/" className="flex items-center">
          <h3 className="font-extrabold text-2xl bg-linear-to-r from-[#5271FF] to-indigo-400 bg-clip-text text-transparent">
            CodeAloy
          </h3>
        </Link>

        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/signin">
            <Button
              variant="bordered"
              className="border-[#5271FF] text-[#5271FF] hover:bg-[#5271FF] hover:text-white rounded-xl px-5"
            >
              SignIn
            </Button>
          </Link>

          <Link href="/signup">
            <Button className="bg-[#5271FF] text-white hover:bg-[#3f5ce0] rounded-xl px-5 shadow-lg shadow-[#5271FF]/30">
              SignUp
            </Button>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg border border-gray-700"
          >
            <TiThMenu />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 flex flex-col text-sm font-medium bg-slate-900 border-t border-white/10">
          {navLinks}

          <div className="flex gap-2 pt-2">
            <Link href="/signin" className="w-full">
              <Button
                variant="bordered"
                className="w-full border-[#5271FF] text-[#5271FF] hover:bg-[#5271FF] hover:text-white rounded-xl"
              >
                SignIn
              </Button>
            </Link>

            <Link href="/signup" className="w-full">
              <Button className="w-full bg-[#5271FF] text-white hover:bg-[#3f5ce0] rounded-xl">
                SignUp
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

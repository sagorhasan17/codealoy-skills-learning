"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
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
      <NavLink href="/all-courses">All Courses</NavLink>
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
  const userInfo = authClient.useSession();
  const user = userInfo.data?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

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
          {user ? (
            <div className="flex items-center gap-3">
              <h2>
                hello,{" "}
                <span className="text-[#5271FF] font-bold">{user.name}</span>
              </h2>
              <Avatar>
                <Avatar.Image
                  alt={user.name || "User Avatar"}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user.name?.charAt(0) || "U"}</Avatar.Fallback>
              </Avatar>
              <Button
                onClick={handleLogout}
                variant="bordered"
                className="border-red-500 text-white hover:bg-gray-500 transition delay-100 bg-red-500 hover:text-white rounded-xl px-5 cursor-pointer"
              >
                SignOut
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
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
          )}
        </div>
        {/* for mobile device */}
        <div className="md:hidden flex items-center gap-3">
          <div className=" md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <h2>
                  hello,{" "}
                  <span className="text-[#5271FF] font-bold">{user.name}</span>
                </h2>
                <Avatar>
                  <Avatar.Image
                    alt={user.name || "User Avatar"}
                    src={user?.image || "https://i.pravatar.cc/150?img=3"}
                  />
                  <Avatar.Fallback>
                    {user.name?.charAt(0) || "U"}
                  </Avatar.Fallback>
                </Avatar>
              </div>
            ) : (
              <div className="flex items-center gap-3">
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
            )}
          </div>
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
            {user ? (
              <Button
                onClick={handleLogout}
                variant="bordered"
                className="border-red-500 text-white hover:bg-gray-500 transition delay-100 bg-red-500 hover:text-white rounded-xl px-5 cursor-pointer"
              >
                SignOut
              </Button>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

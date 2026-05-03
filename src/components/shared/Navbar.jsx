"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        <div className="cursor-pointer">
          <Link href="/" className="flex gap-2 items-center">
            <h3 className="font-black text-lg">CodeAloy</h3>
          </Link>
        </div>

        <ul className="flex items-center gap-5 text-sm">
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
        </ul>

        <div className="flex gap-4">
          <ul className="flex items-center gap-2 text-sm">
            <li>
              <Link href={"/registration"}>
                <Button>SignUp</Button>
              </Link>
            </li>
            <li>
              <Link href={"/login"}>
                <Button>SignIn</Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href, classList }) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`${classList} ${isActive ? "text-[#5271FF] border-b border-[#5271FF] pb-1" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;

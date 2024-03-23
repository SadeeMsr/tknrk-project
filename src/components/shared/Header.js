"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";
import { AcmeLogo } from "./AcmeLogo";
import { menuItems } from "@/data/navbarLinks";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      maxWidth="xl"
      className="h-28 flex flex-col justify-center"
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit uppercase text-red-500">tknrk</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        {menuItems.map((item) => (
          <NavbarItem key={item.id} className="hidden lg:flex">
            <Link
              className="pe-3 font-light ul_hover_effect"
              href="#"
              size="lg"
            >
              {item.navName}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem className="flex w-full" key={item.id}>
            <Link
              className="w-full text-sm py-3 border-b text-slate-800"
              href="#"
              size="lg"
            >
              {item.navName}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

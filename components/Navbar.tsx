"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "/public/logo.png";
import { routes } from "@/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import { cn } from "@/lib/utils";
import { Switch } from "./ui/switch";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | null>("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#172223";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#fff";
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={cn(
        "border-b-[1px] border-[#2F2F2F38] dark:border-[#828282CC]",
        isNavShowing ? "pb-5" : ""
      )}
    >
      <div className="my_container md:py-8 flex flex-col md:flex-row justify-between gap-3 md:items-center">
        <div className="flex justify-between items-center">
          <Image
            src={Logo}
            alt=""
            height={100}
            className="object-cover"
            width={100}
          />
          <div
            className="md:hidden dark:text-white"
            onClick={() => setIsNavShowing((prev: boolean) => !prev)}
          >
            <button className="text-[1.5rem]">
              {isNavShowing ? <LiaTimesSolid /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>
        <ul
          // className={cn(
          //   "flex flex-col ease-in-out items-start gap-2 md:flex-row md:gap-3 md:items-center transition duration-300",
          //   isNavShowing ? "h-auto" : "h-0 md:h-auto overflow-hidden"
          // )}
          style={{
            transition: "all 350ms ease-in-out",
          }}
          className={cn(
            "flex flex-col ease-in-out pt-3 md:pt-0 items-start md:items-center bg-white md:bg-transparent dark:bg-[#172C2E] md:dark:bg-transparent px-3 md:px-0 gap-2 md:flex-row md:gap-3 rounded-md transition duration-300",
            "overflow-hidden", // Add overflow-hidden to hide content when height is 0
            {
              "h-auto gap-4": isNavShowing, // Set height to auto when isNavShowing is true
              "h-0 md:h-auto": !isNavShowing, // Set height to 0 when isNavShowing is false
            }
          )}
        >
          {routes.map((route, index) => (
            <li key={index}>
              <Link className="dark:text-white" href={route.path}>
                {route.title}
              </Link>
            </li>
          ))}
          <div className="flex self-center flex-col md:flex-row pt-7 md:pt-0 w-full items-start gap-4 border-t-[1px] border-red md:border-t-0 md:w-auto md:items-center">
            <Button
              asChild
              className="border-darkSlateBlue dark:border-white dark:text-white rounded-lg border"
            >
              <Link href={"/helper"}>Become a helper</Link>
            </Button>
            <Button asChild className="bg-teal rounded-lg text-white">
              <Link href={"/helpee"}>Become a helpee</Link>
            </Button>
            <Switch
              id="theme"
              className="bg-teal"
              onClick={handleThemeSwitch}
            />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

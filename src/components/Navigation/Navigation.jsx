import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navigation() {
  const items = [
    {
      name: "About",
      slug: "/",
      id: 1,
    },
    {
      name: "Skills",
      slug: "/Skills",
      id: 2,
    },
    {
      name: "Services",
      slug: "/Services",
      id: 3,
    },
    {
      name: "Portfolio",
      slug: "/Portfolio",
      id: 4,
    },
    {
      name: "Testimonials",
      slug: "/Testimony",
      id: 5,
    },
    {
      name: "Contact",
      slug: "/Contact",
      id: 6,
    },
  ];

  return (
    <header>
      <nav>
        <div className="text-white  flex justify-end pr-4 text-[1.4rem] absolute right-0 pt-2 md:hidden">
          <a href="/">
            <GiHamburgerMenu />
          </a>
        </div>
        <div className="hidden md:flex items-center">
          <div className="mr-8">
            <p className="md:text-4xl text-xl text-primary font-extrabold">
              Shan<span className="text-[#8583e1]">.</span>CV
            </p>
          </div>
          <div className="">
            <ul className="flex">
              {items.map((item) => (
                <Link to={item.slug} key={item.id}>
                  <li className="border-r-[1px] p-3 bg-[#100f3a] text-white text-[13px]">
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

import React from "react";
import ComposentInfoGen from "../ComposentInfoGeneral/ComposentInfoGen";

export default function PortfolioSection() {
  return (
    <div className="flex">
      <ComposentInfoGen />
      <div className="w-full max-h-screen bg-[#f5f0f0] container">
        <div className="pt-24">
          <h1 className="text-[4.5rem] font-extrabold text-primary ">
            Mon Portfolio
          </h1>
          <ul className="flex gap-7 font-semibold pt-6">
            <li className="text-primary">
              <a href="/Portfolio">Tous</a>
            </li>
            <li className="text-secondary-light">
              <a href="/Portfolio">React</a>
            </li>
            <li className="text-secondary-light">
              <a href="/Portfolio">PHP/Laravel</a>
            </li>
          </ul>
        </div>
        <div className="flex pt-9 gap-14">
          <a href="/Portfolio">
            <img
              src="img/doberm.jpg"
              alt="chien"
              className="w-[18rem] h-[20rem] hover:scale-[0.95]"
            />
          </a>
          <a href="/Portfolio">
            <img
              src="img/tupac.jpg"
              alt="tupac"
              className="w-[18rem] h-[20rem] hover:scale-[0.95]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

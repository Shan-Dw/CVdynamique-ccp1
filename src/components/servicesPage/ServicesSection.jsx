import React from "react";
import ComposentInfoGen from "../ComposentInfoGeneral/ComposentInfoGen";
import ServicesComponents from "./ServicesComponents";

export default function ServicesSection() {
  return (
    <div className="md:flex">
      <ComposentInfoGen />
      <div className="md:max-w-[80%] md:max-h-screen bg-[#f5f0f0] container ">
        <div className="pt-24">
          <h2 className="md:text-[1.1rem] font-semibold leading-[1px] text-secondary-light">
            Ce que je vous offre
          </h2>
        </div>
        <div className="pb-16">
          <h1 className="md:text-[4.5rem] text-[3rem] font-extrabold text-primary ">
            Mes Services
          </h1>
        </div>
        <ServicesComponents />
      </div>
    </div>
  );
}

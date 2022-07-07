import React from "react";
import ComposentInfoGen from "../ComposentInfoGeneral/ComposentInfoGen";
import ServicesComponents from "./ServicesComponents";

export default function ServicesSection() {
  return (
    <div className="flex">
      <ComposentInfoGen />
      <div className="max-w-[80%] max-h-screen bg-[#f5f0f0] container ">
        <div className="pt-24">
          <h2 className="text-[1.1rem] font-semibold leading-[1px] text-secondary-light">
            Ce que je vous offre
          </h2>
        </div>
        <div className="pb-16">
          <h1 className="text-[4.5rem] font-extrabold text-primary ">
            Mes Services
          </h1>
        </div>
        <ServicesComponents />
      </div>
    </div>
  );
}

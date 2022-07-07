import React from "react";
import TestimonyCard from "./TestimonyCard";
import ComposentInfoGen from "../ComposentInfoGeneral/ComposentInfoGen";

export default function TestimonySection() {
  return (
    <div className="flex">
      <ComposentInfoGen />
      <div className="w-full max-h-screen bg-[#f5f0f0] container ">
        <div className="pt-24">
          <h2 className="text-[1.1rem] font-semibold leading-[1px] text-secondary-light">
            Ce que les clients disent
          </h2>
        </div>
        <div>
          <h1 className="text-[4.5rem] font-extrabold text-primary ">
            Témoignages
          </h1>
        </div>
        <TestimonyCard />
      </div>
    </div>
  );
}

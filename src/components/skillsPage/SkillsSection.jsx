import React from "react";
import SkillsProgress from "./SkillsProgress";
import ComposentInfoGen from "../ComposentInfoGeneral/ComposentInfoGen";

export default function SkillsSection() {
  return (
    <div className="md:flex">
      <ComposentInfoGen />
      <div className="md:w-full md:max-h-screen bg-[#f5f0f0] container pb-10 mb:pb-0 ">
        <div className="pt-24">
          <h2 className="md:text-[1.1rem] font-semibold leading-[1px] text-secondary-light">
            Ce que je fais bien
          </h2>
        </div>
        <div>
          <h1 className="md:text-[4.5rem] text-[2rem] font-extrabold text-primary ">
            Mes compétences
          </h1>
        </div>
        <p className="text-secondary-light text-[0.8rem] py-14">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          aliquam quos aperiam doloremque porro expedita quas adipisci, ad
          voluptas ab mollitia culpa laborum magnam nulla commodi officia natus
          eveniet id!
        </p>
        <SkillsProgress />
      </div>
    </div>
  );
}

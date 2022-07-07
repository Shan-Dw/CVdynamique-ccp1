import React from "react";
import ComposentInfoGen from "../ComposentInfoGeneral/ComposentInfoGen";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <div>
      <div className="md:flex">
        <ComposentInfoGen />
        <div className="md:w-full md:max-h-screen bg-[#f5f0f0] container  ">
          <div className="pt-24">
            <h1 className="md:text-[4.5rem] text-[2.8rem] font-extrabold text-primary ">
              Contactez-Moi
            </h1>
            <p className="text-secondary-light text-[0.9rem] pb-14">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              pariatur ut, similique eos excepturi numquam autem nostrum nisi
              quam aperiam. Officia corrupti voluptate cum distinctio itaque
              earum quos voluptatibus amet!
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}

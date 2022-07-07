import React from "react";
import ComposentInfoGen from "../ComposentInfoGeneral/ComposentInfoGen";
import HomeProgress from "./HomeProgress";

export default function HomeSection() {
  return (
    <div className="md:flex">
      <ComposentInfoGen />
      <div className="max-w-[80%] max-h-screen bg-[#f5f0f0] container ">
        <div className="pt-24">
          <h2 className="text-[1.5rem] font-semibold leading-[1px] text-secondary-light">
            Développeur full stack
          </h2>
        </div>
        <div>
          <h1 className="text-[5rem] font-extrabold text-primary ">
            Shan Leweurs
          </h1>
        </div>
        <div>
          <h3 className="pb-8 pt-10 text-[1.4rem] font-bold text-primary">
            Description
          </h3>
          <p className="text-secondary-light text-[0.8rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            dolorum saepe assumenda dolores quia aut adipisci obcaecati quasi,
            incidunt beatae voluptatum omnis facere ducimus vel voluptatibus
            asperiores quas molestias hic? Dolore quos porro sint nesciunt
            perspiciatis ut quam voluptate magnam odio! Fugit incidunt
            temporibus tempora, il est sed dolores fugiat maiores repudiandae
            omnis perferendis culpa libero porro optio quae, commodi quas cum
            fuga! Vitae, tempora saepe!
          </p>
          <HomeProgress />
        </div>
      </div>
    </div>
  );
}

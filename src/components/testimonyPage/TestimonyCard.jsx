import React from "react";

export default function TestimonyCard() {
  const customerCards = [
    {
      title: "Rapide et efficace",
      img: `img/téléchargement18.webp`,
      customer: "Barack Obama",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum soluta enim reiciendis aliquam facere sint qui quam, quisquam minima atque.",
    },
    {
      title: "Fort de proposition",
      img: `img/téléchargement19.webp`,
      customer: "Diane Smith",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque debitis harum quos adipisci velit voluptas enim reprehenderit ullam? Nostrum commodi ipsa cumque suscipit harum odio laborum voluptatem ipsam!",
    },
    {
      title: "Agréable et proffessionel",
      img: `img/téléchargement20.webp`,
      customer: "Elon Musk",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque debitis harum quosenderit ullam? Nostrum commodi ipsa cumque suscipit harum odio laborum voluptatem ipsam!",
    },
  ];
  return (
    <div className="md:flex justify-between pt-10 pb-1 md:pb-0">
      {customerCards.map((Cards) => (
        <div className="md:w-[25%] bg-white p-4 mb-8 md:mb-0">
          <div className="h-[14rem]">
            <h3 className="font-extrabold text-primary text-[1rem] pb-8">
              {Cards.title}
            </h3>
            <p className="font-semibold text-secondary-light text-[0.75rem] pb-8">
              {Cards.content}
            </p>
          </div>
          <div>
            <img
              src={Cards.img}
              alt="Client"
              className=" rounded-[10rem] w-[3rem] h-[3rem]"
            />
            <p className="text-[0.8rem] font-semibold pb-8 pt-5 text-[#8583e1]">
              {Cards.customer}{" "}
              <span className="text-secondary-light">Customer</span>{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

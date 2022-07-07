import React from "react";

export default function ServicesComponents() {
  const cards = [
    {
      img: `img/téléchargement6.webp`,
      title: `Développement de site web`,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam aliquid doloribus excepturi magnam fugit non perspiciatis iste omnis, sit quibusdam saepe quisquam! Architecto eius atque voluptatum cum aperiam odit quas?",
    },
    {
      img: `img/téléchargement7.webp`,
      title: `Maintenance`,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam aliquid doloribus excepturi magnam fugit non perspiciatis iste omnis, sit quibusdam saepe quisquam! Architecto eius atque voluptatum cum aperiam odit quas?",
    },
    {
      img: `img/téléchargement8.webp`,
      title: `Référencement (SEO)`,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam aliquid doloribus excepturi magnam fugit non perspiciatis iste omnis, sit quibusdam saepe quisquam! Architecto eius atque voluptatum cum aperiam odit quas?",
    },
  ];
  return (
    <div>
      <div className="md:flex justify-between  ">
        {cards.map((card) => (
          <div className="md:w-[20rem] ">
            <div className="flex">
              <div className="mr-6">
                <img
                  src={card.img}
                  alt="web"
                  className="w-[12rem] h-[2.5rem] "
                />
              </div>
              <div className=" pb-3">
                <div className="h-[4.4rem]">
                  <h3 className="text-[1.5rem] text-primary font-bold">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[0.8rem] text-secondary-light">
                  {card.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        type="submit"
        class="text-white mt-5 md:mt-20 bg-[#8583e1] hover:bg-[#6a69b8] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5 md:mb-0"
      >
        Send Message
      </button>
    </div>
  );
}

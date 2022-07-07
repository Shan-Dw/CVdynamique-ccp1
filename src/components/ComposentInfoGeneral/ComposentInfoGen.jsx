import React from "react";
import { GrGooglePlus } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";

export default function ComposentInfoGen() {
  const listes = [
    {
      img: `img/téléchargement4.webp`,
      texte: "Name : ",
      name: "Shan Leweurs",
    },
    {
      img: "img/téléchargement1.webp",
      texte: "Location : ",
      name: "Grand-couronne",
    },
    {
      img: "img/téléchargement2.webp",
      texte: "Leweurspro@gmail.com",
    },
    {
      img: "img/téléchargement3.webp",
      texte: "+33640154223",
    },
    {
      img: "img/téléchargement5.webp",
      texte: "www.mytemplatename.com",
    },
  ];

  return (
    <div className=" min-h-[87vh] bg-[#100f3a] max-w-[20%]">
      <div>
        <img
          src="img/IMG_8646.jpg"
          alt=" profil "
          className="w-full h-[20rem]"
        />
      </div>
      <div className="bg-[#100f3a] text-center px-6">
        <h2 className=" pt-8 pb-6 text-white font-semibold text-2xl mx-16">
          General Information
        </h2>
        <div className="flex justify-center">
          <div>
            <ul className="pb-4 ">
              {listes.map((list) => (
                <li className="text-secondary-light flex py-2 text-xs">
                  <img
                    src={list.img}
                    alt=""
                    className="pr-4 w-[2rem] h-[1rem]"
                  />
                  {list.texte}
                  <p className="pl-1 text-white"> {list.name}</p>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 mx-[2rem] text-lg items-center text-secondary-light pb-3">
              <a href="www.google.com" className="text-[1.3rem]">
                <GrGooglePlus />
              </a>
              <a href="www.pinterest.com">
                <BsPinterest />
              </a>
              <a href="www.facebook.com">
                <FaFacebookF />
              </a>
              <a href="www.twitter.com">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

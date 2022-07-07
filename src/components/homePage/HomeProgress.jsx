import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function HomeProgress() {
  const percentage1 = 75;
  const percentage2 = 83;
  const percentage3 = 23;
  const percentage4 = 95;
  return (
    <div className="md:flex justify-between pt-12">
      <div className="w-36 h-36 mb-12">
        <CircularProgressbar value={percentage1} text={`${percentage1}%`} />
        <p className="text-center font-bold text-primary md:pt-5">Intuition</p>
      </div>
      <div className="w-36 h-36 mb-12">
        <CircularProgressbar value={percentage2} text={`${percentage2}%`} />
        <p className="text-center font-bold text-primary md:pt-5">Creativity</p>
      </div>
      <div className="w-36 h-36 mb-12">
        <CircularProgressbar value={percentage3} text={`${percentage3}%`} />
        <p className="text-center font-bold text-primary md:pt-5">Pure Luck</p>
      </div>
      <div className="w-36 h-36 mb-12">
        <CircularProgressbar value={percentage4} text={`${percentage4}%`} />
        <p className="text-center font-bold text-primary md:pt-5">
          Awesomeness
        </p>
      </div>
    </div>
  );
}

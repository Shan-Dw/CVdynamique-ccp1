import React from "react";

export default function SkillsProgress() {
  return (
    <div className="flex justify-center">
      <div className="mr-20">
        <div className="relative pt-1 ">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold  py-1 px-2  text-gray-900 ">
                HTML5
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-gray-900">
                70%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300 w-[13rem]">
            <div
              style={{ width: "70%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-cyan-400 to-purple-600"
            ></div>
          </div>
        </div>
        <div className="relative pt-1 ">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold  py-1 px-2  text-gray-900 ">
                REACT
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-gray-900">
                100%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300 w-[13rem]">
            <div
              style={{ width: "100%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-[#2ff340] to-[#fbff27]"
            ></div>
          </div>
        </div>
      </div>
      <div className="mr-20">
        <div className="relative pt-1 ">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold  py-1 px-2  text-gray-900 ">
                CSS
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-gray-900">
                60%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300 w-[13rem]">
            <div
              style={{ width: "60%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-orange-500 to-pink-600"
            ></div>
          </div>
        </div>
        <div className="relative pt-1 ">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold  py-1 px-2  text-gray-900 ">
                Word Press
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-gray-900">
                90%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300 w-[13rem]">
            <div
              style={{ width: "90%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-[#2ff340] to-blue-600"
            ></div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative pt-1 ">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold  py-1 px-2  text-gray-900 ">
                JS
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-gray-900">
                75%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300 w-[13rem]">
            <div
              style={{ width: "75%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-600 to-pink-600"
            ></div>
          </div>
        </div>

        <div className="relative pt-1 ">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold  py-1 px-2  text-gray-900 ">
                PHP/Laravel
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-gray-900">
                100%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300 w-[13rem]">
            <div
              style={{ width: "100%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-pink-600 to-orange-400"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

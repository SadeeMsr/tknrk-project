import Image from "next/image";
import Button from "../shared/Button";

export default function WhatWeDo({ whatWeDoGridTexts }) {
  return (
    <div className="mt-28 lg:mx-28">
      <div className="flex lg:flex-row flex-col lg:gap-10 gap-20 lg:items-center">
        <div className="lg:w-[40%] w-full flex flex-col gap-10">
          <h1 className="uppercase text-slate-600">What we do</h1>
          <h1 className="text-4xl font-bold">
            We look for Aesthetics, Precision & thing to be more perfect.
          </h1>
          <Button name="Find out more" path="/about" />
        </div>
        <div className="lg:w-[60%] w-full flex flex-col gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-10 gap-14">
            {whatWeDoGridTexts.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="hover:shadow-lg p-5 cursor-pointer rounded-md lg:shadow-none shadow-lg"
                >
                  <Image
                    src={item.iconPath}
                    width={70}
                    height={70}
                    sizes="100vw"
                    alt={item.title}
                  />
                  <h3
                    className={` ${
                      item.id == 0 && "mt-6"
                    } text-xl mt-4 text-slate-600 font-semibold`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-4 font-light text-slate-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

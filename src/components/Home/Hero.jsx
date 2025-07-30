"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Header from "components/Home/Header";

export default function Hero() {
  return (
    <div className="h-lvh   p-4 bg-white" id="Home">
      <div className="h-full w-full flex flex-col rounded-xl">
        <div className="w-full lg:h-[calc(100vh-18px)] px-[5%] bg-[#286CCA] rounded-br-2xl rounded-tr-2xl rounded-tl-2xl">
          <Header />

          <div className="flex w-full h-[calc(100%-48px)] items-center">
            <div className="w-[60%] gap-6 flex flex-col  items-start">
              <h1 className="text-3xl lg:text-7xl leading-20 font-bold text-white">
                Empowering Your Business with Smart Digital{" "}
                <span className="px-2 text-[#286CCA] bg-white">Solutions</span>
              </h1>
              <p className="w-[80%] text-base">
                We help you build and grow your business with expert app & web
                development, digital signature services, GST registration,
                insurance support, and more.
              </p>
              <button className="text-white cursor-pointer hover:brightness-110 hover:shadow-md bg-[#FE743C] font-lg font-semibold rounded-xl w-28 h-6 lg:h-10">
                Get Started
              </button>
            </div>
            <div className="w-[40%] h-full relative -left-12">
              <div className="h-full z-10 relative">
                <Image
                  src="/model.png"
                  alt="Model"
                  fill
                  className="object-contain"
                />
              </div>

              <h1 className="-rotate-90 opacity-50 absolute -right-55 font-semibold top-50 text-8xl">
                Consult
              </h1>
            </div>
          </div>
        </div>
        <div className="h-12 lg:h-18 w-full bg-white mt-0 pt-0 relative">
          <div className="overflow-hidden w-[30%] lg:w-[25%] h-full rounded-bl-2xl">
            <div className="flex rounded-bl-xl rounded-br-xl bg-[#286CCA] h-full gap-2 w-full skew-x-[-20deg] origin-right -translate-x-10"></div>

            <div className="absolute top-0 left-2 flex gap-2 text-lg items-center h-full">
              <Icon icon="lineicons:scroll-down-2" className="text-4xl" />
              <p className="w-[50%]">Scroll down to discover more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

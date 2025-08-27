"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import Header from "components/Home/Header";
import ButtonNormal from "components/Extra/ButtonNormal";
import Login from "components/Home/Login";
import { useState } from "react";
import {
  fadeUpAnimation,
  rightLeftAnimation,
  leftRightAnimation,
} from "../Animation/fadeUpAnimation";

import { motion, useInView } from "framer-motion";

export default function Hero() {
  const [loginFlag, setLoginFlag] = useState(false);
  return (
    <div className="lg:h-lvh   p-4 bg-white" id="Home">
      <Login setLoginFlag={setLoginFlag} loginFlag={loginFlag} />

      <div className="h-full w-full flex flex-col rounded-xl">
        <div className="w-full lg:h-[calc(100vh-18px)] px-[5%] bg-[#286CCA] rounded-br-2xl rounded-tr-2xl rounded-tl-2xl">
          <Header setLoginFlag={setLoginFlag} />

          <div className="flex flex-col lg:flex-row w-full lg:h-[calc(100%-48px)] items-center">
            <div className="w-full lg:w-[60%] gap-6 flex flex-col  items-start py-4 lg:py-0">
              <motion.h1
                {...fadeUpAnimation}
                className="text-3xl lg:text-7xl leading-10 lg:leading-20 font-bold text-white"
              >
                Empowering Your Business with Smart Digital{" "}
                <span className="px-2 text-[#286CCA] bg-white">Solutions</span>
              </motion.h1>
              <motion.p
                {...fadeUpAnimation}
                transition={{ delay: 0.8 }}
                className="w-full lg:w-[80%] text-base"
              >
                We help you build and grow your business with expert web and app
                development, custom software solutions, and digital tools
                tailored to your needs.
              </motion.p>
              <motion.div {...leftRightAnimation}>
                <Link href="services">
                  <ButtonNormal text="Get Started" />
                </Link>
              </motion.div>
            </div>
            <div className="w-full lg:w-[40%] lg:h-full relative lg:-left-12">
              <motion.div
                {...rightLeftAnimation}
                className="h-48 lg:h-full  relative"
              >
                <Image
                  src="/model.png"
                  alt="Model"
                  fill
                  className="object-contain"
                />
              </motion.div>

              <motion.h1
                {...rightLeftAnimation}
                className="-rotate-90 opacity-20 absolute -right-16 lg:-right-55 font-semibold top-16 lg:top-50 text-5xl lg:text-8xl"
              >
                Consult
              </motion.h1>
            </div>
          </div>
        </div>
        <div className="h-12 lg:h-18 w-full bg-white mt-0 pt-0 relative">
          <div className="overflow-hidden w-[50%] lg:w-[25%] h-full rounded-bl-2xl">
            <div className="flex rounded-bl-xl rounded-br-xl bg-[#286CCA] h-full gap-2 w-full skew-x-[-20deg] origin-right -translate-x-10"></div>

            <div className="absolute top-0 left-2 flex gap-2 text-lg items-center h-full">
              <Icon
                icon="lineicons:scroll-down-2"
                className="text-2xl lg:text-4xl"
              />
              <p className="w-[50%] text-xs">Scroll down to discover more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { GoDash } from "react-icons/go";
import ButtonNormal from "components/Extra/ButtonNormal";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeUpAnimation,
  rightLeftAnimation,
  leftRightAnimation,
  fadeDownAnimation,
} from "../Animation/fadeUpAnimation";

export default function AboutUs() {
  return (
    <div
      id="AboutUs"
      className="lg:h-lvh p-8 lg:p-4 bg-white grid grid-cols-1 md:grid-cols-2"
    >
      <div className="h-full">
        <div className="grid grid-cols-8 grid-rows-8 w-full lg:w-[80%] mx-auto h-full gap-4">
          <motion.div
            {...leftRightAnimation}
            className="relative rounded-xl overflow-hidden rounded-xl col-span-3 col-start-2 row-span-3 g"
          >
            <Image
              src="/Images/about1.png"
              alt="About Us Image"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            {...fadeUpAnimation}
            className="relative rounded-xl overflow-hidden rounded-xl col-span-4 col-start-1 row-span-4"
          >
            <Image
              src="/Images/about3.png"
              alt="About Us Image"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            {...fadeDownAnimation}
            className="relative rounded-xl col-span-4 col-start-5 row-start-2 overflow-hidden rounded-xl row-span-4"
          >
            <Image
              src="/Images/about2.png"
              alt="About Us Image"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            {...rightLeftAnimation}
            className="flex gap-2 lg:gap-4 relative items-center  rounded-xl col-span-4 col-start-5 row-start-6 overflow-hidden rounded-xl row-span-2"
          >
            <div className="w-1/2 bg-[#B8E7E9] text-[#286CCA] aspect-square text-lg rounded-2xl lg:text-6xl flex items-center justify-center font-semibold">
              5+
            </div>
            <h1 className="text-black text-lg lg:text-2xl font-semibold">
              Year Experince
            </h1>
          </motion.div>
        </div>
      </div>
      <div className="h-full flex flex-col text-black justify-center gap-4">
        <motion.h1
          {...fadeUpAnimation}
          className="text-[#286CCA] flex gap-1 text-xl items-center font-semibold"
        >
          <GoDash className="font-bold text-3xl" />
          <span>About Us</span>
        </motion.h1>

        <motion.h2
          {...fadeUpAnimation}
          className="text-3xl font-semibold w-full  lg:w-[60%]"
        >
          Your Trusted Partner in Digital Business Solutions
        </motion.h2>
        <motion.p
          {...fadeUpAnimation}
          className="w-full lg:w-[80%] text-justify"
        >
          We’re a multi-service consultancy helping businesses thrive in the
          digital era. From app and web development to digital signatures, GST
          registration, and insurance services, we deliver smart, secure, and
          scalable solutions that meet your unique needs. <br />
          <br />
          With over 8+ years of experience, our team is committed to helping
          startups, freelancers, and enterprises grow faster, work smarter, and
          stay compliant.
        </motion.p>
        <motion.div {...leftRightAnimation}>
          <ButtonNormal text="Learn More" />
        </motion.div>
      </div>
    </div>
  );
}

import { GoDash } from "react-icons/go";
import Benefits from "components/Home/Benefits";
import Form from "components/Home/Form";
import {
  fadeUpAnimation,
  rightLeftAnimation,
  leftRightAnimation,
} from "../Animation/fadeUpAnimation";

import { motion } from "framer-motion";

export default function Partnership() {
  const benefitsList = [
    {
      title: "Revenue Growth",
      desc: "Earn up to 30% commission on all referred clients with recurring revenue opportunities",
    },
    {
      title: "Full Support",
      desc: "Dedicated partner support team, marketing materials, and technical assistance.",
    },
    {
      title: "Exclusive Access",
      desc: "Early access to new services, partner-only events, and premium resources.",
    },
    {
      title: "Network Growth",
      desc: "Connect with other partners and expand your professional network globally.",
    },
  ];

  return (
    <div
      id="BecomePartner"
      className="lg:h-lvh w-full p-8 lg:p-8 bg-white text-black flex flex-col gap-2"
    >
      <h1 className="text-[#286CCA] flex gap-1 text-lg lg:text-xl items-center font-semibold">
        <GoDash className="font-bold text-3xl" />
        <span>About Us</span>
      </h1>
      <div className="w-full flex flex-col items-center gap-2 mx-auto">
        <motion.h2
          {...fadeUpAnimation}
          className="text-4xl font-semibold w-full  lg:w-[60%] text-center"
        >
          Partnership Program
        </motion.h2>

        <motion.p
          {...fadeUpAnimation}
          className="w-full lg:w-[40%]  text-center"
        >
          Join our exclusive partner network and unlock new revenue streams
          while providing exceptional value to your clients.
        </motion.p>
      </div>

      <div className="w-full h-[80%] grid grid-cols-1 lg:grid-cols-2 justify-around gap-4 lg:gap-0">
        <motion.div className="w-full flex flex-col gap-2 h-full">
          <h1 className="text-center font-semibold text-xl">
            Partnership Benefits
          </h1>
          <div className="w-full grid grid-rows-4 gap-4">
            {benefitsList.map((item, index) => (
              <Benefits
                index={index}
                key={index}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          {...rightLeftAnimation}
          className="w-full flex flex-col gap-2 h-full"
        >
          <h1 className="text-center font-semibold text-xl">
            Apply for Partnership
          </h1>
          <Form />
        </motion.div>
      </div>
    </div>
  );
}

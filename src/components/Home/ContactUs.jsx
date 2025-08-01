import { Icon } from "@iconify/react";
import ButtonNormal from "components/Extra/ButtonNormal";
import InputUnderline from "components/Extra/InputUnderline";
import { useState } from "react";

import {
  fadeUpAnimation,
  rightLeftAnimation,
  leftRightAnimation,
} from "../Animation/fadeUpAnimation";

import { motion } from "framer-motion";

export default function ContactUs() {
  const subjects = [
    "General Inquiry",
    "Partnership Offer",
    "Complaint",
    "Others",
  ];

  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div
      id="ContactUs"
      className="lg:h-lvh w-full p-8 lg:p-8 bg-white text-black flex flex-col gap-0"
    >
      <div className="lg:h-[8%] bg-[#286CCA]">
        <div className="w-[80%] bg-white  rounded-br-[250px] lg:h-full" />
      </div>
      <div className="w-full lg:h-[86%] p-6 bg-[#286CCA]">
        <div className="w-full lg:h-[20%] flex flex-col justify-center items-center">
          <motion.h1
            {...fadeUpAnimation}
            className="text-xl lg:text-4xl font-semibold text-white"
          >
            Contact Us
          </motion.h1>
          <motion.p {...fadeUpAnimation} className="text-white text-center">
            Any question or remarks? Just write us a message!
          </motion.p>
        </div>

        <motion.div
          {...leftRightAnimation}
          className="w-full lg:w-[80%] lg:h-[80%] rounded-lg p-2  bg-white mx-auto grid gird-cols-1 lg:grid-cols-5"
        >
          <div className="w-full col-span-1 text-white lg:col-span-2 bg-[#286CCA] lg:h-full rounded-lg flex flex-col p-4 justify-between gap-4 ">
            <div>
              <motion.h1 className="text-xl lg:text-3xl font-semibold">
                Contact Information
              </motion.h1>
              <motion.p className="text-xs lg:text-base">
                Say something to start a live chat!
              </motion.p>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="flex gap-4 items-center text-sm lg:text-lg">
                <Icon icon="material-symbols-light:call-sharp" />
                <span>+91 97609999879</span>
              </h1>
              <h1 className="flex gap-4 items-center  text-sm lg:text-lg">
                <Icon icon="mdi:email" />

                <span>zrehmaninfotech@yahoo.com</span>
              </h1>
              <h1 className="flex gap-4 items-center  text-sm lg:text-lg">
                <Icon icon="mingcute:location-fill" />

                <span>New Delhi, India - 110019 </span>
              </h1>
            </div>

            <div className="flex gap-2 text-3xl text-white">
              <Icon icon="mingcute:linkedin-fill" className="cursor-pointer" />
              <Icon icon="mdi:instagram" className="cursor-pointer" />
              <Icon icon="uil:whatsapp-alt" className="cursor-pointer" />
            </div>
          </div>

          <div className="col-span-1 lg:col-span-3 bg-white lg:h-full rounded-lg grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-5 p-4 gap-4">
            <InputUnderline
              name="firstName"
              placeholder=""
              label="First Name"
            />
            <InputUnderline name="lastName" placeholder="" label="Last Name" />
            <InputUnderline name="email" placeholder="" label="Email" />
            <InputUnderline name="phone" placeholder="" label="Phone Number" />
            <div className="lg:col-span-2">
              <h1>Select Subject?</h1>
              <div className="flex flex-col lg:flex-row gap-4">
                {subjects.map((option, index) => (
                  <div className="flex gap-1">
                    <input
                      type="radio"
                      value={option}
                      checked={option == selectedOption}
                      onClick={() => setSelectedOption(option)}
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <InputUnderline
                name="message"
                placeholder="Write your message.."
                label="Message"
              />
            </div>

            <div className="flex justify-center lg:justify-end lg:col-span-2 items-center">
              <ButtonNormal text="Send Message" />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="lg:h-[8%] px-6 bg-[#286CCA]">
        <div className="w-[70%] lg:w-[50%] rounded-tr-[250px] bg-white mx-auto rounded-tl-[250px] h-full" />
      </div>
    </div>
  );
}

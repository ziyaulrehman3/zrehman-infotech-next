import { Icon } from "@iconify/react";
import Button from "components/services/Button";
import {
  fadeUpAnimation,
  rightLeftAnimation,
  leftRightAnimation,
} from "../Animation/fadeUpAnimation";

import { motion } from "framer-motion";

export default function Services() {
  const servicesList = {
    website: {
      title: "Website Development",
      icon: "fluent-mdl2:website",
      url: "website",
      description:
        "Create a website for your business Create a website for your business Create a website for your business Create a website for your businessCreate a website for your businessCreate a website for your businessCreate a website for your businessCreate a website for your business",
      price: 12,
      documents: ["Aadhar Card", "Pan Card"],
    },
    "android-app": {
      title: "Android Mobile Application",
      icon: "ri:android-line",
      url: "android-app",
      description: "Create a website for your business",
      price: 12,
      documents: ["Aadhar Card", "Pan Card", "Aadhar Card", "Pan Card"],
    },
    "ios-app": {
      title: "iOS Mobile Application",
      icon: "lineicons:ios",
      url: "ios-app",
      description: "Create a website for your business",
      price: 12,
      documents: ["Aadhar Card", "Pan Card"],
    },
    "website-maintenance": {
      title: "Website Maintenance",
      icon: "streamline-freehand:website-development-browser-hand",
      url: "website-maintenance",
      description: "Create a website for your business",
      price: 12,
      documents: ["Aadhar Card", "Pan Card"],
    },
    "logo-design": {
      title: "Logo Design",
      icon: "fluent:design-ideas-20-regular",
      url: "logo-design",
      description: "Create a website for your business",
      price: 12,
      documents: ["Aadhar Card", "Pan Card"],
    },
    "ui-ux": {
      title: "UI/UX Designing",
      icon: "carbon:gui",
      url: "ui-ux",
      description: "Create a website for your business",
      price: 12,
      documents: ["Aadhar Card", "Pan Card"],
    },

    "poster-designing": {
      title: "Poster Designing",
      icon: "bi:postage",
      url: "poster-designing",
      description: "Create a website for your business",
      price: 12,
      documents: ["Aadhar Card", "Pan Card"],
    },
    insurance: {
      title: "Insurance",
      icon: "streamline-ultimate:insurance-hand",
      url: "insurance",
      description: "Create a website for your business",
      price: 12,
      documents: ["Aadhar Card", "Pan Card"],
    },
    "digital-signature": {
      title: "Digital Signature",
      icon: "clarity:digital-signature-line",
      url: "digital-signature",
      description: "Create a website for your business",
      price: 12,
      documents: ["Aadhar Card", "Pan Card"],
    },
    "gst-registration": {
      title: "GST Registration",
      icon: "solar:document-outline",
      url: "gst-registration",
      description: "Create a website for your business",
      price: 12,
      documents: ["Aadhar Card", "Pan Card"],
    },
    "gst-return": {
      title: "GST Return",
      icon: "simple-icons:taxbuzz",
      url: "gst-return",
      description: "Create a website for your business",
      price: 12,
      documents: ["Aadhar Card", "Pan Card"],
    },
    "income-tax-return": {
      title: "Income Tax Return",
      icon: "streamline:bag-rupee",
      url: "income-tax-return",
      description: "Create a website for your business",
      price: 12,
      documents: ["Aadhar Card", "Pan Card"],
    },
  };

  return (
    <div id="Services" className="lg:h-lvh w-full p-8 lg:p-4 bg-white">
      <div
        className={` lg:h-[calc(100vh-110px)] w-full flex flex-col rounded-bl-xl rounded-tr-xl rounded-tl-xl bg-[#286CCA]`}
      >
        <div
          className={`mx-auto w-[70%] lg:w-[40%] rounded-bl-[30px] rounded-br-[30px] lg:rounded-bl-[120px] lg:rounded-br-[120px] flex items-center justify-center bg-white h-10 lg:h-16`}
        >
          <h1 className="text-xl lg:text-3xl font-semibold  text-black">
            Our Services
          </h1>
        </div>
        <motion.div
          {...fadeUpAnimation}
          className="grid grid-cols-2 gap-8 lg:grid-cols-6 w-[80%] py-10 mx-auto h-full"
        >
          {Object.keys(servicesList).map((item, index) => (
            <Button
              data={servicesList[item]}
              key={index}
              slug={""}
              flag={true}
            />
          ))}
        </motion.div>
      </div>
      <div className="h-12 lg:h-18 w-full bg-white mt-0 pt-0 relative">
        <div className="overflow-hidden w-[60%]   lg:w-[25%] h-full rounded-br-2xl absolute right-0 top-0">
          <div className="flex rounded-br-xl rounded-bl-xl bg-[#286CCA] h-full gap-2 w-full skew-x-[20deg] origin-left translate-x-10"></div>

          <div className="absolute top-0 right-0 flex gap-2 text-xs ml-16 lg:ml-0 lg:text-lg items-center h-full">
            <Icon
              icon="lineicons:scroll-down-2"
              className="text-lg lg:text-4xl"
            />
            <p className="w-[80%] lg:w-[50%]">Scroll down to discover more</p>
          </div>
        </div>
      </div>
    </div>
  );
}

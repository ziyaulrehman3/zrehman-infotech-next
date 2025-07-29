"use client";

import { useParams } from "next/navigation";
import Button from "components/services/Button";
import ControllButton from "components/services/ControllButton";
import Pricing from "components/services/Pricing";
import Login from "components/Home/Login";

import { useState } from "react";

export default function ServicePage() {
  const { slug } = useParams();

  const [step, setStep] = useState(2);

  const servicesList = {
    website: {
      title: "Website",
      icon: "fluent-mdl2:website",
      url: "website",
      description:
        "Create a website for your business Create a website for your business Create a website for your business Create a website for your businessCreate a website for your businessCreate a website for your businessCreate a website for your businessCreate a website for your business",
      price: 12,
      documents: ["Aadhar Card", "Pan Card"],
    },
    "android-app": {
      title: "Android App",
      icon: "ri:android-line",
      url: "android-app",
      description: "Create a website for your business",
      price: 12,
      documents: ["Aadhar Card", "Pan Card", "Aadhar Card", "Pan Card"],
    },
    "ios-app": {
      title: "iOS App",
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
    "msme-registration": {
      title: "MSME Registration",
      icon: "streamline-cyber:wedding-certificate",
      url: "msme-registration",
      description: "Create a website for your business",
      price: 12,
      documents: ["Aadhar Card", "Pan Card"],
    },
  };

  return (
    <div className="bg-white h-lvh">
      <div className="bg-[#286CCA] p-2 w-full h-16 md:h-24 lg:h-28">
        <div className="w-full h-full scrollbar-hide gap-4  lg:gap-8 flex overflow-x-auto justify-around">
          {Object.keys(servicesList).map((item, index) => (
            <Button data={servicesList[item]} key={index} slug={slug} />
          ))}
        </div>
      </div>

      <div className="w-[90%] md:w-[70%] lg:w-[50%] h-32 mx-auto">
        <div className="w-[80%] mx-auto h-8 grid grid-cols-15 items-center gap-1">
          <div
            className={`w-full lg:w-2/3 aspect-square mx-auto ${
              step >= 1 ? "bg-[#286CCA] text-white" : "bg-gray-200 text-black"
            }  rounded-full flex items-center justify-center text-xs lg:text-sm font-semibold`}
          >
            1
          </div>

          <span
            className={`h-1 lg:h-2 col-span-6 ${
              step >= 2 ? "bg-[#286CCA] text-white" : "bg-gray-200 text-black"
            } rounded-full`}
          />

          <div
            className={`w-full lg:w-2/3 mx-auto aspect-square ${
              step >= 2 ? "bg-[#286CCA] text-white" : "bg-gray-200 text-black"
            }  rounded-full flex items-center justify-center text-xs lg:text-sm font-semibold`}
          >
            2
          </div>

          <span
            className={`h-1 lg:h-2 col-span-6 ${
              step >= 3 ? "bg-[#286CCA] text-white" : "bg-gray-200 text-black"
            } rounded-full`}
          />

          <div
            className={`w-full lg:w-2/3 mx-auto  aspect-square ${
              step >= 3 ? "bg-[#286CCA] text-white" : "bg-gray-200 text-black"
            }  rounded-full flex items-center justify-center text-xs lg:text-sm font-semibold`}
          >
            3
          </div>
        </div>

        <div className="w-full px-[10%] flex flex-col justify-between py-4 h-96 overflow-hidden bg-[#FBFBFB] rounded-3xl border-gray-200 border-[1px]">
          {servicesList[slug] && <Pricing data={servicesList[slug]} />}

          <div className="w-full h-8 lg:h-12 mx-auto flex justify-between">
            <ControllButton
              type={true}
              title="Cancel"
              className="w-[25%] h-full"
            />
            <ControllButton
              type={false}
              title="Next"
              className="w-[25%] h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

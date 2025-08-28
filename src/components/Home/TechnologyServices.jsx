"use client";

import { Icon } from "@iconify/react";
import { M_PLUS_Rounded_1c } from "next/font/google";
import Link from "next/link";

const MPLUSRounded1c = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export default function TechnologyServices() {
  const servicesList = [
    {
      title: "Web Applications",
      desc: "High-performance web applications that streamline processes, scale with growth, and provide intuitive user interactions.",
      icon: "streamline-ultimate:coding-apps-website-apps-browser-bold",
    },
    {
      title: "Mobile Applications",
      desc: "Innovative and user-friendly mobile applications built for iOS and Android to drive engagement, scalability, and business growth.",
      icon: "carbon:application-mobile",
    },
    {
      title: "Artificial Intelligance",
      desc: "Intelligent AI-powered applications designed to automate processes, deliver data-driven insights, and enhance decision-making efficiency.",
      icon: "hugeicons:ai-brain-03",
    },
    {
      title: "Cloud Applications",
      desc: "Secure and scalable cloud applications enabling seamless access, improved collaboration, and efficient resource management from anywhere.",
      icon: "carbon:cloud-app",
    },
    {
      title: "UI/UX Designing",
      desc: "Creative and user-focused UI/UX designs that enhance usability, improve accessibility, and deliver engaging digital experiences.",
      icon: "bi:ui-checks",
    },
    {
      title: "Plateform Maintinance",
      desc: "Comprehensive platform maintenance ensuring security, performance, and reliability with regular updates, monitoring, and issue resolution.",
      icon: "carbon:license-maintenance",
    },
  ];
  return (
    <div
      id="Services"
      className="w-full py-12 px-6 lg:px-12  lg:py-20 text-black bg-white"
    >
      <h1
        className={`text-3xl lg:text-5xl font-bold w-full lg:w-[70%] text-center lg:text-start text-transparent bg-gradient-to-br from-[#286CCA] to-black bg-clip-text py-2 ${MPLUSRounded1c.className}`}
      >
        Innovative solutions to accelerate your business growth
      </h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-16 relative">
        <p className="lg:absolute top-0 left-0 text-lg lg:w-1/2 font-base pt-2 text-center lg:text-start">
          Stay ahead of the curve with next-gen solutions designed to unlock new
          growth opportunities, enhance operational efficiency, and fuel
          continuous innovation across every aspect of your business.
        </p>
        <div className="flex flex-col gap-4 lg:gap-8 justify-center">
          <ServiceCard data={servicesList[0]} />
        </div>
        <div className="flex flex-col gap-4 lg:gap-8 justify-center">
          <ServiceCard data={servicesList[1]} />
          <ServiceCard data={servicesList[2]} />
        </div>
        <div className="flex flex-col gap-4 lg:gap-8 justify-center">
          <ServiceCard data={servicesList[3]} />
          <ServiceCard data={servicesList[4]} />
          <ServiceCard data={servicesList[5]} />
        </div>

        <div className="lg:absolute bottom-0 left-0 flex flex-col lg:flex-row gap-2">
          <p>Need custom service that aligns your business objectives?</p>
          <Link href="/Services">
            <p className="inline font-semibold border-b-2 border-black pb-[0.5px] hover:text-[#286CCA] hover:brightness-110 transition-all hover:border-white">
              Book a free Consultation
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ data }) {
  return (
    <div className="group w-full aspect-[7/4] border-[1px] rounded-xl border-black text-black p-4  flex gap-4 grid grid-cols-4 hover:scale-105 hover:bg-[#035fff] duration-500 translate-all text-black hover:text-white">
      <div className="aspect-square rounded-xl bg-[#035fff] group-hover:bg-white text-3xl lg:text-5xl flex items-center justify-center text-white group-hover:text-[#286CCA] transition-all">
        <Icon icon={data.icon} />
      </div>
      <div className="col-span-3 flex flex-col gap-2">
        <h1 className="text-xl font-semibold">{data.title}</h1>
        <p className="text-base leading-6 ">{data.desc}</p>
      </div>
    </div>
  );
}

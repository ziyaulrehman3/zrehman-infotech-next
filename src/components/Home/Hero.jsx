import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-lvh flex flex-col rounded-xl" id="Home">
      <div className="w-full lg:h-[calc(100vh - 16px)]">
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold text-white">
            Empowering Your Business with Smart Digital <span>Solutions</span>
          </h1>
          <p>
            We help you build and grow your business with expert app & web
            development, digital signature services, GST registration, insurance
            support, and more.
          </p>
          <button>Get Started</button>
        </div>
        <div>
          <Image src="" />
          <h1 className="rotate-90 absolute right-4 top-4">Consult</h1>
        </div>
      </div>
      <div className="h-12 lg:h-16 w-full bg-white">
        <div className="flex rounded-xl gap-2 w-[30%] lg:w-[25%] [clip-path:polygon(0_0,100%_0,85%_100%,15%_100%)]">
          <Icon icon="lineicons:scroll-down-2" />
          <p>Scroll down to discover more</p>
        </div>
      </div>
    </div>
  );
}

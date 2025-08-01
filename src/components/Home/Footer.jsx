import Image from "next/image";
import { Icon } from "@iconify/react";
import ButtonNormal from "components/Extra/ButtonNormal";

export default function Footer() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-8 lg:min-h-32 bg-[#286CCA] py-4 px-8">
      <div className="lg:col-span-3 flex flex-col gap-4 lg:gap-2 p-4 lg:border-r-[1px] border-white">
        <div className="w-[30%] lg:w-[20%] aspect-[3/2] relative mx-auto lg:mx-0">
          <Image
            src="/Images/logo.png"
            alt="Logo"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="flex gap-4 items-center text-base">
            <Icon icon="material-symbols-light:call-sharp" />
            <span>+91 97609999879</span>
          </h1>
          <h1 className="flex gap-4 items-center text-base">
            <Icon icon="mdi:email" />

            <span>zrehmaninfotech@yahoo.com</span>
          </h1>
          <h1 className="flex gap-4 items-center text-base">
            <Icon icon="mingcute:location-fill" />

            <span>New Delhi, India - 110019 </span>
          </h1>
        </div>
      </div>

      <div className="lg:col-span-2  gap-2 p-4 lg:border-r-[1px] border-white">
        <ul className="gap-4 flex flex-col">
          {["About Us", "Services", "Become Partner", "Contact Us"].map(
            (item) => {
              return <li>{item}</li>;
            }
          )}
        </ul>
      </div>
      <div className="lg:col-span-3 p-4 flex flex-col gap-4 justify-between">
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-lg lg:text-2xl w-[70%]">
            Would like to talk about your future project?
          </h1>
          <ButtonNormal text="Get in touch" />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-2">
          <p>© 2025 All rights reserved</p>
          <div className="flex gap-2 text-2xl text-white">
            <Icon icon="mingcute:linkedin-fill" className="cursor-pointer" />
            <Icon icon="mdi:instagram" className="cursor-pointer" />
            <Icon icon="uil:whatsapp-alt" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

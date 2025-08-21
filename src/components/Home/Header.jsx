import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";

export default function Header({ setLoginFlag }) {
  const [selectedButton, setSelectedButton] = useState("Home");
  return (
    <div className="h-8 lg:h-12 flex justify-between bg-[#286CCA] ">
      <div className="w-18 aspect-[3/2] relative hidden lg:block">
        <Image
          src="/Images/logo.png"
          alt="Logo"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-[60%] bg-white mx-auto  [clip-path:polygon(0_0,100%_0,85%_100%,15%_100%)]">
        <div className="w-[70%] lg:flex gap-2 justify-around mx-auto text-sm pt-2 hidden">
          {["Home", "About Us", "Services", "Become Partner", "Contact Us"].map(
            (item, index) => (
              <a
                key={index}
                href={`${
                  item == "Home" ? "/" : "#" + item.split(" ").join("")
                }`}
              >
                <button
                  onClick={() => setSelectedButton(item)}
                  key={index}
                  className={`${
                    item == selectedButton
                      ? "text-[#286CCA] font-semibold"
                      : "text-black"
                  } flex cursor-pointer flex-col gap-0  items-center `}
                >
                  <span>{item}</span>
                  <Icon
                    icon="radix-icons:dot-filled"
                    className={`text-lg ${
                      selectedButton == item ? "" : "hidden"
                    }`}
                  />
                </button>
              </a>
            )
          )}
        </div>
        <div className="w-10 lg:w-18 aspect-[3/2] relative  lg:hidden mx-auto">
          <Image
            src="/Images/logo.png"
            alt="Logo"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <button
        onClick={() => setLoginFlag(true)}
        className="hidden lg:flex gap-1 cursor-pointer hover:brightness-110 hover:shadow-md text-white bg-[#FE743C] self-center items-center justify-center font-lg font-semibold rounded-full w-28 h-6 lg:h-10"
      >
        <Icon icon="iconamoon:profile" className="text-xl" />
        <span>Login</span>
      </button>
    </div>
  );
}

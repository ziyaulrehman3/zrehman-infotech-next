import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <div className="h-8 lg:h-12 flex justify-between ">
      <button>Z-Rehman InfoTech</button>

      <div className="w-[60%] bg-white   [clip-path:polygon(0_0,100%_0,85%_100%,15%_100%)]">
        <div className="w-[70%] flex gap-2 justify-around mx-auto text-sm pt-2">
          {["Home", "About Us", "Services", "Become Partner", "Contact Us"].map(
            (item) => (
              <a href={"#" + item.split(" ").join("")}>
                <button className="flex flex-col gap-0 text-black items-center ">
                  <span>{item}</span>
                  <Icon icon="radix-icons:dot-filled" className="text-lg" />
                </button>
              </a>
            )
          )}
        </div>
      </div>

      <button className="flex gap-1 cursor-pointer hover:brightness-110 hover:shadow-md text-white bg-[#FE743C] self-center items-center justify-center font-lg font-semibold rounded-full w-28 h-6 lg:h-10">
        <Icon icon="iconamoon:profile" className="text-xl" />
        <span>Login</span>
      </button>
    </div>
  );
}

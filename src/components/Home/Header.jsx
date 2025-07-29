import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <div className="h-8 lg:h-16 flex justify-between">
      <button>Z-Rehman</button>

      <div className="w-[60%] flex gap-2 justify-around [clip-path:polygon(0_0,100%_0,85%_100%,15%_100%)]">
        {[
          "Home",
          "About Us",
          "Services",
          "Business Solution",
          "Become Partner",
          "Contact Us",
        ].map((item) => (
          <a href={"#" + item.split(" ").join("")}>
            <button className="flex flex-col gap-1">
              <span>{item}</span>
              <Icon icon="radix-icons:dot-filled" />
            </button>
          </a>
        ))}
      </div>

      <button>
        <Icon icon="iconamoon:profile" />
        <span>Login</span>
      </button>
    </div>
  );
}

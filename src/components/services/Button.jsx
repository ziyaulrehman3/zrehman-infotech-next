import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Button({ data, slug, flag = false }) {
  return (
    <Link
      href={`/digital-services/${data.url}`}
      className={`flex flex-col gap-1 lg:gap-2 items-center w-full ibm-plex-sans-font  flex-shrink-0 aspect-[3/4]  rounded-lg lg:rounded-xl p-1 lg:p-2 ${
        slug == data.url || flag ? "bg-white/40" : ""
      } overflow-hidden`}
    >
      <div className="bg-white w-[80%] rounded-lg lg:rounded-2xl aspect-square flex items-center justify-center text-base md:text-3xl">
        <Icon icon={data.icon} className="text-black" />
      </div>
      <p
        className={`font-semibold ${
          flag
            ? "text-sm md:text-base lg:text-base text-black"
            : "text-[5px] md:text-xs lg:text-xs"
        } text-center`}
      >
        {data.title}
      </p>
    </Link>
  );
}

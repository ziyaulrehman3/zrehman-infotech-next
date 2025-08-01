import { Icon } from "@iconify/react";

export default function Benefits({ title, desc }) {
  return (
    <div className="p-2 mx-auto px-4 bg-blue-100 gap-4 h-24 rounded-xl flex gap-2 w-full lg:w-[80%]">
      <div className="h-full aspect-square rounded-xl bg-[#286CCA] flex items-center justify-center">
        <Icon icon="carbon:growth" className="text-xl lg:text-3xl text-white" />
      </div>
      <div>
        <h1 className="text-lg lg:text-xl font-semibold text-[#286CCA]">
          {title}
        </h1>
        <p className="text-blue-500 text-xs lg:text-base">{desc}</p>
      </div>
    </div>
  );
}

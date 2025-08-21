import Image from "next/image";

export function ControllButton({ type, title, className }) {
  return (
    <button
      className={`border-[1px]  border-[#286CCA] ${
        type
          ? "text-[#286CCA] hover:text-white hover:bg-[#286CCA] transform transition-transform"
          : "text-white bg-[#286CCA] hover:brightness-110"
      }  cursor-pointer rounded-xl   text-base lg:text-lg ibm-plex-sans-font ${className}`}
    >
      {title}
    </button>
  );
}

export function ControllGoogle({ type, title, className }) {
  return (
    <button
      className={`border-[1px]  border-[#286CCA] ${
        type
          ? "text-[#286CCA] hover:text-white hover:bg-[#286CCA] transform transition-transform"
          : "text-white bg-[#286CCA] hover:brightness-110"
      }  cursor-pointer rounded-xl flex justify-center items-center gap-2  text-base lg:text-lg ibm-plex-sans-font ${className}`}
    >
      <div className="h-6 aspect-square relative rounded-full">
        <Image
          src="/Images/google.png"
          alt="google icon"
          fill
          className="object-cover rounded-full"
        />
      </div>
      <span>{title}</span>
    </button>
  );
}

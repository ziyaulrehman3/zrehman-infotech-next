import Image from "next/image";

export default function ButtonNormal({ text, image }) {
  return (
    <button className=" text-white cursor-pointer hover:brightness-110 hover:shadow-md bg-[#FE743C] font-lg font-semibold rounded-xl w-48 h-6 lg:h-10">
      <span>{text}</span>
    </button>
  );
}

export function ButtonGoogle({ text, image }) {
  return (
    <button className="justify-center gap-2 text-white cursor-pointer hover:brightness-110 hover:shadow-md bg-[#FE743C] font-lg font-semibold rounded-xl w-48 h-14 lg:h-10">
      <div className="w-6 h-6 aspect-square relative">
        <Image
          src="/Images/google.png"
          alt="google Icon"
          fill
          className="object-cover"
        />
      </div>
      <span>{text}</span>
    </button>
  );
}

import ButtonNormal from "components/Extra/ButtonNormal";
import Link from "next/link";

export default function Transform() {
  return (
    <div className="w-full lg:h-[80vh] px-6 py-12 lg:p-4 lg:py-20 text-black bg-white flex gap-4 overflow-hidden items-center justify-center">
      <div className="w-full lg:w-[70%] text-center flex flex-col items-center gap-6">
        <h1 className="text-3xl lg:text-5xl font-bold flex flex-col gap-2 text-bold">
          <span> Reimagine Your Business Growth</span>
          <span className="text-[#286CCA]">with Innovative Technology!</span>
        </h1>
        <p className="text-gray-600 w-full lg:w-2/3">
          Fueling Your Business Growth with Smart Strategies, Innovative
          Solutions, and a Shared Vision—Let’s Build Lasting Success Together
        </p>

        <Link href="services ">
          <ButtonNormal text="Get Started" />
        </Link>
      </div>
    </div>
  );
}

import Transform from "components/Home/Transform";
import AboutUs from "components/Home/AboutUs";
import { M_PLUS_Rounded_1c } from "next/font/google";
import Header from "components/Home/Header";

const MPLUSRounded1c = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export default function AboutUsMain() {
  return (
    <>
      <Header />

      <div className="w-full py-12 px-6 lg:px-12  lg:py-20 text-black bg-white">
        <h1
          className={`text-3xl lg:text-5xl font-extrabold w-full lg:w-[70%] text-center lg:text-start text-transparent bg-gradient-to-br from-[#286CCA] to-black bg-clip-text py-2 ${MPLUSRounded1c.className}`}
        >
          Your Partner in Innovation and Excellence
        </h1>
        <p className=" text-lg lg:w-2/3 font-base pt-2 text-center lg:text-start">
          Stay ahead of the curve with next-gen solutions designed to unlock new
          growth opportunities, enhance operational efficiency, and fuel
          continuous innovation across every aspect of your business.
        </p>
        <AboutUs />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              title: "Finished Project",
              value: 24,
            },
            {
              title: "Happy Clients",
              value: 12,
            },
            {
              title: "Skilled Experts",
              value: 21,
            },
            {
              title: "Countries",
              value: 3,
            },
          ].map((item, index) => (
            <div className=" bg-[#035fff] text-white rounded-xl p-6 flex flex-col gap-2">
              <span className="flex gap-1">
                <h1 className="text-5xl font-bold">{item.value}</h1>
                <p className="text-3xl">+</p>
              </span>
              <p className="">{item.title}</p>
            </div>
          ))}
        </div>

        <Transform />
      </div>
    </>
  );
}

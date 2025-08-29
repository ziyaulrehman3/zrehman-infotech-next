import { M_PLUS_Rounded_1c } from "next/font/google";
import ButtonNormal from "components/Extra/ButtonNormal";
import Header from "components/Home/Header";

const MPLUSRounded1c = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export default function ContactUs() {
  return (
    <>
      <div className="pb-2 bg-[#286CCA]">
        <Header />
      </div>
      <div className="w-full py-12 px-6 lg:px-12  lg:py-20 text-black bg-white flex flex-col items-center gap-4">
        <h1 className="text-3xl lg:text-5xl font-bold flex flex-col gap-2 text-bold text-center py-2">
          <span>Sorry, you are try to reaching wrong url</span>
          <span className="text-[#FE743C]">Having an Idea?</span>
        </h1>

        <p className="text-gray-600 w-full lg:w-1/2 text-center">
          We’d love to hear from you! Whether you have a new project in mind or
          need help with an existing one, our team is here to assist you.
          Contact us for expert advice, innovative solutions, and personalized
          assistance. Let’s bring your vision to life.
        </p>

        <ButtonNormal text="Let's Connect" url="/contact-us" />
      </div>
    </>
  );
}

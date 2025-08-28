import Image from "next/image";
import Hero from "components/Home/Hero";
import Services from "components/Home/Services";
import Partnership from "components/Home/Partnership";
import ContactUs from "components/Home/ContactUs";
import Vision from "components/Home/Vision";
import Transform from "components/Home/Transform";
import TechnologyServices from "components/Home/TechnologyServices";
import Feedbacks from "components/Home/Feedbacks";

export const metadata = {
  title: "Home | ZRehman Infotech",
  description: "A Software Company",
  icons: {
    icon: "/Images/logo.png", // standard favicon
    shortcut: "/Images/logo.png", // shortcut icon for some browsers
    apple: "/Images/logo.png", // Apple touch icon
  },
};

export default function Home() {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Vision />

      <TechnologyServices />
      <Services />
      {/* <Partnership /> */}
      {/* <ContactUs /> */}
      <Feedbacks />
      <Transform />
    </div>
  );
}

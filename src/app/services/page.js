import Services from "components/Home/Services";
import Transform from "components/Home/Transform";
import TechnologyServices from "components/Home/TechnologyServices";
import Feedbacks from "components/Home/Feedbacks";
import Header from "components/Home/Header";

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
      <div className="pb-2 bg-[#286CCA]">
        <Header />
      </div>
      <TechnologyServices />
      <Services />
      {/* <Partnership /> */}
      {/* <ContactUs /> */}
      <Feedbacks />
      <Transform />
    </div>
  );
}

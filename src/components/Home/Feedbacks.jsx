"use client";

export default function Feedback() {
  const dataSet = [
    {
      message:
        "Working with Z-Rehman Infotech has been an absolutely seamless experience. Their team took the time to thoroughly understand our requirements and delivered a high-quality solution well within the agreed timeline. Communication was prompt and professional at every stage. Truly reliable and highly recommended!",
      company: "Raah to Cure",
      address: "New Delhi, India",
    },
    {
      message:
        "We are extremely satisfied with the services provided by Z-Rehman Infotech. From the initial consultation to the final delivery, their team showed great attention to detail and ensured that all our requirements were met. The entire process was smooth, efficient, and stress-free.",
      company: "Get Core",
      address: "Moradabad, India",
    },
    {
      message:
        "Z-Rehman Infotech consistently exceeded our expectations. Their development team was skilled, proactive, and responsive throughout the project. They were always available to answer our queries and provided valuable suggestions that improved the overall quality of the project. Highly recommended for anyone seeking expert IT solutions.",
      company: "Saloon SP",
      address: "Rampur, India",
    },
    {
      message:
        "The team at Z-Rehman Infotech demonstrated exceptional expertise and dedication. They handled our complex requirements with precision and delivered a final product that perfectly aligned with our vision. Their professionalism, prompt updates, and commitment to quality made the entire collaboration a truly positive experience.",
      company: "ZTO",
      address: "Delhi, India",
    },
  ];
  return (
    <div className="bg-white text-black w-full py-6 px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 justify-between text-center lg:text-start">
        <h1 className="text-3xl lg:text-5xl font-semibold w-full lg:w-[30%] bg-gradient-to-br from-[#035fff] to-black text-transparent bg-clip-text">
          Feedback That Drives Success
        </h1>
        <p className="w-full  lg:w-[40%] font-semibold">
          Hear from clients about their success, experiences, and how our
          solutions fueled growth.
        </p>
      </div>
      <div className="flex scrollbar-hide overflow-x-auto lg:overflow-hidden lg:grid lg:grid-cols-4 p-8 gap-8 w-full lg:justify-center">
        {dataSet.map((item, index) => (
          <FeedbackComp data={item} />
        ))}
      </div>
    </div>
  );
}

function FeedbackComp({ data }) {
  return (
    <div className="border-2 border-black text-black max-w-64 shrink-0 flex flex-col gap-6 rounded-xl border-[1px] border-black p-6 shadow-[0px_0px_20px_2px] shadow-gray-200 justify-between">
      <div>
        <div>⭐⭐⭐⭐⭐</div>
        <p>{data.message}</p>
      </div>
      <div className="flex flex-col items-end">
        <h1 className=" font-semibold text-lg">{data.company}</h1>
        <p className="text-gray-600">
          <i>{data.address}</i>
        </p>
      </div>
    </div>
  );
}

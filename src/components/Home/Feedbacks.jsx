"use client";

export default function Feedback() {
  const dataSet = [
    {
      message:
        "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.",
      company: "Raah to Cure",
      address: "New Delhi, India",
    },
    {
      message:
        "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.",
      company: "Get Core",
      address: "Moradabad, India",
    },
    {
      message:
        "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.",
      company: "Saloon SP",
      address: "Rampur, India",
    },
    {
      message:
        "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.",
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
    <div className="border-2 border-black text-black max-w-64 shrink-0 flex flex-col gap-6 rounded-xl border-[1px] border-black p-6 shadow-[0px_0px_20px_2px] shadow-gray-200">
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

export default function Pricing({ data }) {
  return (
    <div className="w-full ibm-plex-sans-font text-black block text-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold ">{data.title}</h1>
        <p className="">{data.description}</p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-[#286CCA] text-lg ">Key Features</h3>
        <div className="grid grid-cols-6 gap-x-8 gap-y-4 justify-center items-center">
          {data.documents.map((item, index) => (
            <span
              className={` text-black col-span-2 border-[1px] border-gray-200 rounded-lg p-2 ${
                [3, 8].includes(index) ? "col-start-2" : ""
              }`}
              key={index}
            >
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

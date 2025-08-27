import Image from "next/image";

export default function Vision() {
  return (
    <div className="w-full lg:h-[80vh] px-6 py-12 lg:p-4 lg:py-20 text-black bg-white grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <div className="flex items-center justify-center">
        <div className="relative h-full aspect-square rounded-2xl overflow-hidden ">
          <Image
            src="/Images/visionimg.jpg"
            alt="Vision Img"
            fill
            className="object-cover hover:scale-105 tranform transition-transform easeOut"
          />
        </div>
      </div>
      <div className="w-full lg:w-[80%] flex flex-col lg:h-full gap-4 justify-between">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Innovating Your Ideas into Success with Technology{" "}
        </h1>
        <p className="text-gray-600">
          Leverage the strength of innovation through advanced technology
          designed to boost your business and achieve growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-[1px] border-black bg-blue-50 rounded-xl p-6 flex flex-col gap-2">
            <span className="flex gap-1">
              <h1 className="text-5xl font-bold">30</h1>
              <p className="text-3xl">+</p>
            </span>
            <p className="text-gray-600">Projects Delivered</p>
          </div>

          <div className="border-[1px] border-black bg-blue-50 rounded-xl p-6 flex flex-col gap-2">
            <span className="flex gap-1">
              <h1 className="text-5xl font-bold">12</h1>
              <p className="text-3xl">+</p>
            </span>
            <p className="text-gray-600">Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}

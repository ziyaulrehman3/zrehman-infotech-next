export default function InputFiled({ data }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[#344054] ">{data.label}</label>
      <input
        name={data.filed}
        type={data.type}
        placeholder={data.placeholder}
        className="border-[1px] border-[#98A2B3] rounded-lg h-10 placeholder-[#98A2B3] px-2 text-black outline-[#D1E9FF]"
      />
    </div>
  );
}

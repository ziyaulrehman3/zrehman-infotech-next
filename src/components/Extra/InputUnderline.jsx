export default function InputUnderline({ label, name, placeholder, key }) {
  return (
    <div className="w-full">
      <label className="text-[#8D8D8D]">{label}</label>
      <input
        key={key}
        name={name}
        placeholder={placeholder}
        className=" focus:outline-none w-full border-b-[1px] px-1 border-[#8D8D8D]"
      />
    </div>
  );
}

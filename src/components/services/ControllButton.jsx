export default function ControllButton({ type, title, className }) {
  return (
    <button
      className={`border-[1px]  border-[#286CCA] ${
        type
          ? "text-[#286CCA] hover:text-white hover:bg-[#286CCA] transform transition-transform"
          : "text-white bg-[#286CCA] hover:brightness-110"
      }  cursor-pointer rounded-xl   text-base lg:text-lg ibm-plex-sans-font ${className}`}
    >
      {title}
    </button>
  );
}

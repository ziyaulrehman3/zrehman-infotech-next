import InputFiled from "components/services/InputFiled";
import ControllButton from "components/services/ControllButton";
import ControllGoogle from "components/services/ControllButton";
import { IoIosCloseCircle } from "react-icons/io";

export default function Login({ setLoginFlag, loginFlag }) {
  const InputList = [
    {
      name: "email",
      label: "Email",
      type: "text",
      placeholder: "email@example.com",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your Password",
    },
  ];
  return (
    <div
      className={`${
        loginFlag ? "translate-x-0 right-4" : "translate-x-full -right-4"
      } w-[90%] duration-1000 transform translate-tranform z-10 md:w-[60%] lg:w-[25%] max-w-96 max-h-lvh max-h-96 flex flex-col p-8 gap-2 lg:gap-3 rounded-xl border-[1px] border-gray-200 fixed bg-white top-4 py-20`}
    >
      <IoIosCloseCircle
        onClick={() => setLoginFlag(false)}
        className="absolute top-2 right-2 text-xl cursor-pointer"
      />

      <h1 className="text-[#344054] text-2xl font-semibold pb-2">Login</h1>

      {InputList.map((item, index) => (
        <InputFiled data={item} key={index} />
      ))}

      <ControllButton
        type={false}
        title="Login"
        className="w-full h-10 bg-[#286CCA]"
      />
      <ControllGoogle
        type={true}
        title="Continue with Google"
        className="w-full h-10 bg-[#D1E9FF] border-[#D1E9FF] text-[#286CCA]"
      />
    </div>
  );
}

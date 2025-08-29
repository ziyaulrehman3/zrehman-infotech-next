import ButtonNormal from "components/Extra/ButtonNormal";

export default function Form() {
  const fieldsList = [
    {
      title: "Full Name",
      placeholder: "Enter full name",
      name: "name",
    },
    {
      title: "Contact No",
      placeholder: "Enter Contact No",
      name: "contactNo",
    },
    {
      title: "Email Address",
      placeholder: "Enter email",
      name: "email",
    },
    {
      title: "Company Name",
      placeholder: "Enter company",
      name: "companyName",
    },

    {
      title: "Which Services you want?",
      placeholder: "Enter Service",
      name: "service",
    },
    {
      title: "Comment/Question",
      placeholder: "Describe your message",
      name: "message",
    },
  ];
  return (
    <div className=" flex flex-col gap-2 bg-blue-100 rounded-xl p-4 w-full lg:w-[70%] mx-auto">
      {fieldsList.map((field, index) => {
        return (
          <div key={index} className="flex flex-col gap-[2px] w-[90%] mx-auto">
            <label className="text-sm text-[#666666]">{field.title}</label>
            <input
              key={index}
              name={field.name}
              placeholder={field.placeholder}
              className="w-full h-8 bg-white rounded-md px-2 border-[1px] border-[#CCCCCC]"
            />
          </div>
        );
      })}

      <div className="mx-auto">
        <ButtonNormal text="Submit Application" />
      </div>
    </div>
  );
}

import { useState } from "react";

interface SwitchProps {
  id: string;
  title: string;
  checked: boolean;
}

export default function Switch({ id, title, checked }: SwitchProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className=" flex items-center gap-2">
      <label htmlFor={id}>
        <span className="text-sm">{title}</span>
      </label>
      <input
        type="checkbox"
        id={id}
        className="hidden"
        checked={isChecked}
        onChange={handleChange}
      />
      <div
        className={`w-10 h-4 md:w-8 md:h-4 ${
          isChecked ? "bg-primary" : "bg-gray"
        } rounded-full`}
      >
        <div
          className={`w-4 h-4 border-2 border-gray rounded-full bg-white transition-transform duration-300 ease-in-out transform ${
            isChecked ? "translate-x-0 border-primary" : "-translate-x-4"
          }`}
        />
      </div>
    </div>
  );
}

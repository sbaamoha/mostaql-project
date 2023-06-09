interface ButtonProps {
  background: string;
  icon: string;
  value: string;
}

export default function Button({ background, icon, value }: ButtonProps) {
  return (
    <button
      className={`flex gap-2 items-center ${
        background === "bg-white" && "border border-lightGray"
      } rounded-lg ${background} py-2 px-6`}
    >
      <img src={icon} alt={icon} />
      {background === "bg-white" ? (
        <span className="">{value}</span>
      ) : (
        <p className="text-white">{value} </p>
      )}
    </button>
  );
}

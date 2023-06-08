import { BsThreeDotsVertical } from "react-icons/bs";
interface CartProps {
  title: string;
  number: string;
}

export default function Cart({ title, number }: CartProps) {
  return (
    <div className="flex flex-col gap-3 p-6 border-2 border-lightGray rounded-xl">
      <div className="flex justify-between items-center cursor-pointer">
        <span>{title} </span>
        <BsThreeDotsVertical />
      </div>
      <div className="flex items-center gap-2">
        <h2 className="text-3xl">{number}</h2>
        <span className="text-xl">ر.س</span>
      </div>
      <div className="flex items-center gap-2">
        <h3 className="text-success">2.05%</h3>
        <img src="/trending-up.svg" alt="trending icon" />
        <span>10 يناير 2023</span>
      </div>
    </div>
  );
}

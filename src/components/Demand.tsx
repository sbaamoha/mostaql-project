import { LuEdit } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import { BiDollarCircle } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";

interface DemandProps {
  demand: DemandsType;
}

export default function Demand({ demand }: DemandProps) {
  const { name, selected, status } = demand;
  const btnStyle =
    status === "draft"
      ? "bg-red-300 text-red-600"
      : status === "studying"
      ? "bg-lightOrange text-orange"
      : "text-success bg-green-200";
  return (
    <div
      className={`py-6 px-3 border-2 rounded-xl flex flex-col gap-2 ${
        selected ? "border-teal" : "border-lightGray"
      }`}
    >
      <div className="flex items-center justify-between">
        <h2
          className={`inline-block py-1 px-2 ${btnStyle} rounded-md cursor-pointer hover:opacity-75 `}
        >
          {status === "draft" && "مسودة"}
          {status === "studying" && "تحت الدراسة"}
          {status === "done" && "منفذة"}
        </h2>
        <span className="flex gap-2 text-2xl cursor-pointer ">
          <LuEdit className="hover:opacity-75" />
          <RiDeleteBin5Line className="hover:opacity-75" />
        </span>
      </div>

      <div className="my-3 flex items-center gap-2 text-lg">
        <CiBookmark className="text-3xl opacity-40" />
        <h2>شراء منتجات ذات استخدام الواد </h2>
      </div>

      <div className="flex items-center justify-around">
        <p className="inline-block text-xs py-1 px-2 rounded-2xl bg-lightGray border border-gray">
          اسم الجهة
        </p>
        <p className="inline-block text-xs py-1 px-2 rounded-2xl bg-lightGray border border-gray">
          تاريخ إنجاز المشروع
        </p>
      </div>

      <div className="flex items-center justify-evenly mb-3">
        <p className="text-sm text-gray">{name} </p>
        <p className="text-sm text-gray">31-03-2023 </p>
      </div>

      <div className="flex items-center justify-around ">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs py-1 px-2 rounded-2xl bg-lightGray border border-gray flex items-center gap-1">
            <BiDollarCircle />
            مبلغ التمويل
          </p>
          <p className="text-gray">30,000.000</p>
        </div>
        <div className="w-[1px] h-[45px] bg-gray" />
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs py-1 px-2 rounded-2xl bg-lightGray border border-gray flex items-center gap-1">
            <BsFillCalendarDateFill />
            مدة التمويل
          </p>
          <p className="text-gray">قصير الأجل</p>
        </div>
        <div className="w-[1px] h-[45px] bg-gray " />
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs py-1 px-2 rounded-2xl bg-lightGray border border-gray flex items-center gap-1">
            <FiFilter />
            نوع التمويل
          </p>
          <p className="text-gray">تمويل مشاريع</p>
        </div>
      </div>

      {/* <div className="flex items-center justify-around  text-gray">
      </div> */}
    </div>
  );
}

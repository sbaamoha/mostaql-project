import { AiOutlineEye } from "react-icons/ai";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";

export default function Card() {
  return (
    <div className="relative p-3 rounded-xl bg-primary text-white">
      <img src="/mainpage6.svg" alt="visa" />
      <div className="absolute inset-0 mx-6 mt-8 flex flex-col gap-2">
        <div className="flex gap-3 items-center text-2xl">
          <p>الرصيد</p>
          <AiOutlineEye />
          <br />
        </div>
        <h2 className="text-3xl">24,000.55 ر.س</h2>
        <p>رقم حسابك الاستثماري</p>
        <div className="p-2 border border-white rounded-lg flex justify-between items-center">
          <HiOutlineDocumentDuplicate className="text-2xl" />
          <p>SA10 301 0344 5454 545</p>
        </div>
      </div>
    </div>
  );
}
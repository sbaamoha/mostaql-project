import { information } from "../utils/utils";
import Avatar from "./common/Avatar";

export default function Infos() {
  return (
    <div className="p-3 mt-6 border-2 border-lightGray rounded-xl">
      <Avatar name="معلوماتي" img="/money.svg" />
      <div className="flex flex-col gap-3 my-3">
        <span>استكمل البيانات لتقديم طلب التمويل</span>
        <div className=" mr-auto ">
          <p>45%</p>
        </div>
        <div className="w-full h-2 rounded-lg bg-lightGray ">
          <div className={`w-[45%] h-2 rounded-lg bg-teal `} />
        </div>
        <ul className="flex flex-col gap-3 my-6">
          {information.map(({ name, checked }, i) => (
            <li key={i} className="flex items-center gap-2">
              {checked ? (
                <img src="/CheckCircleIcon.svg" alt="checked icon" />
              ) : (
                <img src="/CheckCircle.svg" alt="unchecked icon" />
              )}
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

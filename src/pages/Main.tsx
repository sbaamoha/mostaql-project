import Card from "../components/Card";
import Banner from "../components/layout/Banner";
import { BsThreeDots } from "react-icons/bs";
import Infos from "../components/Infos";
import Avatar from "../components/common/Avatar";
import { carts, mostacharInfos } from "../utils/utils";
import Cart from "../components/common/Cart";
import BarChart from "../components/BarChart";
import { useState } from "react";
import Switch from "../components/common/Switch";
import DatePickerInput from "../components/common/DatePicker";

export default function Main() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };
  return (
    <div className="p-3 md:p-6 flex flex-col md:flex-row gap-2">
      <div>
        <Banner />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-3 my-6">
          {carts.map(({ name, number }, i) => (
            <Cart title={name} number={number} key={i} />
          ))}
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-md md:text-lg lg:text-2xl">
              توزيع مبالغ التمويل
            </h2>
            <div className="flex items-center gap-2">
              <Switch checked={false} id="one" title="المبلغ المسدد" />
              <Switch checked={true} id="two" title="الدفعات المتبقية" />
            </div>
            <DatePickerInput
              selected={selectedDate}
              handleDateChange={handleDateChange}
            />
          </div>
          <BarChart />
          {/* <img src="/barchart.svg" alt="" /> */}
        </div>
      </div>
      <div className="border-lightGray py-6 border-2 p-6 rounded-xl ">
        <div className="flex justify-between items-center mb-3">
          <h2>المحفظة</h2>
          <BsThreeDots />
        </div>
        <Card />

        <div className="flex items-center justify-center my-6 gap-3">
          <div className="flex flex-col items-center justify-center gap-3">
            <button className=" p-3 rounded-lg border border-gray">
              <img src="/card-send.svg" alt="receive" />
            </button>
            <p>سحب</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <button className="p-3 rounded-lg border border-gray">
              <img src="/card-receive.svg" alt="receive" />
            </button>
            <p>ايداع</p>
          </div>
        </div>

        <Infos />

        <div className="p-3 mt-6 border-2 border-lightGray rounded-xl">
          <Avatar name="المستشار" img="/User.svg" />
          <ul>
            {mostacharInfos.map(({ icon, value }, i) => (
              <li className="flex items-center gap-3" key={i}>
                <div className="w-8 rounded-full p-1">
                  <img className="w-full" src={icon} alt={icon} />
                </div>
                <span>{value} </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

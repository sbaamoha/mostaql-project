import Demand from "../components/Demand";
import Button from "../components/common/Button";
import { demands } from "../utils/utils";

export default function Demands() {
  return (
    <div className="p-3">
      <div className="flex items-center m-2 gap-1">
        <Button
          value="طلبات التمويل"
          icon="/btn1.svg"
          background="bg-primary"
        />
        <Button value="منتج التمويل" icon="/btn2.svg" background="bg-white" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 p-3 rounded-lg border-2 border-lightGray">
        {demands.map((d, i) => (
          <Demand key={i} demand={d} />
        ))}
      </div>
    </div>
  );
}

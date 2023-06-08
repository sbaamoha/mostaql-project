import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const data = [
  {
    id: "0k",
    name: "17 يناير",
  },
  {
    id: "3k",
    name: "18 يناير",
  },
  {
    id: "5k",
    name: "19 يناير",
  },
  {
    id: "15k",
    name: "20 يناير",
  },
  {
    id: "20k",
    name: "21 يناير",
  },
  {
    id: "25k",
    name: "22 يناير",
  },
];

export default function BarChart() {
  const [chartOptions, setChartOptions] = useState({});
  const [chartData, setChartData] = useState<any>({
    datasets: [],
  });

  useEffect(() => {
    setChartData({
      labels: data.map((a) => a.name),
      datasets: [
        {
          label: "",
          data: data.map((a) => a.id),
          backgroundColor: [
            "#DFE8F6",
            "#DFE8F6",
            "#56CCF2",
            "#DFE8F6",
            "#DFE8F6",
            "#DFE8F6",
          ],
          hoverBackgroundColor: "#56CCF2",
          borderWidth: 0,
          barThickness: 30,
          borderRadius: 7,
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: false,
        },
        maintainAspectRatio: false,
        responsive: true,
      },
    });
  }, []);

  return (
    <div className="md:w-[50vw] w-[100%] md:col-span-2 relative md:h-[50vh] h-[50%] md:m-auto p-4 border rounded-lg bg-white">
      <div className="w-[80vw] h-[20vh] md:w-[48vw] md:h-[55vh] ">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "",
    },
  },
};

const labels = ["16 يناير", "17 يناير", "18 يناير", "19 يناير", "20 يناير"];

export const data: any = {
  labels,
  datasets: [
    {
      label: "",
      data: ["3000", "1500", " 3000", "1000", "1500", "2000", "2050"],
      backgroundColor: [
        "#DFE8F6",
        "#DFE8F6",
        "#0249AC",
        "#DFE8F6",
        "#DFE8F6",
        "#DFE8F6",
      ],
      hoverBackgroundColor: "#56CCF2",
      borderWidth: 0,
      barThickness: 30,
      borderRadius: 5,
    },
  ],
};

export default function BarChart() {
  return <Bar options={options} data={data} />;
}

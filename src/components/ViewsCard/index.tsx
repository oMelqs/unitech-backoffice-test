"use client";
import data from "@/config/apexcharts/viewsCardLineChart/data";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Chart from "react-apexcharts";

const ViewsCard: React.FC = () => {
  return (
    <div className="bg-white border-stroke rounded-3xl">
      <div className="flex justify-between py-5 items-center px-8">
        <span className="text-sm text-dark"> Visualizações</span>
        <InformationCircleIcon className="h-6 w-6 text-gray" />
      </div>
      <div className="mt-2">
        <Chart options={data.options} series={data.series} type="area" />
      </div>
    </div>
  );
};

export default ViewsCard;

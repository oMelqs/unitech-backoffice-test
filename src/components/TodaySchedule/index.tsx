"use client";

import { tTodayClasses } from "@/types";
import { useEffect, useState } from "react";

const url =
  "https://iyt9skw6fe.execute-api.us-east-1.amazonaws.com/schedules/today";

const TodaySchedule: React.FC = () => {
  const [todayClasses, setTodayClasses] = useState<tTodayClasses[]>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTodayClasses(data);
      });
  }, []);
  return (
    <div className="bg-white border-stroke rounded-3xl">
      <div className="items-center pt-5 px-8">
        <span className="text-base font-semibold text-dark">
          Suas próximas aulas virtuais
        </span>
      </div>
      <div className="items-center py-8 px-8">
        <span className="text-base font-semibold text-dark">Hoje</span>
      </div>
      {todayClasses.map((data) => {
        return (
          <div
            key={todayClasses.indexOf(data)}
            className="flex items-center pb-10 px-[43px]"
          >
            <div className="w-[54px] h-[25px]">
              <span className="text-base font-bold text-dark pr-4">
                {data.time}
              </span>
            </div>
            <div className="flex bg-lightBlue h-8 w-[4px]"></div>
            <span className="pl-4 text-base font-normal text-dark">
              {data.title}
            </span>
          </div>
        );
      })}
      <div className="flex justify-center pb-5">
        <button className="bg-blue text-white text-sm rounded-xl h-[48px] w-[95%]">
          Visualizar toda Agenda
        </button>
      </div>
    </div>
  );
};

export default TodaySchedule;

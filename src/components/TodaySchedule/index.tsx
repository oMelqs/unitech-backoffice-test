"use client";

import { TodayScheduleMock } from "@/mocks";

const TodaySchedule: React.FC = () => {
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
      {TodayScheduleMock.map((data) => {
        return (
          <div
            key={TodayScheduleMock.indexOf(data)}
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

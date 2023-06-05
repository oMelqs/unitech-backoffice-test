"use client";

const TodaySchedule: React.FC = () => {
  const mock = [
    {
      time: "08:00",
      title: "Introdução a Lógica da programação",
    },
    {
      time: "09:00",
      title: "Condicionais",
    },
    {
      time: "11:00",
      title: "Do While",
    },
    {
      time: "11:00",
      title: "Foreach",
    },
  ];

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
      {mock.map((data) => {
        return (
          <div
            key={mock.indexOf(data)}
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

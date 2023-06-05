"use client";

import { useIsMobile } from "@/hooks/";
import tMyClasses from "@/types/MyClasses";
import { CheckIcon } from "@heroicons/react/20/solid";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { useEffect, useState } from "react";
import CheckMark from "../../assets/CheckMark/index";

const url = "https://iyt9skw6fe.execute-api.us-east-1.amazonaws.com/my-classes";

const MyClasses: React.FC = () => {
  const isMobile = useIsMobile();
  const [myClasses, setMyClasses] = useState<tMyClasses[]>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMyClasses(data);
      });
  }, []);

  return (
    <div className="bg-white border-stroke rounded-3xl">
      <div className="items-center py-8 px-8">
        <span className="text-sm font-semibold text-dark">
          Minhas aulas já preparadas
        </span>
      </div>
      {isMobile
        ? myClasses.map((data) => {
            return (
              <div
                key={myClasses.indexOf(data)}
                className="pb-10 px-8 items-center"
              >
                <div className="flex items-center pl-2">
                  <span className="text-xs font-normal text-typographyBody">
                    {format(new Date(data.date), "dd 'de' MMMM',' yyyy", {
                      locale: pt,
                    })}
                  </span>
                  <a href="#" className="flex items-center pl-8">
                    <CheckIcon className="h-5 w-5 text-gray" />
                    <span className="text-sm font-normal text-typographyBody pl-2">
                      Editar
                    </span>
                  </a>
                </div>
                <div className="items-center pl-2 pt-5">
                  <span className="text-xs font-bold text-typographyBody">
                    {data.title}
                  </span>
                  <div className="flex">
                    <CheckMark />
                    <span className="text-xs font-normal text-typographyBody">
                      {data.views}
                    </span>
                  </div>
                </div>
                <div className="flex justify-center items-center pt-2">
                  <span className="flex justify-center text-xs font-medium text-white bg-blue px-4 py-2 rounded-3xl h-[36px] w-[95%]">
                    {data.category}
                  </span>
                </div>
              </div>
            );
          })
        : myClasses.map((data) => {
            return (
              <div
                key={myClasses.indexOf(data)}
                className="flex justify-between pb-10 px-8 items-center"
              >
                <div className="flex items-center w-[240px]">
                  <span className="text-xs font-medium text-white bg-blue px-4 py-2 rounded-3xl">
                    {data.category}
                  </span>
                  <span className="text-xs font-normal text-typographyBody pl-2">
                    {data.title}
                  </span>
                </div>
                <div className="flex items-center w-[140px]">
                  <CheckMark />
                  <span className="text-xs font-normal text-typographyBody">
                    {data.views}
                  </span>
                </div>
                <div className="items-center w-[140px]">
                  <span className="text-xs font-normal text-typographyBody">
                    {format(new Date(data.date), "dd 'de' MMMM',' yyyy", {
                      locale: pt,
                    })}
                  </span>
                </div>
                <div className="items-center w-[140px]">
                  <a href="#" className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-gray" />
                    <span className="text-sm font-normal text-typographyBody pl-3">
                      Editar
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
      <div className="flex justify-center pb-5">
        <button className="bg-blue text-white text-sm rounded-xl h-[48px] lg:w-[95%] mx-8 w-[100%]">
          Criar uma nova aula
        </button>
      </div>
    </div>
  );
};

export default MyClasses;

"use client";
import {
  CurrentClassCard,
  Header,
  MyClasses,
  TodaySchedule,
  ViewsCard,
} from "@/components";
import useIsMobile from "@/hooks/useIsMobile";

export default function Home() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex justify-center sm:mx-2">
        <div className="grid grid-cols-3 gap-2 ">
          <div className="col-span-3">
            <Header />
          </div>
          <div className="col-span-3">
            <CurrentClassCard />
          </div>
          <div className="col-span-3">
            <ViewsCard />
          </div>
          <div className="col-span-3">
            <TodaySchedule />
          </div>
          <div className="col-span-3">
            <MyClasses />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center sm:mx-2">
        <div className="grid grid-cols-3 gap-2 ">
          <div className="col-span-3">
            <Header />
          </div>
          <div className="col-span-2">
            <div>
              <CurrentClassCard />
            </div>
            <div className="mt-12">
              <MyClasses />
            </div>
          </div>
          <div className="col-span-1 pl-5">
            <div>
              <ViewsCard />
            </div>
            <div className="mt-3">
              <TodaySchedule />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

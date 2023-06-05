import {
  CurrentClassCard,
  Header,
  TodaySchedule,
  ViewsCard,
} from "@/components";

export default function Home() {
  return (
    <div className=" flex justify-center">
      <div className="grid grid-cols-3 gap-2 ">
        <div className="col-span-3">
          <Header />
        </div>
        <div className="col-span-3 lg:col-span-2">
          <div>
            <CurrentClassCard />
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1">
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

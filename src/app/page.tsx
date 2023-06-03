import { CurrentClassCard, Header, ViewsCard } from "@/components";

export default function Home() {
  return (
    <div className=" flex justify-center">
      <div className="grid grid-cols-3 gap-4 ">
        <div className="col-span-3">
          <Header />
        </div>
        <div className="col-span-3 lg:col-span-2">
          <CurrentClassCard />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <ViewsCard />
        </div>
      </div>
    </div>
  );
}

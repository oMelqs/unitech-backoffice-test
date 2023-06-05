import { MapPinIcon } from "@heroicons/react/20/solid";
import { ClockIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Divider from "../Divider";

const CurrentClassCard: React.FC = () => {
  const userName = "Annette Black";
  const userLocation = "Curitiba, PR";
  const monthProfit = "1000";

  return (
    <div className="bg-stroke1 border-stroke rounded-3xl">
      <div className="mx-auto flex max-w-7xl lg:items-center p-6 lg:px-8 justify-between">
        <div className="items-center">
          <span className="text-dark text-base">Sua aula começa em</span>
          <div className="flex items-center">
            <ClockIcon className="flex h-5 w-5 text-gray" />
            <span className="text-dark text-xs font-light pl-2">15 min.</span>
          </div>
        </div>
        <div className="flex items-center lg:justify-end">
          <Divider />
          <div>
            <a href="#" className="hidden lg:flex items-center">
              <UserCircleIcon
                className="h-12 w-12 text-gray"
                aria-hidden="true"
              />
              <div className="pl-1">
                <span className="text-sm text-dark">{userName}</span>
                <div className="flex items-center">
                  <MapPinIcon className="flex h-4 w-4 text-gray" />
                  <span className="text-xs text-dark">{userLocation}</span>
                </div>
              </div>
            </a>
          </div>
          <Divider />
          <div className="hidden lg:block items-center">
            <div>
              <span className="text-dark text-sm">R${monthProfit}</span>
            </div>
            <div>
              <span className="text-dark text-xs">Ganhos deste mês</span>
            </div>
          </div>
          <Divider />
          <div className="lg:pl-0 pl-2">
            <button className="bg-orange text-white text-sm rounded-xl h-[48px] w-[120px]">
              Ir para aula
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentClassCard;

import {
  BellIcon,
  ChevronDownIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const Header: React.FC = () => {
  const userName = "Melquisedeque Linhares";

  return (
    <div className="bg-white border-stroke rounded-3xl m-20">
      <nav
        className="mx-auto flex max-w-7xl lg:items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center">
          <a href="#" className="">
            <img className="h-10 w-auto" src="./logo.svg" alt="" />
          </a>
          <span className="text-dark font-bold pl-2">
            Website <p />
            Name
          </span>
          <div className="bg-lightGray h-8 w-[2px] mx-[32.5px]"></div>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm  leading-6 text-gray">
            Dashboard
          </a>
          <a href="#" className="text-sm  leading-6 text-blue">
            Minhas aulas
          </a>
          <a href="#" className="text-sm  leading-6 text-gray">
            Minha Agenda
          </a>
          <a href="#" className="text-sm leading-6 text-gray">
            Alunos
          </a>
          <a href="#" className="text-sm leading-6 text-gray">
            Suporte
          </a>
        </div>
        <div className="flex lg:flex-1 lg:justify-end items-center">
          <BellIcon
            className="flex h-6 w-6 text-gray lg:mr-0 mr-[22px]"
            aria-hidden="true"
          />
          <div className="hidden lg:flex lg:bg-lightGray lg:h-8 lg:w-[2px] lg:mx-[32.5px]"></div>
          <UserCircleIcon
            className="h-12 w-12 text-gray lg:pr-4 pr-2"
            aria-hidden="true"
          />
          <span className="hidden lg:flex text-sm text-dark pr-[22px]">
            {userName}
          </span>
          <ChevronDownIcon className="h-4 w-4 text-gray" aria-hidden="true" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
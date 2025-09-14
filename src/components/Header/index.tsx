import MenuIcon from "./../../assets/hamburg-icon.svg?react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 bg-gradient-to-r from-[rgba(29,78,216,1)] to-[rgba(124,58,237,1)] right-0 z-50 flex items-center h-14 px-3 justify-center py-[15px]">

      <div className="flex items-center sm:hidden">
        <MenuIcon className="w-6 h-6 text-gray-800" aria-hidden="true" />
      </div>

      <div className="ml-2 md:ml-0">
        <img src={"/MS_Logo.png"} alt="Company Logo" className="w-[132px] h-[15px] md:w-[195px] md:h-[23px]" />
      </div>

      <div className="flex-1 md:hidden" />

      <div className="ml-auto flex items-center text-sm ml-[12px]">
        Tracker Chat
      </div>
    </header>
  );
}

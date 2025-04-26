import MainContent from "./MainContent";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import AiSection from "./AiSection";
import React from "react";

const FullPage = () => {
  return (
    <div className="w-screen flex justify-center">
      {/* Main container - full width on mobile, fixed width on larger screens */}
      <div className="w-full md:w-[1440px] h-auto md:h-[1024px] bg-white flex md:justify-between flex-col md:flex-row ">
        {/* Sidebar - taking full width on mobile, fixed width on larger */}
        <div className="w-full md:w-auto">
          <SideBar />
        </div>

        {/* Content area (NavBar, MainContent, AiSection) */}
        <div className="flex-1">
          <NavBar />
          <MainContent />
          <AiSection />
        </div>
      </div>
    </div>
  );
};

export default FullPage;
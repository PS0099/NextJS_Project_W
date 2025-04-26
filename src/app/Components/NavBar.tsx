import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full md:w-[1192px] h-[60px] md:h-[80px] border-b-[1px] border-solid border-[rgba(174,208,87,0.1)] px-4 md:px-[32px] bg-white flex justify-center">
      <div className="w-full md:w-[1128px] flex items-center justify-end h-full py-3 md:pt-[20px] md:pb-[20px]">
        {/* Logo/Title (You might want to replace the image with text on mobile) */}
        <div className="flex items-center">
          <img
            src="https://img.freepik.com/free-vector/illustration-cogwheel_53876-6326.jpg?semt=ais_hybrid&w=740"
            className="rounded-full h-8 w-8 md:h-[36px] md:w-[36px]"
            alt="Settings Icon"
          />
          {/* You can add a text logo here that might be more visible on mobile */}
          {/* <span className="ml-2 text-lg font-semibold hidden md:block">Your App</span> */}
        </div>

        {/* User Avatar */}
        <div className="w-10 h-10 md:w-[40px] md:h-[40px]">
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1745519504~exp=1745523104~hmac=c24f7a2632aa3d0327fc021030e8cbd81833ff539f7897ddf7bd2c32286d64c3&w=826"
            className="rounded-full h-full w-full"
            alt="User Avatar"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
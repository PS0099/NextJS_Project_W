"use client";
import React, { useState } from "react";

import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

function SideBar() {
  const items = [
    "Home",
    "Stages & Checklists",
    "Upload Docs",
    "Preferred Vendors",
    "Tech Stack",
    "Targets",
    "Zee Sales Targets",
    "MAI Settings",
    "Pending Questions",
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50 bg-white rounded-md shadow-md">
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Sidebar for larger screens */}
      <aside className="hidden md:block w-[248px] h-[1024px] pt-[32px] pb-[32px] bg-[rgba(17,69,93,1)]">
        <nav className="pt-[40px] flex flex-col gap-[32px]">
          <ul className="flex flex-col gap-[12px] list-none">
            {items.map((item, index) => (
              <li
                key={index}
                className="group w-[216px] h-[36px] px-4 py-2 rounded-sm hover:bg-white flex items-center gap-4 mx-4"
              >
                <p className="h-[20px] w-full text-[16px] leading-[20px] text-[rgba(255,255,255,0.6)] font-[DM Sans] group-hover:text-gray-800">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile Sidebar Menu (conditionally rendered) */}
      {isMobileMenuOpen && (
        <aside className="fixed top-0 left-0 z-40 w-64 h-full pt-[60px] pb-[32px] bg-[rgba(17,69,93,1)] shadow-lg transition-transform duration-300 transform-translate-x-0">
          <nav className="mt-6 flex flex-col gap-4">
            <ul className="flex flex-col gap-2 list-none px-4">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="group h-[36px] py-2 rounded-md hover:bg-white flex items-center gap-4"
                >
                  <p className="text-[16px] leading-[20px] text-[rgba(255,255,255,0.8)] font-[DM Sans] group-hover:text-gray-800">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </nav>
          {/* Close Button inside the mobile menu */}
          <div className="absolute top-4 right-4">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-300 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </aside>
      )}
    </>
  );
}

export default SideBar;
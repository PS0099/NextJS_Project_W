import React from "react";

function AiSection() {
  return (
    <div className="absolute top-[733px]  w-[1192px] h-[291px] border-t flex flex-row   ">
      <div className="w-[360px] h-[291px]">
        <div className="w-[360px] h-[52px] gap-8 border-b bg-white border-[#D7DFE9] flex items-center justify-center">
          <div className="w-[312px] h-[28px] gap-2 flex items-center justify-between">
            <p className="w-[165px] h-[28px] font-inter font-semibold text-[18px] leading-[28px] text-[#101828]">
              Pending Questions
            </p>
            <div className="w-[28px] h-[22px] rounded-sm px-2 py-0.5 bg-[#2FBdFF] shadow-sm flex items-center justify-center text-xs font-medium text-white">
              02
            </div>
          </div>
        </div>

        <div className="w-[360px] h-[119.5px] gap-4 flex flex-col p-4 border-b border-[#EAECF0] bg-white">
          {/* Your content here */}
          <div className="w-[328px] h-[40px] gap-4 flex  justify-between">
            {/* Your content here */}
            <div className="w-[251px] h-[40px] gap-3 flex items-center justify-start">
              {/* Your content here */}
              <div className="w-2 h-2 rounded-[5px] bg-[#2FBDFF]">
                {/* Your content here 0000*/}
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-[#D6CFB7] border-2 border-solid border-[#EAECF0]">
                <img src="\Images\Avatar.png"></img>
              </div>
              <div className="h-[40px]">
                <p className=" h-[20px] text-[#344054] font-semibold text-[14px] leading-[20px] ">
                  Phoenix Baker
                </p>
                <p className="w-[66px] h-[20px] text-[#475467] font-normal text-[14px] leading-[20px] ">
                  @phoenix
                </p>
              </div>
            </div>

            <div>
              <div className="w-[61px] h-[20px] text-[#475467] font-normal text-[14px] leading-[20px] ">
                5min ago
              </div>
            </div>
          </div>

          <div className="w-[328px] h-[40px] pl-[20px]">
            <p className="w-[308px] h-[40px] text-[#475467] font-normal text-[14px] leading-[20px] ">
              What are the requirements for opening a new store?
            </p>
          </div>
        </div>

        <div className="w-[360px] h-[119.5px] gap-4 flex flex-col p-4 border-b border-[#EAECF0] bg-white">
          {/* Your content here */}
          <div className="w-[328px] h-[40px] gap-4 flex  justify-between">
            {/* Your content here */}
            <div className="w-[251px] h-[40px] gap-3 flex items-center justify-start">
              {/* Your content here */}
              <div className="w-2 h-2 rounded-[5px] bg-[#2FBDFF]">
                {/* Your content here 0000*/}
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-[#D6CFB7] border-2 border-solid border-[#EAECF0]">
                <img src="\Images\Avatar.png"></img>
              </div>
              <div className="h-[40px]">
                <p className=" h-[20px] text-[#344054] font-semibold text-[14px] leading-[20px] ">
                  Phoenix Baker
                </p>
                <p className="w-[66px] h-[20px] text-[#475467] font-normal text-[14px] leading-[20px] ">
                  @phoenix
                </p>
              </div>
            </div>

            <div>
              <div className="w-[61px] h-[20px] text-[#475467] font-normal text-[14px] leading-[20px] ">
                5min ago
              </div>
            </div>
          </div>

          <div className="w-[328px] h-[40px] pl-[20px]">
            <p className="w-[308px] h-[40px] text-[#475467] font-normal text-[14px] leading-[20px] ">
              What are the requirements for opening a new store?
            </p>
          </div>
        </div>
      </div>

      <div className="h-[291px]  w-[832px] bg-[#F9FAFB] ">
        <div className=" absolute w-[24px] h-[24px] top-[15px] left-[1136px]  gap-[8px] rounded-full p-[6px] bg-[#e9eff6] flex items-center justify-center">
          <div className="w-[16px] h-[16px]  flex items-center justify-center text-blue-500  align-center mt-2 ">
            &#8963;
          </div>
        </div>

        <div className="w-[680px] h-[169.56px] mt-[61.22px] ml-[76px] flex flex-col justify-center items-center gap-[32px]">
          <div className="w-[486px] h-[93.56px] flex flex-col gap-5 justify-center items-center ">
            <img src="\Images\Logo.png" className="w-[64px] h-[35.56px]"></img>
            <p className="w-[486px] h-[38px] font-inter font-semibold text-[30px] leading-[38px] text-[rgba(33,33,33,1)]">
              Welcome to the AI Chat Assistant
            </p>
          </div>

          <div className="w-[680px] h-[44px] gap-[32px] flex items-center justify-center bg-[#FFFFFF] rounded-[8px] border border-solid border-[#D7DFE9] p-3">
            <div className="w-[624px] h-[24px] gap-[8px] flex">
              <p className="w-[183px] h-[24px] text-[16px] leading-[24px] font-normal font-[Inter] text-[rgba(28,34,43,0.6)] ml-[2px] ">
                Ask your question here..
              </p>
            </div>

          <div className="h-[20px] w-[20px]"><img className="w-[16.668px] h-[16.667px]  mt-[1.67px] mr-[3px]" src="\Images\v5.jpg"></img></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiSection;

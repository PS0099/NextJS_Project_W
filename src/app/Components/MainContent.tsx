import React from "react";

const MainContent = () => {
  const sCompleted = ["Profile Setup", "Initial Training", "Legal Documents"];
  const sInProgress = ["Financial Integration", "Final Review"];

  return (
    <main className="px-4 md:px-0">
      <div className="md:w-[1128px] md:h-full mt-[16px] md:mt-[24px] ml-auto mr-auto md:ml-[32px] flex flex-col md:flex-row gap-4 md:gap-[22px]">
        {/* First Card */}
        <div className="w-full md:w-[316px] h-auto md:h-[586px] p-4 md:p-[24px] flex flex-col gap-4 md:gap-[24px] rounded-xl border border-[#eaeef0] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
          <div className="w-full md:w-[268px] h-auto md:h-[538px] flex flex-col gap-4 md:gap-[20px]">
            <div className="w-full md:w-[268px] h-auto md:h-[212px] gap-4 md:gap-[24px] pb-4 md:pb-[16px] border-b border-[#E9EFF6] flex flex-col items-center justify-center">
              {/* Heading */}
              <p className="w-auto md:w-[139px] h-[24px] font-semibold text-[16px] leading-[24px] text-center text-black font-[Inter]">
                Account Progress
              </p>

              {/* Circular Image Container */}
              <div className="w-[100px] h-[100px] md:w-[148px] md:h-[148px] rounded-full flex items-center justify-center">
                <img
                  src="/Images/Progress circle.jpg"
                  alt="Progress circle"
                  className="w-[90px] h-[90px] md:w-[133.2px] md:h-[133.2px]"
                />
              </div>
            </div>

            <div className="w-full md:w-[268px] h-auto md:h-[306px] flex flex-col gap-4 md:gap-[16px]">
              <div className="w-full md:w-[268px] h-auto md:h-[162px] flex flex-col gap-4 md:gap-[16px] p-4 rounded-[8px] bg-[rgba(246,247,251,1)]">
                {/* Title */}
                <p className="text-[14px] font-semibold leading-[24px] text-left text-[#1C222B] font-[inter]">
                  Steps Completed
                </p>

                {/* Steps List */}
                <ul className="flex flex-col gap-2 md:gap-[8px] list-disc list-inside">
                  {sCompleted.map((item, index) => (
                    <li
                      key={index}
                      className="w-auto md:w-[236px] h-auto md:h-[24px] flex justify-between items-center"
                    >
                      <div className="flex items-center gap-2 md:gap-[8px] h-[24px] ">
                        <img
                          src="\Images\Ellipse 1168.jpg"
                          className="w-[8px] h-[8px] md:w-[10px] md:h-[10px]"
                        ></img>
                        <p className="font-inter font-medium text-[14px] leading-[20px] tracking-[0%] text-center text-[#1C222B]">
                          {item}
                        </p>
                      </div>

                      <div className="flex items-center justify-center w-5 h-5 md:w-[16px] md:h-[16px] bg-green-600 rounded-full">
                        <img src="\Images\Vector.jpg" className="w-3 h-3"></img>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full md:w-[268px] flex flex-col gap-4 md:gap-[16px]">
              <div className="w-full md:w-[268px] flex flex-col gap-4 md:gap-[16px] p-4 rounded-[8px] bg-[rgba(246,247,251,1)]">
                {/* Title */}
                <p className="text-[14px] font-semibold leading-[24px] text-left text-[#1C222B] font-[inter]">
                  Steps Remaining
                </p>

                {/* Steps List */}
                <ul className="flex flex-col gap-2 md:gap-[8px] list-disc list-inside">
                  {sInProgress.map((item, index) => (
                    <li
                      key={index}
                      className="w-auto md:w-[236px] h-auto md:h-[24px] flex justify-between items-center"
                    >
                      <div className="flex items-center gap-2 md:gap-[8px] h-[24px] ">
                        <img
                          src="\Images\Ellipse 1168.jpg"
                          className="w-[8px] h-[8px] md:w-[10px] md:h-[10px]"
                        ></img>
                        <p className="font-inter font-medium text-[14px] leading-[20px] tracking-[0%] text-center text-[#1C222B]">
                          {item}
                        </p>
                      </div>

                      <div className="flex items-center justify-center w-5 h-5 md:w-[16px] md:h-[16px] bg-green-200 rounded-full">
                        <img src="\Images\v2.jpg" className="w-3 h-3"></img>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="flex flex-col w-full md:w-[386px] h-auto md:h-[586px] gap-4 md:gap-[24px]">
          <div className="w-full md:w-[386px] h-auto md:h-[284px] flex flex-col gap-4 md:gap-[24px] rounded-xl border border-[rgba(234,236,240,1)] p-4 md:p-[24px] bg-[var(--Colors-Background-bg-primary_alt,_rgba(255,255,255,1))] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
            <div className="w-full md:w-[338px] h-auto md:h-[78px] flex flex-col gap-2 md:gap-[16px] border-b-[1px]">
              <p className="w-auto md:w-[208px] h-[24px] text-[rgba(0,0,0,1)] font-inter font-semibold text-[16px] leading-[24px] text-center">
                Total Franchisees Onboard
              </p>

              <div className="w-full md:w-[338px] h-auto md:h-[38px] flex justify-between items-center">
                <div className="w-auto md:w-[215px] h-[38px] flex gap-4 md:gap-[16px] align-center justify-left items-center">
                  <p className="w-auto md:w-[35px] h-[38px] font-inter font-semibold text-[30px] leading-[38px] text-[rgba(16,24,40,1)] text-center">
                    14
                  </p>
                  <img
                    src="\Images\Badge wrap.jpg"
                    className="w-auto md:w-[66px] h-[24px]"
                  ></img>
                </div>

                <div className="w-auto md:w-[124px] h-[24px] gap-2 md:gap-4">
                  <img src="\Images\Avatar group.jpg" className="max-w-full"></img>
                </div>
              </div>
              <img src="\Images\Frame 1686554518.jpg" className="max-w-full"></img>

              <div className="w-full md:w-[338px] h-auto md:h-[98px] flex flex-col gap-2 md:gap-[16px]">
                <div className="w-full md:w-[338px] h-[22px] flex justify-between items-center">
                  <div className="w-auto md:w-[172px] h-[20px] flex gap-2 md:gap-3 justify-between items-center">
                    <img
                      src="\Images\Rectangle 1895.jpg"
                      className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-[4px]"
                    ></img>
                    <p className="w-auto md:w-[150px] h-[20px] font-inter text-sm leading-5 font-medium text-[rgba(71,84,103,1)] ">
                      Stage 1 (Initial Inquiry)
                    </p>
                  </div>
                  <p className="w-auto md:w-[24px] h-[22px] text-[18px] leading-none font-semibold text-[rgba(28,34,43,1)] flex items-center justify-center">
                    02
                  </p>
                </div>

                <div className="w-full md:w-[338px] h-[22px] flex justify-between items-center">
                  <div className="h-[20px] flex gap-2 md:gap-3 justify-between items-center">
                    <img
                      src="\Images\Rectangle 1895.jpg"
                      className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-[4px]"
                    ></img>
                    <p className="h-[20px] font-inter text-sm leading-5 font-medium text-[rgba(71,84,103,1)] ">
                      Stage 2 (Document Submission)
                    </p>
                  </div>
                  <p className="w-auto md:w-[24px] h-[22px] text-[18px] leading-none font-semibold text-[rgba(28,34,43,1)] flex items-center justify-center">
                    07
                  </p>
                </div>

                <div className="w-full md:w-[338px] h-[22px] flex justify-between items-center">
                  <div className="w-auto md:w-[172px] h-[20px] flex gap-2 md:gap-3 justify-between items-center">
                    <img
                      src="\Images\Rectangle 1895.jpg"
                      className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-[4px]"
                    ></img>
                    <p className="w-auto md:w-[150px] h-[20px] font-inter text-sm leading-5 font-medium text-[rgba(71,84,103,1)] ">
                      Stage 1 (Training)
                    </p>
                  </div>
                  <p className="w-auto md:w-[24px] h-[22px] text-[18px] leading-none font-semibold text-[rgba(28,34,43,1)] flex items-center justify-center">
                    05
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[386px] h-auto md:h-[282px] p-4 md:p-6 flex flex-col gap-2 md:gap-5 rounded-xl border border-[rgba(234,236,240,1)] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
            <div className="w-full md:w-[338px] h-auto md:h-[112px] flex flex-col gap-2 md:gap-4 pb-2 md:pb-3 border-b border-b-[rgba(233,239,246,1)]">
              <p className="w-auto md:w-[150px] h-[24px] text-[16px] leading-[24px] font-semibold text-center text-black font-inter">
                Financial Wellbeing
              </p>

              <div className="w-full md:w-[338px] h-auto md:h-[60px] flex justify-between">
                <div className="w-auto md:w-[118px] h-[60px] flex flex-col gap-0.5">
                  <p className="w-auto md:w-[39px] h-[38px] text-[30px] leading-[38px] font-semibold text-[rgba(16,24,40,1)] font-inter">
                    20
                  </p>
                  <p className="w-auto md:w-[118px] h-[20px] text-[14px] leading-[20px] font-medium text-[rgba(71,84,103,1)] font-inter">
                    Total Franchisees
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <img
                    src="\Images\Badge.jpg"
                    className="w-auto md:w-[64px] h-[24px]"
                  ></img>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[338px] h-auto md:h-[102px] gap-2 md:gap-4 flex flex-col md:flex-row">
              <div className="w-full md:w-[161px] h-auto md:h-[102px] flex flex-col justify-center items-center gap-2 md:gap-[8px] rounded-lg p-2 md:p-4 bg-slate-100 border-r border-slate-200">
                <p className="w-auto md:w-[98px] h-[24px] font-inter font-semibold text-sm leading-6 tracking-tight text-center text-neutral-600 flex items-center justify-center">
                  Target
                </p>
                <p className="w-auto md:w-[98px] h-[38px] font-inter font-semibold text-xl leading-[38px] tracking-tight text-neutral-800 flex items-center justify-center">
                  $500,000
                </p>
              </div>

              <div className="w-full md:w-[161px] h-auto md:h-[102px] flex flex-col justify-center items-center gap-2 md:gap-[8px] rounded-lg p-2 md:p-4 bg-slate-100 border-r border-slate-200">
                <p className="w-auto md:w-[98px] h-[24px] font-inter font-semibold text-sm leading-6 tracking-tight text-center text-neutral-600 flex items-center justify-center">
                  Current
                </p>
                <p className="w-auto md:w-[98px] h-[38px] font-inter font-semibold text-xl leading-[38px] tracking-tight text-neutral-800 flex items-center justify-center">
                  $450,000
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="w-full md:w-[386px] h-auto md:h-[586px] gap-4 md:gap-[20px] flex flex-col">
          <div className="w-full md:w-[386px] h-auto md:h-[282px] gap-4 md:gap-[20px] flex flex-col rounded-xl border p-4 md:p-6 bg-white shadow-sm border-neutral-200">
            <div className="w-full md:w-[338px] h-[24px] gap-4 md:gap-[16px] flex items-center justify-left">
              <p className="h-[24px] font-inter font-semibold text-[16px] leading-[24px] tracking-[0%] text-center text-black ">
                Key Insights & Feedback
              </p>
            </div>

            <div
              className="w-full md:w-[338px] h-auto md:h-[80px] flex justify-between pb-2 md:pb-3 border-b"
              style={{ borderColor: "rgba(233, 239, 246, 1)" }}
            >
              <div className="w-auto md:w-[90px] h-auto md:h-[68px] flex flex-col gap-1 md:gap-[4px]">
                <p className="w-auto md:w-[60px] h-[38px] font-inter font-semibold text-[30px] leading-[38px] tracking-[0%] text-[#101828] flex items-center justify-center">
                  10%
                </p>
                <p className="w-auto md:w-[90px] h-[20px] font-inter font-medium text-[14px] leading-[20px] tracking-[0%] text-[#475467] flex items-center justify-center">
                  Sales Growth
                </p>
              </div>

              <div className="flex items-center justify-center ">
                <img
                  src="\Images\Avatar.jpg"
                  className="w-8 h-8 md:w-[36px] md:h-[36px]"
                ></img>
              </div>

              <div className="w-auto md:w-[107px] h-[24px] flex items-center gap-2 md:gap-[10px] rounded-[20px] border border-[#BAE9FF] bg-[rgba(213,242,255,0.5)] px-2 md:px-[12px] py-[2px]">
                <p className="w-auto md:w-[83px] h-[20px] font-inter font-medium text-[12px] leading-[20px] tracking-[0%] text-[#27ADD4] flex items-center justify-center">
                  Top Performer
                </p>
              </div>
            </div>

            <div className="w-full md:w-[338px] h-auto md:h-[90px] flex flex-col gap-2 md:gap-[6px] rounded-[8px] border-r border-gray-300 pt-2 md:pt-[8px] pr-4 md:pr-[16px] pb-2 md:pb-[8px] pl-4 md:pl-[16px] bg-[#F6F7FB]">
              <p className="w-auto md:w-[66px] h-[24px] font-inter font-semibold text-[14px] leading-[24px] tracking-[0%] text-center text-[#1C222B] ">
                Feedback
              </p>
              <div className="w-full md:w-[306px] h-auto md:h-[36px] flex gap-2 md:gap-[8px]">
                <div className="w-[10px] h-auto md:h-[36px] flex gap-2 md:gap-[10px] pt-1 md:pt-[4px]">
                  <img
                    src="\Images\Ellipse 1168.jpg"
                    className="w-[8px] h-[8px] md:w-[10px] md:h-[10px]"
                  ></img>
                </div>
                <p className="w-auto md:w-[288px] h-auto md:h-[36px] font-inter font-medium text-[12px] leading-[18px] tracking-[0%] text-[#455468]">
                  Franchisees are requesting more detailed training materials.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[386px] h-auto md:h-[284px] flex flex-col gap-4 md:gap-[20px] rounded-xl border border-[#EAECF0] p-4 md:p-[24px] bg-white shadow-sm">
            <div className="w-full md:w-[338px] h-[24px] flex flex-col gap-2 md:gap-[16px] border-b">
              <p className="w-auto md:w-[121px] h-[24px] font-inter font-semibold text-[16px] leading-[24px] tracking-[0%] text-black ">
                Prospect Leads
              </p>

              <div className="w-full md:w-[338px] h-auto md:h-[192px] flex flex-col gap-2 md:gap-[12px]">
                <div className="w-full md:w-[338px] h-auto md:h-[56px] flex flex-col gap-2 md:gap-[16px]">
                  <div className="w-full md:w-[338px] h-auto md:h-[56px] flex gap-2 md:gap-[8px] rounded-[8px] border-r p-2 md:p-[10px_16px] bg-[#F6F7FB]">
                    <div className="w-auto md:w-[306px] h-[36px] flex justify-between items-center">
                      <div className="w-auto md:w-[135px] h-[36px] flex gap-2 md:gap-[10px] justify-center items-center">
                        <img
                          src="\Images\Avatar.png"
                          className="w-8 h-8 md:w-[36px] md:h-[36px] rounded-full"
                        ></img>
                        <p className="w-auto md:w-[90px] h-[20px] font-medium text-[14px] leading-[20px] text-[#101828]">
                          Wade Warren
                        </p>
                      </div>
                      <p className="w-auto md:w-[133px] h-[20px] font-medium text-[14px] leading-[20px] text-[#1C222B] bg-opacity-70 ">
                        Stage: Initial Inquiry
                      </p>
                    </div>
                  </div>

                  <div className="w-full md:w-[338px] h-auto md:h-[56px] flex gap-2 md:gap-[8px] rounded-[8px] border-r p-2 md:p-[10px_16px] bg-[#F6F7FB]">
                    <div className="w-auto md:w-[306px] h-[36px] flex justify-between items-center">
                      <div className="w-auto md:w-[135px] h-[36px] flex gap-2 md:gap-[10px] justify-center items-center">
                        <img
                          src="\Images\Avatar.png"
                          className="w-8 h-8 md:w-[36px] md:h-[36px] rounded-full"
                        ></img>
                        <p className="w-auto md:w-[90px] h-[20px] font-medium text-[14px] leading-[20px] text-[#101828]">
                          Wade Warren
                        </p>
                      </div>
                      <p className="w-auto md:w-[133px] h-[20px] font-medium text-[14px] leading-[20px] text-[#1C222B] bg-opacity-70 ">
                        Stage: Initial Inquiry
                      </p>
                    </div>
                  </div>

                  <div className="w-full md:w-[338px] h-auto md:h-[56px] flex gap-2 md:gap-[8px] rounded-[8px] border-r p-2 md:p-[10px_16px] bg-[#F6F7FB]">
                    <div className="w-auto md:w-[306px] h-[36px] flex justify-between items-center">
                      <div className="w-auto md:w-[135px] h-[36px] flex gap-2 md:gap-[10px] justify-center items-center">
                        <img
                          src="\Images\Avatar.png"
                          className="w-8 h-8 md:w-[36px] md:h-[36px] rounded-full"
                        ></img>
                        <p className="w-auto md:w-[90px] h-[20px] font-medium text-[14px] leading-[20px] text-[#101828]">
                          Wade Warren
                        </p>
                      </div>
                      <p className="w-auto md:w-[133px] h-[20px] font-medium text-[14px] leading-[20px] text-[#1C222B] bg-opacity-70 ">
                        Stage: Initial Inquiry
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
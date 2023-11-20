import React from "react";

const Cross = () => {
  return (
    <div className="mt-9 relative flex flex-col">
      <div
        style={{
          transform: "rotate(2.45deg)",
        }}
        className="h-[120px] md:h-[90px]  flex items-center text-[1.1rem] sm:text-[1.3rem] md:text-[1.6rem] text-white w-full flex-shrink-0 bg-[#F09223]"
      >
        *Let’s help each other *Let’s help each other *Let’s help each other
      </div>
      <div
        style={{
          transform: "rotate(-1.11deg)",
        }}
        className="h-[120px] md:h-[90px]  absolute top-9 flex items-center text-[1.1rem] sm:text-[1.3rem] md:text-[1.6rem] text-white w-full flex-shrink-0 bg-[#138294]"
      >
        *Let’s help each other *Let’s help each other *Let’s help each other
      </div>
    </div>
  );
};

export default Cross;

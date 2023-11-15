import React from "react";

const Title = ({
  border = "full",
  icon = null,
  title = "",
  iconIsOut = false,
}) => {
  const borderRadius =
    (border === "end" ? "rounded-e-[36px]" : null) ||
    (border === "full" ? "rounded-[36px]" : null);
  return !iconIsOut ? (
    <div
      className={`bg-title text-white ${borderRadius} rounded-e- h-[46px] w-[200px] overflow-hidden pt-[7px] font-open-sans `}
    >
      {<i className="float-left mt-[5px] pl-[26px] pr-4 text-[21px]">{icon}</i>}
      <h3 className="float-left pt-[3px] text-[23px] font-bold uppercase leading-[26px] ">
        {title}
      </h3>
    </div>
  ) : (
    <div className="flex items-center">
      <i className="mr-4 text-[57px] text-[#212b37]">{icon}</i>
      <div
        className={`bg-title text-center text-white ${borderRadius} rounded-e- h-[46px] w-[273px] overflow-hidden pt-[7px] font-open-sans `}
      >
        <h3 className="px-[72px] pt-[3px] text-[23px] font-bold uppercase leading-[26px] ">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Title;

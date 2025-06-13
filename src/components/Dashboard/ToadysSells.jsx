import React from "react";
import ComponentHeader from "../shareComponent/ComponentHeader";
import { salesData } from "../../components/Data";
import ChartGraph from "../Chart/BarChart";
import WraperDiv from "./wraperDiv";

const SalesDetails = () => {
  return (
    <div className=" bg-primary2 p-4 rounded-lg ms-2">
      <ComponentHeader title="Today's Sells" des="Sales Summary" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {salesData &&
          salesData.map((data) => {
            return (
              <div className="bg-primary1 p-4 rounded-md" key={data.id}>
                <img style={{ color: data.color }} src={data.icon} alt="" />
                <div className="mt-2">
                  <p className="font-bold text-[15px]">{data.count}</p>
                  <h1 className="text-[12px] text-white/80 font-medium">
                    {data.title}
                  </h1>
                  <p
                    style={{ color: data.color }}
                    className="text-[8px] md:text-[10px] font-medium"
                  >
                    {data.desc}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const SalesChart = () => {
  return (
    <div className="p-4">
      <ComponentHeader title="Level" />
      <div className="w-full h-[120px]">
        <ChartGraph />
      </div>
      <div className="flex justify-center w-full gap-20 lg:gap-0 items-center pt-4 mt-4">
        <button className="flex items-center lg:justify-center gap-2 text-grayText text-[10px] font-medium lg:border-r border-grayText/30 lg:w-full">
          <span className="h-2 w-2 rounded-full bg-secondary"></span>Volume
        </button>
        <button className="flex items-center lg:justify-center gap-2 text-grayText text-[10px] font-medium  border-grayText/30 lg:w-full">
          <span className="h-2 w-2 rounded-full bg-grayText"></span>Service
        </button>
      </div>
    </div>
  );
};

const ToadysSells = () => {
  return (
    <div>
      <WraperDiv >
        <div className="flex-[3]  bg-primary2 rounded-md">
          <SalesDetails />
        </div>
        <div className="flex-[1]  bg-primary2 rounded-md">
          <SalesChart />
        </div>
      </WraperDiv>
    </div>
  );
};

export default ToadysSells;
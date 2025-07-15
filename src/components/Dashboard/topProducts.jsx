import React from "react";
import { TopProductsData } from "../Data";
import ComponentHeader from "../shareComponent/ComponentHeader";
import ChartComponent from "../Chart/lineChart";
import WraperDiv from "./wraperDiv";

const ProductList = () => {
  const tableHeading = ["#", "Name", "Popularity", "Sales"];
  return (
    <div className="p-4">
      <ComponentHeader title="Top Products" />
      <div className="w-full ">
        <div>
          <div className="flex justify-between items-center px-6">
            {tableHeading.map((heading, index) => (
              <h1 key={index} className="text-[13px] font-medium text-grayText">
                {heading}
              </h1>
            ))}
          </div>
          {TopProductsData.map((data, index) => {
            const Color = () => data.color;
            return (
              <div
                key={index}
                className="text-white/80 flex items-center justify-between gap-3 text-center text-[10px] font-medium px-6 border-b border-grayText/20 py-2"
              >
                <span>{index + 0}</span>
                <p className="w-[50%]">{data.name}</p>
                <div className="relative max-w-[25%] w-full h-[3px] rounded-full bg-grayText">
                  <div
                    className={`absolute top-0 left-0 ${
                      data.priority >= 20 && "w-[25%]"
                    } ${data.priority >= 50 && "w-[50%]"} ${
                      data.priority >= 80 && "w-[75%]"
                    } ${data.priority >= 90 && "w-[100%]"}`}
                  ></div>
                </div>
                <button
                  className={`py-1 px-2 rounded-sm text-[${Color()}]`}
                  style={{ border: `${data.color} 1px solid` }}
                >
                  {data.priority}%
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Customerfulfilment = () => {
  return (
    <div className="w-full p-4">
      <ComponentHeader title={"Customer Fulfilment"} />

      <div className="w-full flex items-center justify-center mx-auto">
        <ChartComponent />
      </div>
      <div className="flex items-center justify-between pt-2 mt-2 border-t border-grayText/20">
        <div>
          <button className="flex items-center text-[10px] font-medium lg:justify-center gap-2 text-grayText w-full">
            <span className="h-2 w-2 rounded-full bg-secondary"></span>
            Last Month
          </button>
          <p className="text-center text-2.5 font-medium text-white/70">
            $4502
          </p>
        </div>
        <div>
          <button className="flex items-center text-[10px] font-medium lg:justify-center gap-2 text-grayText w-full">
            <span className="h-2 w-2 rounded-full bg-secondary"></span>
            This Month
          </button>
          <p className="text-center text-2.5 font-medium text-white/70">
            $3501
          </p>
        </div>
      </div>
    </div>
  );
};

const TopProducts = () => {
  return (
    <div>
      <WraperDiv>
        <div className="flex-[1.3] lg:flex-[1.5] bg-primary2 rounded-md">
          <ProductList />
        </div>
        <div className="flex-[0.7] lg:flex-[0.5] bg-primary2 rounded-md">
          <Customerfulfilment />
        </div>
      </WraperDiv>
    </div>
  );
};

export default TopProducts;

import MonthlyLineChart from "../Chart/Curve";
import PieChart from "../Chart/Pie";
import ComponentHeader from "../shareComponent/ComponentHeader";

const VisitorInsights = () => {
  return (
    <div className="p-4 h-full">
      <ComponentHeader title="Visitor Insights" />
      <div className="w-full mt-10">
        <MonthlyLineChart />
      </div>
    </div>
  );
};

const EarningRate = () => {
  return (
    <div className="flex flex-col items-center md:items-start p-4 w-full">
      <div className="w-full text-center md:text-left">
        <ComponentHeader title="Earnings" des="Total Expense" />
        <h1 className="text-[22px] md:text-[24px] lg:text-[26px] font-bold text-secondary">
          $6540.51
        </h1>
        <p className="text-grayText text-[12px] md:text-[14px] ">
          Profit is 47% More than last mont h
        </p>
      </div>
      <div className="w-full flex items-center justify-center mx-auto">
        <PieChart />
      </div>
    </div>
  );
};

const Earnings = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 px-4 pb-8 lg:gap-x-4 gap-y-4">
      <div className="bg-primary2 rounded-md min-w-full">
        <EarningRate />
      </div>
      <div className="col-span-2 bg-primary2 rounded-md">
        <VisitorInsights />
      </div>
    </div>
  );
};

export default Earnings;

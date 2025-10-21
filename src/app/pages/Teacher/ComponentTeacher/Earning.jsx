import React from "react";

function Earning() {
  return (
    <div className="w-[90%] p-3 m-auto mt-5 h-45 rounded-2xl bg-white">
      <div className="flex gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16"
        >
          <path
            fill="#16a551"
            d="M12.32 8a3 3 0 0 0-2-.7H5.63A1.59 1.59 0 0 1 4 5.69a2 2 0 0 1 0-.25a1.59 1.59 0 0 1 1.63-1.33h4.62a1.59 1.59 0 0 1 1.57 1.33h1.5a3.08 3.08 0 0 0-3.07-2.83H8.67V.31H7.42v2.3H5.63a3.08 3.08 0 0 0-3.07 2.83a2 2 0 0 0 0 .25a3.07 3.07 0 0 0 3.07 3.07h4.74A1.59 1.59 0 0 1 12 10.35a2 2 0 0 1 0 .34a1.59 1.59 0 0 1-1.55 1.24h-4.7a1.59 1.59 0 0 1-1.55-1.24H2.69a3.08 3.08 0 0 0 3.06 2.73h1.67v2.27h1.25v-2.27h1.7a3.08 3.08 0 0 0 3.06-2.73v-.34A3.06 3.06 0 0 0 12.32 8"
            stroke-width="0.5"
            stroke="#16a551"
          />
        </svg>

        <h1 className=" text-xl">Earnings Summary</h1>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-3">
        <div className="rounded-xl p-6 text-center shadow-md bg-gradient-to-b from-[#e9fff7] to-[#f3fffb]">
          <p className="text-2xl font-bold">$1,240</p>
          <p className="text-gray-600">This Month</p>
        </div>

        <div className="rounded-xl p-6 text-center shadow-md bg-gradient-to-b from-[#eaf0ff] to-[#f8f9ff]">
          <p className="text-2xl font-bold">$3,680</p>
          <p className="text-gray-600">Last 3 Months</p>
        </div>

        <div className="rounded-xl p-6 text-center shadow-md bg-gradient-to-b from-[#ffeef5] to-[#fff7fa]">
          <p className="text-2xl font-bold">$45</p>
          <p className="text-gray-600">Avg per Hour</p>
        </div>

        <div className="rounded-xl p-6 text-center shadow-md bg-gradient-to-b from-[#fff3e6] to-[#fff9f3]">
          <p className="text-2xl font-bold">$850</p>
          <p className="text-gray-600">Pending Payout</p>
        </div>
      </div>
    </div>
  );
}

export default Earning;

import React from "react";

function Summary() {
  return (
    <div className="w-[90%] p-3 m-auto mt-5 h-45 rounded-2xl bg-white">
      <div className="flex gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="#3bc9cf"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M3 3v16a2 2 0 0 0 2 2h16" />
            <path d="m19 9l-5 5l-4-4l-3 3" />
          </g>
        </svg>

        <h1 className=" text-xl"> Summary</h1>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-3">
        <div className="rounded-xl p-6 text-center shadow-md bg-gradient-to-b from-[#e9fff7] to-[#f3fffb]">
          <p className="text-2xl font-bold">$140</p>
          <p className="text-gray-600">Total Spending</p>
        </div>

        <div className="rounded-xl p-6 text-center shadow-md bg-gradient-to-b from-[#eaf0ff] to-[#f8f9ff]">
          <p className="text-2xl font-bold">8</p>
          <p className="text-gray-600">Number of courses purchased</p>
        </div>

        <div className="rounded-xl p-6 text-center shadow-md bg-gradient-to-b from-[#ffeef5] to-[#fff7fa]">
          <p className="text-2xl font-bold">$45</p>
          <p className="text-gray-600">This month</p>
        </div>

        <div className="rounded-xl p-6 text-center shadow-md bg-gradient-to-b from-[#fff3e6] to-[#fff9f3]">
          <p className="text-2xl font-bold">$850</p>
          <p className="text-gray-600">Pending Payout</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;

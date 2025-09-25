import { Icon } from "@iconify/react";
import { Image } from "antd";
import bg4 from "../../assets/img/bg4.jpg";
import { daysOfWeek, schedule, scheduleWeek } from "../../shared";
function ScheduleKid() {
  return (
    <>
      <div>
        <h1 className="flex justify-center pt-5 text-3xl  bg-gradient-to-r from-[#79f3d9] via-[#6701ff] to-[#fbd453] bg-clip-text text-transparent">
          My Schedule
        </h1>
        <p className="flex justify-center text-gray-500 mb-5 text-xl">
          Your coding adventures today!
        </p>

        <div className="w-[85%] h-auto m-auto bg-white border-1  border-gray-100 shadow-2xl rounded-2xl p-5">
          <h1 className="text-2xl mb-5">Today - Thursday - 21/8/2025</h1>
          <div className="flex  gap-3.5">
            <div className="w-[70%]">
              {schedule.map((item) => {
                return (
                  <div className="flex justify-between  w-full h-auto bg-gradient-to-r from-[#9a84ff] to-[#489bd3] rounded-2xl mt-5 p-5">
                    <div className="flex gap-2.5">
                      <Icon
                        color="white"
                        icon="mdi:book-open-page-variant"
                        width="50"
                        height="50"
                      />
                      <div>
                        <h1 className="text-white text-2xl">{item.name}</h1>
                        <p className="text-gray-200 text-[14px]">{item.time}</p>
                      </div>
                    </div>

                    <div>
                      <h1 className="text-white text-2xl">Status</h1>
                      <p className="text-gray-300 text-[14px]">Not yet</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Image src={bg4} width={400} className="rounded-2xl" />
          </div>
        </div>
        <div className="w-[85%] h-auto m-auto bg-white border-1 border-gray-100 shadow-2xl rounded-2xl p-5 mt-5">
          <h1 className="text-2xl mb-5">This week</h1>

          <div className="grid grid-cols-7 gap-4">
            {daysOfWeek.map((day) => {
              const events = scheduleWeek[day] || [];

              return (
                <div
                  key={day}
                  className={`min-h-[120px] rounded-2xl p-3 flex flex-col ${
                    events.length
                      ? "bg-gradient-to-r from-[#24b5d6] to-[#489bd3] text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <h2 className="font-bold text-center">{day}</h2>

                  {events.length ? (
                    <div className="mt-2 space-y-2">
                      {events.map((event, idx) => (
                        <div key={idx}>
                          <h3 className="text-lg">{event.name}</h3>
                          <p className="text-sm">{event.time}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-sm mt-5">No class</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-10 w-full"></div>
      </div>
    </>
  );
}

export default ScheduleKid;

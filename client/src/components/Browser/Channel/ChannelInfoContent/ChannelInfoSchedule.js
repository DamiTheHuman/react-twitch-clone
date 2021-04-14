import React from "react";
import ChevronRightIcon from "mdi-react/ChevronRightIcon";
import ChevronLefttIcon from "mdi-react/ChevronLeftIcon";
import CalendarMonthIcon from "mdi-react/CalendarMonthIcon";

const ChannelInfoSchedule = ({ userStreams }) => {
  const renderShceduleTime = () => {
    const range = [11, 13, 15, 17, 19, 21];

    const times = range.map((time) => {
      const suffix = time > 12 ? "PM" : "AM";
      time = time > 12 ? time - 12 : time;
      return (
        <div className="w-full">
          {time} {suffix}
        </div>
      );
    });
    return (
      <div className="schedule flex flex text-sm space-x-2 w-full px-4 font-semibold text-gray-600">
        <p className="flex-none">GMT+1</p>
        <div className="flex-grow grid grid-cols-6">{times}</div>
      </div>
    );
  };

  const renderCalendar = () => {
    const dates = [
      { day: "MON", val: "04/05" },
      { day: "TUE", val: "04/06" },
      { day: "WED", val: "04/07" },
      { day: "THU", val: "04/08" },
      { day: "FRI", val: "04/09" },
      { day: "SAT", val: "04/10" },
      { day: "SUN", val: "04/11" },
    ];

    const renderCaldendarData = dates.map((date) => {
      return (
        <div className="flex" key={dates.val}>
          <div className="bg-gray-200 text-center w-24 py-8 font-semibold">
            <h3 className="uppercase">{date.day}</h3>
            <h3>{date.val}</h3>
          </div>
          <div className="flex-grow bg-white"></div>
        </div>
      );
    });
    return <div className="flex flex-col">{renderCaldendarData}</div>;
  };

  return (
    <div className="channel-schedule bg-gray-100">
      <div className="schedule-main">
        <h2 className="text-4xl font-semibold">
          {userStreams.userName} last streamed yesterday.
        </h2>

        {/* Calandar Schedule */}
        <div className="calandar-schedule pt-4">
          {/*Calendar actions */}
          <div className="calandar-actions flex space-x-2 items-center mb-4">
            <button className="text-sm bg-primary rounded px-4 py-1.5">
              <p className="text-white font-semibold">Today</p>
            </button>
            <button className="text-sm bg-gray-200 rounded px-1.5 py-1.5">
              <p className="font-semibold">
                <ChevronLefttIcon />
              </p>
            </button>
            <button className="text-sm bg-gray-200 rounded px-1.5 py-1.5">
              <p className="font-semibold">
                <ChevronRightIcon />
              </p>
            </button>
            <button className="text-sm bg-gray-200 rounded px-1.5 py-1.5">
              <p className="font-semibold">
                <CalendarMonthIcon />
              </p>
            </button>
            <div className="range font-semibold">
              Apr 5, 2021 – Apr 11, 2021
            </div>
          </div>
          <div className="calendar range flex mb-4">{renderShceduleTime()}</div>
          <hr className="bg-gray-200 h-1" />
        </div>
      </div>
      {/*Calendar object */}
      <div className="calendar-schedule mb-8">{renderCalendar()}</div>
    </div>
  );
};
export default ChannelInfoSchedule;

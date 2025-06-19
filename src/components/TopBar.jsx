import React, { useEffect, useState } from "react";

export default function TopBar() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const day = dateTime.toLocaleDateString("en-GB", { weekday: "short" });
  const date = dateTime.toLocaleDateString("en-GB", { day: "2-digit" });
  const month = dateTime.toLocaleDateString("en-GB", { month: "short" });
  const time = dateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).toUpperCase();

  return (
    <div className="w-full h-10 bg-white/30 backdrop-blur-sm fixed top-0 left-0 z-50 flex items-center justify-between px-4 text-black text-sm">
      {/* Left Section */}
      <div className="flex gap-3 font-medium items-center">
        <span className="text-2xl leading-none pb-[2px]"></span>
        <span>Finder</span>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Window</span>
        <span>Help</span>
      </div>

    {/* Right Section */}
<div className="font-medium whitespace-nowrap flex items-center gap-4">
  <div className="flex items-center h-7 gap-2">
    <img
      src="/icons/topicons.png"
      alt="Top Icons"
      className="h-7 object-contain invert"
    />
    <div className="flex items-center h-7 translate-y-[1.5px] text-[13px] leading-none">
      {`${day} ${date} ${month} ${time}`}
    </div>
  </div>
</div>




    </div>
  );
}

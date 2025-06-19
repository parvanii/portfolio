import React from "react";
import { motion } from "framer-motion";

const dockItems = [
  { name: "Finder", src: "/icons/Finder.png" },
  { name: "Launchpad", src: "/icons/Launchpad.png" },
  { name: "Settings", src: "/icons/Settings.png" },
  { name: "FaceTime", src: "/icons/FaceTime.png" },
  { name: "Calendar", src: "/icons/Calendar.png" },
  { name: "Contacts", src: "/icons/Contacts.png" },
  { name: "Notes", src: "/icons/Notes.png" },
  { name: "AppStore", src: "/icons/App Store.png" },
  { name: "Photos", src: "/icons/Photos.png" },
  { name: "Safari", src: "/icons/Safari.png" },
  { name: "__separator_1" },
  { name: "Terminal", src: "/icons/Terminal.png" },
  { name: "Spotify", src: "/icons/Spotify.png" },
  { name: "__separator_2" },
  { name: "Trash", src: "/icons/Trash.png" },
];

const activeApps = ["Finder", "Terminal", "Spotify"];

const iconScales = {
  Finder: "scale-[1.20]",
  Launchpad: "scale-[1.43]",
  Settings: "scale-[1.15]",
  FaceTime: "scale-[1.40]",
  Calendar: "scale-[1.40]",
  Contacts: "scale-[1.40]",
  Notes: "scale-[1.40]",
  AppStore: "scale-[1.40]",
  Photos: "scale-[1.2]",
  Safari: "scale-[1.25]",
  Terminal: "scale-[1.50]",
  Spotify: "scale-[1.23]",
  Trash: "scale-[1.40]",
};

export default function Dock() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-3xl bg-gray-300/70 backdrop-blur-md shadow-lg flex gap-5 items-end z-50">
      {dockItems.map((item, index) => {
        if (item.name.startsWith("__separator")) {
          return (
            <div
              key={`sep-${index}`}
              className="w-px h-14 bg-black/25 mx-3 rounded-full"
            />
          );
        }

        const isActive = activeApps.includes(item.name);
        const scaleFix = iconScales[item.name] || "scale-100";

        return (
          <motion.div
            key={item.name}
            className="flex flex-col items-center relative group"
            whileHover={{ scale: 1.2, y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {/* Icon */}
            <div
              className={`w-[45px] h-[45px] flex items-center justify-center ${scaleFix} mb-2`}
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Active app dot */}
            {isActive && (
              <span className="absolute bottom-[-10px] w-[4px] h-[4px] bg-black rounded-full" />
            )}

            {/* Tooltip label */}
            {/* Tooltip label */}
<div className="absolute bottom-[-28px] text-[10px] text-white bg-black/60 backdrop-blur-sm px-2 py-[2px] rounded-md opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap shadow-md pointer-events-none">
  {item.name}
</div>

          </motion.div>
        );
      })}
    </div>
  );
}

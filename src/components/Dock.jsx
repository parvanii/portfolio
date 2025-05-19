import React from "react";

const dockIcons = [
  { src: "/icons/safari.png", name: "Safari" },
  { src: "/icons/notepad.png", name: "Notepad" },
  { src: "/icons/photos.png", name: "Photos" },
  { src: "/icons/mail.png", name: "Mail" },
  { src: "/icons/resume-folder.png", name: "Resume" },
  { src: "/icons/music.png", name: "iTunes" },
  { src: "/icons/bin.png", name: "Recycle Bin" },
];

export default function Dock() {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-md rounded-2xl px-4 py-2 flex gap-4 items-end shadow-lg z-50">
      {dockIcons.map((icon, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          <img src={icon.src} alt={icon.name} className="h-12 w-12 object-contain" />
          <span className="text-xs text-black">{icon.name}</span>
        </div>
      ))}
    </div>
  );
}

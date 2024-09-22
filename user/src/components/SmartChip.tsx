import React from "react";

const VisaSmartChip = () => {
  return (
    <div className="w-12 h-9 bg-yellow-300 rounded-sm overflow-hidden relative">
      {/* Main chip body */}
      <div className="absolute inset-0.5 bg-yellow-400 rounded-sm">
        {/* Chip contact pads */}
        <div className="grid grid-cols-2 grid-rows-4 gap-px h-full">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-yellow-300" />
          ))}
        </div>
      </div>
      {/* Diagonal lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-px bg-yellow-500 transform rotate-45" />
        <div className="w-full h-px bg-yellow-500 transform -rotate-45" />
      </div>
    </div>
  );
};

export default VisaSmartChip;

import React from "react";

const Background = ({ children }) => {
  return (
    <div className="absolute inset-0 w-full h-full z-[-20] bg-gradient-to-br from-[#171a88] to-[#0f1018]">
      {children}
    </div>
  );
};

export default Background;

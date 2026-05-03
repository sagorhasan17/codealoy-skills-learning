"use client";

import { Spinner } from "@heroui/react";

const RootLoading = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-950 overflow-hidden">
      <div className="absolute w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full top-0 left-0 translate-x-[-30%] translate-y-[-30%]" />
      <div className="absolute w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full bottom-0 right-0 translate-x-[30%] translate-y-[30%]" />

      <div className="flex flex-col items-center gap-6 z-10">
        <div className="relative flex items-center justify-center">
          <span className="absolute h-24 w-24 rounded-full bg-primary/20 animate-ping"></span>
          <Spinner size="lg" color="primary" />
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-xl font-semibold text-white tracking-wide">
            Loading Experience
          </h1>
          <p className="text-sm text-gray-400">
            Preparing everything for you...
          </p>
        </div>

        <div className="flex gap-1">
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default RootLoading;

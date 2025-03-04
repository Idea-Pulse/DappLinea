"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export const SwitchTheme = ({ className }: { className?: string }) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isDarkMode = resolvedTheme === "dark";

  const handleToggle = () => {
    if (isDarkMode) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <button
        onClick={handleToggle}
        className="p-1.5 rounded-full transition-transform hover:scale-110 focus:outline-none"
        aria-label={isDarkMode ? "切换到亮色模式" : "切换到暗色模式"}
      >
        {isDarkMode ? (
          <MoonIcon className="h-7 w-7 text-blue-300" />
        ) : (
          <SunIcon className="h-7 w-7 text-yellow-500" />
        )}
      </button>
    </div>
  );
};

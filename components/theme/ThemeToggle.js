"use client";
import { useTheme } from "../../context/theme";
import { useEffect, useState } from "react";
import Image from "next/image";
import light from "../../public/assets/light.png";
import dark from "../../public/assets/dark.png";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  // state
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <button className="toggleThemeButton" onClick={toggleTheme}>
          {theme === "light" ? (
            <Image className="toggleThemeIcon" src={dark} alt="theme" />
          ) : (
            <Image className="toggleThemeIcon" src={light} alt="theme" />
          )}
        </button>
      )}
    </>
  );
}

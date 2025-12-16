"use client";

import * as React from "react";

// 1. येथे सर्व नवीन थीम्सची नावे ॲड केली आहेत
type ThemeColor =
  | "default" // Zinc
  | "theme-slate"
  | "theme-stone"
  | "theme-gray"
  | "theme-neutral"
  | "theme-red"
  | "theme-rose"
  | "theme-orange"
  | "theme-green"
  | "theme-blue"
  | "theme-yellow"
  | "theme-violet"
  | "theme-indigo"
  | "theme-teal"
  | "theme-cyan"
  | "theme-sky"
  | "theme-lime"
  | "theme-amber"
  | "theme-emerald"
  | "theme-pink"
  | "theme-purple"
  | "theme-fuchsia"
  | "theme-gold" // New
  | "theme-brown" // New
  | "theme-mint" // New
  | "theme-olive" // New
  | "theme-navy" // New
  | "theme-crimson" // New
  | "theme-maroon" // New
  | "theme-peach"; // New

type ThemeColorContextType = {
  themeColor: ThemeColor;
  setThemeColor: (color: ThemeColor) => void;
};

const ThemeColorContext = React.createContext<
  ThemeColorContextType | undefined
>(undefined);

export function ThemeColorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [themeColor, setThemeColor] = React.useState<ThemeColor>("default");

  // Mount झाल्यावर LocalStorage मधून थीम लोड करा
  React.useEffect(() => {
    const savedColor = localStorage.getItem("theme-color") as ThemeColor;
    if (savedColor) {
      setThemeColor(savedColor);
    }
  }, []);

  // जेव्हा थीम बदलते तेव्हा Body क्लास अपडेट करा
  React.useEffect(() => {
    const root = document.body;

    // 2. जुन्या पद्धतीऐवजी हे नवीन डायनॅमिक लॉजिक वापरा.
    // हे 'theme-' ने सुरू होणारे सर्व जुने क्लासेस शोधून काढून टाकते.
    root.classList.forEach((className) => {
      if (className.startsWith("theme-")) {
        root.classList.remove(className);
      }
    });

    // जर थीम 'default' (Zinc) नसेल, तर नवीन क्लास ऍड करा
    if (themeColor !== "default") {
      root.classList.add(themeColor);
    }

    localStorage.setItem("theme-color", themeColor);
  }, [themeColor]);

  return (
    <ThemeColorContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeColorContext.Provider>
  );
}

export function useThemeColor() {
  const context = React.useContext(ThemeColorContext);
  if (!context) {
    throw new Error("useThemeColor must be used within a ThemeColorProvider");
  }
  return context;
}

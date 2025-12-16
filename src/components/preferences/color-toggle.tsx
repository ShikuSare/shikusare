"use client";

import { useTheme } from "next-themes";
import * as React from "react";

import { useThemeColor } from "@/components/theme-color-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

// जुन्या आणि नवीन अशा एकूण 30 थीम्सची पूर्ण लिस्ट
const availableThemeColors = [
  // --- Neutrals ---
  { name: "Zinc", value: "default", light: "bg-zinc-600", dark: "bg-zinc-400" },
  {
    name: "Slate",
    value: "theme-slate",
    light: "bg-slate-600",
    dark: "bg-slate-400",
  },
  {
    name: "Stone",
    value: "theme-stone",
    light: "bg-stone-600",
    dark: "bg-stone-400",
  },
  {
    name: "Gray",
    value: "theme-gray",
    light: "bg-gray-600",
    dark: "bg-gray-400",
  },
  {
    name: "Neutral",
    value: "theme-neutral",
    light: "bg-neutral-600",
    dark: "bg-neutral-400",
  },

  // --- Reds & Pinks ---
  { name: "Red", value: "theme-red", light: "bg-red-600", dark: "bg-red-400" },
  {
    name: "Rose",
    value: "theme-rose",
    light: "bg-rose-600",
    dark: "bg-rose-400",
  },
  {
    name: "Crimson",
    value: "theme-crimson",
    light: "bg-red-800",
    dark: "bg-red-600",
  }, // Deep Red
  {
    name: "Maroon",
    value: "theme-maroon",
    light: "bg-red-950",
    dark: "bg-red-900",
  }, // Darkest Red
  {
    name: "Pink",
    value: "theme-pink",
    light: "bg-pink-600",
    dark: "bg-pink-400",
  },
  {
    name: "Fuchsia",
    value: "theme-fuchsia",
    light: "bg-fuchsia-600",
    dark: "bg-fuchsia-400",
  },

  // --- Oranges & Yellows ---
  {
    name: "Orange",
    value: "theme-orange",
    light: "bg-orange-600",
    dark: "bg-orange-400",
  },
  {
    name: "Amber",
    value: "theme-amber",
    light: "bg-amber-600",
    dark: "bg-amber-400",
  },
  {
    name: "Yellow",
    value: "theme-yellow",
    light: "bg-yellow-500",
    dark: "bg-yellow-400",
  },
  {
    name: "Gold",
    value: "theme-gold",
    light: "bg-yellow-600",
    dark: "bg-yellow-500",
  }, // Metallic Yellow
  {
    name: "Peach",
    value: "theme-peach",
    light: "bg-orange-300",
    dark: "bg-orange-200",
  }, // Soft Orange
  {
    name: "Brown",
    value: "theme-brown",
    light: "bg-orange-900",
    dark: "bg-orange-800",
  }, // Coffee/Mocha

  // --- Greens ---
  {
    name: "Green",
    value: "theme-green",
    light: "bg-green-600",
    dark: "bg-green-400",
  },
  {
    name: "Emerald",
    value: "theme-emerald",
    light: "bg-emerald-600",
    dark: "bg-emerald-400",
  },
  {
    name: "Teal",
    value: "theme-teal",
    light: "bg-teal-600",
    dark: "bg-teal-400",
  },
  {
    name: "Lime",
    value: "theme-lime",
    light: "bg-lime-500",
    dark: "bg-lime-400",
  },
  {
    name: "Mint",
    value: "theme-mint",
    light: "bg-emerald-300",
    dark: "bg-emerald-200",
  }, // Fresh Light Green
  {
    name: "Olive",
    value: "theme-olive",
    light: "bg-lime-800",
    dark: "bg-lime-700",
  }, // Earthy Green

  // --- Blues ---
  {
    name: "Blue",
    value: "theme-blue",
    light: "bg-blue-600",
    dark: "bg-blue-400",
  },
  { name: "Sky", value: "theme-sky", light: "bg-sky-600", dark: "bg-sky-400" },
  {
    name: "Cyan",
    value: "theme-cyan",
    light: "bg-cyan-600",
    dark: "bg-cyan-400",
  },
  {
    name: "Navy",
    value: "theme-navy",
    light: "bg-blue-900",
    dark: "bg-blue-800",
  }, // Deep Blue

  // --- Purples ---
  {
    name: "Indigo",
    value: "theme-indigo",
    light: "bg-indigo-600",
    dark: "bg-indigo-400",
  },
  {
    name: "Violet",
    value: "theme-violet",
    light: "bg-violet-600",
    dark: "bg-violet-400",
  },
  {
    name: "Purple",
    value: "theme-purple",
    light: "bg-purple-600",
    dark: "bg-purple-400",
  },
];

export function ColorToggle() {
  const { themeColor, setThemeColor } = useThemeColor();
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  // सध्या ॲक्टिव्ह असलेली थीम शोधणे (बटणामध्ये वर्तुळ दाखवण्यासाठी)
  const activeThemeConfig =
    availableThemeColors.find((item) => item.value === themeColor) ||
    availableThemeColors[0]; // डिफॉल्ट Zinc

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          // बटण चौकोनीच राहील, फक्त आतला घटक बदलेल
          className="relative"
        >
          {/* हे वर्तुळ सध्याचा ॲक्टिव्ह कलर दाखवेल */}
          <div
            className={cn(
              "h-[1.2rem] w-[1.2rem] rounded-full shadow-sm border border-black/10 dark:border-white/10 transition-colors",
              currentTheme === "dark"
                ? activeThemeConfig.dark
                : activeThemeConfig.light,
            )}
          />
          <span className="sr-only">Toggle theme color</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-60">
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Select Theme Color
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Grid Layout (एका ओळीत 5 कलर्स) */}
        <div className="grid grid-cols-6 gap-1.5 p-2">
          {availableThemeColors.map(({ name, value, light, dark }) => {
            const isActive = themeColor === value;
            return (
              <DropdownMenuItem
                key={name}
                onClick={() => setThemeColor(value as any)}
                className={cn(
                  "flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:bg-muted hover:bg-muted",
                  isActive && "bg-muted ring-1 ring-primary",
                )}
                title={name}
              >
                <div
                  className={cn(
                    "h-6 w-6 rounded-full border border-black/10 dark:border-white/10 shadow-sm transition-transform hover:scale-110",
                    currentTheme === "dark" ? dark : light,
                  )}
                />
                <span className="sr-only">{name}</span>
              </DropdownMenuItem>
            );
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

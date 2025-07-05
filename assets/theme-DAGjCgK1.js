import { z as defineStore, A as ref } from "./vendor-C9uPxl4s.js";
const useThemeStore = defineStore("theme", () => {
  const darkThemes = [
    { id: "dark", name: "Dark Mode" },
    { id: "black", name: "Black Mode" },
    { id: "navy", name: "Navy Mode" },
    { id: "charcoal", name: "Charcoal Mode" },
    { id: "midnight", name: "Midnight Mode" },
    { id: "deep-purple", name: "Deep Purple Mode" }
  ];
  const savedTheme = localStorage.getItem("theme") || "light";
  const isDark = ref(savedTheme !== "light");
  const currentDarkTheme = ref(savedTheme !== "light" ? savedTheme : "dark");
  const currentDarkThemeInfo = ref(darkThemes.find((theme) => theme.id === currentDarkTheme.value) || darkThemes[0]);
  function toggleTheme() {
    isDark.value = !isDark.value;
    localStorage.setItem("theme", isDark.value ? currentDarkTheme.value : "light");
    updateThemeClass();
  }
  function setTheme(themeId) {
    if (themeId === "light") {
      isDark.value = false;
    } else {
      isDark.value = true;
      currentDarkTheme.value = themeId;
      const theme = darkThemes.find((t) => t.id === themeId);
      if (theme) {
        currentDarkThemeInfo.value = theme;
      }
    }
    localStorage.setItem("theme", themeId);
    updateThemeClass();
  }
  function updateThemeClass() {
    try {
      const themeClasses = darkThemes.map((theme) => `theme-${theme.id}`);
      document.documentElement.classList.remove("dark", ...themeClasses);
      if (isDark.value) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.add(`theme-${currentDarkTheme.value}`);
      }
    } catch (error) {
      console.error("Error updating theme class:", error);
    }
  }
  function initTheme() {
    updateThemeClass();
  }
  return {
    isDark,
    darkThemes,
    currentDarkTheme,
    currentDarkThemeInfo,
    toggleTheme,
    setTheme,
    initTheme
  };
});
export {
  useThemeStore as u
};
//# sourceMappingURL=theme-DAGjCgK1.js.map

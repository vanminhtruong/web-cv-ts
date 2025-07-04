import { E as useI18n, J as ref, H as onMounted, O as onUnmounted, d as defineComponent, c as createElementBlock, v as openBlock, f as createBaseVNode, u as unref, M as withDirectives, e as createCommentVNode, n as normalizeClass, P as vShow, a as normalizeStyle, i as withModifiers, Q as watch, G as computed, t as toDisplayString, F as Fragment, j as renderList, g as createTextVNode, S as useCssVars, y as createVNode, U as RouterLink, w as withCtx } from "./vendor-1p1qY6MK.js";
import { u as useColorStore } from "./color-2p_dXya-.js";
import { u as useThemeStore } from "./theme-BeOweZqK.js";
import { a as _export_sfc } from "./index-CuoDOMoO.js";
import { u as useProfileStore } from "./profile-DcWeGfHE.js";
import "./vendor-toast-BV7TAAOY.js";
function useLanguageSwitcher() {
  const colorStore = useColorStore();
  const themeStore = useThemeStore();
  const { locale } = useI18n();
  const currentLocale = ref(locale.value);
  const isOpen = ref(false);
  const selectContainer = ref(null);
  const toggleDropdown = () => {
    if (!isOpen.value) {
      window.dispatchEvent(new Event("language-switcher-open"));
    }
    isOpen.value = !isOpen.value;
  };
  const selectOption = (value) => {
    currentLocale.value = value;
    locale.value = value;
    localStorage.setItem("locale", value);
    isOpen.value = false;
  };
  const handleClickOutside = (event) => {
    if (selectContainer.value && !selectContainer.value.contains(event.target)) {
      isOpen.value = false;
    }
  };
  onMounted(() => {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale) {
      currentLocale.value = savedLocale;
      locale.value = savedLocale;
    }
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("color-switcher-open", () => {
      isOpen.value = false;
    });
    window.addEventListener("theme-toggle-open", () => {
      isOpen.value = false;
    });
  });
  onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
    window.removeEventListener("color-switcher-open", () => {
      isOpen.value = false;
    });
    window.removeEventListener("theme-toggle-open", () => {
      isOpen.value = false;
    });
  });
  return {
    colorStore,
    themeStore,
    currentLocale,
    isOpen,
    selectContainer,
    toggleDropdown,
    selectOption
  };
}
const _hoisted_1$5 = { class: "language-switcher" };
const _hoisted_2$4 = { class: "selected-option" };
const _hoisted_3$4 = { key: 0 };
const _hoisted_4$3 = { key: 1 };
const _hoisted_5$3 = { key: 2 };
const _hoisted_6$3 = { key: 3 };
const _hoisted_7$3 = { key: 4 };
const _hoisted_8$3 = { key: 5 };
const _hoisted_9$1 = ["fill"];
const _hoisted_10$1 = { class: "options-list" };
const __default__$4 = {
  name: "LanguageSwitcher"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  setup(__props) {
    const {
      colorStore,
      currentLocale,
      isOpen,
      selectContainer,
      toggleDropdown,
      selectOption
    } = useLanguageSwitcher();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", {
          class: "custom-select",
          onClick: _cache[6] || (_cache[6] = //@ts-ignore
          (...args) => unref(toggleDropdown) && unref(toggleDropdown)(...args)),
          ref_key: "selectContainer",
          ref: selectContainer
        }, [
          createBaseVNode("div", _hoisted_2$4, [
            unref(currentLocale) === "en" ? (openBlock(), createElementBlock("span", _hoisted_3$4, "English")) : unref(currentLocale) === "ko" ? (openBlock(), createElementBlock("span", _hoisted_4$3, "한국어")) : unref(currentLocale) === "vi" ? (openBlock(), createElementBlock("span", _hoisted_5$3, "Tiếng Việt")) : unref(currentLocale) === "zh" ? (openBlock(), createElementBlock("span", _hoisted_6$3, "中文")) : unref(currentLocale) === "es" ? (openBlock(), createElementBlock("span", _hoisted_7$3, "Español")) : unref(currentLocale) === "fr" ? (openBlock(), createElementBlock("span", _hoisted_8$3, "Français")) : createCommentVNode("", true),
            (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: normalizeClass(["h-4 w-4 ml-1 transition-transform duration-300 ease-in-out", { "rotate-180": unref(isOpen) }]),
              viewBox: "0 0 20 20",
              fill: unref(colorStore).currentColor.primary
            }, _cache[7] || (_cache[7] = [
              createBaseVNode("path", {
                "fill-rule": "evenodd",
                d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                "clip-rule": "evenodd"
              }, null, -1)
            ]), 10, _hoisted_9$1))
          ]),
          withDirectives(createBaseVNode("ul", _hoisted_10$1, [
            createBaseVNode("li", {
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => unref(selectOption)("en"), ["stop"])),
              class: normalizeClass({ "active": unref(currentLocale) === "en" }),
              style: normalizeStyle({ "--hover-bg-color": unref(colorStore).currentColor.primary + "33", "--active-bg-color": unref(colorStore).currentColor.primary })
            }, "English", 6),
            createBaseVNode("li", {
              onClick: _cache[1] || (_cache[1] = withModifiers(($event) => unref(selectOption)("ko"), ["stop"])),
              class: normalizeClass({ "active": unref(currentLocale) === "ko" }),
              style: normalizeStyle({ "--hover-bg-color": unref(colorStore).currentColor.primary + "33", "--active-bg-color": unref(colorStore).currentColor.primary })
            }, "한국어", 6),
            createBaseVNode("li", {
              onClick: _cache[2] || (_cache[2] = withModifiers(($event) => unref(selectOption)("vi"), ["stop"])),
              class: normalizeClass({ "active": unref(currentLocale) === "vi" }),
              style: normalizeStyle({ "--hover-bg-color": unref(colorStore).currentColor.primary + "33", "--active-bg-color": unref(colorStore).currentColor.primary })
            }, "Tiếng Việt", 6),
            createBaseVNode("li", {
              onClick: _cache[3] || (_cache[3] = withModifiers(($event) => unref(selectOption)("zh"), ["stop"])),
              class: normalizeClass({ "active": unref(currentLocale) === "zh" }),
              style: normalizeStyle({ "--hover-bg-color": unref(colorStore).currentColor.primary + "33", "--active-bg-color": unref(colorStore).currentColor.primary })
            }, "中文", 6),
            createBaseVNode("li", {
              onClick: _cache[4] || (_cache[4] = withModifiers(($event) => unref(selectOption)("es"), ["stop"])),
              class: normalizeClass({ "active": unref(currentLocale) === "es" }),
              style: normalizeStyle({ "--hover-bg-color": unref(colorStore).currentColor.primary + "33", "--active-bg-color": unref(colorStore).currentColor.primary })
            }, "Español", 6),
            createBaseVNode("li", {
              onClick: _cache[5] || (_cache[5] = withModifiers(($event) => unref(selectOption)("fr"), ["stop"])),
              class: normalizeClass({ "active": unref(currentLocale) === "fr" }),
              style: normalizeStyle({ "--hover-bg-color": unref(colorStore).currentColor.primary + "33", "--active-bg-color": unref(colorStore).currentColor.primary })
            }, "Français", 6)
          ], 512), [
            [vShow, unref(isOpen)]
          ])
        ], 512)
      ]);
    };
  }
});
const LanguageSwitcher = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-26c5b665"]]);
function useColorSwitcher() {
  const { t } = useI18n();
  const colorStore = useColorStore();
  const isOpen = ref(false);
  const currentColor = ref(colorStore.currentColor);
  const toggleColorMenu = () => {
    if (!isOpen.value) {
      window.dispatchEvent(new Event("color-switcher-open"));
    }
    isOpen.value = !isOpen.value;
  };
  const selectColor = (colorId) => {
    colorStore.setColor(colorId);
    currentColor.value = colorStore.currentColor;
    isOpen.value = false;
  };
  const handleClickOutside = (event) => {
    const colorSwitcher = document.querySelector(".color-switcher");
    if (colorSwitcher && !colorSwitcher.contains(event.target)) {
      isOpen.value = false;
    }
  };
  watch(() => colorStore.currentColor, (newColor) => {
    currentColor.value = newColor;
  }, { deep: true });
  onMounted(() => {
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("theme-toggle-open", () => {
      isOpen.value = false;
    });
    window.addEventListener("language-switcher-open", () => {
      isOpen.value = false;
    });
  });
  onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
    window.removeEventListener("theme-toggle-open", () => {
      isOpen.value = false;
    });
    window.removeEventListener("language-switcher-open", () => {
      isOpen.value = false;
    });
  });
  return {
    t,
    colorStore,
    isOpen,
    currentColor,
    currentColorId: colorStore.currentColorId,
    toggleColorMenu,
    selectColor
  };
}
const _hoisted_1$4 = { class: "color-switcher" };
const _hoisted_2$3 = { class: "relative" };
const _hoisted_3$3 = { class: "relative flex items-center justify-center" };
const _hoisted_4$2 = {
  key: 0,
  class: "color-dropdown absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50"
};
const _hoisted_5$2 = { class: "p-2" };
const _hoisted_6$2 = { class: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 px-3 py-1" };
const _hoisted_7$2 = { class: "grid grid-cols-5 gap-2" };
const _hoisted_8$2 = ["onClick", "title"];
const __default__$3 = {
  name: "ColorSwitcher"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  setup(__props) {
    const {
      t,
      colorStore,
      isOpen,
      currentColor,
      currentColorId,
      toggleColorMenu,
      selectColor
    } = useColorSwitcher();
    const buttonStyle = computed(() => {
      if (currentColorId === "rainbow") {
        return {
          background: "linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)",
          backgroundSize: "200% 200%"
        };
      } else {
        return { backgroundColor: currentColor.value.primary };
      }
    });
    const getOptionStyle = (color) => {
      if (color.id === "rainbow") {
        return {
          background: "linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)",
          backgroundSize: "200% 200%"
        };
      } else {
        return { backgroundColor: color.primary };
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$3, [
          createBaseVNode("button", {
            onClick: _cache[0] || (_cache[0] = withModifiers(
              //@ts-ignore
              (...args) => unref(toggleColorMenu) && unref(toggleColorMenu)(...args),
              ["stop"]
            )),
            class: "color-button flex items-center justify-center p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300",
            style: normalizeStyle(buttonStyle.value)
          }, [
            createBaseVNode("div", _hoisted_3$3, [
              (openBlock(), createElementBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: normalizeClass(["h-5 w-5 text-white transition-opacity duration-300", { "opacity-100": !unref(isOpen), "opacity-0": unref(isOpen) }]),
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, _cache[1] || (_cache[1] = [
                createBaseVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                }, null, -1)
              ]), 2)),
              (openBlock(), createElementBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: normalizeClass(["h-5 w-5 text-white absolute transition-opacity duration-300", { "opacity-0": !unref(isOpen), "opacity-100": unref(isOpen) }]),
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, _cache[2] || (_cache[2] = [
                createBaseVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M6 18L18 6M6 6l12 12"
                }, null, -1)
              ]), 2))
            ])
          ], 4),
          unref(isOpen) ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
            createBaseVNode("div", _hoisted_5$2, [
              createBaseVNode("div", _hoisted_6$2, toDisplayString(unref(t)("colors.selectTheme")), 1),
              createBaseVNode("div", _hoisted_7$2, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(colorStore).colors, (color) => {
                  return openBlock(), createElementBlock("button", {
                    key: color.id,
                    onClick: withModifiers(($event) => unref(selectColor)(color.id), ["stop"]),
                    class: normalizeClass(["color-option w-7 h-7 rounded-full border-2 transition-all duration-300", { "border-gray-400 dark:border-gray-300 scale-110": color.id === unref(colorStore).currentColorId }]),
                    style: normalizeStyle(getOptionStyle(color)),
                    title: unref(t)("colors." + color.name.toLowerCase())
                  }, null, 14, _hoisted_8$2);
                }), 128))
              ])
            ])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const ColorSwitcher = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-10fd6fcf"]]);
function useThemeToggle() {
  const themeStore = useThemeStore();
  const isMenuOpen = ref(false);
  function toggleThemeMenu() {
    if (!isMenuOpen.value) {
      window.dispatchEvent(new Event("theme-toggle-open"));
    }
    isMenuOpen.value = !isMenuOpen.value;
  }
  function setTheme(themeId) {
    themeStore.setTheme(themeId);
    isMenuOpen.value = false;
  }
  function getThemeColorStyle(themeId) {
    switch (themeId) {
      case "dark":
        return { backgroundColor: "#1f2937" };
      // gray-800
      case "black":
        return { backgroundColor: "#000000" };
      case "navy":
        return { backgroundColor: "#312e81" };
      // indigo-900
      case "charcoal":
        return { backgroundColor: "#111827" };
      // gray-900
      case "midnight":
        return { backgroundColor: "#1e3a8a" };
      // blue-900
      case "deep-purple":
        return { backgroundColor: "#4c1d95" };
      // purple-900
      default:
        return { backgroundColor: "#1f2937" };
    }
  }
  function handleClickOutside(event) {
    const target = event.target;
    if (isMenuOpen.value && !target.closest(".theme-toggle")) {
      isMenuOpen.value = false;
    }
  }
  onMounted(() => {
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("color-switcher-open", () => {
      isMenuOpen.value = false;
    });
    window.addEventListener("language-switcher-open", () => {
      isMenuOpen.value = false;
    });
  });
  onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
    window.removeEventListener("color-switcher-open", () => {
      isMenuOpen.value = false;
    });
    window.removeEventListener("language-switcher-open", () => {
      isMenuOpen.value = false;
    });
  });
  return {
    themeStore,
    isMenuOpen,
    toggleThemeMenu,
    setTheme,
    getThemeColorStyle
  };
}
const _hoisted_1$3 = { class: "relative theme-toggle" };
const _hoisted_2$2 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-gray-700",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};
const _hoisted_3$2 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-yellow-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};
const _hoisted_4$1 = {
  key: 0,
  class: "absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50"
};
const _hoisted_5$1 = {
  key: 0,
  class: "text-green-500"
};
const _hoisted_6$1 = ["onClick"];
const _hoisted_7$1 = { class: "flex items-center" };
const _hoisted_8$1 = {
  key: 0,
  class: "text-green-500"
};
const __default__$2 = {
  name: "ThemeToggle"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  setup(__props) {
    const {
      themeStore,
      isMenuOpen,
      toggleThemeMenu,
      setTheme,
      getThemeColorStyle
    } = useThemeToggle();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("button", {
          onClick: _cache[0] || (_cache[0] = //@ts-ignore
          (...args) => unref(toggleThemeMenu) && unref(toggleThemeMenu)(...args)),
          class: "p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
        }, [
          !unref(themeStore).isDark ? (openBlock(), createElementBlock("svg", _hoisted_2$2, _cache[2] || (_cache[2] = [
            createBaseVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            }, null, -1)
          ]))) : (openBlock(), createElementBlock("svg", _hoisted_3$2, _cache[3] || (_cache[3] = [
            createBaseVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            }, null, -1)
          ])))
        ]),
        unref(isMenuOpen) ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
          createBaseVNode("button", {
            onClick: _cache[1] || (_cache[1] = ($event) => unref(setTheme)("light")),
            class: normalizeClass(["w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between", { "font-semibold": !unref(themeStore).isDark }])
          }, [
            _cache[5] || (_cache[5] = createBaseVNode("span", null, "Light Mode", -1)),
            !unref(themeStore).isDark ? (openBlock(), createElementBlock("span", _hoisted_5$1, _cache[4] || (_cache[4] = [
              createBaseVNode("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-5 w-5",
                viewBox: "0 0 20 20",
                fill: "currentColor"
              }, [
                createBaseVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                  "clip-rule": "evenodd"
                })
              ], -1)
            ]))) : createCommentVNode("", true)
          ], 2),
          _cache[7] || (_cache[7] = createBaseVNode("div", { class: "border-t border-gray-200 dark:border-gray-700 my-1" }, null, -1)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(themeStore).darkThemes, (theme) => {
            return openBlock(), createElementBlock("div", {
              key: theme.id
            }, [
              createBaseVNode("button", {
                onClick: ($event) => unref(setTheme)(theme.id),
                class: normalizeClass(["w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between", { "font-semibold": unref(themeStore).isDark && unref(themeStore).currentDarkTheme === theme.id }])
              }, [
                createBaseVNode("div", _hoisted_7$1, [
                  createBaseVNode("div", {
                    class: "w-4 h-4 rounded-full mr-2",
                    style: normalizeStyle(unref(getThemeColorStyle)(theme.id))
                  }, null, 4),
                  createBaseVNode("span", null, toDisplayString(theme.name), 1)
                ]),
                unref(themeStore).isDark && unref(themeStore).currentDarkTheme === theme.id ? (openBlock(), createElementBlock("span", _hoisted_8$1, _cache[6] || (_cache[6] = [
                  createBaseVNode("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-5 w-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createBaseVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                      "clip-rule": "evenodd"
                    })
                  ], -1)
                ]))) : createCommentVNode("", true)
              ], 10, _hoisted_6$1)
            ]);
          }), 128))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1$2 = ["href"];
const __default__$1 = {
  name: "DownloadButton"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props) {
    const { t } = useI18n();
    useProfileStore();
    const colorStore = useColorStore();
    const pdfPath = computed(() => {
      const isGitHubPages = window.location.href.includes("/web-cv-ts/");
      return isGitHubPages ? "/web-cv-ts/TruongVanMinh-CV.pdf" : "/TruongVanMinh-CV.pdf";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        href: pdfPath.value,
        download: "",
        class: normalizeClass(["inline-flex items-center px-4 py-2 text-white text-sm font-medium rounded-lg transition-colors duration-300", { "hover:opacity-90": true }]),
        style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary, "border": "1px solid " + unref(colorStore).currentColor.primary })
      }, [
        _cache[0] || (_cache[0] = createBaseVNode("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          class: "h-5 w-5 mr-2",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor"
        }, [
          createBaseVNode("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          })
        ], -1)),
        createTextVNode(" " + toDisplayString(unref(t)("nav.downloadCV")), 1)
      ], 12, _hoisted_1$2);
    };
  }
});
function useNavigation() {
  const { t } = useI18n();
  const colorStore = useColorStore();
  const handleMouseEnter = (event) => {
    const target = event.target;
    target.style.color = colorStore.currentColor.primary;
  };
  const handleMouseLeave = (event) => {
    const target = event.target;
    target.style.color = "";
  };
  return {
    t,
    colorStore,
    handleMouseEnter,
    handleMouseLeave
  };
}
function useHeaderStyles() {
  const colorStore = useColorStore();
  const primaryColor = computed(() => colorStore.currentColor.primary);
  const progressBarStyle = (progress) => {
    return {
      width: `${progress}%`,
      backgroundColor: colorStore.currentColor.primary
    };
  };
  const activeNavLinkStyle = computed(() => {
    return {
      color: colorStore.currentColor.primary
    };
  });
  return {
    colorStore,
    primaryColor,
    progressBarStyle,
    activeNavLinkStyle
  };
}
const _hoisted_1$1 = {
  key: 0,
  class: "xl:hidden bg-white dark:bg-gray-800 shadow-lg mt-2 py-3 px-4 transition-all duration-300"
};
const _hoisted_2$1 = { class: "flex flex-col space-y-3" };
const _hoisted_3$1 = { class: "flex xs:flex-wrap justify-around gap-3 pt-3 border-t border-gray-200 dark:border-gray-700 mt-3" };
const __default__ = {
  name: "MobileMenu"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "5c5b3b1f": unref(primaryColor)
    }));
    const emit = __emit;
    const { t } = useI18n();
    useColorStore();
    const {
      handleMouseEnter,
      handleMouseLeave
    } = useNavigation();
    const {
      primaryColor
    } = useHeaderStyles();
    function closeMenu() {
      emit("close");
    }
    return (_ctx, _cache) => {
      return __props.isOpen ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(unref(RouterLink), {
            to: "/",
            onClick: closeMenu,
            class: "text-gray-700 dark:text-gray-300 py-2 xs:text-sm text-base font-medium transition-colors duration-200 nav-link",
            style: normalizeStyle({ "--hover-color": unref(primaryColor) }),
            onMouseenter: unref(handleMouseEnter),
            onMouseleave: unref(handleMouseLeave)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("nav.home")), 1)
            ]),
            _: 1
          }, 8, ["style", "onMouseenter", "onMouseleave"]),
          createVNode(unref(RouterLink), {
            to: "/skills",
            onClick: closeMenu,
            class: "text-gray-700 dark:text-gray-300 py-2 xs:text-sm text-base font-medium transition-colors duration-200 nav-link",
            style: normalizeStyle({ "--hover-color": unref(primaryColor) }),
            onMouseenter: unref(handleMouseEnter),
            onMouseleave: unref(handleMouseLeave)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("nav.skills")), 1)
            ]),
            _: 1
          }, 8, ["style", "onMouseenter", "onMouseleave"]),
          createVNode(unref(RouterLink), {
            to: "/experience",
            onClick: closeMenu,
            class: "text-gray-700 dark:text-gray-300 py-2 xs:text-sm text-base font-medium transition-colors duration-200 nav-link",
            style: normalizeStyle({ "--hover-color": unref(primaryColor) }),
            onMouseenter: unref(handleMouseEnter),
            onMouseleave: unref(handleMouseLeave)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("nav.experience")), 1)
            ]),
            _: 1
          }, 8, ["style", "onMouseenter", "onMouseleave"]),
          createVNode(unref(RouterLink), {
            to: "/contact",
            onClick: closeMenu,
            class: "text-gray-700 dark:text-gray-300 py-2 xs:text-sm text-base font-medium transition-colors duration-200 nav-link",
            style: normalizeStyle({ "--hover-color": unref(primaryColor) }),
            onMouseenter: unref(handleMouseEnter),
            onMouseleave: unref(handleMouseLeave)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("nav.contact")), 1)
            ]),
            _: 1
          }, 8, ["style", "onMouseenter", "onMouseleave"]),
          createBaseVNode("div", _hoisted_3$1, [
            createVNode(LanguageSwitcher),
            createVNode(ColorSwitcher),
            createVNode(_sfc_main$3),
            createVNode(_sfc_main$2)
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const MobileMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-eb7384a4"]]);
function useHeader() {
  const isMobileMenuOpen = ref(false);
  const isScrolled = ref(false);
  const scrollProgress = ref(0);
  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  }
  function closeMobileMenu() {
    isMobileMenuOpen.value = false;
  }
  function updateScrollProgress() {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (totalHeight > 0) {
      scrollProgress.value = window.scrollY / totalHeight * 100;
    } else {
      scrollProgress.value = 0;
    }
    isScrolled.value = window.scrollY > 10;
  }
  onMounted(() => {
    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", updateScrollProgress);
  });
  return {
    isMobileMenuOpen,
    isScrolled,
    scrollProgress,
    toggleMobileMenu,
    closeMobileMenu,
    updateScrollProgress
  };
}
function useLetterAnimation() {
  const letters = ref([]);
  const animatedLetters = ref([]);
  const animationTimer = ref(null);
  const letterTimers = ref([]);
  const clearAllTimers = () => {
    if (animationTimer.value) {
      clearTimeout(animationTimer.value);
    }
    letterTimers.value.forEach((timer) => clearTimeout(timer));
    letterTimers.value = [];
  };
  const resetAnimation = () => {
    clearAllTimers();
    animatedLetters.value = new Array(letters.value.length).fill(false);
  };
  const startAnimation = () => {
    resetAnimation();
    const newTimers = letters.value.map((_, index) => {
      return window.setTimeout(() => {
        if (animatedLetters.value) {
          animatedLetters.value[index] = true;
        }
      }, index * 100);
    });
    letterTimers.value = newTimers;
    const lettersDuration = letters.value.length * 100;
    const displayDuration = 1500;
    const totalAppearDuration = lettersDuration + displayDuration;
    const hideTimer = window.setTimeout(() => {
      if (animatedLetters.value) {
        animatedLetters.value = new Array(letters.value.length).fill(false);
      }
    }, totalAppearDuration);
    letterTimers.value.push(hideTimer);
    const pauseDuration = 1e3;
    const totalCycleDuration = totalAppearDuration + pauseDuration;
    animationTimer.value = window.setTimeout(() => {
      startAnimation();
    }, totalCycleDuration);
  };
  const initializeAnimation = (text) => {
    letters.value = text.split("");
    resetAnimation();
    setTimeout(() => {
      startAnimation();
    }, 500);
  };
  onUnmounted(() => {
    clearAllTimers();
  });
  return {
    letters,
    animatedLetters,
    initializeAnimation
  };
}
const _hoisted_1 = { class: "container mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_2 = { class: "flex justify-between items-center" };
const _hoisted_3 = { class: "flex-shrink-0" };
const _hoisted_4 = { class: "flex overflow-visible items-baseline min-h-[1.5em] py-1" };
const _hoisted_5 = { class: "hidden xl:flex xl:space-x-6" };
const _hoisted_6 = { class: "hidden xl:flex items-center xl:space-x-4" };
const _hoisted_7 = { class: "xl:hidden" };
const _hoisted_8 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "xs:h-5 xs:w-5 h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};
const _hoisted_9 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "xs:h-5 xs:w-5 h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};
const _hoisted_10 = {
  key: 0,
  class: "scroll-progress-container"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Header",
  setup(__props, { expose: __expose }) {
    useCssVars((_ctx) => ({
      "dda9f37e": unref(primaryColor)
    }));
    const {
      isMobileMenuOpen,
      isScrolled,
      scrollProgress,
      toggleMobileMenu,
      closeMobileMenu
    } = useHeader();
    const {
      t,
      handleMouseEnter,
      handleMouseLeave
    } = useNavigation();
    const {
      primaryColor
    } = useHeaderStyles();
    const {
      letters,
      animatedLetters,
      initializeAnimation
    } = useLetterAnimation();
    onMounted(() => {
      initializeAnimation("Trương Văn Minh");
    });
    __expose({
      // Expose any needed properties or methods
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", {
        class: normalizeClass([
          "fixed w-full top-0 z-50 transition-all duration-300",
          unref(isScrolled) ? "bg-white dark:bg-gray-800 shadow-md py-2" : "bg-transparent dark:bg-transparent py-4"
        ])
      }, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createVNode(unref(RouterLink), {
                to: "/",
                class: "font-bold xs:text-xl text-2xl flex items-center border-none outline-none",
                style: normalizeStyle({ "color": unref(primaryColor) }),
                onClick: unref(closeMobileMenu)
              }, {
                default: withCtx(() => [
                  _cache[3] || (_cache[3] = createBaseVNode("span", { class: "mr-2" }, [
                    createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "xs:h-6 xs:w-6 h-8 w-8",
                      viewBox: "0 0 20 20",
                      fill: "currentColor"
                    }, [
                      createBaseVNode("path", {
                        "fill-rule": "evenodd",
                        d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                        "clip-rule": "evenodd"
                      })
                    ])
                  ], -1)),
                  createBaseVNode("span", _hoisted_4, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(letters), (letter, index) => {
                      return openBlock(), createElementBlock("span", {
                        key: index,
                        class: normalizeClass(["inline-block transform transition-all duration-300 ease-out", [
                          unref(animatedLetters)[index] ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
                          "hover:animate-bounce",
                          letter === " " ? "mr-[0.15em]" : "",
                          letter !== " " ? "mr-[0.02em]" : "",
                          letter === "h" ? "-translate-y-[0.001em]" : "",
                          letter === "g" ? "leading-[1.2]" : ""
                        ]]),
                        style: normalizeStyle({
                          "transition-delay": `${index * 100}ms`,
                          "animation-delay": `${index * 50}ms`,
                          "transition-property": "transform, opacity",
                          "transform-origin": "center",
                          "line-height": letter === "g" ? "1.2" : "1",
                          "vertical-align": "baseline"
                        })
                      }, toDisplayString(letter === " " ? " " : letter), 7);
                    }), 128))
                  ])
                ]),
                _: 1,
                __: [3]
              }, 8, ["style", "onClick"])
            ]),
            createBaseVNode("nav", _hoisted_5, [
              createVNode(unref(RouterLink), {
                to: "/",
                class: "text-gray-700 dark:text-gray-300 py-2 text-sm tablet:text-base font-medium transition-colors duration-200 nav-link",
                style: normalizeStyle({ "--hover-color": unref(primaryColor) }),
                onMouseenter: unref(handleMouseEnter),
                onMouseleave: unref(handleMouseLeave)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("nav.home")), 1)
                ]),
                _: 1
              }, 8, ["style", "onMouseenter", "onMouseleave"]),
              createVNode(unref(RouterLink), {
                to: "/skills",
                class: "text-gray-700 dark:text-gray-300 py-2 text-sm tablet:text-base font-medium transition-colors duration-200 nav-link",
                style: normalizeStyle({ "--hover-color": unref(primaryColor) }),
                onMouseenter: unref(handleMouseEnter),
                onMouseleave: unref(handleMouseLeave)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("nav.skills")), 1)
                ]),
                _: 1
              }, 8, ["style", "onMouseenter", "onMouseleave"]),
              createVNode(unref(RouterLink), {
                to: "/experience",
                class: "text-gray-700 dark:text-gray-300 py-2 text-sm tablet:text-base font-medium transition-colors duration-200 nav-link",
                style: normalizeStyle({ "--hover-color": unref(primaryColor) }),
                onMouseenter: unref(handleMouseEnter),
                onMouseleave: unref(handleMouseLeave)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("nav.experience")), 1)
                ]),
                _: 1
              }, 8, ["style", "onMouseenter", "onMouseleave"]),
              createVNode(unref(RouterLink), {
                to: "/contact",
                class: "text-gray-700 dark:text-gray-300 py-2 text-sm tablet:text-base font-medium transition-colors duration-200 nav-link",
                style: normalizeStyle({ "--hover-color": unref(primaryColor) }),
                onMouseenter: unref(handleMouseEnter),
                onMouseleave: unref(handleMouseLeave)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("nav.contact")), 1)
                ]),
                _: 1
              }, 8, ["style", "onMouseenter", "onMouseleave"])
            ]),
            createBaseVNode("div", _hoisted_6, [
              createVNode(LanguageSwitcher),
              createVNode(ColorSwitcher),
              createVNode(_sfc_main$3),
              createVNode(_sfc_main$2)
            ]),
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("button", {
                type: "button",
                onClick: _cache[0] || (_cache[0] = //@ts-ignore
                (...args) => unref(toggleMobileMenu) && unref(toggleMobileMenu)(...args)),
                class: "text-gray-600 hover:text-primary transition-colors duration-200",
                style: normalizeStyle({ "--hover-color": unref(primaryColor) }),
                onMouseenter: _cache[1] || (_cache[1] = //@ts-ignore
                (...args) => unref(handleMouseEnter) && unref(handleMouseEnter)(...args)),
                onMouseleave: _cache[2] || (_cache[2] = //@ts-ignore
                (...args) => unref(handleMouseLeave) && unref(handleMouseLeave)(...args))
              }, [
                !unref(isMobileMenuOpen) ? (openBlock(), createElementBlock("svg", _hoisted_8, _cache[4] || (_cache[4] = [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M4 6h16M4 12h16M4 18h16"
                  }, null, -1)
                ]))) : (openBlock(), createElementBlock("svg", _hoisted_9, _cache[5] || (_cache[5] = [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M6 18L18 6M6 6l12 12"
                  }, null, -1)
                ])))
              ], 36)
            ])
          ])
        ]),
        createVNode(MobileMenu, {
          "is-open": unref(isMobileMenuOpen),
          onClose: unref(closeMobileMenu)
        }, null, 8, ["is-open", "onClose"]),
        unref(isScrolled) ? (openBlock(), createElementBlock("div", _hoisted_10, [
          createBaseVNode("div", {
            class: "scroll-progress-bar",
            style: normalizeStyle({ width: unref(scrollProgress) + "%", backgroundColor: unref(primaryColor) })
          }, null, 4)
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const Header = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-16bf4456"]]);
export {
  Header as default
};
//# sourceMappingURL=Header-f-B-emgj.js.map

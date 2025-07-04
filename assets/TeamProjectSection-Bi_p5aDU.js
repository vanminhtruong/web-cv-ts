import { u as useColorStore } from "./color-2p_dXya-.js";
import { d as defineComponent, E as useI18n, b as createBlock, v as openBlock, w as withCtx, f as createBaseVNode, a as normalizeStyle, u as unref, t as toDisplayString, g as createTextVNode, c as createElementBlock, n as normalizeClass } from "./vendor-1p1qY6MK.js";
import LazySection from "./LazySection-BHoMnuQm.js";
import "./index-Br1oDo7I.js";
import "./vendor-toast-BV7TAAOY.js";
const _hoisted_1 = { class: "bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-12 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" };
const _hoisted_2 = { class: "p-8 xs:p-4 relative" };
const _hoisted_3 = { class: "flex flex-col tablet:flex-col lg:flex-col xl:flex-row justify-between items-start mb-8 mt-8" };
const _hoisted_4 = { class: "flex items-center" };
const _hoisted_5 = { class: "mb-8" };
const _hoisted_6 = { class: "flex items-center mb-3" };
const _hoisted_7 = { class: "ml-11 text-gray-700 dark:text-gray-300 leading-relaxed xs:text-sm" };
const _hoisted_8 = { class: "grid grid-cols-1 tablet:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-8 mb-8 mt-6" };
const _hoisted_9 = { class: "bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 xs:p-3 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1" };
const _hoisted_10 = { class: "flex items-center mb-3" };
const _hoisted_11 = { class: "ml-11" };
const _hoisted_12 = { class: "text-gray-600 dark:text-gray-300 text-sm xs:text-xs" };
const _hoisted_13 = { class: "bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 xs:p-3 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1" };
const _hoisted_14 = { class: "flex items-center mb-3" };
const _hoisted_15 = { class: "ml-11" };
const _hoisted_16 = { class: "text-gray-600 dark:text-gray-300 text-sm xs:text-xs" };
const _hoisted_17 = { class: "bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 xs:p-3 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1" };
const _hoisted_18 = { class: "flex items-center mb-3" };
const _hoisted_19 = { class: "ml-11 space-y-2" };
const _hoisted_20 = { class: "flex items-center" };
const _hoisted_21 = {
  href: "https://team03-admin.cyvietnam.id.vn",
  target: "_blank",
  rel: "noopener noreferrer",
  class: "flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors xs:text-xs"
};
const _hoisted_22 = { class: "flex items-center" };
const _hoisted_23 = { class: "flex items-center" };
const _hoisted_24 = { class: "flex items-center" };
const _hoisted_25 = {
  href: "https://github.com/vanminhtruong/Team03-cy/tree/main/Team03-Web",
  target: "_blank",
  rel: "noopener noreferrer",
  class: "flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors xs:text-xs"
};
const _hoisted_26 = { class: "flex items-center mt-3" };
const _hoisted_27 = { class: "flex items-center" };
const _hoisted_28 = { class: "bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 xs:p-3 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 mt-8" };
const _hoisted_29 = { class: "flex items-center mb-4" };
const _hoisted_30 = { class: "ml-11" };
const _hoisted_31 = { class: "mb-4" };
const _hoisted_32 = { class: "flex items-center mb-2" };
const _hoisted_33 = { class: "space-y-2" };
const _hoisted_34 = { class: "flex items-start" };
const _hoisted_35 = { class: "text-gray-700 dark:text-gray-400 xs:text-sm" };
const _hoisted_36 = { class: "flex items-start" };
const _hoisted_37 = { class: "text-gray-700 dark:text-gray-400 xs:text-sm" };
const _hoisted_38 = { class: "flex items-start" };
const _hoisted_39 = { class: "text-gray-700 dark:text-gray-400 xs:text-sm" };
const _hoisted_40 = { class: "flex items-center mb-2" };
const _hoisted_41 = { class: "grid grid-cols-1 tablet:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4" };
const _hoisted_42 = { class: "space-y-2" };
const _hoisted_43 = { class: "flex items-start" };
const _hoisted_44 = { class: "text-gray-700 dark:text-gray-400 xs:text-sm" };
const _hoisted_45 = { class: "flex items-start" };
const _hoisted_46 = { class: "text-gray-700 dark:text-gray-400 xs:text-sm" };
const _hoisted_47 = { class: "space-y-2" };
const _hoisted_48 = { class: "flex items-start" };
const _hoisted_49 = { class: "text-gray-700 dark:text-gray-400 xs:text-sm" };
const _hoisted_50 = { class: "flex items-start" };
const _hoisted_51 = { class: "text-gray-700 dark:text-gray-400 xs:text-sm" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamProjectSection",
  setup(__props) {
    const colorStore = useColorStore();
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(LazySection, {
        threshold: "0.1",
        rootMargin: "100px"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", {
                class: "absolute top-0 right-0 text-white px-6 py-2 rounded-bl-lg font-semibold xs:text-xs text-sm uppercase tracking-wider shadow-md",
                style: normalizeStyle({ "background-image": `linear-gradient(to right, ${unref(colorStore).currentColor.primary}, ${unref(colorStore).currentColor.secondary})` })
              }, toDisplayString(unref(t)("projects.featuredProject")), 5),
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", {
                    class: "h-10 w-10 rounded-lg flex items-center justify-center mr-4",
                    style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary })
                  }, _cache[0] || (_cache[0] = [
                    createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6 text-white",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      })
                    ], -1)
                  ]), 4),
                  createBaseVNode("h3", {
                    class: "xs:text-xl text-2xl font-bold",
                    style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                  }, toDisplayString(unref(t)("projects.project1.title")), 5)
                ]),
                createBaseVNode("div", {
                  class: "flex items-center font-medium mt-4 tablet:mt-4 lg:mt-4 xl:mt-0 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-white xs:text-xs",
                  style: normalizeStyle({ "background-image": `linear-gradient(to right, ${unref(colorStore).currentColor.primary}, ${unref(colorStore).currentColor.secondary})` })
                }, [
                  _cache[1] || (_cache[1] = createBaseVNode("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "xs:h-3 xs:w-3 h-5 w-5 mr-2 text-white",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    createBaseVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    })
                  ], -1)),
                  createTextVNode(" " + toDisplayString(unref(t)("projects.project1.date")), 1)
                ], 4)
              ]),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("div", {
                    class: "h-8 w-8 rounded-lg flex items-center justify-center mr-3",
                    style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20" })
                  }, [
                    (openBlock(), createElementBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.primary }),
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, _cache[2] || (_cache[2] = [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      }, null, -1)
                    ]), 4))
                  ], 4),
                  createBaseVNode("h4", {
                    class: "xs:text-base text-lg font-semibold",
                    style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                  }, toDisplayString(unref(t)("projects.project1.shortDescription")), 5)
                ]),
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("p", null, toDisplayString(unref(t)("projects.project1.description")), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("div", _hoisted_10, [
                    createBaseVNode("div", {
                      class: "h-8 w-8 rounded-lg flex items-center justify-center mr-3",
                      style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20" })
                    }, [
                      (openBlock(), createElementBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-5 w-5",
                        style: normalizeStyle({ "color": unref(colorStore).currentColor.primary }),
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, _cache[3] || (_cache[3] = [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        }, null, -1)
                      ]), 4))
                    ], 4),
                    createBaseVNode("h4", {
                      class: "xs:text-base text-lg font-semibold",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                    }, toDisplayString(unref(t)("projects.teamSize")), 5)
                  ]),
                  createBaseVNode("div", _hoisted_11, [
                    createBaseVNode("div", {
                      class: "xs:text-2xl text-3xl font-bold",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                    }, "8", 4),
                    createBaseVNode("p", _hoisted_12, toDisplayString(unref(t)("projects.teamSizeDescription")), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("div", _hoisted_14, [
                    createBaseVNode("div", {
                      class: "h-8 w-8 rounded-lg flex items-center justify-center mr-3",
                      style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20" })
                    }, [
                      (openBlock(), createElementBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-5 w-5",
                        style: normalizeStyle({ "color": unref(colorStore).currentColor.primary }),
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, _cache[4] || (_cache[4] = [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        }, null, -1)
                      ]), 4))
                    ], 4),
                    createBaseVNode("h4", {
                      class: "xs:text-base text-lg font-semibold",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                    }, toDisplayString(unref(t)("projects.myRole")), 5)
                  ]),
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("div", {
                      class: "font-bold xs:text-base",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                    }, toDisplayString(unref(t)("projects.project1.role")), 5),
                    createBaseVNode("p", _hoisted_16, toDisplayString(unref(t)("projects.project1.roleDescription")), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("div", {
                      class: "h-8 w-8 rounded-lg flex items-center justify-center mr-3",
                      style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20" })
                    }, [
                      (openBlock(), createElementBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-5 w-5",
                        style: normalizeStyle({ "color": unref(colorStore).currentColor.primary }),
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, _cache[5] || (_cache[5] = [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        }, null, -1)
                      ]), 4))
                    ], 4),
                    createBaseVNode("h4", {
                      class: "xs:text-base text-lg font-semibold",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                    }, toDisplayString(unref(t)("projects.technologyStack")), 5)
                  ]),
                  createBaseVNode("div", _hoisted_19, [
                    createBaseVNode("div", _hoisted_20, [
                      createBaseVNode("a", _hoisted_21, [
                        _cache[6] || (_cache[6] = createBaseVNode("svg", {
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
                            d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          })
                        ], -1)),
                        createTextVNode(" " + toDisplayString(unref(t)("projects.adminDashboard")), 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_22, [
                      createBaseVNode("a", {
                        href: "https://team03.cyvietnam.id.vn",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: normalizeClass(["flex items-center text-gray-700 dark:text-gray-300 transition-colors xs:text-xs", { "hover:text-theme-primary": true }]),
                        style: normalizeStyle({ "--theme-primary": unref(colorStore).currentColor.primary })
                      }, [
                        _cache[7] || (_cache[7] = createBaseVNode("svg", {
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
                            d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          })
                        ], -1)),
                        createTextVNode(" " + toDisplayString(unref(t)("projects.userWebsite")), 1)
                      ], 4)
                    ]),
                    createBaseVNode("div", _hoisted_23, [
                      createBaseVNode("a", {
                        href: "https://github.com/vanminhtruong/Team03-cy/tree/main/Team03-Admin",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: normalizeClass(["flex items-center text-gray-700 dark:text-gray-300 transition-colors xs:text-xs", { "hover:text-theme-primary": true }]),
                        style: normalizeStyle({ "--theme-primary": unref(colorStore).currentColor.primary })
                      }, [
                        _cache[8] || (_cache[8] = createBaseVNode("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 mr-2",
                          fill: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createBaseVNode("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
                        ], -1)),
                        createTextVNode(" " + toDisplayString(unref(t)("projects.adminRepository")), 1)
                      ], 4)
                    ]),
                    createBaseVNode("div", _hoisted_24, [
                      createBaseVNode("a", _hoisted_25, [
                        _cache[9] || (_cache[9] = createBaseVNode("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 mr-2",
                          fill: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createBaseVNode("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
                        ], -1)),
                        createTextVNode(" " + toDisplayString(unref(t)("projects.userRepository")), 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_26, [
                      createBaseVNode("span", {
                        class: "px-2 py-1 text-xs font-medium rounded mr-2",
                        style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20", "color": unref(colorStore).currentColor.primary })
                      }, toDisplayString(unref(t)("projects.frontEnd")), 5),
                      _cache[10] || (_cache[10] = createBaseVNode("span", { class: "text-gray-700 dark:text-gray-300 xs:text-xs" }, "VueJS, NextJS", -1))
                    ]),
                    createBaseVNode("div", _hoisted_27, [
                      createBaseVNode("span", {
                        class: "px-2 py-1 text-xs font-medium rounded mr-2",
                        style: normalizeStyle({ "background-color": unref(colorStore).currentColor.secondary + "20", "color": unref(colorStore).currentColor.secondary })
                      }, toDisplayString(unref(t)("projects.backEnd")), 5),
                      _cache[11] || (_cache[11] = createBaseVNode("span", { class: "text-gray-700 dark:text-gray-300 xs:text-xs" }, "Spring Boot", -1))
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_28, [
                createBaseVNode("div", _hoisted_29, [
                  createBaseVNode("div", {
                    class: "h-8 w-8 rounded-lg flex items-center justify-center mr-3",
                    style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20" })
                  }, [
                    (openBlock(), createElementBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.primary }),
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, _cache[12] || (_cache[12] = [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      }, null, -1)
                    ]), 4))
                  ], 4),
                  createBaseVNode("h4", {
                    class: "xs:text-base text-lg font-semibold",
                    style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                  }, toDisplayString(unref(t)("projects.keyResponsibilities")), 5)
                ]),
                createBaseVNode("div", _hoisted_30, [
                  createBaseVNode("div", _hoisted_31, [
                    createBaseVNode("div", _hoisted_32, [
                      createBaseVNode("span", {
                        class: "px-2 py-1 text-xs font-medium rounded mr-2",
                        style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20", "color": unref(colorStore).currentColor.primary })
                      }, toDisplayString(unref(t)("projects.superAdmin")), 5)
                    ]),
                    createBaseVNode("ul", _hoisted_33, [
                      createBaseVNode("li", _hoisted_34, [
                        (openBlock(), createElementBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                          style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, _cache[13] || (_cache[13] = [
                          createBaseVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M9 12l2 2 4-4"
                          }, null, -1)
                        ]), 4)),
                        createBaseVNode("span", _hoisted_35, toDisplayString(unref(t)("projects.project1.responsibility1")), 1)
                      ]),
                      createBaseVNode("li", _hoisted_36, [
                        (openBlock(), createElementBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                          style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, _cache[14] || (_cache[14] = [
                          createBaseVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M9 12l2 2 4-4"
                          }, null, -1)
                        ]), 4)),
                        createBaseVNode("span", _hoisted_37, toDisplayString(unref(t)("projects.project1.responsibility2")), 1)
                      ]),
                      createBaseVNode("li", _hoisted_38, [
                        (openBlock(), createElementBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                          style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, _cache[15] || (_cache[15] = [
                          createBaseVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M9 12l2 2 4-4"
                          }, null, -1)
                        ]), 4)),
                        createBaseVNode("span", _hoisted_39, toDisplayString(unref(t)("projects.project1.responsibility3")), 1)
                      ])
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    createBaseVNode("div", _hoisted_40, [
                      createBaseVNode("span", {
                        class: "px-2 py-1 text-xs font-medium rounded mr-2",
                        style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20", "color": unref(colorStore).currentColor.primary })
                      }, toDisplayString(unref(t)("projects.userFeatures")), 5)
                    ]),
                    createBaseVNode("div", _hoisted_41, [
                      createBaseVNode("ul", _hoisted_42, [
                        createBaseVNode("li", _hoisted_43, [
                          (openBlock(), createElementBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                            style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, _cache[16] || (_cache[16] = [
                            createBaseVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M9 12l2 2 4-4"
                            }, null, -1)
                          ]), 4)),
                          createBaseVNode("span", _hoisted_44, toDisplayString(unref(t)("projects.project1.responsibility4")), 1)
                        ]),
                        createBaseVNode("li", _hoisted_45, [
                          (openBlock(), createElementBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                            style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, _cache[17] || (_cache[17] = [
                            createBaseVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M9 12l2 2 4-4"
                            }, null, -1)
                          ]), 4)),
                          createBaseVNode("span", _hoisted_46, toDisplayString(unref(t)("projects.project1.responsibility5")), 1)
                        ])
                      ]),
                      createBaseVNode("ul", _hoisted_47, [
                        createBaseVNode("li", _hoisted_48, [
                          (openBlock(), createElementBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                            style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, _cache[18] || (_cache[18] = [
                            createBaseVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M9 12l2 2 4-4"
                            }, null, -1)
                          ]), 4)),
                          createBaseVNode("span", _hoisted_49, toDisplayString(unref(t)("projects.project1.responsibility6")), 1)
                        ]),
                        createBaseVNode("li", _hoisted_50, [
                          (openBlock(), createElementBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                            style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary }),
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, _cache[19] || (_cache[19] = [
                            createBaseVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M9 12l2 2 4-4"
                            }, null, -1)
                          ]), 4)),
                          createBaseVNode("span", _hoisted_51, toDisplayString(unref(t)("projects.project1.responsibility7")), 1)
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=TeamProjectSection-Bi_p5aDU.js.map

import { u as useColorStore } from "./color-2p_dXya-.js";
import { d as defineComponent, E as useI18n, b as createBlock, v as openBlock, w as withCtx, f as createBaseVNode, a as normalizeStyle, u as unref, t as toDisplayString, c as createElementBlock } from "./vendor-1p1qY6MK.js";
import LazySection from "./LazySection-Dightg6d.js";
import "./index-vUtsbtbs.js";
import "./vendor-toast-BV7TAAOY.js";
const _hoisted_1 = { class: "flex items-center mb-10" };
const _hoisted_2 = { class: "mr-4 hidden md:block" };
const _hoisted_3 = { class: "flex flex-col md:flex-row justify-between items-start mb-6" };
const _hoisted_4 = { class: "flex items-start" };
const _hoisted_5 = { class: "text-gray-600 dark:text-gray-400 mt-1" };
const _hoisted_6 = { class: "font-medium" };
const _hoisted_7 = { class: "flex items-center mb-4" };
const _hoisted_8 = { class: "ml-11 space-y-2" };
const _hoisted_9 = { class: "flex items-start" };
const _hoisted_10 = { class: "flex items-start" };
const _hoisted_11 = { class: "flex items-start" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EducationSection",
  setup(__props) {
    const colorStore = useColorStore();
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(LazySection, { class: "mb-16 p-4" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", {
                class: "h-12 w-12 rounded-lg flex items-center justify-center shadow-md",
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
                    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  })
                ], -1)
              ]), 4)
            ]),
            createBaseVNode("h2", {
              class: "text-3xl font-bold inline-block pb-2 border-b-4 transform transition-all duration-300 hover:scale-105",
              style: normalizeStyle({ "border-color": unref(colorStore).currentColor.primary, "color": unref(colorStore).currentColor.primary })
            }, toDisplayString(unref(t)("education.title").toUpperCase()), 5)
          ]),
          createBaseVNode("div", {
            class: "bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 mb-8 transform hover:-translate-y-1 border-l-4",
            style: normalizeStyle({ "border-color": unref(colorStore).currentColor.primary })
          }, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", {
                  class: "h-12 w-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0",
                  style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary })
                }, _cache[1] || (_cache[1] = [
                  createBaseVNode("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-6 w-6 text-white",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    createBaseVNode("path", { d: "M12 14l9-5-9-5-9 5 9 5z" }),
                    createBaseVNode("path", { d: "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" }),
                    createBaseVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    })
                  ], -1)
                ]), 4),
                createBaseVNode("div", null, [
                  createBaseVNode("h3", {
                    class: "text-xl font-bold",
                    style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                  }, toDisplayString(unref(t)("education.schoolName")), 5),
                  createBaseVNode("p", {
                    class: "text-lg font-medium mt-1",
                    style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                  }, toDisplayString(unref(t)("education.major")), 5),
                  createBaseVNode("div", _hoisted_5, toDisplayString(unref(t)("education.location")), 1)
                ])
              ]),
              createBaseVNode("div", {
                class: "flex items-center font-medium mt-4 md:mt-0 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-white",
                style: normalizeStyle({ "background-image": `linear-gradient(to right, ${unref(colorStore).currentColor.primary}, ${unref(colorStore).currentColor.secondary})` })
              }, [
                _cache[2] || (_cache[2] = createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-5 w-5 mr-2 text-white",
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
                createBaseVNode("span", _hoisted_6, toDisplayString(unref(t)("education.period")), 1)
              ], 4)
            ]),
            createBaseVNode("div", {
              class: "ml-16 mt-6 bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm border dark:border-gray-600",
              style: normalizeStyle({ "border-color": unref(colorStore).currentColor.secondary })
            }, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", {
                  class: "h-8 w-8 rounded-lg flex items-center justify-center mr-3",
                  style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary })
                }, _cache[3] || (_cache[3] = [
                  createBaseVNode("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-5 w-5 text-white",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    createBaseVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    })
                  ], -1)
                ]), 4),
                createBaseVNode("h4", {
                  class: "text-lg font-semibold",
                  style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                }, toDisplayString(unref(t)("education.degree")), 5)
              ]),
              createBaseVNode("ul", _hoisted_8, [
                createBaseVNode("li", _hoisted_9, [
                  (openBlock(), createElementBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                    style: normalizeStyle({ "color": unref(colorStore).currentColor.primary }),
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, _cache[4] || (_cache[4] = [
                    createBaseVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M9 12l2 2 4-4"
                    }, null, -1)
                  ]), 4)),
                  createBaseVNode("span", null, toDisplayString(unref(t)("skills.course1")), 1)
                ]),
                createBaseVNode("li", _hoisted_10, [
                  (openBlock(), createElementBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                    style: normalizeStyle({ "color": unref(colorStore).currentColor.primary }),
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, _cache[5] || (_cache[5] = [
                    createBaseVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M9 12l2 2 4-4"
                    }, null, -1)
                  ]), 4)),
                  createBaseVNode("span", null, toDisplayString(unref(t)("skills.course2")), 1)
                ]),
                createBaseVNode("li", _hoisted_11, [
                  (openBlock(), createElementBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                    style: normalizeStyle({ "color": unref(colorStore).currentColor.primary }),
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, _cache[6] || (_cache[6] = [
                    createBaseVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M9 12l2 2 4-4"
                    }, null, -1)
                  ]), 4)),
                  createBaseVNode("span", null, toDisplayString(unref(t)("skills.course3")), 1)
                ])
              ])
            ], 4)
          ], 4)
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=EducationSection-DowjaQCo.js.map

import { d as defineComponent, E as useI18n, b as createBlock, v as openBlock, w as withCtx, f as createBaseVNode, a as normalizeStyle, u as unref, t as toDisplayString, y as createVNode, c as createElementBlock } from "./vendor-1p1qY6MK.js";
import { u as useProfileStore } from "./profile-DcWeGfHE.js";
import { u as useColorStore } from "./color-2p_dXya-.js";
import LazySection from "./LazySection-cAUe5NrS.js";
import "./index-CIkmeTGp.js";
import "./vendor-toast-BV7TAAOY.js";
const _hoisted_1 = { class: "flex items-center mb-10" };
const _hoisted_2 = { class: "mr-4 hidden md:block" };
const _hoisted_3 = { class: "grid grid-cols-1 md:grid-cols-2 gap-8" };
const _hoisted_4 = { class: "flex items-center mb-4" };
const _hoisted_5 = { class: "text-xl font-semibold text-gray-900 dark:text-white" };
const _hoisted_6 = { class: "ml-12 space-y-2" };
const _hoisted_7 = { class: "flex items-start" };
const _hoisted_8 = { class: "block text-gray-700 dark:text-gray-300" };
const _hoisted_9 = { class: "flex items-center mb-4" };
const _hoisted_10 = { class: "text-xl font-semibold text-gray-900 dark:text-white" };
const _hoisted_11 = { class: "ml-12 space-y-2" };
const _hoisted_12 = { class: "flex items-start" };
const _hoisted_13 = { class: "text-lg text-gray-700 dark:text-gray-300" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ObjectiveSection",
  setup(__props) {
    const { t } = useI18n();
    useProfileStore();
    const colorStore = useColorStore();
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
                    d: "M13 10V3L4 14h7v7l9-11h-7z"
                  })
                ], -1)
              ]), 4)
            ]),
            createBaseVNode("h2", {
              class: "text-3xl font-bold inline-block pb-2 border-b-4 transform transition-all duration-300 hover:scale-105",
              style: normalizeStyle({ "color": unref(colorStore).currentColor.primary, "border-color": unref(colorStore).currentColor.primary })
            }, toDisplayString(unref(t)("home.objective").toUpperCase()), 5)
          ]),
          createBaseVNode("div", _hoisted_3, [
            createVNode(LazySection, {
              class: "rounded-xl shadow-lg p-8 mb-8 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl border-r-4 bg-white dark:bg-gray-800",
              style: normalizeStyle({ "border-color": unref(colorStore).currentColor.secondary })
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", {
                    class: "h-10 w-10 rounded-lg flex items-center justify-center mr-3",
                    style: normalizeStyle({ "background-color": unref(colorStore).currentColor.secondary + "30" })
                  }, [
                    (openBlock(), createElementBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                    }, _cache[1] || (_cache[1] = [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      }, null, -1)
                    ]), 4))
                  ], 4),
                  createBaseVNode("h3", _hoisted_5, toDisplayString(unref(t)("home.shortTermTitle")), 1)
                ]),
                createBaseVNode("ul", _hoisted_6, [
                  createBaseVNode("li", _hoisted_7, [
                    (openBlock(), createElementBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                    }, _cache[2] || (_cache[2] = [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 12l2 2 4-4"
                      }, null, -1)
                    ]), 4)),
                    createBaseVNode("span", _hoisted_8, toDisplayString(unref(t)("home.shortTermGoal")), 1)
                  ])
                ])
              ]),
              _: 1
            }, 8, ["style"]),
            createVNode(LazySection, {
              class: "rounded-xl shadow-lg p-8 mb-8 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl border-r-4 bg-white dark:bg-gray-800",
              style: normalizeStyle({ "border-color": unref(colorStore).currentColor.secondary })
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("div", {
                    class: "h-10 w-10 rounded-lg flex items-center justify-center mr-3",
                    style: normalizeStyle({ "background-color": unref(colorStore).currentColor.secondary + "30" })
                  }, [
                    (openBlock(), createElementBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                    }, _cache[3] || (_cache[3] = [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      }, null, -1)
                    ]), 4))
                  ], 4),
                  createBaseVNode("h3", _hoisted_10, toDisplayString(unref(t)("home.longTermTitle")), 1)
                ]),
                createBaseVNode("ul", _hoisted_11, [
                  createBaseVNode("li", _hoisted_12, [
                    (openBlock(), createElementBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                    }, _cache[4] || (_cache[4] = [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 12l2 2 4-4"
                      }, null, -1)
                    ]), 4)),
                    createBaseVNode("span", _hoisted_13, toDisplayString(unref(t)("home.longTermGoal")), 1)
                  ])
                ])
              ]),
              _: 1
            }, 8, ["style"])
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
//# sourceMappingURL=ObjectiveSection-txEs4F8J.js.map

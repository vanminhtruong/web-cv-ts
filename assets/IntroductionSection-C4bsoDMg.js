import { d as defineComponent, E as useI18n, b as createBlock, v as openBlock, w as withCtx, f as createBaseVNode, a as normalizeStyle, u as unref, t as toDisplayString } from "./vendor-BFdtVDZL.js";
import { u as useColorStore } from "./color-dH0ZqwuS.js";
import LazySection from "./LazySection-CQ-JKqun.js";
import "./index-CswnhC9z.js";
import "./vendor-toast-BVu51o8f.js";
const _hoisted_1 = { class: "flex items-center mb-10" };
const _hoisted_2 = { class: "mr-4 hidden md:block" };
const _hoisted_3 = { class: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IntroductionSection",
  setup(__props) {
    const { t } = useI18n();
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
                    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  })
                ], -1)
              ]), 4)
            ]),
            createBaseVNode("h2", {
              class: "text-3xl font-bold inline-block pb-2 border-b-4 transform transition-all duration-300 hover:scale-105",
              style: normalizeStyle({ "color": unref(colorStore).currentColor.primary, "border-color": unref(colorStore).currentColor.primary })
            }, toDisplayString(unref(t)("about.title").toUpperCase()), 5)
          ]),
          createBaseVNode("div", {
            class: "bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 mb-6 transform hover:-translate-y-1 border-l-4",
            style: normalizeStyle({ "border-color": unref(colorStore).currentColor.primary })
          }, [
            createBaseVNode("p", _hoisted_3, toDisplayString(unref(t)("about.content")), 1)
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

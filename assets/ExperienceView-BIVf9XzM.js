const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LazySection-Dightg6d.js","assets/vendor-1p1qY6MK.js","assets/index-vUtsbtbs.js","assets/vendor-toast-BV7TAAOY.js","assets/vendor-toast-jG2HNJHr.css","assets/index-CvkjLbpR.css","assets/LazySection-BO97IxP6.css","assets/WorkExperienceSection-FD83vK_o.js","assets/color-2p_dXya-.js","assets/TeamProjectSection-BCx7jonH.js","assets/SoloProjectSection-ChBkoYVk.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./index-vUtsbtbs.js";
import { u as useColorStore } from "./color-2p_dXya-.js";
import { d as defineComponent, E as useI18n, c as createElementBlock, v as openBlock, f as createBaseVNode, y as createVNode, w as withCtx, u as unref, z as defineAsyncComponent, a as normalizeStyle, t as toDisplayString } from "./vendor-1p1qY6MK.js";
import "./vendor-toast-BV7TAAOY.js";
const _hoisted_1 = { class: "min-h-screen py-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900" };
const _hoisted_2 = { class: "container mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_3 = { class: "mb-16" };
const _hoisted_4 = { class: "flex items-center mb-10" };
const _hoisted_5 = { class: "mr-4 hidden md:block" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ExperienceView",
  setup(__props) {
    const LazySection = defineAsyncComponent(() => __vitePreload(() => import("./LazySection-Dightg6d.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6]) : void 0));
    const WorkExperienceSection = defineAsyncComponent(() => __vitePreload(() => import("./WorkExperienceSection-FD83vK_o.js"), true ? __vite__mapDeps([7,8,1,0,2,3,4,5,6]) : void 0));
    const TeamProjectSection = defineAsyncComponent(() => __vitePreload(() => import("./TeamProjectSection-BCx7jonH.js"), true ? __vite__mapDeps([9,8,1,0,2,3,4,5,6]) : void 0));
    const SoloProjectSection = defineAsyncComponent(() => __vitePreload(() => import("./SoloProjectSection-ChBkoYVk.js"), true ? __vite__mapDeps([10,8,1,0,2,3,4,5,6]) : void 0));
    const colorStore = useColorStore();
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(unref(LazySection), {
            threshold: "0.1",
            rootMargin: "100px",
            class: "mb-16"
          }, {
            default: withCtx(() => [
              createVNode(unref(WorkExperienceSection))
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
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
                      d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    })
                  ], -1)
                ]), 4)
              ]),
              createBaseVNode("h2", {
                class: "text-3xl font-bold inline-block pb-2 border-b-4 transform transition-all duration-300 hover:scale-105",
                style: normalizeStyle({ "color": unref(colorStore).currentColor.primary, "border-color": unref(colorStore).currentColor.primary })
              }, toDisplayString(unref(t)("projects.title").toUpperCase()), 5)
            ]),
            createVNode(unref(TeamProjectSection)),
            createVNode(unref(SoloProjectSection))
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=ExperienceView-BIVf9XzM.js.map

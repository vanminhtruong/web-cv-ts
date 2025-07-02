const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/EducationSection-BvP1D8Ol.js","assets/color-2p_dXya-.js","assets/vendor-1p1qY6MK.js","assets/LazySection-DoAxm-DY.js","assets/index-tCMn77J4.js","assets/vendor-toast-BV7TAAOY.js","assets/vendor-toast-jG2HNJHr.css","assets/index-BBPSw9Ad.css","assets/LazySection-BO97IxP6.css","assets/SkillsSection-ls9TjzuZ.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./index-tCMn77J4.js";
import { u as useThemeStore } from "./theme-BeOweZqK.js";
import { d as defineComponent, c as createElementBlock, v as openBlock, f as createBaseVNode, y as createVNode, u as unref, z as defineAsyncComponent } from "./vendor-1p1qY6MK.js";
import "./vendor-toast-BV7TAAOY.js";
const _hoisted_1 = { class: "min-h-screen py-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900" };
const _hoisted_2 = { class: "container mx-auto px-4 sm:px-6 lg:px-8" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SkillsView",
  setup(__props) {
    const EducationSection = defineAsyncComponent(() => __vitePreload(() => import("./EducationSection-BvP1D8Ol.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
    const SkillsSection = defineAsyncComponent(() => __vitePreload(() => import("./SkillsSection-ls9TjzuZ.js"), true ? __vite__mapDeps([9,1,2,3,4,5,6,7,8]) : void 0));
    useThemeStore();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(unref(EducationSection)),
          createVNode(unref(SkillsSection))
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=SkillsView-BqK7v4qY.js.map

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/EducationSection-D3y6IIKc.js","assets/color-dH0ZqwuS.js","assets/vendor-BFdtVDZL.js","assets/LazySection-CQ-JKqun.js","assets/index-CswnhC9z.js","assets/vendor-toast-BVu51o8f.js","assets/vendor-toast-jG2HNJHr.css","assets/index-BBPSw9Ad.css","assets/LazySection-BO97IxP6.css","assets/SkillsSection-DfHN1QRW.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./index-CswnhC9z.js";
import { u as useThemeStore } from "./theme-BrM0jE5z.js";
import { d as defineComponent, c as createElementBlock, v as openBlock, f as createBaseVNode, y as createVNode, u as unref, z as defineAsyncComponent } from "./vendor-BFdtVDZL.js";
import "./vendor-toast-BVu51o8f.js";
const _hoisted_1 = { class: "min-h-screen py-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900" };
const _hoisted_2 = { class: "container mx-auto px-4 sm:px-6 lg:px-8" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SkillsView",
  setup(__props) {
    const EducationSection = defineAsyncComponent(() => __vitePreload(() => import("./EducationSection-D3y6IIKc.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
    const SkillsSection = defineAsyncComponent(() => __vitePreload(() => import("./SkillsSection-DfHN1QRW.js"), true ? __vite__mapDeps([9,1,2,3,4,5,6,7,8]) : void 0));
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

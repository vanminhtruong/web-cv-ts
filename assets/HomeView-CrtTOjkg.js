const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HeroSection-DfiB6hyc.js","assets/index-CswnhC9z.js","assets/vendor-toast-BVu51o8f.js","assets/vendor-BFdtVDZL.js","assets/vendor-toast-jG2HNJHr.css","assets/index-BBPSw9Ad.css","assets/profile-BByPq2KQ.js","assets/color-dH0ZqwuS.js","assets/HeroSection-qJ3btUkA.css","assets/IntroductionSection-C4bsoDMg.js","assets/LazySection-CQ-JKqun.js","assets/LazySection-BO97IxP6.css","assets/ObjectiveSection-CpXexdxY.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload, a as _export_sfc } from "./index-CswnhC9z.js";
import { u as useThemeStore } from "./theme-BrM0jE5z.js";
import { d as defineComponent, c as createElementBlock, v as openBlock, f as createBaseVNode, y as createVNode, u as unref, z as defineAsyncComponent } from "./vendor-BFdtVDZL.js";
import "./vendor-toast-BVu51o8f.js";
const _hoisted_1 = { class: "min-h-screen py-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900" };
const _hoisted_2 = { class: "container mx-auto px-4 sm:px-6 lg:px-8" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HomeView",
  setup(__props) {
    const HeroSection = defineAsyncComponent(() => __vitePreload(() => import("./HeroSection-DfiB6hyc.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
    const IntroductionSection = defineAsyncComponent(() => __vitePreload(() => import("./IntroductionSection-C4bsoDMg.js"), true ? __vite__mapDeps([9,3,7,10,1,2,4,5,11]) : void 0));
    const ObjectiveSection = defineAsyncComponent(() => __vitePreload(() => import("./ObjectiveSection-CpXexdxY.js"), true ? __vite__mapDeps([12,3,6,7,10,1,2,4,5,11]) : void 0));
    useThemeStore();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(unref(HeroSection)),
          createVNode(unref(IntroductionSection)),
          createVNode(unref(ObjectiveSection))
        ])
      ]);
    };
  }
});
const HomeView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-01d8f44f"]]);
export {
  HomeView as default
};

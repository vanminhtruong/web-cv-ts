const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HeroSection-zotQB911.js","assets/index-CHI_0rfl.js","assets/vendor-toast-C0T2VqWD.js","assets/vendor-C9uPxl4s.js","assets/vendor-toast-jG2HNJHr.css","assets/index-Dr6ioNEg.css","assets/profile-fNcbcz0d.js","assets/useContactInfo-CmG0zOeO.js","assets/HeroSection-CFsM0OrL.css","assets/IntroductionSection-BX_JarKy.js","assets/LazySection-B1dl9o76.js","assets/LazySection-BO97IxP6.css","assets/ObjectiveSection-DCMs2Iaf.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload, a as _export_sfc } from "./index-CHI_0rfl.js";
import { u as useThemeStore } from "./theme-DAGjCgK1.js";
import { d as defineComponent, c as createElementBlock, v as openBlock, f as createBaseVNode, y as createVNode, u as unref, D as defineAsyncComponent } from "./vendor-C9uPxl4s.js";
import "./vendor-toast-C0T2VqWD.js";
const _hoisted_1 = { class: "min-h-screen py-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900" };
const _hoisted_2 = { class: "container mx-auto px-4 xs:px-3 sm:px-6 lg:px-8" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HomeView",
  setup(__props) {
    const HeroSection = defineAsyncComponent(() => __vitePreload(() => import("./HeroSection-zotQB911.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
    const IntroductionSection = defineAsyncComponent(() => __vitePreload(() => import("./IntroductionSection-BX_JarKy.js"), true ? __vite__mapDeps([9,3,1,2,4,5,10,11]) : void 0));
    const ObjectiveSection = defineAsyncComponent(() => __vitePreload(() => import("./ObjectiveSection-DCMs2Iaf.js"), true ? __vite__mapDeps([12,3,6,1,2,4,5,10,11]) : void 0));
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
const HomeView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-997159f7"]]);
export {
  HomeView as default
};
//# sourceMappingURL=HomeView-Cn5dIULJ.js.map

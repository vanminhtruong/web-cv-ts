const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HeroSection-D2AEKaqR.js","assets/index-Br1oDo7I.js","assets/vendor-toast-BV7TAAOY.js","assets/vendor-1p1qY6MK.js","assets/vendor-toast-jG2HNJHr.css","assets/index-D4PIDcqh.css","assets/profile-DcWeGfHE.js","assets/color-2p_dXya-.js","assets/useContactInfo-CuqMhf0b.js","assets/HeroSection-CFsM0OrL.css","assets/IntroductionSection-lMRIPnci.js","assets/LazySection-BHoMnuQm.js","assets/LazySection-BO97IxP6.css","assets/ObjectiveSection-CtCNf-LS.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload, a as _export_sfc } from "./index-Br1oDo7I.js";
import { u as useThemeStore } from "./theme-BeOweZqK.js";
import { d as defineComponent, c as createElementBlock, v as openBlock, f as createBaseVNode, y as createVNode, u as unref, z as defineAsyncComponent } from "./vendor-1p1qY6MK.js";
import "./vendor-toast-BV7TAAOY.js";
const _hoisted_1 = { class: "min-h-screen py-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900" };
const _hoisted_2 = { class: "container mx-auto px-4 xs:px-3 sm:px-6 lg:px-8" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HomeView",
  setup(__props) {
    const HeroSection = defineAsyncComponent(() => __vitePreload(() => import("./HeroSection-D2AEKaqR.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0));
    const IntroductionSection = defineAsyncComponent(() => __vitePreload(() => import("./IntroductionSection-lMRIPnci.js"), true ? __vite__mapDeps([10,3,7,11,1,2,4,5,12]) : void 0));
    const ObjectiveSection = defineAsyncComponent(() => __vitePreload(() => import("./ObjectiveSection-CtCNf-LS.js"), true ? __vite__mapDeps([13,3,6,7,11,1,2,4,5,12]) : void 0));
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
//# sourceMappingURL=HomeView-RLYEeAc7.js.map

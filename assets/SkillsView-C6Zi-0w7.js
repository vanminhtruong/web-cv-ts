const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/EducationSection-DVjVJ-ti.js","assets/index-D_q-kvoS.js","assets/vendor-toast-C0T2VqWD.js","assets/vendor-C9uPxl4s.js","assets/vendor-toast-jG2HNJHr.css","assets/index-DwZbmioC.css","assets/LazySection-BT9wey6r.js","assets/LazySection-BO97IxP6.css","assets/SkillsSection-DWEKd7AB.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./index-D_q-kvoS.js";
import { u as useThemeStore } from "./theme-DAGjCgK1.js";
import { d as defineComponent, c as createElementBlock, v as openBlock, f as createBaseVNode, y as createVNode, u as unref, D as defineAsyncComponent } from "./vendor-C9uPxl4s.js";
import "./vendor-toast-C0T2VqWD.js";
const _hoisted_1 = { class: "min-h-screen py-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900" };
const _hoisted_2 = { class: "container mx-auto px-4 xs:px-3 sm:px-6 lg:px-8" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SkillsView",
  setup(__props) {
    const EducationSection = defineAsyncComponent(() => __vitePreload(() => import("./EducationSection-DVjVJ-ti.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
    const SkillsSection = defineAsyncComponent(() => __vitePreload(() => import("./SkillsSection-DWEKd7AB.js"), true ? __vite__mapDeps([8,1,2,3,4,5,6,7]) : void 0));
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
//# sourceMappingURL=SkillsView-C6Zi-0w7.js.map

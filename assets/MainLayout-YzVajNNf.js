const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Header-D59kowNo.js","assets/vendor-C9uPxl4s.js","assets/index-CHI_0rfl.js","assets/vendor-toast-C0T2VqWD.js","assets/vendor-toast-jG2HNJHr.css","assets/index-Dr6ioNEg.css","assets/theme-DAGjCgK1.js","assets/profile-fNcbcz0d.js","assets/Header-CIeHXsOf.css","assets/Footer-CB_C4qGg.js","assets/BackToTop-cgw27G9v.js","assets/BackToTop-Bi0so-CZ.css"])))=>i.map(i=>d[i]);
import { u as useColorStore, _ as __vitePreload } from "./index-CHI_0rfl.js";
import { u as useThemeStore } from "./theme-DAGjCgK1.js";
import { d as defineComponent, C as onMounted, c as createElementBlock, v as openBlock, y as createVNode, f as createBaseVNode, u as unref, D as defineAsyncComponent, x as renderSlot } from "./vendor-C9uPxl4s.js";
import "./vendor-toast-C0T2VqWD.js";
const _hoisted_1 = { class: "min-h-screen bg-gray-50 dark:bg-gray-900 font-sans dark:text-white" };
const _hoisted_2 = { class: "pt-20" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MainLayout",
  setup(__props) {
    const Header = defineAsyncComponent(() => __vitePreload(() => import("./Header-D59kowNo.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
    const Footer = defineAsyncComponent(() => __vitePreload(() => import("./Footer-CB_C4qGg.js"), true ? __vite__mapDeps([9,1,7,2,3,4,5]) : void 0));
    const BackToTop = defineAsyncComponent(() => __vitePreload(() => import("./BackToTop-cgw27G9v.js"), true ? __vite__mapDeps([10,1,2,3,4,5,11]) : void 0));
    const themeStore = useThemeStore();
    const colorStore = useColorStore();
    onMounted(() => {
      themeStore.initTheme();
      colorStore.initColor();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(BackToTop)),
        createVNode(unref(Header)),
        createBaseVNode("main", _hoisted_2, [
          renderSlot(_ctx.$slots, "default")
        ]),
        createVNode(unref(Footer))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=MainLayout-YzVajNNf.js.map

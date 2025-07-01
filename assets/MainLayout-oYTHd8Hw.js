const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Header-dirZVqx6.js","assets/vendor-BFdtVDZL.js","assets/color-dH0ZqwuS.js","assets/theme-BrM0jE5z.js","assets/index-CswnhC9z.js","assets/vendor-toast-BVu51o8f.js","assets/vendor-toast-jG2HNJHr.css","assets/index-BBPSw9Ad.css","assets/profile-BByPq2KQ.js","assets/Header-BgM-3sF4.css","assets/Footer-CVNV7vSw.js","assets/BackToTop-C0arN3_9.js","assets/BackToTop-Cq2Q_uSw.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./index-CswnhC9z.js";
import { u as useThemeStore } from "./theme-BrM0jE5z.js";
import { u as useColorStore } from "./color-dH0ZqwuS.js";
import { d as defineComponent, G as onMounted, c as createElementBlock, v as openBlock, y as createVNode, f as createBaseVNode, u as unref, z as defineAsyncComponent, x as renderSlot } from "./vendor-BFdtVDZL.js";
import "./vendor-toast-BVu51o8f.js";
const _hoisted_1 = { class: "min-h-screen bg-gray-50 dark:bg-gray-900 font-sans dark:text-white" };
const _hoisted_2 = { class: "pt-20" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MainLayout",
  setup(__props) {
    const Header = defineAsyncComponent(() => __vitePreload(() => import("./Header-dirZVqx6.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0));
    const Footer = defineAsyncComponent(() => __vitePreload(() => import("./Footer-CVNV7vSw.js"), true ? __vite__mapDeps([10,1,8,2]) : void 0));
    const BackToTop = defineAsyncComponent(() => __vitePreload(() => import("./BackToTop-C0arN3_9.js"), true ? __vite__mapDeps([11,1,2,4,5,6,7,12]) : void 0));
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

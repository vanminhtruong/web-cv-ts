const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Header-CKyfYNEn.js","assets/vendor-1p1qY6MK.js","assets/color-2p_dXya-.js","assets/theme-BeOweZqK.js","assets/index-CmMRoaIa.js","assets/vendor-toast-BV7TAAOY.js","assets/vendor-toast-jG2HNJHr.css","assets/index-D5SUjd7j.css","assets/profile-DcWeGfHE.js","assets/Header-y_ZcpG51.css","assets/Footer-B-Btk2ps.js","assets/BackToTop-EOwQvOfm.js","assets/BackToTop-Cq2Q_uSw.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./index-CmMRoaIa.js";
import { u as useThemeStore } from "./theme-BeOweZqK.js";
import { u as useColorStore } from "./color-2p_dXya-.js";
import { d as defineComponent, H as onMounted, c as createElementBlock, v as openBlock, y as createVNode, f as createBaseVNode, u as unref, z as defineAsyncComponent, x as renderSlot } from "./vendor-1p1qY6MK.js";
import "./vendor-toast-BV7TAAOY.js";
const _hoisted_1 = { class: "min-h-screen bg-gray-50 dark:bg-gray-900 font-sans dark:text-white" };
const _hoisted_2 = { class: "pt-20" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MainLayout",
  setup(__props) {
    const Header = defineAsyncComponent(() => __vitePreload(() => import("./Header-CKyfYNEn.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0));
    const Footer = defineAsyncComponent(() => __vitePreload(() => import("./Footer-B-Btk2ps.js"), true ? __vite__mapDeps([10,1,8,2]) : void 0));
    const BackToTop = defineAsyncComponent(() => __vitePreload(() => import("./BackToTop-EOwQvOfm.js"), true ? __vite__mapDeps([11,1,2,4,5,6,7,12]) : void 0));
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
//# sourceMappingURL=MainLayout-Ct72tmYA.js.map

import { z as defineStore, A as ref, d as defineComponent, J as useI18n, C as onMounted, P as onUnmounted, b as createBlock, v as openBlock, w as withCtx, N as withDirectives, f as createBaseVNode, u as unref, a as normalizeStyle, n as normalizeClass, Q as vShow, V as Transition } from "./vendor-C9uPxl4s.js";
import { u as useColorStore, a as _export_sfc } from "./index-D_q-kvoS.js";
import "./vendor-toast-C0T2VqWD.js";
const useScrollStore = defineStore("scroll", () => {
  const showBackToTop = ref(false);
  const scrollThreshold = 300;
  function updateScrollPosition() {
    showBackToTop.value = window.scrollY > scrollThreshold;
  }
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return {
    showBackToTop,
    updateScrollPosition,
    scrollToTop
  };
});
const _hoisted_1 = ["aria-label"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BackToTop",
  setup(__props, { expose: __expose }) {
    const colorStore = useColorStore();
    const { t } = useI18n();
    const scrollStore = useScrollStore();
    onMounted(() => {
      window.addEventListener("scroll", scrollStore.updateScrollPosition);
      scrollStore.updateScrollPosition();
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", scrollStore.updateScrollPosition);
    });
    __expose({});
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade" }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("button", {
            onClick: _cache[0] || (_cache[0] = //@ts-ignore
            (...args) => unref(scrollStore).scrollToTop && unref(scrollStore).scrollToTop(...args)),
            class: normalizeClass(["fixed bottom-8 right-8 z-50 p-3 rounded-full text-white shadow-lg transition-all duration-300 focus:outline-none", {
              "hover:bg-theme-accent": true
            }]),
            style: normalizeStyle({
              "background-color": unref(colorStore).currentColor.primary,
              "--hover-bg": unref(colorStore).currentColor.secondary
            }),
            "aria-label": unref(t)("common.backToTop")
          }, _cache[1] || (_cache[1] = [
            createBaseVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              createBaseVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M5 10l7-7m0 0l7 7m-7-7v18"
              })
            ], -1)
          ]), 12, _hoisted_1), [
            [vShow, unref(scrollStore).showBackToTop]
          ])
        ]),
        _: 1
      });
    };
  }
});
const BackToTop = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b9e626cb"]]);
export {
  BackToTop as default
};
//# sourceMappingURL=BackToTop-Bx36IVzo.js.map

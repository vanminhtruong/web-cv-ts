const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ContactInfoSection-BD6QtbNB.js","assets/color-2p_dXya-.js","assets/vendor-1p1qY6MK.js","assets/useContactInfo-CuqMhf0b.js","assets/index-Co5181Uf.js","assets/vendor-toast-BV7TAAOY.js","assets/vendor-toast-jG2HNJHr.css","assets/index-D5SUjd7j.css","assets/ContactFormSection-u5WxgpAR.js","assets/LazySection-B4rId7vn.js","assets/LazySection-BO97IxP6.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./index-Co5181Uf.js";
import { u as useColorStore } from "./color-2p_dXya-.js";
import { G as computed, d as defineComponent, E as useI18n, c as createElementBlock, v as openBlock, f as createBaseVNode, y as createVNode, w as withCtx, a as normalizeStyle, u as unref, t as toDisplayString, z as defineAsyncComponent } from "./vendor-1p1qY6MK.js";
function useAssetPath() {
  const isGitHubPages = computed(() => {
    return window.location.href.includes("/web-cv-ts/");
  });
  const getAssetPath = (path) => {
    if (path.startsWith("http://") || path.startsWith("https://")) {
      return path;
    }
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    if (isGitHubPages.value) {
      return `/web-cv-ts${normalizedPath}`;
    }
    return normalizedPath;
  };
  return {
    isGitHubPages,
    getAssetPath
  };
}
const _hoisted_1 = { class: "min-h-screen py-10 xs:py-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900" };
const _hoisted_2 = { class: "container mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_3 = { class: "flex items-center mb-10 xs:mb-6" };
const _hoisted_4 = { class: "mr-4 hidden md:block" };
const _hoisted_5 = { class: "flex flex-col md:flex-row gap-8 xs:gap-4 h-full" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContactView",
  setup(__props) {
    const ContactInfoSection = defineAsyncComponent(() => __vitePreload(() => import("./ContactInfoSection-BD6QtbNB.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
    const ContactFormSection = defineAsyncComponent(() => __vitePreload(() => import("./ContactFormSection-u5WxgpAR.js"), true ? __vite__mapDeps([8,2,1,5,6,4,7]) : void 0));
    const LazySection = defineAsyncComponent(() => __vitePreload(() => import("./LazySection-B4rId7vn.js"), true ? __vite__mapDeps([9,2,4,5,6,7,10]) : void 0));
    const colorStore = useColorStore();
    const { t } = useI18n();
    useAssetPath();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(unref(LazySection), { class: "mb-16 xs:mb-8" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", {
                    class: "h-12 w-12 xs:h-8 xs:w-8 rounded-lg flex items-center justify-center shadow-md",
                    style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary })
                  }, _cache[0] || (_cache[0] = [
                    createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6 xs:h-4 xs:w-4 text-white",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      })
                    ], -1)
                  ]), 4)
                ]),
                createBaseVNode("h2", {
                  class: "text-3xl xs:text-2xl font-bold inline-block pb-2 border-b-4 transform transition-all duration-300 hover:scale-105",
                  style: normalizeStyle({ "border-color": unref(colorStore).currentColor.primary, "color": unref(colorStore).currentColor.primary })
                }, toDisplayString(unref(t)("contact.title").toUpperCase()), 5)
              ]),
              createBaseVNode("div", _hoisted_5, [
                createVNode(unref(LazySection), {
                  class: "w-full md:w-1/2",
                  threshold: "0.1",
                  rootMargin: "50px"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(ContactInfoSection))
                  ]),
                  _: 1
                }),
                createVNode(unref(LazySection), {
                  class: "w-full md:w-1/2",
                  threshold: "0.1",
                  rootMargin: "50px"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(ContactFormSection))
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const ContactView = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
export {
  ContactView as C,
  useAssetPath as u
};
//# sourceMappingURL=ContactView-2d5Kq0Yw.js.map

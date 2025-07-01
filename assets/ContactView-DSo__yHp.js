const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ContactInfoSection-Cya5a_YZ.js","assets/color-dH0ZqwuS.js","assets/vendor-BFdtVDZL.js","assets/ContactFormSection-BTZd4G1V.js","assets/vendor-toast-BVu51o8f.js","assets/vendor-toast-jG2HNJHr.css","assets/LazySection-CQ-JKqun.js","assets/index-CswnhC9z.js","assets/index-BBPSw9Ad.css","assets/LazySection-BO97IxP6.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./index-CswnhC9z.js";
import { u as useColorStore } from "./color-dH0ZqwuS.js";
import { d as defineComponent, E as useI18n, c as createElementBlock, v as openBlock, f as createBaseVNode, y as createVNode, w as withCtx, a as normalizeStyle, u as unref, t as toDisplayString, z as defineAsyncComponent } from "./vendor-BFdtVDZL.js";
import "./vendor-toast-BVu51o8f.js";
const _hoisted_1 = { class: "min-h-screen py-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900" };
const _hoisted_2 = { class: "container mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_3 = { class: "flex items-center mb-10" };
const _hoisted_4 = { class: "mr-4 hidden md:block" };
const _hoisted_5 = { class: "flex flex-col md:flex-row gap-8 h-full" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContactView",
  setup(__props) {
    const ContactInfoSection = defineAsyncComponent(() => __vitePreload(() => import("./ContactInfoSection-Cya5a_YZ.js"), true ? __vite__mapDeps([0,1,2]) : void 0));
    const ContactFormSection = defineAsyncComponent(() => __vitePreload(() => import("./ContactFormSection-BTZd4G1V.js"), true ? __vite__mapDeps([3,2,1,4,5]) : void 0));
    const LazySection = defineAsyncComponent(() => __vitePreload(() => import("./LazySection-CQ-JKqun.js"), true ? __vite__mapDeps([6,2,7,4,5,8,9]) : void 0));
    const colorStore = useColorStore();
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(unref(LazySection), { class: "mb-16" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", {
                    class: "h-12 w-12 rounded-lg flex items-center justify-center shadow-md",
                    style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary })
                  }, _cache[0] || (_cache[0] = [
                    createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6 text-white",
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
                  class: "text-3xl font-bold inline-block pb-2 border-b-4 transform transition-all duration-300 hover:scale-105",
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
export {
  _sfc_main as default
};

import { u as useColorStore } from "./color-2p_dXya-.js";
import { d as defineComponent, E as useI18n, c as createElementBlock, v as openBlock, f as createBaseVNode, a as normalizeStyle, u as unref, t as toDisplayString, g as createTextVNode } from "./vendor-1p1qY6MK.js";
import { u as useAssetPath } from "./ContactView-CJNBBr9h.js";
import "./index-tCMn77J4.js";
import "./vendor-toast-BV7TAAOY.js";
const _hoisted_1 = { class: "flex items-center mb-6" };
const _hoisted_2 = { class: "text-2xl font-semibold text-gray-900 dark:text-white" };
const _hoisted_3 = { class: "bg-gradient-to-br from-white to-indigo-100 dark:from-gray-700 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-200 dark:border-gray-600 flex items-start space-x-4 transform transition-all duration-300 hover:-translate-y-1" };
const _hoisted_4 = { class: "text-lg font-medium text-gray-800 dark:text-white mb-1" };
const _hoisted_5 = { class: "text-gray-700 dark:text-white flex items-center" };
const _hoisted_6 = { class: "bg-gradient-to-br from-white to-indigo-100 dark:from-gray-700 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-200 dark:border-gray-600 flex items-start space-x-4 transform transition-all duration-300 hover:-translate-y-1" };
const _hoisted_7 = { class: "text-lg font-medium text-gray-800 dark:text-white mb-1" };
const _hoisted_8 = { class: "text-gray-700 dark:text-white" };
const _hoisted_9 = {
  href: "mailto:vanminhtruong95@gmail.com",
  class: "text-gray-700 hover:text-indigo-800 dark:text-white dark:hover:text-indigo-300 transition-colors"
};
const _hoisted_10 = { class: "bg-gradient-to-br from-white to-indigo-100 dark:from-gray-700 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-200 dark:border-gray-600 flex items-start space-x-4 transform transition-all duration-300 hover:-translate-y-1" };
const _hoisted_11 = { class: "text-lg font-medium text-gray-800 dark:text-white mb-1" };
const _hoisted_12 = { class: "text-gray-700 dark:text-white" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContactInfoSection",
  setup(__props) {
    const colorStore = useColorStore();
    const { t } = useI18n();
    useAssetPath();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-1 border-l-4 h-full flex flex-col",
        style: normalizeStyle({ "border-color": unref(colorStore).currentColor.primary })
      }, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", {
            class: "h-10 w-10 rounded-lg flex items-center justify-center mr-3",
            style: normalizeStyle({ "background-image": `linear-gradient(to right, ${unref(colorStore).currentColor.primary}, ${unref(colorStore).currentColor.secondary})` })
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
                d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              })
            ], -1)
          ]), 4),
          createBaseVNode("h3", _hoisted_2, toDisplayString(unref(t)("contact.title")), 1)
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", {
            class: "h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md",
            style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary })
          }, _cache[1] || (_cache[1] = [
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
                d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              })
            ], -1)
          ]), 4),
          createBaseVNode("div", null, [
            createBaseVNode("h4", _hoisted_4, toDisplayString(unref(t)("about.phone")), 1),
            createBaseVNode("p", _hoisted_5, [
              createBaseVNode("span", {
                class: "px-3 py-1 rounded-full text-sm font-medium text-white mr-2",
                style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary })
              }, toDisplayString(unref(t)("contact.mobile")), 5),
              createTextVNode(" " + toDisplayString(unref(t)("contact.phoneNumber")), 1)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("div", {
            class: "h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md",
            style: normalizeStyle({ "background-image": `linear-gradient(to right, ${unref(colorStore).currentColor.primary}, ${unref(colorStore).currentColor.secondary})` })
          }, _cache[2] || (_cache[2] = [
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
          ]), 4),
          createBaseVNode("div", null, [
            createBaseVNode("h4", _hoisted_7, toDisplayString(unref(t)("about.email")), 1),
            createBaseVNode("p", _hoisted_8, [
              createBaseVNode("a", _hoisted_9, toDisplayString(unref(t)("contact.emailAddress")), 1)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("div", {
            class: "h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md",
            style: normalizeStyle({ "background-image": `linear-gradient(to right, ${unref(colorStore).currentColor.secondary}, ${unref(colorStore).currentColor.primary})` })
          }, _cache[3] || (_cache[3] = [
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
                d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              }),
              createBaseVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              })
            ], -1)
          ]), 4),
          createBaseVNode("div", null, [
            createBaseVNode("h4", _hoisted_11, toDisplayString(unref(t)("about.address")), 1),
            createBaseVNode("p", _hoisted_12, toDisplayString(unref(t)("about.addressValue")), 1)
          ])
        ])
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=ContactInfoSection-B3fujuBi.js.map

import { u as useColorStore } from "./color-2p_dXya-.js";
import { d as defineComponent, E as useI18n, c as createElementBlock, v as openBlock, f as createBaseVNode, a as normalizeStyle, u as unref, t as toDisplayString, F as Fragment, j as renderList, g as createTextVNode } from "./vendor-1p1qY6MK.js";
import { u as useAssetPath } from "./ContactView-B4_gWH6B.js";
import { u as useContactInfo } from "./useContactInfo-CuqMhf0b.js";
import "./index-BtA3aBl6.js";
import "./vendor-toast-BV7TAAOY.js";
const _hoisted_1 = { class: "flex items-center mb-6 xs:mb-4" };
const _hoisted_2 = { class: "text-2xl xs:text-xl font-semibold text-gray-900 dark:text-white" };
const _hoisted_3 = { class: "space-y-6 xs:space-y-4 flex-grow" };
const _hoisted_4 = ["d"];
const _hoisted_5 = { class: "flex-1" };
const _hoisted_6 = { class: "text-md xs:text-sm font-medium text-gray-700 dark:text-gray-300" };
const _hoisted_7 = {
  key: 0,
  class: "text-gray-600 dark:text-gray-400 mt-1 xs:text-sm"
};
const _hoisted_8 = ["href"];
const _hoisted_9 = { class: "mt-8 xs:mt-6 pt-6 xs:pt-4 border-t border-gray-200 dark:border-gray-700" };
const _hoisted_10 = { class: "text-lg xs:text-base font-medium text-gray-900 dark:text-white mb-4 xs:mb-3" };
const _hoisted_11 = { class: "flex flex-col space-y-3 xs:space-y-2" };
const _hoisted_12 = ["href"];
const _hoisted_13 = { class: "mt-8 xs:mt-6" };
const _hoisted_14 = ["href"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContactInfoSection",
  setup(__props) {
    const colorStore = useColorStore();
    const { t } = useI18n();
    useAssetPath();
    const { contactItems, githubUrl, getPdfPath } = useContactInfo();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 xs:p-4 transform hover:-translate-y-1 border-l-4 h-full flex flex-col",
        style: normalizeStyle({ "border-color": unref(colorStore).currentColor.primary })
      }, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", {
            class: "h-10 w-10 xs:h-8 xs:w-8 rounded-lg flex items-center justify-center mr-3",
            style: normalizeStyle({ "background-image": `linear-gradient(to right, ${unref(colorStore).currentColor.primary}, ${unref(colorStore).currentColor.secondary})` })
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
                d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              })
            ], -1)
          ]), 4),
          createBaseVNode("h3", _hoisted_2, toDisplayString(unref(t)("contact.title")), 1)
        ]),
        createBaseVNode("div", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(contactItems), (item) => {
            return openBlock(), createElementBlock("div", {
              key: item.id,
              class: "flex items-start group"
            }, [
              createBaseVNode("div", {
                class: "h-10 w-10 xs:h-8 xs:w-8 rounded-lg flex items-center justify-center mr-3 transition-all duration-300 group-hover:scale-110",
                style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary + "20" })
              }, [
                (openBlock(), createElementBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-5 w-5 xs:h-4 xs:w-4",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: item.svgPath
                  }, null, 8, _hoisted_4)
                ], 4))
              ], 4),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("h4", _hoisted_6, toDisplayString(item.label), 1),
                !item.url ? (openBlock(), createElementBlock("p", _hoisted_7, toDisplayString(item.value), 1)) : (openBlock(), createElementBlock("a", {
                  key: 1,
                  href: item.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  class: "text-gray-600 dark:text-gray-400 mt-1 hover:underline transition-colors xs:text-sm",
                  style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                }, toDisplayString(item.value), 13, _hoisted_8))
              ])
            ]);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_9, [
          createBaseVNode("h4", _hoisted_10, toDisplayString(unref(t)("nav.links")), 1),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("a", {
              href: unref(githubUrl),
              target: "_blank",
              rel: "noopener noreferrer",
              class: "flex items-center text-gray-600 dark:text-gray-400 hover:underline transition-colors xs:text-sm",
              style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
            }, [
              _cache[1] || (_cache[1] = createBaseVNode("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-5 w-5 xs:h-4 xs:w-4 mr-2",
                viewBox: "0 0 24 24",
                fill: "currentColor"
              }, [
                createBaseVNode("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
              ], -1)),
              createTextVNode(" " + toDisplayString(unref(t)("contact.githubProject")), 1)
            ], 12, _hoisted_12),
            createBaseVNode("a", {
              href: "https://github.com/vanminhtruong/libary",
              target: "_blank",
              rel: "noopener noreferrer",
              class: "flex items-center text-gray-600 dark:text-gray-400 hover:underline transition-colors xs:text-sm",
              style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
            }, [
              _cache[2] || (_cache[2] = createBaseVNode("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-5 w-5 xs:h-4 xs:w-4 mr-2",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                createBaseVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                })
              ], -1)),
              createTextVNode(" " + toDisplayString(unref(t)("contact.libraryProject")), 1)
            ], 4),
            createBaseVNode("a", {
              href: "https://vanminhtruong.github.io/web-cv-ts/",
              target: "_blank",
              rel: "noopener noreferrer",
              class: "flex items-center text-gray-600 dark:text-gray-400 hover:underline transition-colors xs:text-sm",
              style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
            }, [
              _cache[3] || (_cache[3] = createBaseVNode("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-5 w-5 xs:h-4 xs:w-4 mr-2",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                createBaseVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                })
              ], -1)),
              createTextVNode(" " + toDisplayString(unref(t)("contact.projectWebsite")), 1)
            ], 4)
          ])
        ]),
        createBaseVNode("div", _hoisted_13, [
          createBaseVNode("a", {
            href: unref(getPdfPath)(),
            download: "",
            class: "inline-flex items-center px-4 py-2 xs:px-3 xs:py-1.5 rounded-lg text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 xs:text-sm",
            style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary })
          }, [
            _cache[4] || (_cache[4] = createBaseVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "h-5 w-5 xs:h-4 xs:w-4 mr-2",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              createBaseVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              })
            ], -1)),
            createTextVNode(" " + toDisplayString(unref(t)("nav.downloadCV")), 1)
          ], 12, _hoisted_14)
        ])
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=ContactInfoSection-DiErOrhO.js.map

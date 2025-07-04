import { d as defineComponent, E as useI18n, c as createElementBlock, v as openBlock, f as createBaseVNode, a as normalizeStyle, u as unref, t as toDisplayString, y as createVNode, w as withCtx, g as createTextVNode, U as RouterLink, n as normalizeClass } from "./vendor-1p1qY6MK.js";
import { u as useProfileStore } from "./profile-DcWeGfHE.js";
import { u as useColorStore } from "./color-2p_dXya-.js";
const _hoisted_1 = { class: "bg-gray-800 text-white py-10 xs:py-6" };
const _hoisted_2 = { class: "container mx-auto px-4 sm:px-6 lg:px-8" };
const _hoisted_3 = { class: "grid grid-cols-1 md:grid-cols-3 gap-8 xs:gap-6" };
const _hoisted_4 = { class: "text-gray-400 mb-4 xs:mb-3 xs:text-sm" };
const _hoisted_5 = { class: "text-gray-400 xs:text-sm" };
const _hoisted_6 = { class: "space-y-2 xs:space-y-1.5" };
const _hoisted_7 = { class: "flex space-x-4 xs:space-x-3" };
const _hoisted_8 = ["href"];
const _hoisted_9 = ["href"];
const _hoisted_10 = ["href"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  setup(__props, { expose: __expose }) {
    const { t } = useI18n();
    const profileStore = useProfileStore();
    const colorStore = useColorStore();
    __expose({
      // Expose any needed properties or methods
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("footer", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", null, [
              createBaseVNode("h3", {
                class: "text-xl xs:text-lg font-semibold mb-4 xs:mb-3",
                style: normalizeStyle({ color: unref(colorStore).currentColor.primary })
              }, toDisplayString(unref(profileStore).fullName), 5),
              createBaseVNode("p", _hoisted_4, toDisplayString(unref(t)("footer.description")), 1),
              createBaseVNode("p", _hoisted_5, toDisplayString(unref(t)("footer.copyrightText", { year: unref(profileStore).year, name: unref(profileStore).fullName })), 1)
            ]),
            createBaseVNode("div", null, [
              createBaseVNode("h3", {
                class: "text-xl xs:text-lg font-semibold mb-4 xs:mb-3",
                style: normalizeStyle({ color: unref(colorStore).currentColor.primary })
              }, toDisplayString(unref(t)("nav.links")), 5),
              createBaseVNode("ul", _hoisted_6, [
                createBaseVNode("li", null, [
                  createVNode(unref(RouterLink), {
                    to: "/",
                    class: "text-gray-400 hover:text-white transition-colors duration-200 xs:text-sm"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("nav.home")), 1)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(unref(RouterLink), {
                    to: "/skills",
                    class: "text-gray-400 hover:text-white transition-colors duration-200 xs:text-sm"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("nav.skills")), 1)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(unref(RouterLink), {
                    to: "/experience",
                    class: "text-gray-400 hover:text-white transition-colors duration-200 xs:text-sm"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("nav.experience")), 1)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("li", null, [
                  createVNode(unref(RouterLink), {
                    to: "/contact",
                    class: "text-gray-400 hover:text-white transition-colors duration-200 xs:text-sm"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("nav.contact")), 1)
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("div", null, [
              createBaseVNode("h3", {
                class: "text-xl xs:text-lg font-semibold mb-4 xs:mb-3",
                style: normalizeStyle({ color: unref(colorStore).currentColor.primary })
              }, toDisplayString(unref(t)("nav.connect")), 5),
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("a", {
                  href: unref(profileStore).socialLinks.facebook,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  class: normalizeClass(["transition-colors duration-200", { "hover:opacity-80": true }]),
                  style: normalizeStyle({ color: unref(colorStore).currentColor.secondary })
                }, _cache[0] || (_cache[0] = [
                  createBaseVNode("svg", {
                    class: "h-6 w-6 xs:h-5 xs:w-5",
                    fill: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createBaseVNode("path", { d: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" })
                  ], -1)
                ]), 12, _hoisted_8),
                createBaseVNode("a", {
                  href: unref(profileStore).socialLinks.linkedin,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  class: normalizeClass(["transition-colors duration-200", { "hover:opacity-80": true }]),
                  style: normalizeStyle({ color: unref(colorStore).currentColor.secondary })
                }, _cache[1] || (_cache[1] = [
                  createBaseVNode("svg", {
                    class: "h-6 w-6 xs:h-5 xs:w-5",
                    fill: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createBaseVNode("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" })
                  ], -1)
                ]), 12, _hoisted_9),
                createBaseVNode("a", {
                  href: unref(profileStore).socialLinks.github,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  class: normalizeClass(["transition-colors duration-200", { "hover:opacity-80": true }]),
                  style: normalizeStyle({ color: unref(colorStore).currentColor.secondary })
                }, _cache[2] || (_cache[2] = [
                  createBaseVNode("svg", {
                    class: "h-6 w-6 xs:h-5 xs:w-5",
                    fill: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createBaseVNode("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
                  ], -1)
                ]), 12, _hoisted_10)
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Footer-B-Btk2ps.js.map

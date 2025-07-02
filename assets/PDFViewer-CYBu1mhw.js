import { d as defineComponent, J as ref, c as createElementBlock, e as createCommentVNode, v as openBlock, f as createBaseVNode, a as normalizeStyle, u as unref, t as toDisplayString, g as createTextVNode, i as withModifiers } from "./vendor-1p1qY6MK.js";
import { u as useColorStore } from "./color-2p_dXya-.js";
import { a as _export_sfc } from "./index-BvAhHeoL.js";
import "./vendor-toast-BV7TAAOY.js";
const _hoisted_1 = { class: "pdf-viewer-container" };
const _hoisted_2 = { class: "text-xl font-bold" };
const _hoisted_3 = { class: "flex items-center gap-4" };
const _hoisted_4 = { class: "zoom-controls flex items-center gap-2" };
const _hoisted_5 = { class: "zoom-level" };
const _hoisted_6 = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};
const _hoisted_7 = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
};
const _hoisted_8 = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M6 18L18 6M6 6l12 12"
};
const _hoisted_9 = ["href"];
const _hoisted_10 = {
  key: 0,
  class: "pdf-wrapper"
};
const _hoisted_11 = ["src"];
const _hoisted_12 = {
  key: 1,
  class: "pdf-fallback"
};
const _hoisted_13 = { class: "pdf-error-message" };
const _hoisted_14 = { class: "flex justify-center gap-4" };
const _hoisted_15 = ["href"];
const _hoisted_16 = ["href"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PDFViewer",
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "CV Preview"
    },
    pdfUrl: {
      type: String,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const colorStore = useColorStore();
    const zoomLevel = ref(1);
    const pdfContainer = ref(null);
    const pdfFrame = ref(null);
    const isFullScreen = ref(false);
    const pdfLoadError = ref(false);
    const emit = __emit;
    const closeModal = () => {
      emit("close");
    };
    const zoomIn = () => {
      if (zoomLevel.value < 4) {
        zoomLevel.value += 0.25;
      }
    };
    const zoomOut = () => {
      if (zoomLevel.value > 0.5) {
        zoomLevel.value -= 0.25;
      }
    };
    const toggleFullScreen = () => {
      if (!document.fullscreenElement) {
        if (pdfFrame.value?.requestFullscreen) {
          pdfFrame.value?.requestFullscreen();
          isFullScreen.value = true;
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
          isFullScreen.value = false;
        }
      }
    };
    const handleIframeLoad = (event) => {
      try {
        const iframe = event.target;
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDoc?.title.includes("404") || iframeDoc?.body.textContent?.includes("404 Not Found")) {
          pdfLoadError.value = true;
        } else {
          pdfLoadError.value = false;
        }
      } catch (error) {
        pdfLoadError.value = false;
      }
    };
    const handleIframeError = () => {
      pdfLoadError.value = true;
    };
    document.addEventListener("fullscreenchange", () => {
      isFullScreen.value = !!document.fullscreenElement;
    });
    return (_ctx, _cache) => {
      return __props.isOpen ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "pdf-viewer-modal",
        onClick: withModifiers(closeModal, ["self"])
      }, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", {
            class: "pdf-viewer-header",
            style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary })
          }, [
            createBaseVNode("h3", _hoisted_2, toDisplayString(__props.title), 1),
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("button", {
                  class: "zoom-button",
                  onClick: zoomOut,
                  title: "Zoom out"
                }, _cache[0] || (_cache[0] = [
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
                      d: "M20 12H4"
                    })
                  ], -1)
                ])),
                createBaseVNode("span", _hoisted_5, toDisplayString(Math.round(zoomLevel.value * 100)) + "%", 1),
                createBaseVNode("button", {
                  class: "zoom-button",
                  onClick: zoomIn,
                  title: "Zoom in"
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
                      d: "M12 4v16m8-8H4"
                    })
                  ], -1)
                ]))
              ]),
              createBaseVNode("button", {
                class: "zoom-button",
                onClick: toggleFullScreen,
                title: "Fullscreen"
              }, [
                (openBlock(), createElementBlock("svg", _hoisted_6, [
                  !isFullScreen.value ? (openBlock(), createElementBlock("path", _hoisted_7)) : (openBlock(), createElementBlock("path", _hoisted_8))
                ]))
              ]),
              createBaseVNode("a", {
                href: __props.pdfUrl,
                target: "_blank",
                class: "download-button flex items-center gap-1 px-2 py-1 rounded-md bg-white/20 hover:bg-white/30 transition-colors",
                title: "Open in new tab"
              }, _cache[2] || (_cache[2] = [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-5 w-5",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  })
                ], -1),
                createBaseVNode("span", { class: "text-sm" }, "Open", -1)
              ]), 8, _hoisted_9),
              createBaseVNode("button", {
                class: "close-button",
                onClick: closeModal
              }, _cache[3] || (_cache[3] = [
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
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ], -1)
              ]))
            ])
          ], 4),
          createBaseVNode("div", {
            class: "pdf-viewer-content",
            ref_key: "pdfContainer",
            ref: pdfContainer
          }, [
            !pdfLoadError.value ? (openBlock(), createElementBlock("div", _hoisted_10, [
              createBaseVNode("iframe", {
                ref_key: "pdfFrame",
                ref: pdfFrame,
                src: __props.pdfUrl,
                frameborder: "0",
                style: normalizeStyle({ transform: `scale(${zoomLevel.value})`, transformOrigin: "top center" }),
                allow: "fullscreen",
                onLoad: handleIframeLoad,
                onError: handleIframeError
              }, null, 44, _hoisted_11)
            ])) : (openBlock(), createElementBlock("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                _cache[6] || (_cache[6] = createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-16 w-16 mb-4 text-gray-400",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  })
                ], -1)),
                _cache[7] || (_cache[7] = createBaseVNode("h3", { class: "text-xl font-bold mb-2" }, "PDF không thể hiển thị trực tiếp", -1)),
                _cache[8] || (_cache[8] = createBaseVNode("p", { class: "mb-4" }, "Vui lòng sử dụng nút tải CV hoặc mở trong tab mới", -1)),
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("a", {
                    href: __props.pdfUrl,
                    download: "",
                    class: "inline-flex items-center px-4 py-2 rounded-md",
                    style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary, color: "white" })
                  }, _cache[4] || (_cache[4] = [
                    createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5 mr-2",
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
                    ], -1),
                    createTextVNode(" Tải CV ")
                  ]), 12, _hoisted_15),
                  createBaseVNode("a", {
                    href: __props.pdfUrl,
                    target: "_blank",
                    class: "inline-flex items-center px-4 py-2 border-2 rounded-md",
                    style: normalizeStyle({ "border-color": unref(colorStore).currentColor.primary, "color": unref(colorStore).currentColor.primary })
                  }, _cache[5] || (_cache[5] = [
                    createBaseVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5 mr-2",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      })
                    ], -1),
                    createTextVNode(" Mở trong tab mới ")
                  ]), 12, _hoisted_16)
                ])
              ])
            ]))
          ], 512)
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const PDFViewer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-90c7fd59"]]);
export {
  PDFViewer as default
};
//# sourceMappingURL=PDFViewer-CYBu1mhw.js.map

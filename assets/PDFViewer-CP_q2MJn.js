import { d as defineComponent, A as ref, K as computed, B as watch, L as onBeforeUnmount, b as createBlock, v as openBlock, w as withCtx, c as createElementBlock, e as createCommentVNode, y as createVNode, V as Transition, f as createBaseVNode, a as normalizeStyle, u as unref, g as createTextVNode, t as toDisplayString } from "./vendor-C9uPxl4s.js";
import { u as useColorStore, a as _export_sfc } from "./index-CHI_0rfl.js";
import "./vendor-toast-C0T2VqWD.js";
const _hoisted_1 = {
  key: 0,
  class: "pdf-viewer-modal"
};
const _hoisted_2 = { class: "pdf-viewer-container" };
const _hoisted_3 = { class: "xs:text-base text-xl font-bold flex items-center gap-2" };
const _hoisted_4 = { class: "flex items-center xs:gap-2 gap-4" };
const _hoisted_5 = { class: "zoom-controls flex items-center xs:gap-1 gap-2" };
const _hoisted_6 = { class: "zoom-level xs:text-xs" };
const _hoisted_7 = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "xs:h-5 xs:w-5 h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};
const _hoisted_8 = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
};
const _hoisted_9 = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M6 18L18 6M6 6l12 12"
};
const _hoisted_10 = ["href"];
const _hoisted_11 = {
  key: 0,
  class: "pdf-wrapper"
};
const _hoisted_12 = ["data"];
const _hoisted_13 = { class: "pdf-fallback" };
const _hoisted_14 = { class: "pdf-error-message" };
const _hoisted_15 = { class: "flex xs:flex-col sm:flex-row justify-center xs:gap-2 gap-4" };
const _hoisted_16 = ["href"];
const _hoisted_17 = ["href"];
const _hoisted_18 = ["src"];
const _hoisted_19 = {
  key: 1,
  class: "pdf-fallback"
};
const _hoisted_20 = { class: "pdf-error-message" };
const _hoisted_21 = { class: "flex xs:flex-col sm:flex-row justify-center xs:gap-2 gap-4" };
const _hoisted_22 = ["href"];
const _hoisted_23 = ["href"];
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
    const isXsScreen = computed(() => {
      return window.innerWidth < 640;
    });
    window.addEventListener("resize", () => {
    });
    const props = __props;
    const emit = __emit;
    const originalOverflow = ref(document.body.style.overflow);
    watch(
      () => props.isOpen,
      (isOpen) => {
        if (isOpen) {
          originalOverflow.value = document.body.style.overflow;
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = originalOverflow.value || "";
        }
      },
      { immediate: true }
    );
    onBeforeUnmount(() => {
      document.body.style.overflow = originalOverflow.value || "";
    });
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
    const resetZoom = () => {
      zoomLevel.value = 1;
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
      return openBlock(), createBlock(Transition, { name: "modal-fade" }, {
        default: withCtx(() => [
          __props.isOpen ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createVNode(Transition, { name: "modal-content" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_2, [
                  createBaseVNode("div", {
                    class: "pdf-viewer-header",
                    style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary })
                  }, [
                    createBaseVNode("h3", _hoisted_3, [
                      createTextVNode(toDisplayString(__props.title) + " ", 1),
                      _cache[0] || (_cache[0] = createBaseVNode("span", { class: "wave-hand xs:text-xl text-2xl" }, "👋", -1))
                    ]),
                    createBaseVNode("div", _hoisted_4, [
                      createBaseVNode("div", _hoisted_5, [
                        createBaseVNode("button", {
                          class: "zoom-button",
                          onClick: zoomOut,
                          title: "Zoom out"
                        }, _cache[1] || (_cache[1] = [
                          createBaseVNode("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "xs:h-5 xs:w-5 h-6 w-6",
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
                        createBaseVNode("span", _hoisted_6, toDisplayString(Math.round(zoomLevel.value * 100)) + "%", 1),
                        createBaseVNode("button", {
                          class: "zoom-button",
                          onClick: zoomIn,
                          title: "Zoom in"
                        }, _cache[2] || (_cache[2] = [
                          createBaseVNode("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "xs:h-5 xs:w-5 h-6 w-6",
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
                        class: "reset-zoom-button",
                        onClick: resetZoom,
                        title: "Reset zoom"
                      }, _cache[3] || (_cache[3] = [
                        createBaseVNode("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "xs:h-4 xs:w-4 h-5 w-5",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createBaseVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          })
                        ], -1)
                      ])),
                      createBaseVNode("button", {
                        class: "zoom-button",
                        onClick: toggleFullScreen,
                        title: "Fullscreen"
                      }, [
                        (openBlock(), createElementBlock("svg", _hoisted_7, [
                          !isFullScreen.value ? (openBlock(), createElementBlock("path", _hoisted_8)) : (openBlock(), createElementBlock("path", _hoisted_9))
                        ]))
                      ]),
                      createBaseVNode("a", {
                        href: __props.pdfUrl,
                        target: "_blank",
                        class: "download-button flex items-center gap-1 px-2 py-1 rounded-md bg-white/20 hover:bg-white/30 transition-colors xs:hidden",
                        title: "Open in new tab"
                      }, _cache[4] || (_cache[4] = [
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
                      ]), 8, _hoisted_10),
                      createBaseVNode("button", {
                        class: "close-button",
                        onClick: closeModal
                      }, _cache[5] || (_cache[5] = [
                        createBaseVNode("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "xs:h-5 xs:w-5 h-6 w-6",
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
                    !pdfLoadError.value ? (openBlock(), createElementBlock("div", _hoisted_11, [
                      isXsScreen.value ? (openBlock(), createElementBlock("object", {
                        key: 0,
                        data: __props.pdfUrl,
                        type: "application/pdf",
                        class: "pdf-object",
                        width: "100%",
                        height: "100%"
                      }, [
                        createBaseVNode("div", _hoisted_13, [
                          createBaseVNode("div", _hoisted_14, [
                            _cache[8] || (_cache[8] = createBaseVNode("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "xs:h-12 xs:w-12 h-16 w-16 mb-4 text-gray-400",
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
                            _cache[9] || (_cache[9] = createBaseVNode("h3", { class: "xs:text-lg text-xl font-bold mb-2" }, "PDF không thể hiển thị trực tiếp", -1)),
                            _cache[10] || (_cache[10] = createBaseVNode("p", { class: "mb-4 xs:text-sm" }, "Vui lòng sử dụng nút tải CV hoặc mở trong tab mới", -1)),
                            createBaseVNode("div", _hoisted_15, [
                              createBaseVNode("a", {
                                href: __props.pdfUrl,
                                download: "",
                                class: "inline-flex items-center xs:text-sm xs:px-3 px-4 py-2 rounded-md",
                                style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary, color: "white" })
                              }, _cache[6] || (_cache[6] = [
                                createBaseVNode("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "xs:h-4 xs:w-4 h-5 w-5 mr-2",
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
                              ]), 12, _hoisted_16),
                              createBaseVNode("a", {
                                href: __props.pdfUrl,
                                target: "_blank",
                                class: "inline-flex items-center xs:text-sm xs:px-3 px-4 py-2 border-2 rounded-md",
                                style: normalizeStyle({ "border-color": unref(colorStore).currentColor.primary, "color": unref(colorStore).currentColor.primary })
                              }, _cache[7] || (_cache[7] = [
                                createBaseVNode("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "xs:h-4 xs:w-4 h-5 w-5 mr-2",
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
                              ]), 12, _hoisted_17)
                            ])
                          ])
                        ])
                      ], 8, _hoisted_12)) : (openBlock(), createElementBlock("iframe", {
                        key: 1,
                        ref_key: "pdfFrame",
                        ref: pdfFrame,
                        src: __props.pdfUrl,
                        frameborder: "0",
                        style: normalizeStyle({ transform: `scale(${zoomLevel.value})`, transformOrigin: "top center" }),
                        allow: "fullscreen",
                        onLoad: handleIframeLoad,
                        onError: handleIframeError
                      }, null, 44, _hoisted_18))
                    ])) : (openBlock(), createElementBlock("div", _hoisted_19, [
                      createBaseVNode("div", _hoisted_20, [
                        _cache[13] || (_cache[13] = createBaseVNode("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "xs:h-12 xs:w-12 h-16 w-16 mb-4 text-gray-400",
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
                        _cache[14] || (_cache[14] = createBaseVNode("h3", { class: "xs:text-lg text-xl font-bold mb-2" }, "PDF không thể hiển thị trực tiếp", -1)),
                        _cache[15] || (_cache[15] = createBaseVNode("p", { class: "mb-4 xs:text-sm" }, "Vui lòng sử dụng nút tải CV hoặc mở trong tab mới", -1)),
                        createBaseVNode("div", _hoisted_21, [
                          createBaseVNode("a", {
                            href: __props.pdfUrl,
                            download: "",
                            class: "inline-flex items-center xs:text-sm xs:px-3 px-4 py-2 rounded-md",
                            style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary, color: "white" })
                          }, _cache[11] || (_cache[11] = [
                            createBaseVNode("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "xs:h-4 xs:w-4 h-5 w-5 mr-2",
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
                          ]), 12, _hoisted_22),
                          createBaseVNode("a", {
                            href: __props.pdfUrl,
                            target: "_blank",
                            class: "inline-flex items-center xs:text-sm xs:px-3 px-4 py-2 border-2 rounded-md",
                            style: normalizeStyle({ "border-color": unref(colorStore).currentColor.primary, "color": unref(colorStore).currentColor.primary })
                          }, _cache[12] || (_cache[12] = [
                            createBaseVNode("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "xs:h-4 xs:w-4 h-5 w-5 mr-2",
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
                          ]), 12, _hoisted_23)
                        ])
                      ])
                    ]))
                  ], 512)
                ])
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const PDFViewer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6a18847f"]]);
export {
  PDFViewer as default
};
//# sourceMappingURL=PDFViewer-CP_q2MJn.js.map

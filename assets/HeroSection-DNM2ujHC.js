const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PDFViewer-DntEMy9J.js","assets/vendor-1p1qY6MK.js","assets/color-2p_dXya-.js","assets/index-Dm69u2I2.js","assets/vendor-toast-BV7TAAOY.js","assets/vendor-toast-jG2HNJHr.css","assets/index-BBPSw9Ad.css","assets/PDFViewer-BqGuYXgc.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload, a as _export_sfc } from "./index-Dm69u2I2.js";
import { J as ref, H as onMounted, K as onBeforeUnmount, E as useI18n, G as computed, d as defineComponent, c as createElementBlock, v as openBlock, f as createBaseVNode, y as createVNode, a as normalizeStyle, u as unref, t as toDisplayString, F as Fragment, j as renderList, n as normalizeClass, e as createCommentVNode, g as createTextVNode, z as defineAsyncComponent } from "./vendor-1p1qY6MK.js";
import { u as useProfileStore } from "./profile-DcWeGfHE.js";
import { u as useColorStore } from "./color-2p_dXya-.js";
import "./vendor-toast-BV7TAAOY.js";
function useTypingEffect(text, options = {}) {
  const {
    typingSpeed = 150,
    deletingSpeed = 100,
    delayAfterComplete = 2e3,
    delayAfterDelete = 500,
    startDelay = 1e3,
    loop = true
  } = options;
  const displayedText = ref("");
  const isDeleting = ref(false);
  const loopNum = ref(0);
  const currentSpeed = ref(typingSpeed);
  let typingTimer = null;
  const typeEffect = () => {
    const fullText = text;
    if (isDeleting.value) {
      displayedText.value = fullText.substring(0, displayedText.value.length - 1);
      currentSpeed.value = deletingSpeed;
    } else {
      displayedText.value = fullText.substring(0, displayedText.value.length + 1);
      currentSpeed.value = typingSpeed;
    }
    if (!isDeleting.value && displayedText.value === fullText) {
      currentSpeed.value = delayAfterComplete;
      isDeleting.value = true;
    } else if (isDeleting.value && displayedText.value === "") {
      isDeleting.value = false;
      if (loop) {
        loopNum.value++;
      }
      currentSpeed.value = delayAfterDelete;
    }
    if (!loop && isDeleting.value && displayedText.value === "") {
      return;
    }
    typingTimer = window.setTimeout(typeEffect, currentSpeed.value);
  };
  const startTyping = () => {
    if (typingTimer) {
      clearTimeout(typingTimer);
    }
    typingTimer = window.setTimeout(typeEffect, startDelay);
  };
  const stopTyping = () => {
    if (typingTimer) {
      clearTimeout(typingTimer);
      typingTimer = null;
    }
  };
  onMounted(() => {
    startTyping();
  });
  onBeforeUnmount(() => {
    stopTyping();
  });
  return {
    displayedText,
    isDeleting,
    loopNum,
    startTyping,
    stopTyping
  };
}
function useContactInfo() {
  const { t } = useI18n();
  const phoneNumber = "0982743860";
  const email = "vanminhtruong95@gmail.com";
  const githubUrl = "https://github.com/vanminhtruong/Team03-cy.git";
  const githubUsername = "vanminhtruong";
  const getPdfPath = () => {
    const isGitHubPages = window.location.href.includes("/web-cv-ts/");
    return isGitHubPages ? "/web-cv-ts/TruongVanMinh-CV.pdf" : "/TruongVanMinh-CV.pdf";
  };
  const contactItems = computed(() => [
    {
      id: "phone",
      icon: "phone",
      label: t("about.phone"),
      value: phoneNumber,
      svgPath: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    },
    {
      id: "email",
      icon: "email",
      label: t("about.email"),
      value: email,
      svgPath: "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
    },
    {
      id: "github",
      icon: "github",
      label: "GitHub",
      value: githubUsername,
      url: githubUrl,
      svgPath: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    },
    {
      id: "address",
      icon: "address",
      label: t("about.address"),
      value: t("about.addressValue"),
      svgPath: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    }
  ]);
  const actionButtons = computed(() => [
    {
      id: "contact",
      label: t("home.contactMe"),
      href: "#contact",
      isPrimary: true,
      icon: null
    },
    {
      id: "download-cv",
      label: t("home.downloadCV"),
      href: getPdfPath(),
      isPrimary: false,
      icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    }
  ]);
  return {
    phoneNumber,
    email,
    githubUrl,
    githubUsername,
    contactItems,
    actionButtons,
    getPdfPath
  };
}
const _hoisted_1 = { class: "wrapper flex flex-col lg:flex-col xl:flex-row items-center justify-between mb-16 gap-4 lg:gap-8" };
const _hoisted_2 = { class: "avatar xl:w-1/3 flex justify-center transform transition-all duration-500 hover:scale-105 mt-8 lg:mt-0" };
const _hoisted_3 = { class: "relative w-64 h-64 lg:w-80 lg:h-80" };
const _hoisted_4 = { class: "tablet:w-full lg:w-full xl:w-2/3 p-4 transform transition-all duration-300 hover:-translate-y-1" };
const _hoisted_5 = { class: "text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4" };
const _hoisted_6 = { class: "block" };
const _hoisted_7 = { class: "typing-effect" };
const _hoisted_8 = { class: "text-2xl text-gray-700 dark:text-gray-300 mb-6 flex items-center" };
const _hoisted_9 = { class: "briefcase-container mr-2" };
const _hoisted_10 = ["title"];
const _hoisted_11 = ["d"];
const _hoisted_12 = ["d"];
const _hoisted_13 = ["d"];
const _hoisted_14 = ["d"];
const _hoisted_15 = { class: "flex-1 min-w-0" };
const _hoisted_16 = { class: "text-sm font-medium text-gray-500" };
const _hoisted_17 = {
  key: 0,
  class: "font-medium truncate"
};
const _hoisted_18 = ["href"];
const _hoisted_19 = { class: "flex flex-wrap gap-3" };
const _hoisted_20 = ["href"];
const _hoisted_21 = ["href"];
const _hoisted_22 = ["d"];
const fullName = "Trương Văn Minh";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  setup(__props) {
    const PDFViewer = defineAsyncComponent(() => __vitePreload(() => import("./PDFViewer-DntEMy9J.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7]) : void 0));
    useProfileStore();
    const colorStore = useColorStore();
    const { t } = useI18n();
    const { displayedText: displayedName } = useTypingEffect(fullName, {
      typingSpeed: 150,
      deletingSpeed: 100,
      delayAfterComplete: 2e3,
      delayAfterDelete: 500,
      startDelay: 1e3,
      loop: true
    });
    const { contactItems, actionButtons, getPdfPath } = useContactInfo();
    const updatedActionButtons = computed(() => {
      return actionButtons.value.map((button) => {
        if (button.id === "download-cv") {
          return { ...button, href: getPdfPath() };
        }
        return button;
      });
    });
    const primaryButtons = computed(() => updatedActionButtons.value.filter((button) => button.isPrimary));
    const secondaryButtons = computed(() => updatedActionButtons.value.filter((button) => !button.isPrimary));
    const isPdfViewerOpen = ref(false);
    const openPdfViewer = () => {
      isPdfViewerOpen.value = true;
    };
    const closePdfViewer = () => {
      isPdfViewerOpen.value = false;
    };
    const pdfPath = computed(() => {
      const isGitHubPages = window.location.href.includes("/web-cv-ts/");
      return isGitHubPages ? "/web-cv-ts/TruongVanMinh-CV.pdf" : "/TruongVanMinh-CV.pdf";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", {
                class: "absolute inset-0 rounded-full shadow-lg",
                style: normalizeStyle({ "background-image": `linear-gradient(to bottom right, ${unref(colorStore).currentColor.primary}20, ${unref(colorStore).currentColor.secondary}20)` })
              }, null, 4),
              createBaseVNode("div", {
                class: "absolute inset-4 rounded-full shadow-inner",
                style: normalizeStyle({ "background-image": `linear-gradient(to top right, ${unref(colorStore).currentColor.primary}30, ${unref(colorStore).currentColor.secondary}30)` })
              }, null, 4),
              createBaseVNode("div", {
                class: "absolute inset-8 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl",
                style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary })
              }, toDisplayString(unref(t)("home.avatar")), 5)
            ])
          ]),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("h1", _hoisted_5, [
              createBaseVNode("span", _hoisted_6, toDisplayString(unref(t)("home.greeting")), 1),
              createBaseVNode("span", {
                class: "block transform transition-all duration-300 hover:scale-105",
                style: normalizeStyle({ color: unref(colorStore).currentColor.primary })
              }, [
                createBaseVNode("span", _hoisted_7, toDisplayString(unref(displayedName)), 1),
                createBaseVNode("span", {
                  class: "typing-cursor",
                  style: normalizeStyle({ color: unref(colorStore).currentColor.primary })
                }, "|", 4)
              ], 4)
            ]),
            createBaseVNode("h2", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, [
                (openBlock(), createElementBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-6 w-6 text-gray-700 dark:text-white briefcase-animate",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  style: normalizeStyle({ "color": unref(colorStore).currentColor.primary })
                }, _cache[0] || (_cache[0] = [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  }, null, -1)
                ]), 4))
              ]),
              createBaseVNode("span", null, toDisplayString(unref(t)("home.role")), 1),
              createBaseVNode("div", {
                class: "exclamation-mark ml-2 cursor-pointer",
                onClick: openPdfViewer,
                title: unref(t)("home.viewCV")
              }, [
                (openBlock(), createElementBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-5 w-5 exclamation-animate",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                }, _cache[1] || (_cache[1] = [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  }, null, -1)
                ]), 4))
              ], 8, _hoisted_10)
            ]),
            createBaseVNode("div", {
              class: "grid grid-cols-1 xl:w-[630px] sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 mb-8 bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-xl shadow-md border-l-4 groups",
              style: normalizeStyle({ "border-color": unref(colorStore).currentColor.primary })
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(contactItems), (item) => {
                return openBlock(), createElementBlock("div", {
                  key: item.id,
                  class: "flex items-center group"
                }, [
                  createBaseVNode("div", {
                    class: "rounded-lg flex items-center justify-center mr-3 transition-colors group-hover:bg-opacity-50 icon-container h-10 w-10",
                    style: normalizeStyle({ "background-color": unref(colorStore).currentColor.secondary + "30", "--hover-bg": unref(colorStore).currentColor.secondary + "50" })
                  }, [
                    item.id === "email" ? (openBlock(), createElementBlock("svg", {
                      key: 0,
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6 email-animate",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                    }, _cache[2] || (_cache[2] = [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      }, null, -1)
                    ]), 4)) : item.id === "phone" ? (openBlock(), createElementBlock("svg", {
                      key: 1,
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6 phone-animate",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                    }, [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: item.svgPath
                      }, null, 8, _hoisted_11)
                    ], 4)) : item.id === "github" ? (openBlock(), createElementBlock("svg", {
                      key: 2,
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6 github-animate",
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                    }, [
                      createBaseVNode("path", {
                        d: item.svgPath
                      }, null, 8, _hoisted_12)
                    ], 4)) : item.id === "address" ? (openBlock(), createElementBlock("svg", {
                      key: 3,
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6 address-animate",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                    }, [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: item.svgPath
                      }, null, 8, _hoisted_13)
                    ], 4)) : (openBlock(), createElementBlock("svg", {
                      key: 4,
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-6 w-6 icon-animate",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                    }, [
                      createBaseVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: item.svgPath
                      }, null, 8, _hoisted_14)
                    ], 4))
                  ], 4),
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("div", _hoisted_16, toDisplayString(item.label), 1),
                    !item.url ? (openBlock(), createElementBlock("div", _hoisted_17, toDisplayString(item.value), 1)) : (openBlock(), createElementBlock("a", {
                      key: 1,
                      href: item.url,
                      class: normalizeClass(["font-medium transition-colors", { "hover:opacity-80": true }]),
                      style: normalizeStyle({ color: unref(colorStore).currentColor.primary })
                    }, "github.com/" + toDisplayString(item.value), 13, _hoisted_18))
                  ])
                ]);
              }), 128))
            ], 4),
            createBaseVNode("div", _hoisted_19, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(primaryButtons.value, (button) => {
                return openBlock(), createElementBlock("a", {
                  key: button.id,
                  href: button.href,
                  class: normalizeClass(["inline-flex items-center px-6 py-3 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg", { "hover:opacity-90": true }]),
                  style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary })
                }, toDisplayString(button.label), 13, _hoisted_20);
              }), 128)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(secondaryButtons.value, (button) => {
                return openBlock(), createElementBlock("a", {
                  key: button.id,
                  href: button.href,
                  download: "",
                  class: normalizeClass(["inline-flex items-center px-6 py-3 border-2 font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg ml-4", { "hover:bg-gray-50 dark:hover:bg-gray-800": true }]),
                  style: normalizeStyle({ "border-color": unref(colorStore).currentColor.secondary, "color": unref(colorStore).currentColor.secondary })
                }, [
                  button.icon ? (openBlock(), createElementBlock("svg", {
                    key: 0,
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-5 w-5 mr-2 download-animate",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    style: normalizeStyle({ "color": unref(colorStore).currentColor.secondary })
                  }, [
                    createBaseVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: button.icon
                    }, null, 8, _hoisted_22)
                  ], 4)) : createCommentVNode("", true),
                  createTextVNode(" " + toDisplayString(button.label), 1)
                ], 12, _hoisted_21);
              }), 128))
            ])
          ])
        ]),
        createVNode(unref(PDFViewer), {
          "is-open": isPdfViewerOpen.value,
          "pdf-url": pdfPath.value,
          title: unref(t)("home.viewCV"),
          onClose: closePdfViewer
        }, null, 8, ["is-open", "pdf-url", "title"])
      ]);
    };
  }
});
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-947b5879"]]);
export {
  HeroSection as default
};
//# sourceMappingURL=HeroSection-DNM2ujHC.js.map

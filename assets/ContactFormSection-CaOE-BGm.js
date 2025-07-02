import { I as defineStore, d as defineComponent, E as useI18n, L as reactive, J as ref, c as createElementBlock, v as openBlock, f as createBaseVNode, a as normalizeStyle, u as unref, t as toDisplayString, M as withDirectives, N as vModelText, e as createCommentVNode, g as createTextVNode } from "./vendor-1p1qY6MK.js";
import { u as useColorStore } from "./color-2p_dXya-.js";
import { u as useToast } from "./vendor-toast-BV7TAAOY.js";
import { u as useAssetPath } from "./ContactView-C6Q7FrNz.js";
import "./index-DC-5oGik.js";
const useToastStore = defineStore("toast", () => {
  const toast = useToast();
  const colorStore = useColorStore();
  const getCommonOptions = () => {
    return {
      position: "top-right",
      toastClassName: "custom-toast",
      bodyClassName: "custom-toast-body",
      closeButton: false,
      icon: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      rtl: false,
      style: {
        "--color-primary": colorStore.currentColor.primary,
        "--color-secondary": colorStore.currentColor.secondary,
        "--color-accent": colorStore.currentColor.accent
      }
    };
  };
  function showSuccess(message) {
    const options = getCommonOptions();
    options.timeout = 3e3;
    toast.success(message, options);
  }
  function showError(message) {
    const options = getCommonOptions();
    options.timeout = 4e3;
    toast.error(message, options);
  }
  function showInfo(message) {
    const options = getCommonOptions();
    options.timeout = 3e3;
    toast.info(message, options);
  }
  function showWarning(message) {
    const options = getCommonOptions();
    options.timeout = 3500;
    toast.warning(message, options);
  }
  return {
    showSuccess,
    showError,
    showInfo,
    showWarning
  };
});
const _hoisted_1 = { class: "flex items-center mb-6" };
const _hoisted_2 = { class: "text-2xl font-semibold text-gray-900 dark:text-white" };
const _hoisted_3 = { class: "group" };
const _hoisted_4 = {
  for: "name",
  class: "block text-sm font-medium text-gray-700 dark:text-white mb-1 transition-colors duration-200"
};
const _hoisted_5 = { class: "relative" };
const _hoisted_6 = ["placeholder"];
const _hoisted_7 = { class: "group" };
const _hoisted_8 = {
  for: "email",
  class: "block text-sm font-medium text-gray-700 dark:text-white mb-1 transition-colors duration-200"
};
const _hoisted_9 = { class: "relative" };
const _hoisted_10 = ["placeholder"];
const _hoisted_11 = { class: "group" };
const _hoisted_12 = {
  for: "subject",
  class: "block text-sm font-medium text-gray-700 dark:text-white mb-1 transition-colors duration-200"
};
const _hoisted_13 = { class: "relative" };
const _hoisted_14 = ["placeholder"];
const _hoisted_15 = { class: "group" };
const _hoisted_16 = {
  for: "message",
  class: "block text-sm font-medium text-gray-700 dark:text-white mb-1 transition-colors duration-200"
};
const _hoisted_17 = { class: "relative" };
const _hoisted_18 = ["placeholder"];
const _hoisted_19 = ["disabled"];
const _hoisted_20 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 mr-2",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};
const _hoisted_21 = {
  key: 1,
  class: "animate-spin h-5 w-5 mr-2",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContactFormSection",
  setup(__props) {
    const colorStore = useColorStore();
    const toastStore = useToastStore();
    const { t } = useI18n();
    useAssetPath();
    const formData = reactive({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    const isSubmitting = ref(false);
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
    const validateForm = () => {
      if (!formData.name.trim()) {
        toastStore.showError(t("contact.errors.nameRequired"));
        return false;
      }
      if (!formData.email.trim()) {
        toastStore.showError(t("contact.errors.emailRequired"));
        return false;
      } else if (!validateEmail(formData.email)) {
        toastStore.showError(t("contact.errors.emailInvalid"));
        return false;
      }
      if (!formData.subject.trim()) {
        toastStore.showError(t("contact.errors.subjectRequired"));
        return false;
      }
      if (!formData.message.trim()) {
        toastStore.showError(t("contact.errors.messageRequired"));
        return false;
      } else if (formData.message.trim().length < 10) {
        toastStore.showError(t("contact.errors.messageTooShort"));
        return false;
      }
      return true;
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) {
        return;
      }
      isSubmitting.value = true;
      try {
        await new Promise((resolve) => setTimeout(resolve, 1e3));
        toastStore.showSuccess(t("contact.success"));
        formData.name = "";
        formData.email = "";
        formData.subject = "";
        formData.message = "";
      } catch (error) {
        toastStore.showError(t("contact.error"));
      } finally {
        isSubmitting.value = false;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-1 border-r-4 h-full flex flex-col",
        style: normalizeStyle({ "border-color": unref(colorStore).currentColor.primary })
      }, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", {
            class: "h-10 w-10 rounded-lg flex items-center justify-center mr-3",
            style: normalizeStyle({ "background-image": `linear-gradient(to right, ${unref(colorStore).currentColor.primary}, ${unref(colorStore).currentColor.secondary})` })
          }, _cache[4] || (_cache[4] = [
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
                d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              })
            ], -1)
          ]), 4),
          createBaseVNode("h3", _hoisted_2, toDisplayString(unref(t)("contact.send")), 1)
        ]),
        createBaseVNode("form", {
          onSubmit: handleSubmit,
          class: "space-y-6 flex-grow"
        }, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("label", _hoisted_4, toDisplayString(unref(t)("contact.name")), 1),
            createBaseVNode("div", _hoisted_5, [
              _cache[5] || (_cache[5] = createBaseVNode("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-5 w-5 text-gray-500 dark:text-white transition-colors duration-200",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  })
                ])
              ], -1)),
              withDirectives(createBaseVNode("input", {
                type: "text",
                id: "name",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.name = $event),
                class: "w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 placeholder-gray-400 dark:placeholder-gray-300 transition-all duration-200",
                style: normalizeStyle({ "--tw-ring-color": unref(colorStore).currentColor.primary, "border-color": unref(colorStore).currentColor.primary }),
                placeholder: unref(t)("contact.namePlaceholder")
              }, null, 12, _hoisted_6), [
                [vModelText, formData.name]
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("label", _hoisted_8, toDisplayString(unref(t)("contact.email")), 1),
            createBaseVNode("div", _hoisted_9, [
              _cache[6] || (_cache[6] = createBaseVNode("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-5 w-5 text-gray-500 dark:text-white transition-colors duration-200",
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
                ])
              ], -1)),
              withDirectives(createBaseVNode("input", {
                type: "email",
                id: "email",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.email = $event),
                class: "w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 placeholder-gray-400 dark:placeholder-gray-300 transition-all duration-200",
                style: normalizeStyle({ "--tw-ring-color": unref(colorStore).currentColor.primary, "border-color": unref(colorStore).currentColor.primary }),
                placeholder: unref(t)("contact.emailPlaceholder")
              }, null, 12, _hoisted_10), [
                [vModelText, formData.email]
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("label", _hoisted_12, toDisplayString(unref(t)("contact.subject")), 1),
            createBaseVNode("div", _hoisted_13, [
              _cache[7] || (_cache[7] = createBaseVNode("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-5 w-5 text-gray-500 dark:text-white transition-colors duration-200",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                  })
                ])
              ], -1)),
              withDirectives(createBaseVNode("input", {
                type: "text",
                id: "subject",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.subject = $event),
                class: "w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 placeholder-gray-400 dark:placeholder-gray-300 transition-all duration-200",
                style: normalizeStyle({ "--tw-ring-color": unref(colorStore).currentColor.primary, "border-color": unref(colorStore).currentColor.primary }),
                placeholder: unref(t)("contact.subjectPlaceholder")
              }, null, 12, _hoisted_14), [
                [vModelText, formData.subject]
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("label", _hoisted_16, toDisplayString(unref(t)("contact.message")), 1),
            createBaseVNode("div", _hoisted_17, [
              _cache[8] || (_cache[8] = createBaseVNode("div", { class: "absolute top-3 left-3 flex items-start pointer-events-none" }, [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-5 w-5 text-gray-500 dark:text-white transition-colors duration-200",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  })
                ])
              ], -1)),
              withDirectives(createBaseVNode("textarea", {
                id: "message",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.message = $event),
                rows: "5",
                class: "w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 placeholder-gray-400 dark:placeholder-gray-300 transition-all duration-200",
                style: normalizeStyle({ "--tw-ring-color": unref(colorStore).currentColor.primary, "border-color": unref(colorStore).currentColor.primary }),
                placeholder: unref(t)("contact.messagePlaceholder")
              }, null, 12, _hoisted_18), [
                [vModelText, formData.message]
              ])
            ])
          ]),
          createBaseVNode("div", null, [
            createBaseVNode("button", {
              type: "submit",
              class: "w-full text-white font-medium py-3 px-4 rounded-lg shadow-md hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center",
              style: normalizeStyle({ "background-color": unref(colorStore).currentColor.primary, "--tw-ring-color": unref(colorStore).currentColor.primary }),
              disabled: isSubmitting.value
            }, [
              !isSubmitting.value ? (openBlock(), createElementBlock("svg", _hoisted_20, _cache[9] || (_cache[9] = [
                createBaseVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                }, null, -1)
              ]))) : createCommentVNode("", true),
              isSubmitting.value ? (openBlock(), createElementBlock("svg", _hoisted_21, _cache[10] || (_cache[10] = [
                createBaseVNode("circle", {
                  class: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4"
                }, null, -1),
                createBaseVNode("path", {
                  class: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }, null, -1)
              ]))) : createCommentVNode("", true),
              createTextVNode(" " + toDisplayString(isSubmitting.value ? unref(t)("contact.sending") : unref(t)("contact.send")), 1)
            ], 12, _hoisted_19)
          ])
        ], 32)
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=ContactFormSection-CaOE-BGm.js.map

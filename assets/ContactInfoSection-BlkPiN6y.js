import { u as useColorStore } from "./color-2p_dXya-.js";
import { d as defineComponent, E as useI18n, c as createElementBlock, v as openBlock, a as normalizeStyle, u as unref } from "./vendor-1p1qY6MK.js";
import { u as useAssetPath } from "./ContactView-DI2pGHz1.js";
import "./index-OdYxyq9O.js";
import "./vendor-toast-BV7TAAOY.js";
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
      }, null, 4);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=ContactInfoSection-BlkPiN6y.js.map

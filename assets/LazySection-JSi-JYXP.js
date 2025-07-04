import { J as ref, H as onMounted, K as onBeforeUnmount, d as defineComponent, c as createElementBlock, v as openBlock, x as renderSlot, n as normalizeClass, u as unref } from "./vendor-1p1qY6MK.js";
import { a as _export_sfc } from "./index-CmMRoaIa.js";
import "./vendor-toast-BV7TAAOY.js";
function useLazySection(props) {
  const lazySection = ref(null);
  const isVisible = ref(false);
  let observer = null;
  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible.value = entry.isIntersecting;
        });
      },
      {
        threshold: props.threshold,
        rootMargin: props.rootMargin
      }
    );
    if (lazySection.value) {
      observer.observe(lazySection.value);
    }
  });
  onBeforeUnmount(() => {
    if (observer && lazySection.value) {
      observer.unobserve(lazySection.value);
      observer.disconnect();
    }
  });
  return {
    lazySection,
    isVisible
  };
}
const __default__ = {
  name: "LazySection"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    threshold: {
      type: [Number, String],
      default: 0.1,
      validator: (value) => {
        const numValue = typeof value === "string" ? parseFloat(value) : value;
        return !isNaN(numValue) && numValue >= 0 && numValue <= 1;
      }
    },
    rootMargin: {
      type: String,
      default: "0px"
    }
  },
  setup(__props) {
    const props = __props;
    const parsedProps = {
      threshold: typeof props.threshold === "string" ? parseFloat(props.threshold) : props.threshold,
      rootMargin: props.rootMargin
    };
    const { lazySection, isVisible } = useLazySection(parsedProps);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "lazySection",
        ref: lazySection,
        class: normalizeClass(["lazy-section", { "lazy-visible": unref(isVisible), "lazy-hidden": !unref(isVisible) }])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});
const LazySection = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9c8340b5"]]);
export {
  LazySection as default
};
//# sourceMappingURL=LazySection-JSi-JYXP.js.map

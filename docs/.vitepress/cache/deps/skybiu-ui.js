import {
  computed,
  createBaseVNode,
  createElementBlock,
  normalizeClass,
  openBlock,
  renderSlot
} from "./chunk-ODOPCOSX.js";

// node_modules/skybiu-ui/dist/skybiu-ui.mjs
var m = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
};
var v = ["disabled"];
var y = {
  name: "tButton"
};
var g = Object.assign(y, {
  props: {
    type: {
      type: String,
      default: "default"
      // 默认值 default
    },
    disabled: Boolean,
    round: Boolean,
    src: String,
    size: {
      size: String,
      default: ""
    },
    circle: Boolean
  },
  setup(e) {
    const t = e, n = computed(() => [
      "t-button",
      `t-button-${t.type}`,
      t.disabled ? "t-button-disabled" : "",
      t.round ? "t-button-round" : "",
      t.circle ? "circle" : "",
      `${t.size}`
    ]);
    return (l, o) => (openBlock(), createElementBlock("div", null, [
      createBaseVNode("button", {
        class: normalizeClass(n.value),
        disabled: e.disabled,
        onClick: o[0] || (o[0] = (...d) => l.clickEvent && l.clickEvent(...d))
      }, [
        renderSlot(l.$slots, "default", {}, void 0, true)
      ], 10, v)
    ]));
  }
});
var a = m(g, [["__scopeId", "data-v-5cf21340"]]);
a.install = (e) => {
  e.component(a.name, a);
};
var B = ["type", "value", "placeholder", "disabled"];
var S = {
  name: "tInput"
};
var k = Object.assign(S, {
  props: {
    modelValue: String | Number,
    placeholder: String,
    disabled: Boolean,
    clean: Boolean,
    type: String
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, l = (r) => {
      t("update:modelValue", r.target.value);
    }, o = computed(() => [
      "t-input",
      {
        "t-input-disabled": n.disabled
      }
    ]), d = computed(() => [
      "iconfont",
      {
        clean: n.clean && n.modelValue
      }
    ]), b = () => {
      t("update:modelValue", "");
    };
    return (r, V) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(o.value)
    }, [
      createBaseVNode("input", {
        type: e.type,
        value: e.modelValue,
        onInput: l,
        placeholder: e.placeholder,
        disabled: e.disabled
      }, null, 40, B),
      createBaseVNode("i", {
        class: normalizeClass(d.value),
        onClick: b
      }, "", 2)
    ], 2));
  }
});
var s = m(k, [["__scopeId", "data-v-df934f1a"]]);
s.install = (e) => {
  e.component(s.name, s);
};
var I = (e) => {
  e.use(a), e.use(s);
};
var $ = {
  install: I
};
export {
  $ as default,
  a as tButton,
  s as tInput
};
//# sourceMappingURL=skybiu-ui.js.map

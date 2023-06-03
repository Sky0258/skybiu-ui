import {
  computed,
  createBaseVNode,
  createElementBlock,
  normalizeClass,
  openBlock,
  renderSlot
} from "./chunk-ODOPCOSX.js";

// node_modules/skybiu-ui/dist/skybiu-ui.mjs
var m = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, l] of e)
    o[n] = l;
  return o;
};
var f = ["disabled"];
var b = {
  name: "tButton"
};
var v = Object.assign(b, {
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
  setup(t) {
    const e = t, o = computed(() => [
      "t-button",
      `t-button-${e.type}`,
      e.disabled ? "t-button-disabled" : "",
      e.round ? "t-button-round" : "",
      e.circle ? "circle" : "",
      `${e.size}`
    ]);
    return (n, l) => (openBlock(), createElementBlock("div", null, [
      createBaseVNode("button", {
        class: normalizeClass(o.value),
        disabled: t.disabled,
        onClick: l[0] || (l[0] = (...r) => n.clickEvent && n.clickEvent(...r))
      }, [
        renderSlot(n.$slots, "default", {}, void 0, true)
      ], 10, f)
    ]));
  }
});
var s = m(v, [["__scopeId", "data-v-5cf21340"]]);
s.install = (t) => {
  t.component(s.name, s);
};
var g = ["value"];
var y = {
  name: "tInput"
};
var u = Object.assign(y, {
  props: {
    modelValue: String | Number
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = (n) => {
      e("update:modelValue", n.target.value);
    };
    return (n, l) => (openBlock(), createElementBlock("div", null, [
      createBaseVNode("input", {
        type: "text",
        value: t.modelValue,
        onInput: o
      }, null, 40, g)
    ]));
  }
});
u.install = (t) => {
  t.component(u.name, u);
};
var B = (t) => {
  t.use(s), t.use(u);
};
var $ = {
  install: B
};
export {
  $ as default,
  s as tButton,
  u as tInput
};
//# sourceMappingURL=skybiu-ui.js.map

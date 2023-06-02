import {
  computed,
  createBaseVNode,
  createElementBlock,
  normalizeClass,
  openBlock,
  renderSlot,
  unref
} from "./chunk-ODOPCOSX.js";

// node_modules/skybiu-ui/dist/skybiu-ui.js
var m = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, a] of o)
    e[n] = a;
  return e;
};
var f = {
  name: "tButton"
};
var v = Object.assign(f, {
  props: {
    type: {
      type: String,
      default: "default"
      // 默认值 default
    }
  },
  setup(t) {
    const o = t, e = computed(() => [
      "t-button",
      `t-button-${o.type}`
    ]);
    return (n, a) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(unref(e))
    }, [
      createBaseVNode("button", null, [
        renderSlot(n.$slots, "default", {}, void 0, true)
      ])
    ], 2));
  }
});
var s = m(v, [["__scopeId", "data-v-a155e9f1"]]);
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
  setup(t, { emit: o }) {
    const e = (n) => {
      o("update:modelValue", n.target.value);
    };
    return (n, a) => (openBlock(), createElementBlock("div", null, [
      createBaseVNode("input", {
        type: "text",
        value: t.modelValue,
        onInput: e
      }, null, 40, g)
    ]));
  }
});
u.install = (t) => {
  t.component(u.name, u);
};
var b = (t) => {
  t.use(s), t.use(u);
};
var I = {
  install: b
};
export {
  I as default,
  s as tButton,
  u as tInput
};
//# sourceMappingURL=skybiu-ui.js.map

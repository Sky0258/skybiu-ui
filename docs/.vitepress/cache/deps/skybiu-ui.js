import {
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  normalizeClass,
  openBlock,
  popScopeId,
  pushScopeId,
  renderSlot,
  toDisplayString
} from "./chunk-ODOPCOSX.js";

// node_modules/skybiu-ui/dist/skybiu-ui.mjs
var m = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
};
var B = ["disabled"];
var $ = {
  name: "tButton"
};
var k = Object.assign($, {
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
    return (s, o) => (openBlock(), createElementBlock("div", null, [
      createBaseVNode("button", {
        class: normalizeClass(n.value),
        disabled: e.disabled,
        onClick: o[0] || (o[0] = (...l) => s.clickEvent && s.clickEvent(...l))
      }, [
        renderSlot(s.$slots, "default", {}, void 0, true)
      ], 10, B)
    ]));
  }
});
var i = m(k, [["__scopeId", "data-v-5cf21340"]]);
i.install = (e) => {
  e.component(i.name, i);
};
var C = ["type", "value", "placeholder", "disabled"];
var V = {
  name: "tInput"
};
var x = Object.assign(V, {
  props: {
    modelValue: String | Number,
    placeholder: String,
    disabled: Boolean,
    clean: Boolean,
    type: String
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = (v) => {
      t("update:modelValue", v.target.value);
    }, o = computed(() => [
      "t-input",
      {
        "t-input-disabled": n.disabled
      }
    ]), l = computed(() => [
      "iconfont",
      {
        clean: n.clean && n.modelValue
      }
    ]), b = () => {
      t("update:modelValue", "");
    };
    return (v, T) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(o.value)
    }, [
      createBaseVNode("input", {
        type: e.type,
        value: e.modelValue,
        onInput: s,
        placeholder: e.placeholder,
        disabled: e.disabled
      }, null, 40, C),
      createBaseVNode("i", {
        class: normalizeClass(l.value),
        onClick: b
      }, "", 2)
    ], 2));
  }
});
var u = m(x, [["__scopeId", "data-v-34c7e898"]]);
u.install = (e) => {
  e.component(u.name, u);
};
var w = (e) => (pushScopeId("data-v-bce6ec96"), e = e(), popScopeId(), e);
var z = { class: "message-base" };
var E = ["type", "title"];
var N = { key: 0 };
var O = w(() => createBaseVNode("br", null, null, -1));
var j = {
  name: "tMessage"
};
var D = Object.assign(j, {
  props: {
    type: String,
    round: Boolean,
    clean: Boolean,
    title: String,
    show: {
      show: String,
      default: true
    }
  },
  setup(e) {
    const t = e, n = computed(() => [
      "t-message",
      "animate__animated animate__fadeInDown",
      t.type,
      {
        round: t.round
      }
    ]), s = computed(() => [
      "iconfont",
      {
        clean: t.clean
      },
      {
        title: t.title
      }
    ]), o = () => {
      const l = document.querySelector(".message-base");
      l.style.display = "none";
    };
    return (l, b) => (openBlock(), createElementBlock("div", z, [
      createBaseVNode("div", {
        class: normalizeClass(n.value),
        type: e.type,
        title: e.title
      }, [
        t.title ? (openBlock(), createElementBlock("span", N, [
          createTextVNode(toDisplayString(t.title), 1),
          O
        ])) : createCommentVNode("", true),
        renderSlot(l.$slots, "default", {}, void 0, true),
        createBaseVNode("i", {
          class: normalizeClass(s.value),
          onClick: o
        }, "", 2)
      ], 10, E)
    ]));
  }
});
var r = m(D, [["__scopeId", "data-v-bce6ec96"]]);
r.install = (e) => {
  e.component(r.name, r);
};
var M = (e) => {
  e.use(i), e.use(u), e.use(r);
};
var U = {
  install: M
};
export {
  U as default,
  i as tButton,
  u as tInput,
  r as tMessage
};
//# sourceMappingURL=skybiu-ui.js.map

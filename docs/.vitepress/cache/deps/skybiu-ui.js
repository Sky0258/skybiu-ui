import {
  Fragment,
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  normalizeClass,
  openBlock,
  popScopeId,
  pushScopeId,
  ref,
  renderList,
  renderSlot,
  resolveComponent,
  toDisplayString,
  withCtx
} from "./chunk-ODOPCOSX.js";

// node_modules/skybiu-ui/dist/skybiu-ui.mjs
var $ = (e, n) => {
  const s = e.__vccOpts || e;
  for (const [l, a] of n)
    s[l] = a;
  return s;
};
var E = ["disabled"];
var A = {
  name: "tButton"
};
var M = Object.assign(A, {
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
    const n = e, s = computed(() => [
      "t-button",
      `t-button-${n.type}`,
      n.disabled ? "t-button-disabled" : "",
      n.round ? "t-button-round" : "",
      n.circle ? "circle" : "",
      `${n.size}`
    ]);
    return (l, a) => (openBlock(), createElementBlock("div", null, [
      createBaseVNode("button", {
        class: normalizeClass(s.value),
        disabled: e.disabled,
        onClick: a[0] || (a[0] = (...u) => l.clickEvent && l.clickEvent(...u))
      }, [
        renderSlot(l.$slots, "default", {}, void 0, true)
      ], 10, E)
    ]));
  }
});
var b = $(M, [["__scopeId", "data-v-b9926347"]]);
b.install = (e) => {
  e.component(b.name, b);
};
var R = ["type", "value", "placeholder", "disabled"];
var P = {
  name: "tInput"
};
var q = Object.assign(P, {
  props: {
    modelValue: String | Number,
    placeholder: String,
    disabled: Boolean,
    clean: Boolean,
    type: String
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const s = e, l = (g) => {
      n("update:modelValue", g.target.value);
    }, a = computed(() => [
      "t-input",
      {
        "t-input-disabled": s.disabled
      }
    ]), u = computed(() => [
      "iconfont",
      {
        clean: s.clean && s.modelValue
      }
    ]), f = () => {
      n("update:modelValue", "");
    };
    return (g, V) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(a.value)
    }, [
      createBaseVNode("input", {
        type: e.type,
        value: e.modelValue,
        onInput: l,
        placeholder: e.placeholder,
        disabled: e.disabled
      }, null, 40, R),
      createBaseVNode("i", {
        class: normalizeClass(u.value),
        onClick: f
      }, "", 2)
    ], 2));
  }
});
var k = $(q, [["__scopeId", "data-v-730a411a"]]);
k.install = (e) => {
  e.component(k.name, k);
};
var G = (e) => (pushScopeId("data-v-ad4ace59"), e = e(), popScopeId(), e);
var H = { class: "message-base" };
var J = ["type", "title"];
var K = { key: 0 };
var Q = G(() => createBaseVNode("br", null, null, -1));
var W = {
  name: "tMessage"
};
var X = Object.assign(W, {
  props: {
    type: {
      type: String,
      default: "info"
    },
    round: Boolean,
    clean: Boolean,
    title: String,
    show: {
      show: String,
      default: true
    }
  },
  setup(e) {
    const n = e, s = computed(() => [
      "t-message",
      "animate__animated animate__fadeInDown",
      n.type,
      {
        round: n.round
      }
    ]), l = computed(() => [
      "iconfont",
      {
        clean: n.clean
      },
      {
        title: n.title
      }
    ]), a = (u) => {
      u.target.parentNode.style.display = "none";
    };
    return (u, f) => (openBlock(), createElementBlock("div", H, [
      createBaseVNode("div", {
        class: normalizeClass(s.value),
        type: e.type,
        title: e.title
      }, [
        n.title ? (openBlock(), createElementBlock("span", K, [
          createTextVNode(toDisplayString(n.title), 1),
          Q
        ])) : createCommentVNode("", true),
        renderSlot(u.$slots, "default", {}, void 0, true),
        createBaseVNode("i", {
          class: normalizeClass(l.value),
          onClick: a
        }, "", 2)
      ], 10, J)
    ]));
  }
});
var S = $(X, [["__scopeId", "data-v-ad4ace59"]]);
S.install = (e) => {
  e.component(S.name, S);
};
var m = (e) => (pushScopeId("data-v-1124de98"), e = e(), popScopeId(), e);
var Y = {
  key: 0,
  class: "container"
};
var Z = { class: "imageList" };
var ee = ["src"];
var te = ["onClick"];
var ne = m(() => createBaseVNode("span", { class: "cover" }, null, -1));
var se = { class: "upContain" };
var le = ["message"];
var oe = ["multiple", "accept"];
var ae = m(() => createBaseVNode("i", { class: "iconfont" }, "", -1));
var ie = m(() => createBaseVNode("br", null, null, -1));
var ce = m(() => createBaseVNode("span", null, [
  createTextVNode("将文件拖到此处，或"),
  createBaseVNode("a", null, "点击上传")
], -1));
var de = { class: "message" };
var ue = { key: 1 };
var re = ["multiple", "accept"];
var _e = { class: "message" };
var pe = { class: "fileList" };
var me = m(() => createBaseVNode("i", { class: "iconfont" }, "", -1));
var fe = ["onClick"];
var ge = {
  name: "tUploader"
};
var ye = Object.assign(ge, {
  props: {
    message: String,
    multiple: Boolean,
    onsuccess: Function,
    onerror: Function,
    show: Boolean,
    type: {
      type: String,
      default: "imgUploader"
    },
    acceptType: {
      type: String,
      default: ""
    },
    buttonType: {
      type: String,
      default: "primary"
    },
    fileList: Array,
    imgList: Array
  },
  emits: ["change", "update:files"],
  setup(e, { emit: n }) {
    const s = e, l = ref(null), a = () => {
      l.value.click();
    }, u = (o) => {
      const y = o.target.files;
      for (const h of y)
        g(h).then((i) => {
          s.imgList.push(i);
        }).catch((i) => {
          console.log(i);
        });
    }, f = (o) => {
      s.fileList.unshift(...o.target.files), s.onsuccess(o);
    };
    function g(o) {
      return new Promise(function(y, h) {
        var i = new FileReader();
        i.readAsDataURL(o), i.onload = () => {
          y(i.result);
        };
      });
    }
    const V = (o) => {
      s.fileList.splice(o, 1);
    }, T = (o) => {
      s.imgList.splice(o, 1);
    };
    return (o, y) => {
      const h = resolveComponent("tButton");
      return openBlock(), createElementBlock(Fragment, null, [
        e.type == "imgUploader" ? (openBlock(), createElementBlock("div", Y, [
          createBaseVNode("ul", Z, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.imgList, (i, r) => (openBlock(), createElementBlock("li", {
              key: r,
              class: "animate__animated animate__fadeInUp"
            }, [
              createBaseVNode("img", {
                src: i,
                alt: ""
              }, null, 8, ee),
              createBaseVNode("i", {
                class: "iconfont imgDelete",
                onClick: (N) => T(r)
              }, "", 8, te),
              ne
            ]))), 128))
          ]),
          createBaseVNode("div", se, [
            createBaseVNode("div", {
              class: "t-uploader",
              message: e.message,
              onClick: a
            }, [
              createBaseVNode("input", {
                type: "file",
                style: { display: "none" },
                ref_key: "files",
                ref: l,
                onChange: u,
                multiple: e.multiple,
                accept: e.acceptType
              }, null, 40, oe),
              ae,
              ie,
              ce
            ], 8, le),
            createBaseVNode("span", de, toDisplayString(s.message), 1)
          ])
        ])) : createCommentVNode("", true),
        e.type == "fileUploader" ? (openBlock(), createElementBlock("div", ue, [
          createVNode(h, {
            type: e.buttonType,
            onClick: a
          }, {
            default: withCtx(() => [
              renderSlot(o.$slots, "default", {}, void 0, true)
            ]),
            _: 3
          }, 8, ["type"]),
          createBaseVNode("input", {
            type: "file",
            style: { display: "none" },
            ref_key: "files",
            ref: l,
            onChange: f,
            multiple: e.multiple,
            accept: e.acceptType
          }, null, 40, re),
          createBaseVNode("span", _e, toDisplayString(s.message), 1),
          createBaseVNode("div", pe, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.fileList, (i, r) => (openBlock(), createElementBlock("li", {
              key: r,
              class: "animate__animated animate__fadeInDown"
            }, [
              createBaseVNode("span", null, [
                me,
                createTextVNode(toDisplayString(i.name), 1)
              ]),
              createBaseVNode("i", {
                class: "iconfont",
                onClick: (N) => V(r)
              }, "", 8, fe)
            ]))), 128))
          ])
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var C = $(ye, [["__scopeId", "data-v-1124de98"]]);
C.install = (e) => {
  e.component(C.name, C);
};
var he = (e) => {
  e.use(b), e.use(k), e.use(S), e.use(C);
};
var be = {
  install: he
};
export {
  be as default,
  b as tButton,
  k as tInput,
  S as tMessage,
  C as tUploader
};
//# sourceMappingURL=skybiu-ui.js.map

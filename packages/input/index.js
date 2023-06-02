import tInput from './index.vue';

tInput.install = (app) => {          // 提供 install 方法，app 才能使用它
    app.component(tInput.name, tInput);
};

export default tInput;


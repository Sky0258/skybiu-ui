import tButton from './index.vue';

tButton.install = (app) => {          // 提供 install 方法，app 才能使用它
    app.component(tButton.name, tButton);
};


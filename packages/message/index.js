import tMessage from './index.vue';

tMessage.install = (app) => {          // 提供 install 方法，app 才能使用它
    app.component(tMessage.name, tMessage);
};

export default tMessage;
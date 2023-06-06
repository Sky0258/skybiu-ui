import tUploader from './index.vue';

tUploader.install = (app) => {          // 提供 install 方法，app 才能使用它
    app.component(tUploader.name, tUploader);
};

export default tUploader;
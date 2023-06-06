import tButton from "./button/index";
import tInput from "./input/index";
import tMessage from "./message/index";
import tUploader from "./uploader/index";

const install = (app) => {
    app.use(tButton);
    app.use(tInput);
    app.use(tMessage);
    app.use(tUploader);
};

// 全局引入
const TUI = {
    install
};

// 按需引入
export { tButton, tInput, tMessage, tUploader};

export default TUI;
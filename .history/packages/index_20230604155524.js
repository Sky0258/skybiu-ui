import tButton from "./button/index";
import tInput from "./input/index";
import tMessage from "./message/index";

const install = (app) => {
    app.use(tButton);
    app.use(tInput);
    app.use(tMessage);
};

// 全局引入
const TUI = {
    install
};

// 按需引入
export { tButton, tInput, tMessage};

export default TUI;
import tButton from "./button/index";
import tInput from "./input./index";

const install = (app) => {
    app.use(tButton);
    app.use(tInput);
};

// 全局引入
const TUI = {
    install
};

// 按需引入
export { tButton, tInput };

export default TUI;
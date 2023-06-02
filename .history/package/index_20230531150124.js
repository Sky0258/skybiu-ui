import tButton from "./button/index";

const install = (app) => {
    app.use(tButton);
};

// 全局引入
const TUI = {
    install
};

// 按需引入
export { tButton };

export default TUI;
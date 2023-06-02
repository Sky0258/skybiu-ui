declare module '*.vue' {
   export default {
    const component: import("vue").DefineComponent<{}, {}, any>;
   }
}

declare module 'vitepress-demoblock' {
    const demoblock = (md: any) => void;
    export default demoblock;
}
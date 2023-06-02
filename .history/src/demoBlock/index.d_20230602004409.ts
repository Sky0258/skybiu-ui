declare module '*.vue' {
    const component1: import("vue").DefineComponent<{}, {}, any>
    export default component1
}

declare module 'vitepress-demoblock' {
    const demoblock1: (md: any) => void;
    export default demoblock1
}
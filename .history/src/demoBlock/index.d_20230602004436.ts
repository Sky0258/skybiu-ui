declare module '*.vue' {
    const component1: import("vue").DefineComponent<{}, {}, any>
    export default component
}

declare module 'vitepress-demoblock' {
    const demoblock1: (md: any) => void;
    export default demoblock
}
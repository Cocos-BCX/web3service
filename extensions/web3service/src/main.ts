const projectPath = Editor.Project.path;
const web3serviceStaticPath = Editor.Utils.Path.join(projectPath, "extensions", "web3service", "static");


/**
 * @en Registration method for the main process of Extension
 * @zh 为扩展的主进程的注册方法
 */
export const methods: { [key: string]: (...any: any) => any } = {
    import_ethers_5_2() {
        const filePath = Editor.Utils.Path.join(web3serviceStaticPath, "libs", "ethers")
        Editor.Message.request("asset-db", "import-asset", filePath, 'db://assets/libs/ethers');
    },
};

/**
 * @en Hooks triggered after extension loading is complete
 * @zh 扩展加载完成后触发的钩子
 */
export function load() { }

/**
 * @en Hooks triggered after extension uninstallation is complete
 * @zh 扩展卸载完成后触发的钩子
 */
export function unload() { }

export declare enum BlockActionTypes {
    GET_CONFIGURATIONS = "GET CONFIGURATIONS"
}
type EuAction = {
    type: BlockActionTypes;
    payload: string[] | any;
};
export declare const blockReducer: (state: any, action: EuAction) => any;
export declare const createBlockStore: (colors: Record<string, string>, fonts: Record<string, string>, block_uuid?: string) => import("redux").Store<{
    colors: Record<string, string>;
    fonts: Record<string, string>;
    block_uuid: string | undefined;
}, import("redux").Action<any>>;
export declare const blockContext: import("react").Context<{}>;
export declare const useBlockSelector: import("react-redux/es/hooks/useSelector").UseSelector;
export {};

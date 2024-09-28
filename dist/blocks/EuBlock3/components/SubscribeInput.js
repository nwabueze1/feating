import { jsx as _jsx } from "react/jsx-runtime";
import { useBlock3ComponentStyes } from "./";
import clx from "classnames";
// import { PlugInForm, PluginFormRef, PluginFormClassNamesPropsType } from "@wazobia-tech/wazcom/dist/io";
export var SubscribeInput = function (_a) {
    var layout = _a.layout;
    var classes = useBlock3ComponentStyes();
    // const inputRef = useRef<PluginFormRef>(null);
    // const classNames: PluginFormClassNamesPropsType = {
    //   textField: {
    //     inputContainer: classes.subscribeInput,
    //     errorMessage: classes.subscribeErrorMessage,
    //   },
    // };
    // const handleNotify = (status: "success" | "error" | "warning" | "info", text: string) => {
    //   notify(status, text);
    //   if (status === "success") {
    //     recordFormSubmission(content?.form_uuid, block_uuid ?? "");
    //   }
    // };
    // const handleSubmit = () => {
    //   // const submitFn = inputRef?.current?.submit;
    //   if (submitFn) submitFn();
    // };
    return (_jsx("div", { className: clx(classes.inputContainer, layout), children: _jsx("div", { className: classes.inputWrapper, children: _jsx("div", { className: classes.pluginFormContainer }) }) }));
};

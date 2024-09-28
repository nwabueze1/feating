import { useBlock3ComponentStyes } from "./";
import clx from "classnames";
import { SubscribeInputPropsType } from "./types";
// import { PlugInForm, PluginFormRef, PluginFormClassNamesPropsType } from "@wazobia-tech/wazcom/dist/io";

export const SubscribeInput = ({ layout }: SubscribeInputPropsType) => {
  const classes = useBlock3ComponentStyes();
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

  return (
    <div className={clx(classes.inputContainer, layout)}>
      <div className={classes.inputWrapper}>
        <div className={classes.pluginFormContainer}>
          {/* <PlugInForm
            apolloClient={{
              client: gatewayUrl ? (createApolloClient(gatewayUrl) as any) : undefined,
            }}
            ref={inputRef}
            form_uuid={content?.form_uuid}
            form={content?.form}
            setLoading={setLoading}
            classNames={classNames}
            onNotify={handleNotify}
          /> */}
        </div>
      </div>
      {/* <Button type={"submit"} className={classes.subscribeButton} variant="contained" size="medium" onClick={handleSubmit}>
        {loading ? "Subscribing..." : "Subscribe"}
      </Button> */}
    </div>
  );
};

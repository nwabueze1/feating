import { useTheme } from "@mui/material";
import { FormPallette, PlugInForm } from "@wazobia-tech/wazcom/dist/io";
import clx from "classnames";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { useEuBlock12Styles } from ".";
import { BlockProvider } from "../../BlockProvider";
import { Button } from "../../components";
import { createApolloClient, notify, useGetConfiguration, useRecordFormSubmission } from "../../helpers";
import { useGetColor, useSelectedLayout } from "../../hooks";
import block12 from "../../mappings/block12";
import { BlockConfigType, TEuState } from "../../types";
import { ContactInfo } from "./components";
import { usePluginFormClassNames } from "./usePluginFormClassNames";
import { decodeText } from "@wazobia-tech/wazcom/dist/utilities";

const { uuid: BLOCK_UUID } = block12;

export const EuBlock12: FC<BlockConfigType> = ({ content, mode = "view", index, activeElement, handleSelect, ...props }) => {
  const { getMappedColor } = useGetColor();
  const getConfiguration = useGetConfiguration();
  const configuration = getConfiguration(props.configuration, "main", getMappedColor);
  const buttonConfig = getConfiguration(props.configuration, "button", getMappedColor);
  const classes = useEuBlock12Styles(configuration);
  const layout = useSelectedLayout(props.layouts);
  const [loading, setLoading] = useState(false);
  const { classNames } = usePluginFormClassNames(configuration);
  const { gatewayUrl } = useSelector<TEuState, TEuState>((state) => state);
  const renderContactInfo = () => content?.contactInfo.map((info: { type: string; value: string }, index: number) => <ContactInfo subtitle={info.value} type={info.type} key={index} />);
  const key = "blocks." + String(index);
  const recordFormSubmission = useRecordFormSubmission();
  const theme = useTheme();
  const palette: FormPallette = {
    colors: {
      main: configuration?.colors?.[300],
      hover: configuration?.colors?.[300],
      error: theme?.euDesign?.colors?.danger,
    },
    typography: {
      input: {
        fontFamily: configuration?.fonts?.body?.concat?.("!important"),
        fontSize: theme?.typography?.fontSize,
        color: configuration?.colors?.[400],
      },
      label: {
        fontFamily: configuration?.fonts?.body?.concat?.("!important"),
        fontSize: theme?.typography?.fontSize,
        color: configuration?.colors?.[400],
      },
    },
  };

  const SubmitButton = (
    <BlockProvider fonts={buttonConfig.fonts} colors={buttonConfig.colors}>
      <Button disabled={loading} size="large" type="submit" variant="contained" style={{ marginRight: 0, marginTop: 5 }}>
        {loading ? "Sending..." : "Send"}
      </Button>
    </BlockProvider>
  );

  const handleNotify = (status: "success" | "error" | "warning" | "info", text: string) => {
    notify(status, text);

    if (status === "success") {
      recordFormSubmission(content?.form_uuid, BLOCK_UUID);
    }
  };

  return (
    <section
      className={clx(classes.root, layout, mode === "edit" && key === activeElement && classes.block12ActiveElement)}
      onClick={() => {
        mode === "edit" && handleSelect?.(key);
      }}
    >
      <div className={classes.container}>
        <div className={clx(classes.block, layout)}>
          <div className={clx(classes.blockContent, classes.blockText)}>
            <h2 className={classes.heading}>
              {decodeText(content?.text?.main)} <span className={classes.headingColored}>{decodeText(content?.text?.coloredMain)}</span>
            </h2>
            <p className={classes.subtext}>{content?.text?.subtext}</p>
            <PlugInForm
              apolloClient={{ client: gatewayUrl ? (createApolloClient(gatewayUrl) as any) : undefined }}
              form={content?.form}
              form_uuid={content?.form_uuid}
              classNames={classNames}
              className={classes.form}
              setLoading={setLoading}
              submitButton={SubmitButton}
              onNotify={handleNotify}
              palette={palette}
            />
            <div className={classes.contactInfoContainer}>{renderContactInfo()}</div>
          </div>
          <div className={classes.blockContent}>
            <div className={clx(classes.mapContainer, layout)}>
              <div className={clx(classes.mapBox, layout)}>
                <iframe
                  src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${content?.text?.latitude},${content?.text?.longitude}(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={clx(classes.map, layout)}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// import { FormPallette, PlugInForm } from "@wazobia-tech/wazcom/dist/io";
import clx from "classnames";
import { FC } from "react";
import { useEuBlock12Styles } from ".";
import { useGetConfiguration } from "../../helpers";
import { useGetColor, useSelectedLayout } from "../../hooks";
import { ContactInfo } from "./components";
import { decodeText } from "../../helpers/decodeText";

export const EuBlock12: FC<any> = ({ content, mode = "view", index, activeElement, handleSelect, ...props }) => {
  const { getMappedColor } = useGetColor();
  const getConfiguration = useGetConfiguration();
  const configuration = getConfiguration(props.configuration, "main", getMappedColor);
  const classes = useEuBlock12Styles(configuration);
  const layout = useSelectedLayout(props.layouts);
  const renderContactInfo = () => content?.contactInfo.map((info: { type: string; value: string }, index: number) => <ContactInfo subtitle={info.value} type={info.type} key={index} />);
  const key = "blocks." + String(index);
  // const palette: FormPallette = {
  //   colors: {
  //     main: configuration?.colors?.[300],
  //     hover: configuration?.colors?.[300],
  //     error: theme?.euDesign?.colors?.danger,
  //   },
  //   typography: {
  //     input: {
  //       fontFamily: configuration?.fonts?.body?.concat?.("!important"),
  //       fontSize: theme?.typography?.fontSize,
  //       color: configuration?.colors?.[400],
  //     },
  //     label: {
  //       fontFamily: configuration?.fonts?.body?.concat?.("!important"),
  //       fontSize: theme?.typography?.fontSize,
  //       color: configuration?.colors?.[400],
  //     },
  //   },
  // };

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
            {/* <PlugInForm
              apolloClient={{ client: gatewayUrl ? (createApolloClient(gatewayUrl) as any) : undefined }}
              form={content?.form}
              form_uuid={content?.form_uuid}
              classNames={classNames}
              className={classes.form}
              setLoading={setLoading}
              submitButton={SubmitButton}
              onNotify={handleNotify}
              palette={palette}
            /> */}
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

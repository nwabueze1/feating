import { FC } from "react";
import { BlockConfigType } from "../../types";
import { useEuBlock3Styles } from "./styles";
import clx from "classnames";
import { useMediaQuery, useTheme } from "@mui/material";
import { useSelectedLayout } from "../../hooks";
import { EuBlock3Layout } from "./data/useBlock3Layout";
import { useGetColor } from "../../hooks/useGetColor";
import { useGetConfiguration } from "../../helpers";
import { SocialMedia, FooterLink, FooterListItem, SubscribeInput } from "./components";
import { BlockProvider } from "../../BlockProvider";
import block3 from "../../mappings/block3";
const { uuid: BLOCK_UUID } = block3;

export const EuBlock3: FC<BlockConfigType> = ({ content, configuration, mode = "view", index, activeElement, handleSelect, ...props }) => {
  const { getMappedColor } = useGetColor();
  const getConfiguration = useGetConfiguration();
  const customConfig = getConfiguration(configuration, "main", getMappedColor);
  const { colors } = getConfiguration(configuration, "button", getMappedColor);
  const classes = useEuBlock3Styles(customConfig);
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("lg"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const layout = useSelectedLayout(props.layouts);
  const key = "blocks." + index;

  const renderNavList = () =>
    content?.footerLinks?.map(
      (
        footerListItem: {
          name: string;
          links: { text: string; url: string }[];
        },
        index: number
      ) => (
        <ul key={index} className={clx(classes.footerList, "links", layout)}>
          <FooterListItem layout={classes.footerListHeader}>{footerListItem.name}</FooterListItem>
          {footerListItem.links.map((item, i) => (
            <FooterListItem key={i}>
              <FooterLink mode={mode} href={item.url}>
                {item.text}
              </FooterLink>
            </FooterListItem>
          ))}
          <FooterListItem>{layout === EuBlock3Layout.layout5 && sm && index === 1 && <SocialMedia mode={mode} social={content?.icons} layout={layout} />}</FooterListItem>
        </ul>
      )
    );

  return (
    <BlockProvider fonts={customConfig.fonts} colors={colors} block_uuid={BLOCK_UUID}>
      <div
        className={clx(classes.root, mode === "edit" && key === activeElement && classes.block3ActiveElement)}
        onClick={() => {
          mode === "edit" && handleSelect?.(key);
        }}
      >
        <div className={classes.container}>
          <article className={clx(classes.footerContainer, layout)}>
            <ul className={clx(classes.footerList, classes.footerLogoList, layout, "title")}>
              <FooterListItem layout={layout}>
                <FooterLink mode={mode}>
                  <span className={classes.footerLogo}>
                    <img src={content?.image?.src} className={classes.footerLogoImage} />
                    <span className={classes.footerLogoText}>{content?.text?.main}</span>
                  </span>
                </FooterLink>
              </FooterListItem>
              <FooterListItem layout={clx(layout, "caption")}>{content?.text?.caption}</FooterListItem>

              <FooterListItem layout={layout}>
                {(layout === EuBlock3Layout.layout5 && sm) || layout === EuBlock3Layout.layout2 ? null : <SocialMedia social={content?.icons} layout={layout} mode={mode} />}
              </FooterListItem>
            </ul>
            {renderNavList()}
            {layout === EuBlock3Layout.layout2 && md ? (
              <ul className={clx(classes.footerList, layout, "get-in-touch")}>
                <SocialMedia showHeader social={content?.icons} layout={layout} mode={mode} />
              </ul>
            ) : (
              <ul className={clx(classes.footerList, layout, "get-in-touch")}>
                <FooterListItem layout={clx(classes.subscribeList, classes.getInTouch, layout)}>
                  <FooterLink mode={mode} layout={classes.footerListHeader}>
                    {content?.text?.contact}
                  </FooterLink>
                </FooterListItem>
                <FooterListItem layout={classes.subscribeList}>
                  <FooterLink mode={mode}>{content?.text?.subtitle}</FooterLink>
                </FooterListItem>
                <FooterListItem layout={classes.subscribeList}>
                  {layout === EuBlock3Layout.layout2 && sm && <SocialMedia social={content?.icons} layout={layout} mode={mode} />}
                  <SubscribeInput layout={layout} content={content} />
                </FooterListItem>
              </ul>
            )}
          </article>
          <div className={classes.divider}></div>
          <div>
            <p className={clx(classes.copyright, layout)}>&copy; Eat-Up {new Date().getFullYear()}. Made with love by Fidelis Okeke</p>
          </div>
        </div>
      </div>
    </BlockProvider>
  );
};

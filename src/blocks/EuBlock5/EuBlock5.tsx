import { useState } from "react";
import { useEuBlock5Styles } from "./styles";
import clx from "classnames";
import { BlockConfigType } from "types";
import { useSelectedLayout } from "../../hooks";
import { useEuBlock5AnimationStyle } from "./useBlock5AnimationStyle";
import { useGetColor } from "../../hooks/useGetColor";
import { useGetConfiguration, createImageSrcset, imageSizes } from "../../helpers";
import { useQuestionStyles } from "./questionStyles";
import { useBackgroundStyles } from "./backgroundStyles";
import { decodeText } from "@wazobia-tech/wazcom/dist/utilities";

export const EuBlock5 = ({ content, configuration, mode = "view", index, activeElement, handleSelect, ...props }: BlockConfigType) => {
  const { getMappedColor } = useGetColor();
  const getConfiguration = useGetConfiguration();
  const blockConfig = getConfiguration(configuration, "main", getMappedColor);
  const classes = useEuBlock5Styles(blockConfig);
  const questionClass = useQuestionStyles(blockConfig);
  const backgroundClass = useBackgroundStyles(blockConfig);
  const [activeIndex, setActiveIndex] = useState(0);
  const layout = useSelectedLayout(props.layouts);
  const block5AnimationClass = useEuBlock5AnimationStyle();
  const selectedAnimation = block5AnimationClass.growIn;
  const key = "blocks." + String(index);

  const getAnswer = (className?: string) => <p className={clx(questionClass.faqAnswer, className)}>{decodeText(content?.faqs?.[activeIndex].answer)}</p>;

  const renderFAQ = () => (
    <ul className={questionClass.faqMenu}>
      {content?.faqs.map((c: { question: string; answer: string }, index: number) => (
        <li key={index} className={clx(questionClass.faqMenuList, activeIndex === index && "active")} onClick={() => setActiveIndex(index)}>
          <p className={clx(questionClass.faqQuestion, activeIndex === index && "active")}>{c.question}</p>
          {activeIndex === index && getAnswer("mobile")}
        </li>
      ))}
    </ul>
  );

  return (
    <section
      className={clx(classes.root, mode === "edit" && key === activeElement && classes.block5ActiveElement)}
      onClick={() => {
        mode === "edit" && handleSelect?.(key);
      }}
    >
      <div className={clx(classes.container, layout)}>
        <div className={clx(classes.block, layout)}>
          <header className={clx(classes.blockHeader, layout, selectedAnimation)}>
            <p className={classes.blockOverline}>{decodeText(content?.text?.overline)}</p>
            <h4 className={classes.blockHeading}>{decodeText(content?.text?.heading)}</h4>
            <p className={classes.blockCaption}>{decodeText(content?.text?.caption)}</p>
          </header>
          <article className={clx(classes.blockContent, layout, selectedAnimation)} style={{ animationDuration: "3s" }}>
            <div className={questionClass.faqBlock}>
              <aside className={questionClass.faqContent}>{renderFAQ()}</aside>
              <aside className={clx(questionClass.faqContent, "answer")}>
                <h5 className={questionClass.faqQuestionHeading}>{decodeText(content?.faqs?.[activeIndex].question)}</h5>
                {getAnswer()}
              </aside>
            </div>
          </article>
          <img
            className={clx(backgroundClass.backgroundImage, layout, selectedAnimation)}
            srcSet={createImageSrcset(content?.backgroundImage)}
            src={content?.backgroundImage?.src}
            sizes={imageSizes}
            alt={content?.backgroundImage?.alternative_text}
          />
          <div className={clx(backgroundClass.redBackground, layout, selectedAnimation)}></div>
          <div className={clx(backgroundClass.redBackground, layout, "dot-2", selectedAnimation)}></div>
          <div className={clx(backgroundClass.goldBackground, layout, selectedAnimation)}></div>
          <div className={clx(backgroundClass.goldBackground, layout, "dot-2", selectedAnimation)}></div>
        </div>
      </div>
    </section>
  );
};

import { BlockConfigType } from "../../types";
import { FC, useEffect } from "react";
import { useEuBlock17Styles } from ".";
import { useGetColor, useSelectedLayout } from "../../hooks";
import clx from "classnames";
import { useGetConfiguration, useRecordPostView } from "../../helpers";
import { BlockProvider } from "../../BlockProvider";
import { RelatedPostThumbnail } from "./components/RelatedPost";
import block19 from "../../mappings/block19";
import { useCalculateMinutesRead } from './hooks';

const { uuid: BLOCK_UUID } = block19;

export const EuBlock19: FC<BlockConfigType> = ({ content, mode = "view", index, activeElement, handleSelect, ...props }) => {
  const layout = useSelectedLayout(props.layouts);
  const { getMappedColor } = useGetColor();
  const getConfiguration = useGetConfiguration();
  const blockConfiguration = getConfiguration(props.configuration, "main", getMappedColor);
  const buttonConfiguration = getConfiguration(props.configuration, "button", getMappedColor);
  const classes = useEuBlock17Styles(blockConfiguration);
  const key = "blocks." + String(index);
  const featured_image = content?.post?.featured_image;
  const featured_image_source = featured_image?.source?.includes("unsplash") ? "Unsplash" : "Pexels";
  const recordPostView = useRecordPostView();
  const calculateMinutesRead = useCalculateMinutesRead();

  useEffect(() => {
    recordPostView(content?.post?.uuid);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString).toDateString();
    const time = formatTime(dateString);
    const dateArr = date.split(" ");
    dateArr.shift()
    dateArr[1] = dateArr[1] + ",";
    return `${dateArr.join(" ")}; ${time}`;
  }

  const formatTime = (dateString: string) => {
    const time = new Date(dateString)
    const hour = time.getHours();
    const minute = time.getMinutes();
    let temp = String(hour % 12);
    if (temp === "0") {
      temp = "12";
    }
    temp += (minute < 10 ? ":0" : ":") + minute;
    temp += hour >= 12 ? "pm" : "am";
    return temp;
  }

  return (
    <BlockProvider {...blockConfiguration} block_uuid={BLOCK_UUID}>
      <section
        className={clx(classes.root, mode === "edit" && key === activeElement && classes.block19ActiveElement)}
        onClick={() => {
          mode && handleSelect?.(key);
        }}
      >
        <div className={clx(classes.categoryContainer, layout)}>
          <div className={classes.leftSection}>
            <div className={classes.categoryContainer}>
              <h5 className={classes.category}>{content?.post?.category_name}</h5>
              <span className={classes.dash}></span>
              <span className={classes.readTime}>{calculateMinutesRead(content?.post?.content)}</span>
            </div>
            <h1 className={classes.title}>{content?.post?.title}</h1>
            <hr className={classes.horizontalLine} />
              <div className={classes.authorContainer} >
                <div className={classes.authorImageContainer} >
                  <img src={content?.post?.author?.avatar?.src} className={classes.authorImage} />
                </div>
                <div className={classes.authorItem} >
                  
                  <div>
                    <p className={classes.authorTitle} >Written by</p>
                    <p className={classes.authorContent} >{content?.post?.author?.name}</p>
                  </div>
                </div>
                <div className={classes.authorItem} >
                  <div>
                    <p className={classes.authorTitle} >Published on</p>
                    <p className={classes.authorContent} >{formatDate(content?.post?.published_at)}</p>
                  </div>
                </div>
              </div>
          </div>
          <span />
        </div>
        <div className={clx(classes.container, layout)}>
          <div className={classes.leftSection}>
            <div className={clx(classes.innerHeader, layout)}>
              <div className={classes.categoryContainer}>
                <h5 className={classes.category}>{content?.post?.category_name}</h5>
                <span className={classes.dash}></span>
                <span className={classes.readTime}>{calculateMinutesRead(content?.post?.content)}</span>
              </div>
              <h1 className={classes.title}>{content?.post?.title}</h1>
              <hr className={classes.horizontalLine} />
              <div className={classes.authorContainer} >
                <div className={classes.authorImageContainer} >
                  <img src={content?.post?.author?.avatar?.src} className={classes.authorImage} />
                </div>
                <div className={classes.authorItem} >
                  
                  <div>
                    <p className={classes.authorTitle} >Written by</p>
                    <p className={classes.authorContent} >{content?.post?.author?.name}</p>
                  </div>
                </div>
                <div className={classes.authorItem} >
                  <div>
                    <p className={classes.authorTitle} >Published on</p>
                    <p className={classes.authorContent} >{formatDate(content?.post?.published_at)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.headerImageContainer}>
              <div style={{ backgroundImage: `url('${featured_image?.src}')` }} className={classes.headerImage} />
              {featured_image?.photographer && featured_image?.source && (
                <p className={classes.featuredImageAttribution}>
                  <em>
                    Photo by{" "}
                    <a href={featured_image?.photographer?.url} target="_blank">
                      {featured_image?.photographer?.name}
                    </a>{" "}
                    on{" "}
                    <a href={featured_image?.source} target="_blank">
                      {featured_image_source}
                    </a>
                  </em>
                </p>
              )}
            </div>
            <div className={classes.loadContent} dangerouslySetInnerHTML={{ __html: content?.post?.content }} />
          </div>
          <div className={clx(classes.rightSection, layout)}>
            <RelatedPostThumbnail mode={mode} header="Related Articles" content={content?.post?.related_posts ?? []} layout={layout} buttonConfiguration={buttonConfiguration} />
          </div>
        </div>
      </section>
    </BlockProvider>
  );
};

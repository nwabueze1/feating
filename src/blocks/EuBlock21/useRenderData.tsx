import { CoreMenuItemFields } from "../../models";
import { CardPropsType, Card as MenuItemCard } from "../../components";
import { CorePostFields } from "../../models/__generated__/CorePostFields";
import { Card } from "../EuBlock15";
import { ClassNameMap } from "@mui/styles";
import { CardSkeleton } from "./CardSkeleton";
import { TagType } from "./EuBlock21";
import clx from "classnames";
import { Dispatch, SetStateAction } from "react";

export const useRenderData = (mode: "view" | "edit", classes: ClassNameMap<string>) => {
  const renderMenuItems = (menuItems: CoreMenuItemFields[], colors?: CardPropsType['colors']) =>
    menuItems?.map((menuItem, index) => (
      <MenuItemCard
        key={index}
        title={menuItem?.name}
        subtitle={menuItem?.description}
        price={menuItem?.price}
        mode={mode}
        currency={menuItem?.menu?.restaurant?.bank_info?.currency ?? ""}
        image={menuItem.image}
        colors={colors}
        hasShadow={true}
        action={{
          href: menuItem?.slug ?? "",
          title: "View",
        }}
      />
    ));

  const renderPosts = (blogPosts: CorePostFields[]) =>
    blogPosts.map((post: any, index) => (
      <Card
        title={post?.title?.length > 35 ? post?.title?.slice(0, 32) + "..." : post?.title}
        overline={post?.category_name ?? "ajajaj"}
        excerpt={post?.excerpt.length > 70 ? post?.excerpt.slice(0, 67) + "..." : post?.excerpt ?? ""}
        featured_image={post?.featured_image?.src}
        mode={mode}
        layout={"layout-2"}
        slug={post.slug ?? ""}
        published_at={post?.published_at}
        key={index}
      />
    ));

  const renderImageSkeleton = () => (
    <div className={classes.cardContainer}>
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <CardSkeleton key={index} />
        ))}
    </div>
  );

  const renderTags = ({ activeTag, tags, setActiveTag }: { tags: TagType[]; activeTag: TagType; setActiveTag: Dispatch<SetStateAction<TagType>> }) =>
    tags.map((tag, index) => (
      <p key={index} className={clx(classes.tag, activeTag === tag && "active")} onClick={() => setActiveTag(tag)}>
        {tag}
      </p>
    ));

  return {
    renderPosts,
    renderMenuItems,
    renderImageSkeleton,
    renderTags,
  };
};

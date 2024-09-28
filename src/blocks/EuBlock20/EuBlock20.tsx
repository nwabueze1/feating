import { FC, useState, useMemo, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BlockConfigType } from "../../types";
import { Button } from "../../components";
import { useEuBlock13Styles, SearchBar, Card } from ".";
import { useGetColor, useSelectedLayout } from "../../hooks";
import clx from "classnames";
import { EuState, useGetConfiguration } from "../../helpers";
import { MenuList } from "../../components";
import { BlockProvider } from "../../BlockProvider";
import { mapPostCategory } from ".";
import { useMediaQuery, useTheme } from "@mui/material";
import { useGetBlogPosts, useGetCategoryPosts } from "./hooks";
import block20 from "../../mappings/block20";

const { uuid: BLOCK_UUID } = block20;

export const EuBlock20: FC<BlockConfigType> = ({ content, mode = "view", ...props }) => {
  const { getMappedColor } = useGetColor();
  const getConfiguration = useGetConfiguration();
  const blockConfig = getConfiguration(props.configuration, "main", getMappedColor);
  const menuConfig = getConfiguration(props.configuration, "menu", getMappedColor);
  const buttonConfig = getConfiguration(props.configuration, "button", getMappedColor);
  const { blog } = useSelector<EuState, EuState>((store) => store);
  const dispatch = useDispatch();
  const classes = useEuBlock13Styles(blockConfig);
  const layout = useSelectedLayout(props.layouts);
  const posts = blog?.posts;
  const [activeCategoryUuid, setActiveCategoryUuid] = useState(blog?.categories?.[0]?.uuid ?? "");
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const lgScreens = useMediaQuery(theme.breakpoints.down("lg"));
  const layout2or3or4 = ["layout-2", "layout-3", "layout-4"];
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const getBlogPosts = useGetBlogPosts();
  const getCategoryPosts = useGetCategoryPosts();

  const blog_uuid = useMemo(() => {
    if (!blog?.posts || blog?.posts?.length === 0) return undefined;

    return JSON.parse(JSON.stringify(blog?.posts))[0]?.blog_uuid;
  }, []);
  const isLoadMore = (blog?.paginatorInfo?.currentPage ?? 0) < (blog?.paginatorInfo?.lastPage ?? 0);
  const isPosts = blog?.posts && blog?.posts?.length > 0;

  const render = (showMobile?: boolean) => (
    <BlockProvider fonts={menuConfig.fonts} colors={menuConfig.colors}>
      <MenuList
        noScroll
        gap={sm ? "1px" : undefined}
        onSelectMenu={(item) => fetchPosts(item.uuid)}
        data={mapPostCategory([{ name: "All Posts", uuid: "all" }, ...(blog?.categories ?? [])])}
        showMobile={showMobile}
      />
    </BlockProvider>
  );

  const fetchPosts = async (category_uuid: string, isLoadMore = false) => {
    setActiveCategoryUuid(category_uuid);
    setLoading(true);
    const paginatorInfo = blog?.paginatorInfo;
    const response =
      category_uuid?.toLowerCase() === "all"
        ? await getBlogPosts(blog_uuid as string, isLoadMore ? (paginatorInfo?.currentPage as number) + 1 : 1)
        : await getCategoryPosts(category_uuid, isLoadMore ? (paginatorInfo?.currentPage as number) + 1 : 1);

    if (response) {
      const { posts, paginatorInfo } = response;
      const updatedPosts = isLoadMore ? [...(blog?.posts ?? []), ...posts] : posts;
      dispatch({ type: "GET_POSTS", payload: updatedPosts });
      dispatch({ type: "SET_BLOG_PAGINATION", payload: paginatorInfo });
    }
    setLoading(false);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const renderPosts = () => {
    const renderedPosts = searchValue ? posts?.filter((post) => post?.title?.toLowerCase()?.includes(searchValue.toLowerCase())) : posts;
    if (!searchValue)
      return renderedPosts?.map((value: any, index: number) => (
        <Card
          key={index}
          title={value?.title?.length > 35 ? value?.title?.slice(0, 32) + "..." : value?.title}
          category_name={value?.category_name}
          featured_image={value.featured_image}
          excerpt={value.excerpt.length > 70 ? value.excerpt.slice(0, 67) + "..." : value.excerpt}
          mode={mode}
          slug={value?.slug}
          action={{
            title: "Read article",
          }}
          published_at={value.published_at}
          variant="contained"
          screenSize={props?.screenSize}
        />
      ));

    if (renderedPosts?.length === 0) return <p>There are no search results for "{searchValue}"</p>;

    return renderedPosts?.map((value: any, index: number) => (
      <Card
        key={index}
        title={value?.title?.length > 35 ? value?.title?.slice(0, 32) + "..." : value?.title}
        category_name={value?.category_name}
        featured_image={value.featured_image}
        excerpt={value.excerpt.length > 70 ? value.excerpt.slice(0, 67) + "..." : value.excerpt}
        mode={mode}
        slug={value?.slug}
        action={{
          title: "Read article",
        }}
        published_at={value.published_at}
        variant="contained"
        screenSize={props?.screenSize}
      />
    ));
  };

  return (
    <BlockProvider fonts={blockConfig.fonts} colors={blockConfig.colors} block_uuid={BLOCK_UUID}>
      <section className={clx(classes.root, layout)}>
        <div className={classes.container}>
          <header className={clx(classes.blockHeading, layout)}>
            <p className={classes.overline}>{content?.text?.overline}</p>
            <h4 className={classes.title}>{isPosts ? content?.text?.main : "There are no articles to display"}</h4>
            <p className={classes.caption}>{content?.text?.subtext}</p>
            {sm && !layout2or3or4.includes(layout ?? "") && <h6 className={classes.menuTitle}>{content?.text?.postTitle}</h6>}
          </header>
          {isPosts && (
            <div>
              <div className={classes.horizontalMenuContainer}>{(lgScreens || layout2or3or4.includes(layout as string)) && render(true)}</div>
              <div className={classes.menuHeader}>
                <div className={clx(classes.menuHeading, layout)}>
                  <h6 className={classes.menuTitle}>{content?.text?.menuTitle}</h6>
                </div>
                <div className={clx(classes.menuSearchBar, layout)}>
                  <SearchBar value={searchValue} onChange={handleSearchChange} onSubmit={() => {}} />
                </div>
              </div>
              <article className={classes.block}>
                <div className={clx(classes.menuCategoryContainer, layout)}>{render()}</div>
                <div className={clx(classes.menuItemsContainer, layout)}>{renderPosts()}</div>
              </article>

              {isLoadMore && (
                <BlockProvider {...buttonConfig} block_uuid={BLOCK_UUID}>
                  <div className={classes.buttonContainer}>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => {
                        fetchPosts(activeCategoryUuid, true);
                      }}
                    >
                      {loading ? <span className={classes.spinner} /> : "Load More"}
                    </Button>
                  </div>
                </BlockProvider>
              )}
            </div>
          )}
        </div>
      </section>
    </BlockProvider>
  );
};

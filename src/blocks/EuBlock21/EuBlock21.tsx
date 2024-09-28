import { useDispatch, useSelector } from "react-redux";
import { BlockConfigType, CustomThemeProps, TEuState } from "../../types";
import { FormEvent, ChangeEvent, FC, useState, useEffect } from "react";
import { useGetColor } from "../../hooks";
import { useGetConfiguration } from "../../helpers";
import { useBlock21Styles } from "./useBlock21Styles";
import { MdSearch } from "react-icons/md";
import { useSearchMenuItems, useSearchPosts } from "./hooks";
import { BlockProvider } from "../../BlockProvider";
import { useRenderData } from "./useRenderData";

export type TagType = "all" | "dishes" | "blog";

export const EuBlock21: FC<BlockConfigType> = ({ configuration, mode = "view", index, handleSelect }) => {
  const { restaurant, blog, loading } = useSelector<TEuState, TEuState>((store) => store);
  // This is the state param used to track the search param as the user is typing
  const [searchField, setSearchField] = useState("");
  // This is the displayed search parameter used once the user has selected search
  const [searchValue, setSearchValue] = useState("");
  const { getMappedColor } = useGetColor();
  const getConfiguration = useGetConfiguration();
  const mainConfig = getConfiguration(configuration, "main", getMappedColor);
  const classes = useBlock21Styles(mainConfig as CustomThemeProps);
  const [activeTag, setActiveTag] = useState<TagType>("all");
  const [operation, setOperation] = useState<"search_menu_items" | "search_posts" | "">("");
  const tags: TagType[] = ["all", "dishes", "blog"];
  const searchPosts = useSearchPosts();
  const searchMenuItems = useSearchMenuItems();
  const { renderPosts, renderMenuItems, renderImageSkeleton, renderTags } = useRenderData(mode, classes);
  const key = "blocks." + String(index);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value);
  };
  const dispatch = useDispatch();
  const menuItems = restaurant?.menu?.menuItems ?? [];
  const storePosts = blog?.posts ?? [];
  const menuPaginatorInfo = restaurant?.menu?.paginatorInfo || { currentPage: 0, lastPage: 1 };
  const postsPaginatorInfo = blog?.paginatorInfo || { currentPage: 0, lastPage: 1 };

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchField.length === 0 || loading) return;

    setSearchValue(searchField);

    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const posts = await searchPosts(searchField, postsPaginatorInfo.currentPage);
      if (posts) {
        dispatch({
          type: "GET_POSTS",
          payload: [...posts.posts],
        });
        dispatch({
          type: "SET_BLOG_PAGINATION",
          payload: posts.paginatorInfo,
        });
      }
      const menus = await searchMenuItems(searchField, menuPaginatorInfo.currentPage);
      if (menus) {
        dispatch({
          type: "GET_MENU_ITEMS",
          payload: [...menus.menuItems],
        });
        dispatch({
          type: "SET_MENU_PAGINATION",
          payload: menus.paginatorInfo,
        });
      }
    } catch (ex) {
      console.log(ex);
    } finally {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }
  };

  const handleLoadMore = async (tag: TagType) => {
    setOperation(tag === "dishes" ? "search_menu_items" : "search_posts");

    try {
      switch (tag) {
        case "dishes":
          const menu = await searchMenuItems(searchValue, menuPaginatorInfo.currentPage + 1);
          if (menu) {
            dispatch({
              type: "GET_MENU_ITEMS",
              payload: [...menuItems, ...menu.menuItems],
            });
            dispatch({
              type: "SET_MENU_PAGINATION",
              payload: menu.paginatorInfo,
            });
          }
          break;
        case "blog":
          const posts = await searchPosts(searchValue, postsPaginatorInfo.currentPage + 1);
          if (posts) {
            dispatch({
              type: "GET_POSTS",
              payload: [...storePosts, ...posts.posts],
            });
            dispatch({
              type: "SET_BLOG_PAGINATION",
              payload: posts.paginatorInfo,
            });
          }
          break;
        default:
          break;
      }
    } catch (ex) {
      //
    } finally {
      setOperation("");
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query") ?? "";
    setSearchField(query);
    setSearchValue(query);
  }, []);

  const renderSearchBar = () => (
    <form className={classes.searchContainer} onSubmit={handleSearch}>
      <input value={searchField} onChange={handleChange} className={classes.input} placeholder={"Type something"} autoFocus />
      <button className={classes.searchButton} type={"submit"} disabled={loading}>
        <MdSearch />
      </button>
    </form>
  );

  const renderLoadMoreBtn = (tag: TagType) => (
    <div className={classes.loadMoreBtnParent}>
      <button className={classes.loadMoreBtn} onClick={() => handleLoadMore(tag)} disabled={loading}>
        Load more
      </button>
    </div>
  );

  return (
    <BlockProvider fonts={mainConfig?.fonts} colors={{ ...mainConfig?.colors }}>
      <section className={classes.root} onClick={() => handleSelect?.(key)}>
        <div className={classes.container}>
          <div className={classes.blockHeader}>
            {renderSearchBar()}
            {(storePosts?.length > 0 || menuItems?.length > 0) && (
              <header className={classes.header}>
                <div className={classes.tagsContainer}>{renderTags({ setActiveTag, tags, activeTag })}</div>
                {(menuItems.length > 0 || storePosts.length > 0) && (
                  <p className={classes.searchResultText}>
                    {activeTag === "all" ? menuItems.length + storePosts.length : activeTag === "blog" ? storePosts?.length : menuItems?.length} results found for {searchValue}
                  </p>
                )}
              </header>
            )}
          </div>
          {(activeTag === "all" || activeTag === "dishes") && (
            <>
              <div>
                {menuItems?.length > 0 && <p className={classes.title}>Dishes ({menuItems?.length})</p>}
                <div className={classes.cardContainer}>{renderMenuItems(menuItems, { currency: mainConfig?.colors?.[1000], action: { background: mainConfig?.colors?.[700], color: mainConfig?.colors?.[100] } })}</div>
                {menuPaginatorInfo?.currentPage !== menuPaginatorInfo?.lastPage && menuItems?.length > 0 && renderLoadMoreBtn("dishes")}
              </div>
              {operation === "search_menu_items" && renderImageSkeleton()}
            </>
          )}
          {(activeTag === "all" || activeTag === "blog") && (
            <div>
              {storePosts?.length > 0 && <p className={classes.title}>Posts ({storePosts.length})</p>}
              <div className={classes.cardContainer}>{renderPosts(storePosts)}</div>
              {operation === "search_posts" && renderImageSkeleton()}
              {postsPaginatorInfo?.currentPage !== postsPaginatorInfo?.lastPage && storePosts.length > 0 && renderLoadMoreBtn("blog")}
            </div>
          )}
          {loading && renderImageSkeleton()}
          {storePosts?.length === 0 && menuItems?.length === 0 && (
            <p className={classes.searchResultText} style={{ textAlign: "center" }}>
              There are no search results to display
            </p>
          )}
        </div>
      </section>
    </BlockProvider>
  );
};

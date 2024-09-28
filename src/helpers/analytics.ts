import { useSelector } from "react-redux";
import { useBlockSelector } from "./blockStore";
import { BlockProviderType } from "../types";
import { EuState } from "./store";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export const useRecordMenuItemView = () => {
  const { page } = useSelector<EuState, EuState>((state) => ({
    page: state?.page,
  }));

  return (menu_item_uuid: string) => {
    // alert("Hello World " + page?.site?.uuid);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "menuItemPageViewTrigger",
      site_uuid: page?.site?.uuid,
      template: "eatup",
      menu_item_uuid,
    });
  };
};

export const useRecordPostView = () => {
  const { page } = useSelector<EuState, EuState>((state) => ({
    page: state?.page,
  }));

  return (post_uuid: string) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "postPageViewTrigger",
      site_uuid: page?.site?.uuid,
      template: "eatup",
      post_uuid,
    });
  };
};

export const useRecordLinkClick = () => {
  const { page } = useSelector<EuState, EuState>((state) => ({
    page: state?.page,
  }));
  let default_block_uuid = "";
  try {
    const { block_uuid: store_block_uuid } = useBlockSelector<BlockProviderType, BlockProviderType>((state) => state);
    default_block_uuid = store_block_uuid as string;
  } catch (error) {
    //
  }

  return (text: string, url: string, block_uuid?: string) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "linkClickTrigger",
      site_uuid: page?.site?.uuid,
      page_uuid: page?.uuid,
      block_uuid: block_uuid ?? default_block_uuid,
      template: "eatup",
      click_text: text,
      click_url: url,
    });
  };
};

export const useRecordAddToCart = () => {
  const { page } = useSelector<EuState, EuState>((state) => ({
    page: state?.page,
  }));

  return (menu_item_uuid: string, block_uuid: string) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "addToCartTrigger",
      site_uuid: page?.site?.uuid,
      menu_item_uuid,
      template: "eatup",
      block_uuid,
    });
  };
};

export const useRecordFormSubmission = () => {
  const { page } = useSelector<EuState, EuState>((state) => ({
    page: state?.page,
  }));

  return (form_uuid: string, block_uuid: string) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "formSubmissionTrigger",
      site_uuid: page?.site?.uuid,
      page_uuid: page?.uuid,
      form_uuid,
      block_uuid,
      template: "eatup",
    });
  };
};

export const useRecordCartAction = () => {
  const { page } = useSelector<EuState, EuState>((state) => ({
    page: state?.page,
  }));

  return (block_uuid: string, cart_action: string) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "cartActionTrigger",
      site_uuid: page?.site?.uuid,
      block_uuid,
      cart_action,
      template: "eatup",
    });
  };
};

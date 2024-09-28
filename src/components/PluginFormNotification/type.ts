export type NotificationType = {
  open: boolean;
  message: null | string;
  message_type: null | "error" | "success";
};

export type PluginFormNotificationPropsType = NotificationType & {
  onClose: () => void;
  colors?: {
    background?: string;
    text?: string;
  };
};

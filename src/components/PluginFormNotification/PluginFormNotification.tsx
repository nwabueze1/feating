import { FC } from "react";
import { PluginFormNotificationPropsType } from "./type";

export const PluginFormNotification: FC<PluginFormNotificationPropsType> = ({}) => {
  // const renderNotification = () => {
  //   switch (message_type) {
  //     case "error":
  //       return (
  //         <div style={{ background: colors?.background }} className={classes.errorContainer}>
  //           <p style={{ color: colors?.text }} className={classes.errorText}>
  //             {message && message.trim().length > 0 ? message : "Oops we couldn’t send your response, kindly retry!!"}
  //           </p>
  //           <button className={classes.closeButton} onClick={onClose}>
  //             <AiOutlineClose className={classes.closeIcon} />
  //           </button>
  //         </div>
  //       );

  //     case "success":
  //       return (
  //         <div className={classes.successContainer} style={{ background: colors?.background }}>
  //           <img
  //             src={"https://sytbuildr.s3.eu-west-2.amazonaws.com/eatup-template/eat-up-notification.svg"}
  //             width={331.5}
  //             height={221}
  //             alt={"success-notification-icon"}
  //             className={classes.successImage}
  //           />
  //           <div className={classes.successTextContainer}>
  //             <h6 className={classes.title} style={{ color: colors?.text }}>
  //               Thank you
  //             </h6>
  //             <p className={classes.subTitle} style={{ color: colors?.text }}>
  //               {message && message.trim().length > 0
  //                 ? message
  //                 : `Your response has been received successfully, we will get back to
  //             you shortly!!`}
  //             </p>
  //           </div>
  //         </div>
  //       );
  //     default:
  //       return null;
  //   }
  // };
  return null;
};

import { FC } from "react";
import { useContactInfoStyles, ContactInfoPropsType } from ".";
import { MdOutlineFax } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { TiSocialInstagram } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";

export const ContactInfo: FC<ContactInfoPropsType> = ({ subtitle, type }) => {
  const classes = useContactInfoStyles();

  const getIcon = (type: string) => {
    const parsedType = type.toLowerCase();

    if (parsedType.includes("mail"))
      return <HiOutlineMailOpen className={classes.icon} />;

    if (parsedType.includes("tel"))
      return <BiPhoneCall className={classes.icon} />;

    if (parsedType.includes("fax"))
      return <MdOutlineFax className={classes.icon} />;

    if (parsedType.includes("insta"))
      return <TiSocialInstagram className={classes.icon} />;

    if (parsedType.includes("linkedin"))
      return <FaLinkedin className={classes.icon} />;

    if (parsedType.includes("twitter"))
      return <RiTwitterLine className={classes.icon} />;
      
    return <HiOutlineMailOpen className={classes.icon} />;
  };

  return (
    <div className={classes.root}>
      {getIcon(type)}
      <div className={classes.textContainer}>
        <p className={classes.title}>{getContactInfoTitle(type)}</p>
        <p className={classes.subTitle}>{subtitle}</p>
      </div>
    </div>
  );
};

const getContactInfoTitle = (type: string) => {
  return type.toUpperCase();
};

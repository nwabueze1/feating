import { FC } from "react";
import clx from "classnames";
import { FooterListItem } from "./FooterListItem";
import { FooterLink } from "./FooterLink";
import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub, FaWhatsapp, FaDiscord, FaTiktok, FaYoutube } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { useBlock3ComponentStyes, SocialMediaPropsType } from "./";

export const SocialMedia: FC<SocialMediaPropsType> = ({ showHeader = false, layout, social, mode }) => {
  const classes = useBlock3ComponentStyes();

  const renderSocialIcons = () => {
    const getSocialIcon = (type: string) => {
      switch (type.toLowerCase()) {
        case "facebook":
          return <FaFacebookF className={classes.socialMediaIcon} />;
        case "telephone":
          return <BsTelephoneFill className={classes.socialMediaIcon} />;
        case "twitter":
          return <FaTwitter className={classes.socialMediaIcon} />;
        case "instagram":
          return <AiFillInstagram className={classes.socialMediaIcon} />;
        case "email":
          return <MdEmail className={classes.socialMediaIcon} />;
        case "linkedin":
          return <FaLinkedin className={classes.socialMediaIcon} />;
        case "github":
          return <FaGithub className={classes.socialMediaIcon} />;
        case "whatsapp":
          return <FaWhatsapp className={classes.socialMediaIcon} />;
        case "discord":
          return <FaDiscord className={classes.socialMediaIcon} />;
        case "tiktok":
          return <FaTiktok className={classes.socialMediaIcon} />;
        case "youtube":
          return <FaYoutube className={classes.socialMediaIcon} />;
        default:
          return <FaFacebookF className={classes.socialMediaIcon} />;
      }
    }

    return social.map((platform, index: number) => 
      <FooterLink mode={mode} href={platform.url} key={index}>
        {getSocialIcon(platform.type.toLowerCase())}
      </FooterLink>
    )};

  return (
    <ul className={clx(classes.footerList, layout)}>
      {showHeader && <FooterListItem layout={classes.footerListHeader}>Social</FooterListItem>}
      <FooterListItem>
        <div className={classes.socialMediaContainer}>{renderSocialIcons()}</div>
      </FooterListItem>
    </ul>
  );
};

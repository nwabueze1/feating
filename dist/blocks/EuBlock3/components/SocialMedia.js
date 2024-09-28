import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clx from "classnames";
import { FooterListItem } from "./FooterListItem";
import { FooterLink } from "./FooterLink";
import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub, FaWhatsapp, FaDiscord, FaTiktok, FaYoutube } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { useBlock3ComponentStyes } from "./";
export var SocialMedia = function (_a) {
    var _b = _a.showHeader, showHeader = _b === void 0 ? false : _b, layout = _a.layout, social = _a.social, mode = _a.mode;
    var classes = useBlock3ComponentStyes();
    var renderSocialIcons = function () {
        var getSocialIcon = function (type) {
            switch (type.toLowerCase()) {
                case "facebook":
                    return _jsx(FaFacebookF, { className: classes.socialMediaIcon });
                case "telephone":
                    return _jsx(BsTelephoneFill, { className: classes.socialMediaIcon });
                case "twitter":
                    return _jsx(FaTwitter, { className: classes.socialMediaIcon });
                case "instagram":
                    return _jsx(AiFillInstagram, { className: classes.socialMediaIcon });
                case "email":
                    return _jsx(MdEmail, { className: classes.socialMediaIcon });
                case "linkedin":
                    return _jsx(FaLinkedin, { className: classes.socialMediaIcon });
                case "github":
                    return _jsx(FaGithub, { className: classes.socialMediaIcon });
                case "whatsapp":
                    return _jsx(FaWhatsapp, { className: classes.socialMediaIcon });
                case "discord":
                    return _jsx(FaDiscord, { className: classes.socialMediaIcon });
                case "tiktok":
                    return _jsx(FaTiktok, { className: classes.socialMediaIcon });
                case "youtube":
                    return _jsx(FaYoutube, { className: classes.socialMediaIcon });
                default:
                    return _jsx(FaFacebookF, { className: classes.socialMediaIcon });
            }
        };
        return social.map(function (platform, index) {
            return _jsx(FooterLink, { mode: mode, href: platform.url, children: getSocialIcon(platform.type.toLowerCase()) }, index);
        });
    };
    return (_jsxs("ul", { className: clx(classes.footerList, layout), children: [showHeader && _jsx(FooterListItem, { layout: classes.footerListHeader, children: "Social" }), _jsx(FooterListItem, { children: _jsx("div", { className: classes.socialMediaContainer, children: renderSocialIcons() }) })] }));
};

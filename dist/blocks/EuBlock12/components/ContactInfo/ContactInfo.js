import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContactInfoStyles } from ".";
import { MdOutlineFax } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { TiSocialInstagram } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
export var ContactInfo = function (_a) {
    var subtitle = _a.subtitle, type = _a.type;
    var classes = useContactInfoStyles();
    var getIcon = function (type) {
        var parsedType = type.toLowerCase();
        if (parsedType.includes("mail"))
            return _jsx(HiOutlineMailOpen, { className: classes.icon });
        if (parsedType.includes("tel"))
            return _jsx(BiPhoneCall, { className: classes.icon });
        if (parsedType.includes("fax"))
            return _jsx(MdOutlineFax, { className: classes.icon });
        if (parsedType.includes("insta"))
            return _jsx(TiSocialInstagram, { className: classes.icon });
        if (parsedType.includes("linkedin"))
            return _jsx(FaLinkedin, { className: classes.icon });
        if (parsedType.includes("twitter"))
            return _jsx(RiTwitterLine, { className: classes.icon });
        return _jsx(HiOutlineMailOpen, { className: classes.icon });
    };
    return (_jsxs("div", { className: classes.root, children: [getIcon(type), _jsxs("div", { className: classes.textContainer, children: [_jsx("p", { className: classes.title, children: getContactInfoTitle(type) }), _jsx("p", { className: classes.subTitle, children: subtitle })] })] }));
};
var getContactInfoTitle = function (type) {
    return type.toUpperCase();
};

import { parse } from "node-html-parser";
export var useCalculateMinutesRead = function () {
    var extractTextFromHtml = function (html) {
        return parse(html !== null && html !== void 0 ? html : "<p></p>").textContent;
    };
    var calculateMinutesRead = function (content) {
        var _a;
        var wordCount = ((_a = extractTextFromHtml(content)) !== null && _a !== void 0 ? _a : content).split(/\s+/).length;
        var minutesRead = Math.ceil(wordCount / 250);
        return minutesRead <= 1 ? "1 minute read" : minutesRead + " minutes read";
    };
    return calculateMinutesRead;
};

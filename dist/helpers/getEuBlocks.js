var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
import { useEuTemplatesBlocks } from '../templates/useEuTemplateBlocks';
export function filterAndArrangeBlocks(namesToFilter) {
    var e_1, _a, e_2, _b;
    var getEuBlocks = useEuTemplatesBlocks();
    var resultMap = new Map();
    try {
        for (var _c = __values(getEuBlocks()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var block = _d.value;
            resultMap.set(block.name, block);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var filteredAndArrangedBlocks = [];
    try {
        for (var namesToFilter_1 = __values(namesToFilter), namesToFilter_1_1 = namesToFilter_1.next(); !namesToFilter_1_1.done; namesToFilter_1_1 = namesToFilter_1.next()) {
            var name_1 = namesToFilter_1_1.value;
            if (resultMap.has(name_1)) {
                filteredAndArrangedBlocks.push(resultMap.get(name_1));
                resultMap.delete(name_1);
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (namesToFilter_1_1 && !namesToFilter_1_1.done && (_b = namesToFilter_1.return)) _b.call(namesToFilter_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return filteredAndArrangedBlocks;
}

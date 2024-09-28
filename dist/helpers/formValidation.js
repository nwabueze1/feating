export function formValidation(obj) {
    if (!obj)
        return;
    var empty = [];
    for (var key in obj) {
        if (key !== "description" && !obj[key]) {
            empty.push(key);
        }
    }
    return empty;
}

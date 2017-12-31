export const findNodeUpper = (ele, tag) => {
    if (ele.parentNode && ele.parentNode.tagName === tag.toUpperCase()) {
        return ele.parentNode;
    } else {
        arguments.callee(ele.parentNode, tag);
    }
}

export const hasOneOf = (str, targetArr) => {
    let len = targetArr.length;
    let i = 0;
    while (i++ < len) {
        if (str.indexOf(targetArr[i]) >= 0) {
            
            return true;
        }
    }
    return false;
}
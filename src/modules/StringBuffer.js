/**
 * Created by yifan wang on 2018/4/9.
 */
function StringBuffer() {
    this.__strings__ = [];
}

StringBuffer.prototype.append = function (str) {
    this.__strings__.push(str);
    return this;
}

StringBuffer.prototype.toString = function () {
    return this.__strings__.join("");
}

export {StringBuffer};
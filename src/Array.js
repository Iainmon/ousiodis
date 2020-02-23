Array.prototype.first = function () {
    const first = this.shift()
    this.unshift(first)
    return first
}
Array.prototype.last = function () {
    const last = this.pop()
    this.push(last)
    return last
};
export const range = bound => [...Array(bound).keys()]
Array.prototype.range = function () {
    const lower = this.first()
    const upper = this.last()
    return [...Array(upper - lower).keys()].map(n => lower + n)
};
Array.prototype.swap = function (x, y) {
    const element = this[x]
    this[x] = this[y]
    this[y] = element
    return this
};
Array.prototype.uniques = function () {
    return [...new Set(this)]
};
Array.prototype.each = Array.prototype.forEach;

Array.prototype.max = function () {
    return Math.max(...this)
}

Array.prototype.min = function () {
    return Math.min(...this)
}

export default Array.prototype
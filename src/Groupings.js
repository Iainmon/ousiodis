const domain = function (list) {
    const min = list.min()
    const max = list.max()
    return [min, max]
};

const intersecting = function (listA, listB) {
    const setB = new Set(listB)
    return listA.uniques().filter( element => setB.has(element) )
    // return [...new Set(listA)].filter( element => setB.has(element) )
}

const union = function (listA, listB) {
    return [...listA, ...listB].uniques()
    // return [...new Set([...listA, ...listB])]
}

const exclusion = function (listA, listB) {
    const intersection = new Set(intersecting(listA, listB))
    return union(listA, listB).filter( element => !intersection.has(element) )
};
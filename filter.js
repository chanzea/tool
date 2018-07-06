// 数组去重
let filteredArray = _Array.filter((item, idx, arr) => { return arr.indexOf(item) === idx; })
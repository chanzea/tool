// 数组去重
let filteredArray = _Array.filter((item, idx, arr) => { return arr.indexOf(item) === idx; })

// 对象数组去除
let result = targetArr.filter(item => {
    return sourceArr.indexOf(item.id) < 0;
})
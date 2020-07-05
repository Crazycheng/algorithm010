学习笔记
* 深度优先搜索
* 广度优先搜索
* 贪心算法
* 二分查找
```javascript
function find (array) {
  let left = 0, right = array.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (array[mid] === target) {
        // find the target!! 
        // break or return result
    } else if (array[mid] < target) {
        left = mid + 1 
    } else {
        right = mid - 1
    }
  }
}
```

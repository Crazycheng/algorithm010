/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  // 新建一个map
  const map = new Map();
  // 新建一个数组存放结果
  const result = [];

  // 循环遍历strs内的元素
  for (let i = 0; i < strs.length; i++) {
    // 获取当前的字符串的值
    const str = strs[i]
    // 对当前的字符串进行排序
    const sortedString = str.split('').sort().join('')

    // 在map内寻找是否有相同的已经排序的字符串
    if (map.has(sortedString)) {
      // 如果有，则将当前的元素推入数组内
      map.get(sortedString).push(str)
    } else {
      // 如果没有，则新建一个key，并且将当前的字符串初始化到数组内
      map.set(sortedString, [str])
    }
  }

  // 遍历map内的所有元素，输出符合题目要求的数组
  for (let [key, list] of map.entries()) {
    result.push(list)
  }

  return result;
};

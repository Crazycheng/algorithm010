/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 解法1：排序
var isAnagram01 = function(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
};

// 解法2：哈希表
var isAnagram02 = function(s, t) {
  // 如果长度不等肯定不异位
  if (s.length !== t.length) return false;

  // 新建一个字母表，以0作为填充
  let alphabet = new Array(26).fill(0);
  // 获得a的code值
  const basicCode = 'a'.charCodeAt();

  // 遍历两个字符串
  for (let i = 0; i < s.length; i++) {
    // 如果s字符串内包含26个字母内的某个字母，则将该位置上的计数+1
    alphabet[s.charCodeAt(i) - basicCode]++
    // 如果t字符串内包含26个字母内的某个字母，则将该位置上的计数-1
    alphabet[t.charCodeAt(i) - basicCode]--
  }

  // 如果是异位词，满足数组内所有元素均为0的情况
  return alphabet.every(item => item === 0)
};

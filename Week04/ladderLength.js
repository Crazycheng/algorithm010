/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  // 将单词列表存入set中
  let wordListSet = new Set(wordList);
  // 由于题目要求：转换过程中的中间单词必须是字典中的单词，因此如果没有该单词的话，直接返回0
  if (!wordListSet.has(endWord)) {
    return 0;
  }

  // 创建一个新的set
  let beginSet = new Set();
  // 添加第一个单词
  beginSet.add(beginWord);
  // 创建一个新的set
  let endSet = new Set();
  // 在set内添加最后的结尾单词
  endSet.add(endWord)
  let level = 1;
  const startCode = 'a'.charCodeAt(0);
  // BFS
  while (beginSet.size > 0) {
    let next_beginSet = new Set();
    for (let key of beginSet) {
      for (let i = 0; i < key.length; i++) {
        for (let j = 0; j < 26; j++) {
          let s = String.fromCharCode(startCode + j);
          if (s != key[i]) {
            let new_word = key.slice(0, i) + s + key.slice(i + 1);
            if (endSet.has(new_word)) {
              return level + 1;
            }
            if (wordListSet.has(new_word)) {
              next_beginSet.add(new_word);
              wordListSet.delete(new_word);
            }
          }
        }
      }
    }
    beginSet = next_beginSet;
    level++;
    if (beginSet.size > endSet.size) {
      [beginSet, endSet] = [endSet, beginSet]
    }
  }
  return 0;
};

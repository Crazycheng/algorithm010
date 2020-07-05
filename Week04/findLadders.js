/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  let wordId = new Map();
  let idWord = [];
  let edges;

  let id = 0;
  for (let word of wordList) {
    if (!wordId.has(word)) {
      wordId.set(word, id++);
      idWord.push(word);
    }
  }

  if (!wordId.has(endWord)) {
    return [];
  }

  if (!wordId.has(beginWord)) {
    wordId.set(beginWord, id++);
    idWord.push(beginWord);
  }

  edges = new Array(idWord.length);
  for (let i = 0; i < idWord.length; i++) {
    edges[i] = [];
  }

  for (let i = 0; i < idWord.length; i++) {
    for (let j = i + 1; j < idWord.length; j++) {
      if (transformCheck(idWord[i], idWord[j])) {
        edges[i].push(j);
        edges[j].push(i);
      }
    }
  }

  let dest = wordId.get(endWord);
  let res = [];
  let cost = new Array(id);
  for (let i = 0; i < id; i++) {
    cost[i] = Number.MAX_VALUE;
  }

  let queue = [];
  let tmpBegin = [];
  tmpBegin.push(wordId.get(beginWord));
  queue.unshift(tmpBegin);
  cost[wordId.get(beginWord)] = 0;

  while (queue.length !== 0) {
    let now = queue.pop();
    let last = now[now.length - 1];

    if (last === dest) {
      let tmp = [];
      for (let index of now) {
        tmp.push(idWord[index]);
      }
      res.push(tmp);
    } else {
      for (let i = 0; i < edges[last].length; i++) {
        let to = edges[last][i];
        if (cost[last] + 1 <= cost[to]) {
          cost[to] = cost[last] + 1;
          let tmp = now.map(ele => ele);
          tmp.push(to);
          queue.unshift(tmp);
        }
      }
    }
  }

  function transformCheck(str1, str2) {
    let diff = 0;
    for (let i = 0; i < str1.length && i < str2.length && diff < 2; i++) {
      if (str1.charAt(i) !== str2.charAt(i)) {
        diff++;
      }
    }
    return diff === 1;
  }


  return res;
};

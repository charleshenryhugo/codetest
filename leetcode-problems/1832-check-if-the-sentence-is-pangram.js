// 1832 https://leetcode.com/problems/check-if-the-sentence-is-pangram/
/**
 * @param {string} sentence
 * @return {boolean}
 */
 const checkIfPangram = function(sentence) {
  let appeared = 0;
  const base = 'a'.charCodeAt();
  
  for (const c of sentence) {
    appeared |= 1 << (c.charCodeAt() - base);
  }
  
  return appeared + 1 === 1 << 26;
};
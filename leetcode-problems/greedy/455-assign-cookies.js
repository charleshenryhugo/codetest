// 455 https://leetcode.com/problems/assign-cookies/
/**
 * @param {number[]} g children greed factors
 * @param {number[]} s cookie sizes
 * @return {number}
 */
 const findContentChildren = function(g, s) {
  const greedFactors = g.sort((a, b) => a - b);
  const cookieSizes = s.sort((a, b) => a - b);
  
  let i = 0;
  let j = 0;
  while (i < greedFactors.length && j < cookieSizes.length) {
    if (cookieSizes[j] >= greedFactors[i]) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  
  return i;
};
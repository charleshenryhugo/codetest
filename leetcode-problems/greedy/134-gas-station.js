// 134 https://leetcode.com/problems/gas-station/
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 const canCompleteCircuit = function(gas, cost) {
  let tank = 0;
  let i = 0;
  
  while (i < gas.length) {
    // console.log('trying i = ', i, 'left: ', gas[i] - cost[i])
    if (gas[i] - cost[i] < 0) {
      // console.log(gas[i] - cost[i]);
      i++;
      continue;
    }
    
    let j = i;
    for (; j < i + gas.length && tank >= 0; j++) {
      // console.log('i:',  i, 'j:', j)
      // console.log(gas[j % gas.length] - cost[j % cost.length])
      tank += gas[j % gas.length] - cost[j % cost.length];
    }
    
    // run a loop and tank is still >= 0, then i is the desired index
    if (tank >= 0) {
      return i; 
    }
    
    // run a complete loop and tank < 0. then there must be no desired index
    if (tank < 0 && j === i + gas.length) {
      return -1; 
    }
    
    // not yet finish a loop, but tank is already < 0
    i = j;
    tank = 0;
    continue;
  }
  
  return -1;
};

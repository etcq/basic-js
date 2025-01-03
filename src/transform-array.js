const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    const error = new Error('\'arr\' parameter must be an instance of the Array!');
    throw error;
  }
  if (arr.length === 0 || arr.every((i) => typeof i !== 'string')) {
    return arr
  }
  let result = [...arr];
  for (let i = 0; i < result.length; i++) {
    if (typeof result[i] === 'string' && result[i].includes('--')) {
      result = move[result[i]](result, i);
    }
    
  }
  return result;
}

const move = {
  '--discard-next': function (arr, target) {
    if (target === arr.length - 1) {
      return arr.slice(0, -1); 
    }
    return [...arr.slice(0, target), ...arr.slice(target + 2)]
  },

  '--discard-prev': function (arr, target) {
    if (target === 0) {
      return arr.slice(1); 
    }
    return [...arr.slice(0, target - 1), ...arr.slice(target + 1)]
  },

  '--double-prev': function double(arr, target) {
    if (target === 0) {
      return arr.slice(1); 
    }
    return [...arr.slice(0, target - 1), arr[target - 1], ...arr.slice(target + 1)] 
   },

  '--double-next': function double(arr, target) {
    if (target === arr.length - 1) {
      return arr.slice(0, -1); 
    }
    return [...arr.slice(0, target), arr[target + 1], ...arr.slice(target + 1)] 
   }
}




module.exports = {
  transform
};

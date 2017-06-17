
export const isNumberEven = (i) => {
  return i % 2 === 0 ? true : false;
  // i will be an integer.
  // Return true if it's even, and false if it isn't.
};

export const getFileExtension = (str) => {
    var ms = str.split('.');
    if (ms.length == 1) {
      return false;
    }
    return ms[ms.length - 1];

/*  var st = str.split('.');
  var st1 = st.length > 1 ? st[1]: st[1];
  return st[1] ? st1 : false;*/
  // str will be a string, but it may not have a file extension.
  // Return the file extension (with no period) if it has one, otherwise false
};

export const longestString = (arr) => {
  // arr will be an array.
  // Return the longest string in the array
  return arr.reduce(function(a, b){return a.length > b.length ? (typeof a === 'string' ? a : false) : (typeof b === 'string' ? b : false); });
};

export const reverseString = (str) => {
  // str will be an string
  // Return a new string who's characters are in the opposite order to str's.
  return str.split('').reverse().join('');
};

export const isPalindrome = (str) => {
  var str1 = str.toLowerCase(); 
  // str will be an string
  // Return true if it is a palindrome and false otherwise.
  // It should be case insensitive and not consider space or punctuation.
  return str1.split('').reverse().join('') === str1 ? true : false;
};

export const nestedSum = (arr) => {
  // arr will be an array, containing integers, strings and/or arrays like itself
  // Return the sum all the numbers you find, anywhere in the nest of arrays.

/*  function deepArr (c) { 
    var summ = 0;
    return c.reduce(function(elem, arr) {
      if (Array.isArray(elem)) {
        return deepArr(arr)
      }
      summ += elem;
      return summ;
  })*/
/*    for (elem in a) {
      if (typeof elem === 'number') {
        return summ += elem;
      } else if (typeof elem  === 'Array') {
        return deepArr(elem);
      } else {
        return summ;
      }
    }*/
    var deepArr = (a) => {
      var store = 0;
      return function() {
        var recurFunc = (b) => {
          if (Array.isArray(b) && b !== '') {
            return b.map(recurFunc);
          }
          if (Number.isInteger(b)) {
            store += b;            
          }
          return b;
        }
        a.map(recurFunc);
        return store > 0 ? store : 0;
      }
    };

  return deepArr(arr)();
};

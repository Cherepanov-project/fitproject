

let word = function(word){
  let arr = [];
  let z = 1;
  for (let i = 1; i < word.length; i++) {
    while (word[i - z] === word[i + z]) {
      arr.push(word.slice(i - z,i + z));
      z++;
    }
  }
  return arr;
};

console.log(word('abababalan'));

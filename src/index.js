module.exports = function multiply(first, second) {
  if(Number.isSafeInteger(first * second)) {
      return String(first * second);
  }
  const firstArr = first.split('').reverse();
  const secondArr = second.split('').reverse();

  let res = []

  for (let i = 0; i < firstArr.length; i++) {
      for (let j = 0; j < secondArr.length; j++) {
          if(!res[i+j]) {
              res[i+j] = 0;
          }
         res[i+j] += firstArr[i] * secondArr[j];

      }       
  }
  for (let i = 0; i < res.length; i++) {
      if (res[i] > 9) {
          let next = Math.trunc(res[i]/10);
          res[i] = res[i]%10;
          res[i+1] = (res[i+1] || 0) + next;
      }
      
  }
  return res.reverse().join('');
}

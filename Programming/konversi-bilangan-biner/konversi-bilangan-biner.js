// Soal:

// You are given a string S of length N which encodes a non-negative number V in a binary form. two types of operations may be performed on it to modify its value;

// - if V is odd, substract 1 from it;
// - if V is even, divide it by 2.

// these operations are performed until the value of V becomes 0.

// for example, if string S = "011100", its value V initially is 28. the value of V would change as follows:

// - V = 28, which is even: divide by 2 to obtain 14;
// - V = 14, which is even: divide by 2 to obtain 7;
// - V = 7, which is odd: subtract 1 to obtain 3;
// - V = 6, which is even: divide by 2 to obtain 3;
// - V = 3, which is odd: subtract 1 to obtain 2;
// - V = 2, which is even: divide by 2 to obtain 1;
// - V = 1, which is odd: subtract 1 to obtain 0;

// Seven operations were required to reduce he value of V to 0.

// write a function:

// class Solution {public int solution(String S); }

// that, given a string S consisting of N characters containing a binary representation of the initial value V, returns the number of operations after which its value will become 0.

// examples:
// 1. given S = "011100", the function should return 7. string S represents the number 28, which becomes 0 after seven operations, as explained above.

// 2. given S = "111", the function should return 5. string S encodes the number V = 7. its value will change over the following five operations:

// - V = 7, which is odd: subtract 1 to obtain 6;
// - V = 6, which is even: divide by 2 to obtain 3;
// - V = 3, which is odd: subtract 1 to obtain 2;
// - V = 2, which is even: divide by 2 to obtain 1;
// - V = 1, which is odd: subtract 1 to obtain 0;

// 3. given S = 11111010101111", the function should return 22.

// 4. given string S consisting of "1" repeated 400,000 times, the function should return 799,999.

// write an efficient algorithm for the following assumptions:
// - String S is made only of the characters '0' and/or '1';
// - N, which is the length of string S, is an integer within the range [1..1,000,000];
// - the binary representation is big-endian, i.e. the first character of string S corresponds to the most significant bit;
// - the binary representation may contain leading zeros.

function solution(S) {
  const n = S.length;
  let v = 0;
  for (let i = 0; i < n; i++) {
    v = v * 2 + parseInt(S.charAt(i));
  }
  let count = 0;
  while (v > 0) {
    if (v % 2 === 1) {
      v--;
    } else {
      v /= 2;
    }
    count++;
  }
  return count;
}

console.log(solution("011100")); // output: 7
console.log(solution("111")); // output: 5
console.log(solution("1111010101111")); // output: 22

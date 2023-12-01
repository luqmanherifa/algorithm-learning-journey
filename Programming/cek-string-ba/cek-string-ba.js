function solution(S) {
  for (let i = 1; i <= S.length; i++) {
    if (S[i - 1] === "b" && S[i] === "a") {
      return false;
    }
  }
  return true;
}

console.log(solution("hello world"));
console.log(solution("abba"));
console.log(solution("aaabbbba"));
console.log(solution("bbbbaaab"));
console.log(solution("aaaabbbb"));
console.log(solution("aabbbbab"));

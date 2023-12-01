// Soal:

// Write a function solution that, given and array A of N integers in that array (counting from the left). if there are fewer than three positive numbers then sum all of the positive numbers that are present.

// examples:

// 1. given A = [4, -2, 0, 5, -2, 1, 6], the function should return 10 (the first three positive integers are 4,5,1).

// 2. given A = [3, -2, 0], the function should return 3. there is only one positive number (3), so only that number is the component of the result.

// 3. given A = [-9, -4, -2, -6], the function should return 0. noneof the numbers is positive.

// assume that:
// N is an integer within the range [1..1,000];
// each element of array A is an integer within the range [-1,000,000..1,000,000].

// in your solution, focus on correctness. the performance of your solution will not be the focus of the assessment.

function solution(A) {
  let posNum = 0;
  let posSum = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      posNum++;
      posSum += A[i];
      if (posNum === 3) {
        return posSum;
      }
    }
  }
  return posSum;
}

console.log(solution([4, -2, 0, 5, -2, 1, 6])); // Output: 10
console.log(solution([3, -2, 0])); // Output: 3
console.log(solution([-9, -4, -2, -6])); // Output: 0

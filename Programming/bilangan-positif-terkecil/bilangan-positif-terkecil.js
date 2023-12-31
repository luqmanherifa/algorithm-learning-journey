// Soal:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(A) {
  // menyaring nilai yang lebih besar dari nol dan membuang nilai yang duplikat
  const positiveIntegers = [...new Set(A.filter((num) => num > 0))];

  // menyortir nilai yang tersisa
  positiveIntegers.sort((a, b) => a - b);

  // mencari bilangan bulat positif terkecil yang tidak ada dalam array
  let smallestPositiveInt = 1;
  for (let i = 0; i < positiveIntegers.length; i++) {
    if (positiveIntegers[i] === smallestPositiveInt) {
      smallestPositiveInt++;
    } else if (positiveIntegers[i] > smallestPositiveInt) {
      break;
    }
  }

  return smallestPositiveInt;
}

// contoh penggunaan
const A = [1, 3, 6, 4, 1, 2];
console.log(solution(A)); // output: 5

const B = [1, 2, 3];
console.log(solution(B)); // output: 4

const C = [-1, -3];
console.log(solution(C)); // output: 1

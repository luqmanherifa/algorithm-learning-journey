// Input merupakan sebuah array of number yang direpresentasikan sebagai variable arr dan terdiri dari N yang merupakan panjang array yang akan diikuti element array di bawahnya

// smallestMissingPositive merupakan sebuah fungsi yang akan mengembalikan number dengan nilai positif terkecil (tidak termasuk 0) yang tidak ada pada array.

// ketentuan:
// - panjang array maksimal 10
// - kemungkinan nilai number pada array ada di rentang (-99) - 99

// Contoh 1 :
// input : smallestMissingPositive([-8, 1, 4, 3])
// output : 2. Bilangan positif terkecil adalah 1, tetapi yang terkecil dan hilang dari array adalah 2.

// Contoh 2 :
// input : smallestMissingPositive([86,13,67,13])
// output : 1. Bilangan positif terkecil yang hilang dari array adalah 1.

function smallestMissingPositive(arr) {
  // Mencari bilangan positif terkecil yang tidak ada dalam array
  for (let i = 1; i <= 100; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
  return 101; // Jika semua bilangan 1-100 sudah ada dalam array
}

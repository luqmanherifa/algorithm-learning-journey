// Soal:

// Input merupakan sebuah array of number yang direpresentasikan sebagai variable arr dan terdiri dari N yang merupakan panjang array yang akan diikuti element array di bawahnya

// Terdapat n buah bank yang berdampingan dalam satu jalan. Setiap bank mempunyai batang emas yang mereka simpan dan dinyatakan dalam sebuah number x.

// Anda akan mencoba mencuri batang emas bank-bank ini dengan kondisi setiap bank memiliki sistem pendeteksi pencuri. Sistem ini akan tahu kamu mencoba mencuri mereka jika kamu mencuri dari 2 bank yang bersebelahan.

// totalGoldBar merupakan sebuah fungsi yang mengembalikan total emas batang maksimal yang bisa kamu curi.

// ketentuan:
// - jumlah bank di rentang 1-34
// - jumlah batang emas per-bank di rentang 0-10

// Contoh 1 :
// input : totalGoldBar([2,0,1])
// output : 3
// Explanation: Curi di bank 1 dan 3 (2 + 1 = 3).

// Contoh 2 :
// input : totalGoldBar([2,1,9,10,1])
// output : 12
// Explanation: Curi di bank 1, 3, 5 (2 + 9 + 1 = 12).

function totalGoldBar(arr) {
  let prevMax = 0;
  let currMax = 0;
  for (let i = 0; i < arr.length; i++) {
    const temp = currMax;
    currMax = Math.max(prevMax + arr[i], currMax);
    prevMax = temp;
  }
  return currMax;
}

const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = function(daftarNama, cbMelakukanSorting){
  const sortingan = cbMelakukanSorting(daftarNama)
  const sortinganBaru = []
  for (let i = 0; i < sortingan.length; i++) {
    let penamaanBaru = i + 1 + ". " + sortingan[i]
    sortinganBaru.push(penamaanBaru);
  }
  return sortinganBaru;
};


// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = function (dataArray){
  return dataArray.sort();
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = function (dataArray){
  return dataArray.sort().reverse();
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};

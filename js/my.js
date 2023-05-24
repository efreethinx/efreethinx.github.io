//   Tahun pada copyright
let th = new Date();
document.getElementById("tahun").innerHTML = th.getFullYear();

// Menampilkan Nama Bulan, Hari, dan Jam Saat Ini
// Hasil : Tanggal/Waktu: Rabu, 19 Februari 2020 Jam 14:44 W.I.B
var tw = new Date();
if (tw.getTimezoneOffset() == 0) a = tw.getTime() + 7 * 60 * 60 * 1000;
else a = tw.getTime();
tw.setTime(a);
var tahun = tw.getFullYear();
var hari = tw.getDay();
var bulan = tw.getMonth();
var tanggal = tw.getDate();
var hariarray = new Array(
  "Minggu,",
  "Senin,",
  "Selasa,",
  "Rabu,",
  "Kamis,",
  "Jum'at,",
  "Sabtu,"
);
var bulanarray = new Array(
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "Nopember",
  "Desember"
);
document.getElementById("tanggalwaktu").innerHTML =
  hariarray[hari] +
  " " +
  tanggal +
  " " +
  bulanarray[bulan] +
  " " +
  tahun +
  " Jam " +
  (tw.getHours() < 10 ? "0" : "") +
  tw.getHours() +
  ":" +
  (tw.getMinutes() < 10 ? "0" : "") +
  tw.getMinutes() +
  " W.I.B ";

// Next

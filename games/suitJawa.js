var tanya = true
while(tanya){
// menangkap pilihan player
var p = prompt("pilih : gajah, semut, orang");

// menangkap pilihan komputer
// membangkitkan bilangan random
var comp = Math.random();

if (comp < 0.34) {
  comp = "gajah";
} else if (comp >= 0.34 && comp < 0.67) {
  comp = "orang";
} else {
  comp = "semut";
}

// menentukan rules
var hasil = "";

// kode pertama
if (p == comp) {
  hasil = "SERI!";
} else if (p == "gajah") {
  //   if (comp == "orang") {
  //     hasil = "MENANG!";
  //   } else {
  //     hasil = "KALAH!";
  //   }
  // } else if (p == "orang") {
  //   if (comp == "gajah") {
  //     hasil = "KALAH!";
  //   } else {
  //     hasil = "MENANG!";
  //   }
  // } else if (p == "semut") {
  //   if (comp == "gajah") {
  //     hasil = "MENANG!";
  //   } else {
  //     hasil = "KALAH!";
  //   }
  // }

  //kode kedua
  hasil = comp == "orang" ? "MENANG!" : "KALAH!";
} else if (p == "orang") {
  hasil = comp == "gajah" ? "KALAH!" : "MENANG!";
} else if (p == "semut") {
  hasil = comp == "orang" ? "KALAH!" : "MENANG!";
} else {
    hasil = 'memasukkan pilihan yang salah!';
}

// menampilkan hasil
alert("Komputer memilih " + comp + " dan kamu memilih " + p + '\nmaka hasilnya : ' + hasil);

tanya = confirm('lagi?')
}
alert('Terimakasih sudah bermain!')
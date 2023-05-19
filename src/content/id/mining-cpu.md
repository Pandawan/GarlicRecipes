### Peringatan: Penambangan CPU tidak disarankan karena kemungkinan menambang blok dengannya sangat rendah. Coba penambangan GPU sebagai gantinya.

# Daftar isi

- [Windows](#windows)
- [Mac](#mac)
- [Linux](#linux)
- [Pemecahan masalah](#troubleshooting)

# Windows

Pastikan Anda telah menyiapkan dompet dan jaringan Anda berjalan dengan benar! Anda dapat melihat [Panduan Dompet Windows](wallet-win.html) untuk mempelajari lebih lanjut.

## Langkah 1: Mengunduh File

Pertama, Anda harus mengunduh file penambang CPU [di sini](https://mega.nz/#!h15wFQAT!A0J5ZQDUKXRJbvGDUfvsyRQyERc-Gu1EuLcDSH_9EGU).
Ekstrak file di folder instalasi Anda (jika Anda telah mengikuti panduan dompet, itu seharusnya `C:\Garlic\`).

![Gambar File Penambang CPU](https://i.imgur.com/6Nwy2dC.png)

## Langkah 2: (Disarankan) Siapkan Penambangan Pool

Penambang ini menggunakan sistem yang berbeda untuk berbagai jenis CPU. Ikuti bagian untuk CPU Anda sendiri.
Jika Anda memiliki Intel i7, petunjuknya berbeda dari CPU Intel lainnya.

**Karena Pool Mining sangat disarankan, kami akan melakukannya.**
**Anda dapat mempelajari lebih lanjut tentang perbedaan antara Penambangan Solo dan Pool [di sini](how-to-mine.html#solo-vs-pool).**
**Jika Anda memilih Tambang Solo, Anda dapat melompat ke bagian tersebut [di sini](#langkah-4-opsional-penambangan-solo).**

Edit file `Run-Miner-Pool-CPU.bat` (Klik Kanan > Edit) dan ubah kumpulan (`POOL`) ke kumpulan mana saja.
Kemudian ubah alamat (`ADDRESS`) menjadi apa pun alamat Garlicoin Anda.

![Gambar File bat Untuk Kolam](https://i.imgur.com/puFRTqU.png)
_Gambar ini mungkin kedaluwarsa, jangan mencoba menyalin kontennya. Gunakan file yang diberikan sebagai gantinya._
<br />

## Langkah 3: Mulai Penambang

Anda sekarang dapat mulai menambang dengan Pool. Cukup jalankan `Run-Miner-Pool-CPU.bat` Anda dan Anda akan baik-baik saja.
Jika konsol mengembalikan sesuatu seperti _[2018-01-06 23:00:23] diterima: 4/4 (diff 0,000), 82,67 kH/s ya!_ maka Anda mendapatkan bagian yang diterima!

## Langkah 4: (Opsional) Siapkan Penambangan Solo

Jika Anda ingin Menambang Solo alih-alih dengan Pool (Anda dapat mempelajari lebih lanjut perbedaannya [di sini](how-to-mine.html#solo-vs-pool)), ikuti langkah-langkah ini.
<br>

### Jaringan Penambangan Tunggal

**Seperti penyiapan dalam panduan dompet, pastikan jaringan Anda berjalan. (Anda dapat melakukannya dengan menjalankan `Run-Network.bat` jika Anda belum melakukannya).**

### Mempersiapkan

Edit file `Run-Miner-Solo-CPU.bat` (Klik Kanan > Edit), dan kali ini, hanya ubah alamat (`ADDRESS`, yang setelah `--coinbase-addr=`) ke alamat Anda.
Karena tidak ada kumpulan, Anda tidak perlu mengubah apa pun di file.

![Gambar Bat File Untuk Solo](https://i.imgur.com/n6CyWMp.png)
_Gambar ini mungkin kedaluwarsa, jangan mencoba menyalin kontennya. Gunakan file yang diberikan sebagai gantinya._
<br>

### Mulai Menambang

Anda sekarang dapat menambang sendiri. Cukup jalankan `Run-Miner-Solo-CPU.bat` Anda dan Anda akan baik-baik saja.
Jika konsol mengembalikan sesuatu seperti _[2018-01-06 23:00:23] diterima: 4/4 (diff 0,000), 82,67 kH/s ya!_ maka Anda telah menambang satu blok!

# Mac

Panduan Mac saat ini tidak tersedia. Jika Anda ingin berkontribusi pada situs ini, harap buat permintaan penarikan [di sini](https://github.com/Pandawan/GarlicRecipes/pulls).
Untuk saat ini, Anda dapat mengikuti [panduan ini](https://gist.github.com/Pandawan/7c0c500ee679eac799ec4b92a225f816) aslinya oleh `@Vilsol#2060`, yang akan membantu Anda (walaupun tidak sedetail panduan normal ).

# Linux

## Langkah 1: Unduh dan bangun cpuminer-multi

Clone dari [project Github repo](https://github.com/GarlicoinOrg/cpuminer-multi) ke direktori pilihan Anda. Ikuti petunjuk di README proyek, jalankan `./build.sh` di direktori baru, dan instal semua prasyarat yang ditentukan oleh lingkungan Anda.

## Langkah 2: Jalankan Miner

### Langkah 2a: (Disarankan) Jalankan Penambang di Kolam

Anda harus menentukan alamat kumpulan, dompet Anda, dan algoritme:
`./cpuminer --algo=allium -o stratum+tcp://pool.grlc-bakery.fun:3333 -u <alamat dompet Anda di sini>`
Ini menggunakan kumpulan berikut: `grlc-bakery.fun`, Anda dapat melihat daftar kumpulan [di sini](pool-mining.html#main-net)

### Langkah 2b: Jalankan Miner Solo

Saat menjalankan simpul secara lokal, Anda akan menentukan alamat simpul, dompet, dan algoritme Anda:
`./cpuminer --algo=allium -o 127.0.0.1:42070 -u <alamat dompet Anda di sini>`

Sekarang Anda akan melihat hashrate Anda dan, pada akhirnya, pemblokiran terkonfirmasi.

# Penyelesaian masalah

## Permintaan HTTP gagal: Gagal terhubung ke port 127.0.0.1 42070: Koneksi ditolak

Jika Anda mencoba menambang Solo, pastikan jaringan Anda berjalan! Anda dapat melihat cara mengaturnya di panduan dompet:

- [Windows](./wallet-win.html)
- [Mac](./wallet-mac.html)
- [Linux](./wallet-nix.html)
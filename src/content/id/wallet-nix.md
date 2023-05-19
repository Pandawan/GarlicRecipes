# Daftar isi

- [Menyiapkan Jaringan](#setting-up-the-network)
- [Mendapatkan Dompet](#getting-a-wallet)

# Menyiapkan Jaringan

Menyiapkan jaringan cepat dan sangat mudah. Ini memungkinkan komputer Anda terhubung ke Jaringan Garlicoin.

## Langkah 1. Mengunduh File

Pertama, Anda harus mengunduh rilis terbaru untuk linux [di sini](https://github.com/GarlicoinOrg/Garlicoin/releases) serta file mulai cepat [di sini](ROOT/files/wallet-nix.zip ).
Gunakan Garlicoin-x86_64-unknown-linux-gnu.tar.gz terbaru untuk sistem 64 bit apa pun.
Setelah selesai, buka file dan ekstrak semua isinya ke dalam folder.

## Langkah 2. Menghubungkan ke Jaringan

Arahkan ke folder Garlic Anda menggunakan `cd`.
Setelah selesai, jalankan perintah: `./garlicoind` di terminal.
<br>

Program tidak akan mengatakan apa-apa, biarkan saja di latar belakang. **Jangan ditutup.**
_Anda harus menjalankan ini kapan saja Anda ingin menggunakan dompet Anda (atau saat penambangan solo)._

## Langkah 3. Memindahkan File .conf ke Roaming\Garlicoin

Kembali ke folder Garlic Anda, seharusnya ada file bernama `garlicoin.conf`. File ini perlu dipindahkan ke folder `.garlicoin` yang ditemukan di direktori home Anda.

## Langkah 4. Mulai ulang Jaringan

Hanya untuk memastikan bahwa semuanya dilakukan dengan benar. Tutup koneksi Jaringan Anda dengan menahan **Ctrl + C**. di terminal tempat Anda memulainya, atau dengan menutup terminal itu.
Sekarang ulangi **Langkah 2**, Anda harus melakukannya dengan baik.
<br>

## Langkah 5. Unduh Blockchain

Sambil membiarkan terminal jaringan Anda tetap terbuka, buka terminal baru.
Arahkan ke folder Garlicoin Anda dan ketik `./garlicoin-cli getblockchaininfo`.
Perintah ini menampilkan informasi tentang blockchain yang telah Anda unduh, nilai `blok` di atas adalah jumlah blok yang telah diterima. Anda dapat menjalankan perintah ini beberapa kali untuk memeriksa status. Setelah mencapai nilai [di sini](https://garli.co.in/api/getblockcount) sinkronisasi blockchain Anda selesai.

# Mendapatkan Dompet

Setelah Anda mengaktifkan dan menjalankan Jaringan, Anda perlu mendapatkan alamat dompet.
Buka Terminal dan arahkan ke folder bawang putih lagi.

## Mendapatkan Alamat Baru

Di terminal, ketikkan perintah ini: `./garlicoin-cli getnewaddress`.
Ini harus mengembalikan serangkaian huruf dan angka. Ini adalah alamat Anda. Pastikan Anda menyalinnya dan menyimpannya di suatu tempat.

_Kapan pun seseorang ingin membayar Anda, Anda dapat mengirimkan alamat ini_

Secara default dompet Anda dibuat di direktori home Anda di `~/.garlicoin/wallet.dat`

## Mendapatkan Info Dompet

Untuk memastikan bahwa Anda telah melakukan semuanya dengan benar (atau untuk melihat saldo Anda), Anda dapat mengetik: `./garlicoin-cli getwalletinfo` di terminal saat jaringan sedang berjalan.
Ini akan memberi Anda informasi tentang saldo Anda, dompet, kapan transaksi terakhir Anda ...
<br>

## Mencadangkan Dompet

Terkadang, aplikasi dompet bisa gagal dan merusak dompet. Jika Anda ingin mencadangkannya sebelum itu terjadi (untuk memulihkannya seandainya rusak), ikuti langkah-langkah berikut:
Di terminal (saat jaringan sedang berjalan), ketikkan perintah: `./garlicoin-cli backupwallet <path>`.
Ini akan menyimpan file `wallet.dat` di jalur yang diberikan. Jika dompet Anda rusak, navigasikan ke folder ini:
`~/.garlicoin/`
dan timpa file `wallet.dat` di dalam folder dengan file cadangan.

## Mengirim ke Orang Lain

Jika Anda ingin mengirim Garlicoin ke seseorang. Anda dapat menggunakan perintah ini `./garlicoin-cli sendtoaddress <address> <amount>`.

Itu dia! Kamu selesai!
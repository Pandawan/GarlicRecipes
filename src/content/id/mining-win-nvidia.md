# Daftar isi

- [Pool Mining (Disarankan)](#pool-mining)
- [Penambangan Solo](#solo-mining)
- [Meningkatkan Performa](#improving-performances)
- [Pemecahan masalah](#troubleshooting)
- [MisasMinerSetup](https://github.com/MisaRistolainen/MisasMinerSetup)

# Penambangan Kolam

Pastikan Anda sudah menyiapkan dompet! Anda dapat melihat [Panduan Dompet Windows](wallet-win.html) untuk mempelajari lebih lanjut.
Penambangan kolam tidak mengharuskan jaringan berjalan.

## Langkah 1: Mengunduh File

Unduh [Pool Miner](https://github.com/lenis0012/ccminer/releases/latest) spesial ini (unduh `ccminer-x64.exe` untuk Windows 64bit atau `ccminer-x86.exe` untuk Windows 32bit). Letakkan file itu di foldernya sendiri (mungkin _Pool Nvidia Miner_).

## Langkah 2: Menyiapkan Penambang

Sekarang Anda ingin membuat file teks baru dan mengganti namanya menjadi `Run-Miner-Pool-Nvidia.bat` (**Pastikan file diakhiri dengan .bat**).
Edit file (Klik Kanan > Edit), dan masukkan ini

```
ccminer-x64 --algo=allium -o KOLAM -u ALAMAT --max-temp=85
berhenti sebentar
```

Kemudian, ganti `POOL` ke alamat kumpulan (Anda dapat menemukan beberapa kumpulan yang tersedia [di sini](pool-mining.html#main-net)).
Setelah selesai, ganti `ADDRESS` (yang tepat setelah `-u`) ke alamat Anda.
Langkah keamanan telah ditambahkan untuk mencegah kartu grafis Anda dari kepanasan (`--max-temp=85`). Hapus opsi ini hanya jika Anda tahu apa yang Anda lakukan. Anda dapat melihat suhu maksimal spesifik untuk GPU Anda [di sini](#max-temperature).

## Langkah 3: Mulai Menambang

Anda dapat membuka `Run-Miner-Pool-Nvidia.bat`!
Penambang mungkin memerlukan beberapa saat untuk mengkalibrasi, bisa memakan waktu antara 1 hingga 10 menit.

# Penambangan Solo

**PERINGATAN: Penambangan Solo belum diuji dengan algoritme Allium!**
Pastikan Anda telah menyiapkan dompet dan jaringan Anda berjalan dengan benar! Anda dapat melihat [Panduan Dompet Windows](wallet-win.html) untuk mempelajari lebih lanjut.

## Langkah 1: Mengunduh File

Pertama, Anda ingin mengunduh [Solo Miner](https://github.com/beanjo55/ccminer-nanashi/releases/latest) khusus ini (yang ini hanya berfungsi untuk Solo Mining) dan mengekstraknya ke foldernya sendiri (mungkin _Solo Penambang Nvidia_).

## Langkah 2: Menyiapkan Penambang

Baik Anda dapat menggunakan file `run.bat` yang diberikan, atau Anda dapat membuatnya sendiri. Itu berakhir dengan hal yang sama.
Jika Anda menggunakan file `run.bat`, pastikan Anda mengubah alamatnya menjadi alamat Anda sendiri.

<br />

Sekarang Anda ingin membuat file teks baru di dalam folder _Miner_ itu dan mengganti namanya menjadi `Run-Miner-Solo-Nvidia.bat` (**Pastikan file diakhiri dengan .bat**).
Edit file (Klik Kanan > Edit), dan masukkan ini:

```
ccminer.exe --algo=allium -o 127.0.0.1:42068 -u uji -p uji --coinbase-addr=ALAMAT --no-stratum --no-longpoll --max-temp=85
berhenti sebentar
```

(pastikan Anda mengganti `ADDRESS` ke alamat Anda).
Langkah keamanan telah ditambahkan untuk mencegah kartu grafis Anda dari kepanasan (`--max-temp=85`). Hapus opsi ini hanya jika Anda tahu apa yang Anda lakukan. Anda dapat melihat suhu maksimal spesifik untuk GPU Anda [di sini](#max-temperature).

## Langkah 3: Mulai Menambang

Pastikan jaringan Anda berjalan, dan Anda dapat membuka `Run-Miner-Solo-Nvidia.bat`!
Penambang mungkin memerlukan beberapa saat untuk mengkalibrasi, bisa memakan waktu antara 1 hingga 10 menit.

# Meningkatkan Performa

Berikut adalah beberapa langkah yang dapat Anda ambil untuk meningkatkan kinerja Anda. Ini mungkin tidak bekerja untuk semua orang, jadi jangan ragu untuk bermain-main dengannya.

## Suhu Maks

**Suhu 85C direkomendasikan untuk sebagian besar GPU, tetapi beberapa GPU dapat mendukung lebih banyak.**

Jika Anda tidak dapat menambang karena suhu GPU Anda di atas 85C, Anda dapat memeriksa suhu maksimal yang disarankan untuk GPU Anda (Nvidia) di sini: https://www.geforce.com/hardware/desktop-gpus
(Cari GPU Anda, klik Info Lebih Lanjut, lalu di sebelah kiri, klik Spesifikasi, harus ada entri bernama `Maximum GPU Temperature (in C)`).

Anda kemudian dapat mengedit `--max-temp` ke suhu berapa pun yang Anda inginkan.

_Kami tidak bertanggung jawab atas segala kerusakan yang mungkin terjadi saat menambang. Gunakan dengan risiko Anda sendiri._

# Penyelesaian masalah

## kesalahan get_work

Jika Anda mendapatkan kesalahan get_work, berarti ada yang salah dengan jaringan Anda.
Berikut adalah beberapa langkah untuk memecahkan masalah:

- Pastikan jaringan Anda (`garlicoind`) berjalan
- Pastikan Anda telah menambahkan file .conf di /Roaming/Garlicoin Anda.
- Jika Anda _solo mining_, Pastikan penambang dan file .conf Anda menggunakan port `42068` (bukan `42070`).
- Periksa apakah jaringan Anda telah mengunduh semua blockchain (Lihat [Langkah 5 Panduan Wallet](./wallet-win.html#step-5-download-the-blockchain)).
- Jika masih tidak berhasil, pastikan Anda menggunakan penambang yang benar dengan file `bat` yang benar, Solor Miner berbeda dengan Pool.

## semua perangkat berkemampuan cuda sedang sibuk atau tidak tersedia

Menonaktifkan faktor DSR di panel kontrol nvidia harus memperbaiki kesalahan.

## Melakukan spam 0 kH/dtk

- Menonaktifkan faktor DSR di panel kontrol nvidia harus memperbaiki kesalahan.
- Jika itu tidak berhasil dan Anda memiliki **GPU lama**, Anda kurang beruntung. Penambang baru yang mendukung allium tidak kompatibel dengan GPU lama (dengan Kemampuan Hitung lebih rendah dari 3.0).

## tidak ada perangkat berkemampuan CUDA yang terdeteksi

- Pastikan Anda telah memperbarui Driver Nvidia Anda dan Kartu Grafis Anda dapat ditemukan di [daftar ini](https://developer.nvidia.com/cuda-gpus) (Kemampuan Komputasi minimum adalah 3.0).
- Jika Kemampuan Hitung Kartu Grafis Anda 2.1 atau lebih rendah, Anda kurang beruntung. Penambang baru yang mendukung allium tidak kompatibel dengan GPU lama (dengan Kemampuan Hitung lebih rendah dari 3.0).

## Akses ditolak

Periksa antivirus Anda, mungkin mencegah jaringan berfungsi

## MEMBANTU!

Jika langkah pemecahan masalah di atas tidak berhasil. Anda dapat bertanya di obrolan Discord `#troubleshooting` atau `#windows-mining` atau hubungi saya `@Pandawan#4158`.

# Daftar isi

- [NVIDIA Mining](#nvidia-mining)
- [AMD Mining](#amd-mining)
- [Pemecahan masalah](#pemecahan masalah)
- [Meningkatkan Performa](#improving-performances)

Pastikan Anda sudah menyiapkan dompet! Anda dapat melihat [Garlium](https://github.com/garlicoin-project/garlium/releases/tag/v2.0.0) atau [Linux Wallet Guide](wallet-nix.html).

Penambangan kolam tidak memerlukan jaringan garlicoin untuk dijalankan, tetapi Anda memerlukan alamat untuk menambang. Penambang kolam dapat menggunakan Garlium atau mengikuti Panduan Dompet Linux.

Penambangan solo membutuhkan jaringan untuk berjalan, jadi silakan ikuti [Linux Wallet Guide](wallet-nix.html) untuk menyiapkannya.

Anda kemungkinan besar harus membangun penambang (ccminer untuk penambangan kolam, ccminer-nanashi untuk penambangan solo) dan mungkin juga driver dan CUDA dari kode sumber.

# Penambangan NVIDIA

## Driver NVIDIA, CUDA, dan penyiapan umum

### Sopir Nvidia

Pastikan GPU Anda dapat ditemukan di [daftar ini](https://developer.nvidia.com/cuda-gpus) (minimal yang diperlukan adalah `Compute 5.0`) dan Anda telah menginstal dan menjalankan driver nvidia berpemilik.
Anda dapat memeriksa driver dan versi mana yang diinstal dan dimuat

```
modinfo $(modprobe --resolve-alias nvidia)
```

Jika ini tidak menunjukkan driver nvidia, Anda belum menginstal atau memuatnya. Pengemudi dapat ditemukan melalui manajer paket Anda.

Untuk Ubuntu, Anda juga dapat menginstal dan memuatnya melalui pengaturan, yang mungkin menghemat kerumitan. Anda dapat menemukan opsi ini di `Perangkat Lunak & Pembaruan` di bawah driver tambahan.
Kartu nvidia Anda akan muncul di sini dan Anda dapat mencentang kotak untuk menggunakan driver biner nvidia.

Untuk Arch, Anda dapat menemukan petunjuk [di sini](https://wiki.archlinux.org/index.php/NVIDIA)

### CUDA

Untuk membangun penambang untuk GPU Anda, Anda perlu menginstal nvidia cuda compiler (nvcc). Perhatikan bahwa versi cuda harus cocok dengan versi driver Anda, karena driver lama tidak mendukung versi cuda yang lebih baru.
Disarankan untuk menginstal cuda melalui manajer paket Anda, karena akan menangani pencocokan versi, atau Anda dapat membuatnya sendiri.
Di Ubuntu jalankan

```
sudo apt-get install nvidia-cuda-dev nvidia-cuda-toolkit
```

Jika Anda ingin membuatnya sendiri, Anda dapat mengunduhnya dari beranda nvidia. Anda memerlukan gcc versi 5 atau 6 untuk dikompilasi, yang merupakan versi lama dan kemungkinan besar distro Anda akan datang dengan versi yang lebih baru.
Di Ubuntu, instal dan buat komputer Anda menggunakannya, jalankan

```
sudo apt-get install gcc-5 g++-5
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-5 1
sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-5 1
```

### Pengaturan umum untuk kompilasi

Beberapa paket tambahan diperlukan untuk membangun penambang: git, gcc, autotools, automake, ssl, jansson. Ini mungkin berbeda untuk Anda.
Di Ubuntu jalankan

```
sudo apt-get install git build-essential libcurl4-openssl-dev libssl-dev libjansson-dev automake autotools-dev
```

## Mengkompilasi dan menjalankan penambang

### Penambangan kolam

**Jika Anda memiliki versi cuda terbaru (9.1), Anda tidak perlu mengompilasi lagi! Rilis baru dengan dukungan allium telah dibuat. Anda dapat menemukannya [di sini](https://github.com/lenis0012/ccminer/releases/latest/)**

Jika Anda memiliki cuda 9.0 atau lebih rendah (8 hadir dengan Ubuntu), tiru [ccminer](https://github.com/lenis0012/ccminer/) (tetap di cabang windows), dan bangun

```
git clone https://github.com/lenis0012/ccminer.git
cd ccminer
./build.sh
```

Jika berhasil dibangun, Anda sekarang dapat menjalankan penambang dan terhubung ke kolam

```
./ ccminer --algo=allium -o KOLAM -u ALAMAT --max-temp=85
```

Pastikan untuk mengganti `ADDRESS` dengan alamat dompet Anda dan `POOL` dengan alamat kumpulan (Anda dapat menemukan beberapa kumpulan yang tersedia [di sini](pool-mining.html#main-net)).
Langkah keamanan telah ditambahkan untuk mencegah kartu grafis Anda dari kepanasan (`--max-temp=85`).
Hapus opsi ini hanya jika Anda tahu apa yang Anda lakukan. Anda dapat melihat suhu maksimal spesifik untuk GPU Anda [di sini](#max-temperature).

### Penambangan tunggal

** Panduan untuk ini sedang dikerjakan dan akan diperbarui saat diuji di mainnet **

# Penambangan AMD

Panduan ini diuji di Ubuntu 16.04 dengan driver AMD Radeon R9 290 dan AMDGPU-PRO 17.50.

- Unduh Driver AMDGPU-PRO terbaru dari sini: [AMDGPU- Pro](http://support.amd.com/en-us/kb-articles/Pages/Radeon-Software-for-Linux-Release-Notes.aspx)
- Buka terminal dan masuk ke direktori tempat Anda mengunduh driver
- Buka kemasannya: `tar -xf amdgpu-pro*`
- Instal driver dengan pustaka OpenCL: `./ amdgpu-pro-install --opencl=legacy,rocm`
- Unduh APP-SDK (Versi 3.0 berfungsi untuk saya): [APP SDK](https://developer.amd.com/amd-accelerated-parallel-processing-app-sdk/)
- Instal dependensi yang diperlukan: `apt-get install libcurl4-openssl-dev pkg-config libtool libncurses5-dev`
- Klon repositori git nicehash sgminer: `git clone https://github.com/lenis0012/sgminer-gm.git` dan cd ke dalam direktori `cd sgminer`
- Unduh AMD ADL SDK dari [sini](https://developer.amd.com/display-library-adl-sdk/)
- Ekstrak ADL SDK dan salin semua file dari direktori `include` ke direktori `ADL_SDK` di dalam `sgminer`
- Kompilasi sgminer:
- `git submodul init`
- `pembaruan submodul git`
- `autoreconf -i`
- `CFLAGS="-O2 -Wall -march=native -std=gnu99 " . / konfigurasi`
- `membuat`
- Jalankan penambang: `./ sgminer --gpu-platform 0 --algorithm allium -o <pool address> -u <your garlicoin address> -px --thread-concurrency 8193 -I 13`

# Penyelesaian masalah

## kompilasi gagal

Jika Anda mendapatkan kesalahan dengan `undefined reference to`, itu berarti Anda melewatkan pustaka/paket, Anda memiliki versi yang salah, atau tidak dapat ditemukan.

- Jika Anda tidak memiliki pustaka/paket, instal dengan pengelola paket Anda. Pastikan untuk menginstal paket dev ( misalnya libfoobar-dev).
- Jika Anda memiliki paketnya, periksa PATH Anda. Itu mungkin tidak ada di sana, atau Anda mungkin menginstal sesuatu yang ditambahkan ke PATH (seperti anaconda),
sehingga kompiler menggunakan paket dengan versi yang salah dari sana.

Jika Anda mendapatkan error terkait `nvcc_ARCH`, mungkin ada pengaturan yang salah untuk GPU Anda di makefile. Periksa [situs](https://github.com/tpruvot/ccminer/wiki/nvcc_ARCH-=--gencode=arch=compute_20,code=%22sm_21,compute_20%22) ini untuk mendapatkan bantuan.

## kesalahan get_work (penambangan solo)

Jika Anda mendapatkan kesalahan get_work, berarti ada yang salah dengan jaringan Anda.
Berikut adalah beberapa langkah untuk memecahkan masalah:

- Pastikan jaringan Anda (`garlicoind`) berjalan
- Periksa apakah jaringan Anda telah mengunduh semua blockchain (lihat di atas)
- Pastikan Anda telah menambahkan file .conf di `.garlicoin /` dan isinya sesuai dengan argumen yang Anda berikan kepada penambang.
- Jika masih tidak berhasil, pastikan Anda menggunakan penambang yang benar dengan panggilan yang benar. Jangan lupa `-p test -u test`.

## Melakukan spam 0 kH/dtk

- Menonaktifkan faktor DSR di panel kontrol nvidia harus memperbaiki kesalahan.
- Jika itu tidak berhasil dan Anda memiliki **GPU lama** (di bawah seri 900), Anda kurang beruntung. Penambang baru yang mendukung allium tidak kompatibel dengan GPU lama (dengan Kemampuan Hitung lebih rendah dari 3.0).

## Akses ditolak

Periksa konfigurasi port Anda

## MEMBANTU!

Jika langkah pemecahan masalah di atas tidak berhasil. Anda dapat bertanya di obrolan Discord `#troubleshooting` atau `#posix-mining` atau hubungi `@Pandawan#4158` atau `@shiinachan#7341`.

# Meningkatkan Performa

Berikut adalah beberapa langkah yang dapat Anda ambil untuk meningkatkan kinerja Anda. Ini mungkin tidak bekerja untuk semua orang, jadi jangan ragu untuk bermain-main dengannya.

## Lookup-Gap

Di file bat Anda, Anda dapat mencoba menambahkan `--lookup-gap=2` dan menjalankannya lagi Ini dapat meningkatkan kinerja Anda pada beberapa GPU Nvidia, tetapi tidak semua.

## Suhu Maksimum

**Suhu 85C direkomendasikan untuk sebagian besar GPU, tetapi beberapa GPU dapat mendukung lebih banyak.* *

Jika Anda tidak dapat menambang karena suhu GPU Anda di atas 85C, Anda dapat memeriksa suhu maksimal yang disarankan untuk GPU Anda (Nvidia) di sini: https://www.geforce.com/hardware/desktop-gpus
(Cari GPU Anda, klik Info Lebih Lanjut, lalu di sebelah kiri, klik Spesifikasi, harus ada entri bernama `Maximum GPU Temperature (in C)`).

Anda kemudian dapat mengedit `--max-temp` ke suhu berapa pun yang Anda inginkan.

_Kami tidak bertanggung jawab atas segala kerusakan yang mungkin terjadi saat menambang. Gunakan dengan risiko Anda sendiri._

# Table of Contents

- [NVIDIA Mining](#nvidia-mining)
- [AMD Mining](#amd-mining)
- [Troubleshooting](#troubleshooting)
- [Improving Performances](#improving-performances)

Make sure that you have already setup a wallet! You can check out [Garlium](https://github.com/garlicoin-project/garlium/releases/tag/v2.0.0) or the [Linux Wallet Guide](wallet-nix.html).

Pool mining does not require the garlicoin network to run, but you will need an address to mine to. Pool miners can either use Garlium or follow the Linux Wallet Guide.

Solo mining requires the network to run, so please follow [Linux Wallet Guide](wallet-nix.html) to set it up.

You most likely will have to build the miners (ccminer for pool mining, ccminer-nanashi for solo mining) and possibly also the drivers and CUDA from the source code.

# NVIDIA Mining

## NVIDIA drivers, CUDA and general setup

### Nvidia driver

Make sure that your GPU can be found in [this list](https://developer.nvidia.com/cuda-gpus) (minimum required is `Compute 5.0`) and that you have the proprietary nvidia driver installed and running.
You can check which driver and version are installed and loaded with

```
modinfo $(modprobe --resolve-alias nvidia)
```

If this doens't show an nvidia driver, you either don't have it installed or loaded. The driver can be found through your package manager.

For Ubuntu, you can install and load them via the settings as well, which might save you some hassle. You can find this option in `Software & Updates` under additional drivers.
Your nvidia card should show up here and you can check the box for using the nvidia binary driver.

For Arch you can find instructions [here](https://wiki.archlinux.org/index.php/NVIDIA)

### CUDA

In order to build the miner for your GPU, you need the nvidia cuda compiler (nvcc) installed. Note that the cuda version has to match with your driver version, as older drivers don't support newer cuda versions.
It is recommended to install cuda through your package manager, as it will handle version matching, or you can build it yourself.
On Ubuntu run

```
sudo apt-get install nvidia-cuda-dev nvidia-cuda-toolkit
```

If you want to build it yourself, you can download it from the nvidia homepage. You need gcc version 5 or 6 to compile, which are old versions and you distro will most likely come with a newer version.
On Ubuntu, install and make your computer use it, run

```
sudo apt-get install gcc-5 g++-5
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-5 1
sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-5 1
```

### General setup for compiling

A few additional packages are needed to build the miner: git, gcc, autotools, automake, ssl, jansson. This might vary for you.
On Ubuntu run

```
sudo apt-get install git build-essential libcurl4-openssl-dev libssl-dev libjansson-dev automake autotools-dev
```

## Compiling and running the miners

### Pool mining

**If you have the newest cuda version (9.1), you do not need to compile anymore! A new release with allium support has been built. You can find it [here](https://github.com/lenis0012/ccminer/releases/latest/)**

If you have cuda 9.0 or lower (8 comes with Ubuntu), clone [ccminer](https://github.com/lenis0012/ccminer/) (stay on the windows branch), and build

```
git clone https://github.com/lenis0012/ccminer.git
cd ccminer
./build.sh
```

If it successfully built, you can now run the miner and connect to a pool

```
./ccminer --algo=allium -o POOL -u ADDRESS --max-temp=85
```

Be sure to replace `ADDRESS` with your wallet address and `POOL` with the pool's address (you can find some available pools [here](pool-mining.html#main-net)).
A safety measure has been added which prevents your graphics card from overheating (`--max-temp=85`).
Only remove this option if you know what you are doing. You can check out a specific max temperature for your GPU [here](#max-temperature).

### Solo mining

** A guide for this is in the works and will be updated when tested on the mainnet **

# AMD Mining

This guide was tested on Ubuntu 16.04 with an AMD Radeon R9 290 and AMDGPU-PRO 17.50 drivers.

- Download the latest AMDGPU-PRO Driver from here: [AMDGPU-Pro](http://support.amd.com/en-us/kb-articles/Pages/Radeon-Software-for-Linux-Release-Notes.aspx)
- Open a terminal and go into the directory where you have downloaded the driver
- Unpack it: `tar -xf amdgpu-pro*`
- Install the driver with OpenCL libraries: `./amdgpu-pro-install --opencl=legacy,rocm`
- Download the APP-SDK (Version 3.0 worked for me): [APP SDK](https://developer.amd.com/amd-accelerated-parallel-processing-app-sdk/)
- Install required dependencies: `apt-get install libcurl4-openssl-dev pkg-config libtool libncurses5-dev`
- Clone the nicehash sgminer git repository: `git clone https://github.com/lenis0012/sgminer-gm.git` and cd into the directory `cd sgminer`
- Download the AMD ADL SDK from [here](https://developer.amd.com/display-library-adl-sdk/)
- Extract the ADL SDK and copy all files from the `include` directory into the `ADL_SDK` directory inside `sgminer`
- Compile sgminer:
  - `git submodule init`
  - `git submodule update`
  - `autoreconf -i`
  - `CFLAGS="-O2 -Wall -march=native -std=gnu99" ./configure`
  - `make`
- Run the miner: `./sgminer --gpu-platform 0 --algorithm allium -o <pool address> -u <your garlicoin address> -p x --thread-concurrency 8193 -I 13`

# Troubleshooting

## compiling fails

If you get errors with `undefined reference to`, it means you miss a library/package, you have the wrong version, or it can't be found.

- If you don't have a library/package, install it with your package manager. Be sure to install the dev package (eg libfoobar-dev).
- If you do have the package, check your PATH. It might not be in there, or you might have something installed that is prepended to the PATH (like anaconda),
  so that the compiler uses the package with the wrong version from there.

If you get errors related to `nvcc_ARCH`, there might be wrong settings for your GPU in the makefile. Check this [site](https://github.com/tpruvot/ccminer/wiki/nvcc_ARCH-=--gencode=arch=compute_20,code=%22sm_21,compute_20%22) for help.

## get_work errors (solo mining)

If you get any get_work errors, then something is wrong with your network.  
Here are some steps to troubleshoot:

- Make sure that your network (`garlicoind`) is running
- Check that your network has downloaded all the blockchain (see above)
- Make sure that you have added a .conf file in `.garlicoin/` and that its contents match with the arguments you give to the miner.
- If it still doesn't work, make sure that you are using the correct miner with a correct call. Don't forget `-p test -u test`.

## Spamming 0 kH/s

- Disabling DSR factors in nvidia control panel should fix the error.
- If that doesn't work and you have an **old GPU** (under 900 series), you're out of luck. The new miner which supports allium is not compatible with older GPUs (with a Compute Capability lower than 3.0).

## Access is denied

Check your port configurations

## HELP!

If the above troubleshooting steps do not work. You can ask in the Discord chat `#troubleshooting` or `#posix-mining` or contact `@Pandawan#4158` or `@shiinachan#7341`.

# Improving Performances

Here are a few steps you can take to improve your performances. These might not work for everyone, so feel free to play around with it.

## Lookup-Gap

In your bat file, you can try adding `--lookup-gap=2` and running it again This might improve your performances on some Nvidia GPUs, but not all.

## Max Temperature

**The 85C temperature is recommended for most GPUs, but some GPUs can support more.**

If you are unable to mine because your GPU temp goes above 85C, you can check the max recommended temperature for your GPU (Nvidia) here: https://www.geforce.com/hardware/desktop-gpus
(Search for your GPU, click More Info, then on the left, click Specifications, there should be an entry called `Maximum GPU Temperature (in C)`).

You can then edit the `--max-temp` to whatever temperature you desire.

_We are not responsible for any damage which might happen when mining. Use at your own risk._

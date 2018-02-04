
# Table of Contents
- [NVIDIA Mining](#nvidia-mining)
- [AMD Mining](#amd-mining)
- [Troubleshooting](#troubleshooting)
- [Improving Performances](#improving-performances)

Make sure that you have already setup a wallet! You can check out [Garlium](https://xske.github.io/garlium/) or the [Linux Wallet Guide](wallet-nix.html).  

Pool mining does not require the garlicoin network to run, but you will need an address to mine to. Pool miners can either use Garlium or follow the Linux Wallet Guide.

Solo mining requires the network to run, so please follow [Linux Wallet Guide](wallet-nix.html) to set it up.

You will have to build the miners (ccminer for pool mining, ccminer-nanashi for solo mining) and possibly also the drivers and CUDA from the source code.

# NVIDIA Mining

## NVIDIA drivers, CUDA and general setup

### Nvidia driver
Make sure that your GPU can be found in [this list](https://developer.nvidia.com/cuda-gpus) (minimum required is `Compute 5.0`) and that you have the proprietary nvidia driver installed and running. 
You can check which driver and version are installed and loaded with  
```
modinfo $(modprobe --resolve-alias nvidia)
```
If this doens't show an nvidia driver, you either don't have it installed or loaded. The driver can be found through your package manager. 

For Ubuntu, you can install and load them via the settings as well, which might save you some hassle. You can find this option in ```Software & Updates ``` under additional drivers.
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
Clone [ccminer](https://github.com/tpruvot/ccminer) for pool mining, change to linux branch, and build
```
git clone https://github.com/tpruvot/ccminer.git
cd ccminer
git checkout linux
./build.sh
```
If it successfully built, you can now run the miner and connect to a pool
```
./ccminer --algo=scrypt:10 -o POOL -u ADDRESS --max-temp=85
```
Be sure to replace `ADDRESS` with your wallet address and `POOL` with the pool's address (you can find some available pools [here](pool-mining.html#main-net)).
A safety measure has been added which prevents your graphics card from overheating (`--max-temp=85`). 
Only remove this option if you know what you are doing. You can check out a specific max temperature for your GPU [here](#max-temperature). 

### Solo mining
Clone [ccminer-nanashi](https://github.com/nicehash/ccminer-nanashi) for solo mining and build
```
git clone https://github.com/nicehash/ccminer-nanashi.git
cd ccminer-nanashi
./build.sh
```
To configure the network you are about to run, open your garlicoin.conf file. Make sure you followed the [wallet guide](wallet-nix.html). You can change the IP with ```rpcallowip=IP```.
If you want to let the network run on localhost (recommended), change it to ```rpcallowip=127.0.0.1```. You can also change the port with ```rpcport=PORT```.

Now start the network. Navigate to where you stored the garlicoin release. Go to the ``bin`` folder, start the network and bring it up to date
```
./garlicoind &
./garlicoin-cli getblockchaininfo
```
repeat the last command until the ```blocks``` number does not increase anymore. Now your blockchain is up to date. 

Go back to the ccminer-nanashi folder. Now you can solo mine with
```
./ccminer --algo=scrypt:10 -o IP:PORT --no-longpoll --no-getwork --coinbase-addr=ADDRESS --max-temp=85 -p test -u test
```
Be sure to change ``IP``, ``PORT``, and ``ADDRESS`` to the respective values.
A safety measure has been added which prevents your graphics card from overheating (`--max-temp=85`). Only remove this option if you know what you are doing. 
You can check out a specific max temperature for your GPU [here](#max-temperature). 

# AMD Mining
A guide is currently in the works. For now, you can follow [this guide](https://docs.google.com/document/d/1sm9ukRzXaT3fBbYx4hUsZmpQrd-RkNVQ2OD1W6r46ew/edit) by `@Daswf852#5539`.

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
- Make sure that you have added a .conf file in ``.garlicoin/`` and that its contents match with the arguments you give to the miner.
- If it still doesn't work, make sure that you are using the correct miner with a correct call. Don't forget `-p test -u test`.

## Spamming 0 kH/s
- Disabling DSR factors in nvidia control panel should fix the error.
- If that doesn't work and you have an **old GPU** (under 900 series), try using [this miner](https://github.com/KBomba/ccminer-KBomba/releases/tag/V1.0.02) instead. 

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

*We are not responsible for any damage which might happen when mining. Use at your own risk.*



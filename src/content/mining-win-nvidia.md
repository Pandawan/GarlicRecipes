# Table of Contents
- [Pool Mining (Recommended)](#pool-mining)
- [Solo Mining](#solo-mining)
- [Improving Performances](#improving-performances)
- [Troubleshooting](#troubleshooting)

# Pool Mining
Make sure that you have already setup a wallet! You can check out the [Windows Wallet Guide](wallet-win.html) to learn more.  
Pool mining does not require the network running. 

## Step 1: Downloading the Files
Download this special [Pool Miner](https://github.com/tpruvot/ccminer/releases) (download `ccminer-x64-2.2.4-cuda9.7z` if you have a 64 bit computer or `ccminer-x86-2.2.4-cuda9.7z` if you have a 32 bit). Extract those files to its own folder (perhaps *Pool Nvidia Miner*).

## Step 2: Setting Up the Miner
Now you will want to create a new text file and rename it to `Run-Miner-Pool-Nvidia.bat` (**Make sure the file ends with .bat**).  
Edit the file (Right Click > Edit), and enter this 
```
ccminer-x64 --algo=scrypt:10 -o POOL -u ADDRESS -listen --max-temp=85
pause
```
Then, replace the `POOL` to the pool's address (you can find some available pools [here](pool-mining.html#main-net)).  
Once that is done, replace the `ADDRESS` (which is right after `-u`) to your address.  
A safety measure has been added which prevents your graphics card from overheating (`--max-temp=85`). Only remove this option if you know what you are doing. You can check out a specific max temperature for your GPU [here](#max-temperature).  

## Step 3: Start Mining
You can open `Run-Miner-Pool-Nvidia.bat`!  
The miner might take a while to calibrate, it can take between 1 to 10 minutes. 


# Solo Mining
Make sure that you have already setup a wallet and that your network is running correctly! You can check out the [Windows Wallet Guide](wallet-win.html) to learn more.

## Step 1: Downloading the Files
First you will want to download this special [Solo Miner](https://cryptomining-blog.com/wp-content/download/ccminer-1.7.6-r10-neoscrypt.zip) (this one only works for Solo Mining) and extract it to its own folder (perhaps *Solo Nvidia Miner*).  

## Step 2: Setting Up the Miner
Now you will want to create a new text file inside that *Miner* folder and rename it to `Run-Miner-Solo-Nvidia.bat` (**Make sure the file ends with .bat**).  
Edit the file (Right Click > Edit), and enter this:
```
ccminer.exe --algo=scrypt:10 -o 127.0.0.1:42068 -u test -p test --no-longpoll --no-getwork --no-stratum --coinbase-addr=ADDRESS --max-temp=85
pause  
```
(make sure that you replace `ADDRESS` to your address).
A safety measure has been added which prevents your graphics card from overheating (`--max-temp=85`). Only remove this option if you know what you are doing. You can check out a specific max temperature for your GPU [here](#max-temperature).  

## Step 3: Start Mining
Make sure that your network is running, and you can open `Run-Miner-Solo-Nvidia.bat`!  
The miner might take a while to calibrate, it can take between 1 to 10 minutes. 

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

# Troubleshooting

## get_work errors
If you get any get_work errors, then something is wrong with your network.  
Here are some steps to troubleshoot: 
- Make sure that your network (`garlicoind`) is running
- Make sure that you have added a .conf file in your /Roaming/Garlicoin.  
- If you are *solo mining*, Make sure that both your miner and your .conf file are using the port `42068` (instead of `42070`).
- Check that your network has downloaded all the blockchain (Check out [Step 5 of the Wallet Guide](./wallet-win.html#step-5-download-the-blockchain)) 
- If it still doesn't work, make sure that you are using the correct miner with the correct `bat` file, the Solor Miner is different from the Pool one.

## all cuda capable devices are busy or unavailable
Disabling DSR factors in nvidia control panel should fix the error.

## Spamming 0 kH/s
- Disabling DSR factors in nvidia control panel should fix the error.
- If that doesn't work and you have an **old GPU** (only supports Compute Capability 2.1 or lower), try using [this miner](https://github.com/tpruvot/ccminer/releases/tag/v2.2-tpruvot) instead. 

## no CUDA-capable device detected
- Make sure that you have updated your Nvidia Drivers and that your Graphics Card can be found in [this list](https://developer.nvidia.com/cuda-gpus) (minimum Compute Capability is 3.0).
- If your Graphics Card's Compute Capability is 2.1 or lower, try using [this miner](https://github.com/tpruvot/ccminer/releases/tag/v2.2-tpruvot).

## Access is denied
Check your antivirus, it might be preventing the network from functioning

## HELP!
If the above troubleshooting steps do not work. You can ask in the Discord chat `#troubleshooting` or `#windows-mining` or contact me `@Pandawan#4158`. 

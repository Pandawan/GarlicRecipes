# Table of Contents
- [Solo Mining](#solo-mining)
- [Pool Mining](#pool-mining)
- [Troubleshooting](#troubleshooting)

# Solo Mining
Make sure that you have already setup a wallet and that your network is running correctly! You can check out the [Windows Wallet Guide](wallet-win.html) to learn more.

## Step 1: Downloading the Files
First you will want to download this special [Solo Miner](https://cryptomining-blog.com/wp-content/download/ccminer-1.7.6-r10-neoscrypt.zip) (this one only works for Solo Mining) and extract it to its own folder (perhaps *Solo Nvidia Miner*).  

## Step 2: Setting Up the Miner
Now you will want to create a new text file and rename it to `Run-Miner-Solo-Nvidia.bat` (**Make sure the file ends with .bat**).  
Edit the file (Right Click > Edit), and enter this `ccminer.exe --algo=scrypt:11 -o 127.0.0.1:42070 -u test -p test --no-longpoll --no-getwork --no-stratum --coinbase-addr=ADDRESS` (make sure that you replace `ADDRESS` to your address).

## Step 3: Start Mining
Make sure that your network is running, and you can open `Run-Miner-Solo-Nvidia.bat`!  
The miner might take a while to calibrate, it can take between 1 to 10 minutes. 

# Pool Mining
Make sure that you have already setup a wallet! You can check out the [Windows Wallet Guide](wallet-win.html) to learn more.  
Pool mining does not require the network running. 

## Step 1: Downloading the Files
Download this special [Pool Miner](https://github.com/tpruvot/ccminer/releases) (download `ccminer-x64-2.2.4-cuda9.7z` if you have a 64 bit computer or `ccminer-x86-2.2.4-cuda9.7z` if you have a 32 bit). Extract those files to its own folder (perhaps *Pool Nvidia Miner*).

## Step 2: Setting Up the Miner
Now you will want to create a new text file and rename it to `Run-Miner-Pool-Nvidia.bat` (**Make sure the file ends with .bat**).  
Edit the file (Right Click > Edit), and enter this 
```
ccminer-x64 --algo=scrypt:11 -o POOL -u ADDRESS -listen
pause
```  
Then, replace the `POOL` to the pool's address (you can find some available pools [here](pool-mining.html#test-net)).  
Once that is done, replace the `ADDRESS` (which is right after `-u`) to your address.  

## Step 3: Start Mining
You can open `Run-Miner-Pool-Nvidia.bat`!  
The miner might take a while to calibrate, it can take between 1 to 10 minutes. 

# Troubleshooting

## get_work errors
If you get any get_work errors, then something is wrong with your network. **Make sure that your network is running** (and that you have added your .conf file to your /Roaming/Garlicoin folder).  
**You should also try waiting a couple of minutes before mining (stop your miner), the network might be downloading the blockchain.**  
If it still doesn't work, make sure that you are using the correct miner with the correct `bat` file, the Solor Miner is different from the Pool one.

## all cuda capable devices are busy or unavailable
Disabling DSR factors in nvidia control panel should fix the error.

## Spamming 0 kH/s
Disabling DSR factors in nvidia control panel should fix the error.

## HELP!
If the above troubleshooting steps do not work. You can ask in the Discord chat `#troubleshooting` or `#windows-mining` or contact me `@Pandawan#4158`. 
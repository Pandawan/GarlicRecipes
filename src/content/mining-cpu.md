### Warning: CPU Mining isn't recommended as the likeliness of mining a block with it is very low. Try GPU mining instead.

# Table of Contents

- [Windows](#windows)
- [Mac](#mac)
- [Linux](#linux)
- [Troubleshooting](#troubleshooting)

# Windows

Make sure that you have already setup a wallet and that your network is running correctly! You can check out the [Windows Wallet Guide](wallet-win.html) to learn more.

## Step 1: Downloading the Files

First you will need to download the CPU miner files [here](https://mega.nz/#!h15wFQAT!A0J5ZQDUKXRJbvGDUfvsyRQyERc-Gu1EuLcDSH_9EGU).  
Extract the files in your installation folder (if you have followed the wallet guides it should be `C:\Garlic\`).

![Image of CPU Miner Files](https://i.imgur.com/6Nwy2dC.png)

## Step 2: (Recommended) Set Up For Pool Mining

This miner uses a different system for different types of CPUs. Follow the section for your own CPU.  
If you own an Intel i7, the instructions are different than for other Intel CPUs.

**Because Pool Mining is strongly recommended, we will go with that.**  
**You can learn more about the difference between Solo And Pool Mining [here](how-to-mine.html#solo-vs-pool).**  
**If you prefer to Solo Mine, you can skip to that section [here](#step-4-optional-solo-mining).**

Edit the `Run-Miner-Pool-CPU.bat` file (Right Click > Edit) and change the pool (`POOL`) to whichever pool.  
Then change the address (`ADDRESS`) to whatever you Garlicoin address is.

![Image of Bat File For Pool](https://i.imgur.com/puFRTqU.png)  
_This image might be outdated, do not try to copy its content. Use the files given instead._
<br />

## Step 3: Start the Miner

You can now start mining with a Pool. Simply run your `Run-Miner-Pool-CPU.bat` and you should be good to go.  
If the console returns something like _[2018-01-06 23:00:23] accepted: 4/4 (diff 0.000), 82.67 kH/s yes!_ then you have gotten an accepted share!

## Step 4: (Optional) Set Up for Solo Mining

If you wish to Solo Mine instead of with a Pool (you can learn more about the difference [here](how-to-mine.html#solo-vs-pool)), then follow these steps.  
<br>

### Solo Mining Network

**As setup in the wallet guide, make sure that you have your network running. (You can do so by running `Run-Network.bat` if you haven't already).**

### Set Up

Edit the `Run-Miner-Solo-CPU.bat` file (Right Click > Edit), and this time, only change the address (`ADDRESS`, the one after `--coinbase-addr=`) to your address.  
Since there is no pool, you do not need to change anything else in the file.

![Image of Bat File For Solo](https://i.imgur.com/n6CyWMp.png)  
_This image might be outdated, do not try to copy its content. Use the files given instead._
<br>

### Start Mining

You can now solo mine. Simply run your `Run-Miner-Solo-CPU.bat` and you should be good to go.  
If the console returns something like _[2018-01-06 23:00:23] accepted: 4/4 (diff 0.000), 82.67 kH/s yes!_ then you have mined a block!

# Mac

Mac guides are currently not available. If you wish to contribute to this site, please create a pull request [here](https://github.com/Pandawan/GarlicRecipes/pulls).  
For now, you can follow [this guide](https://gist.github.com/Pandawan/7c0c500ee679eac799ec4b92a225f816) originally by `@Vilsol#2060`, which should get you going (although it is not as detailed as a normal guide).

# Linux

## Step 1: Download and build cpuminer-multi

Clone from the [project Github repo](https://github.com/GarlicoinOrg/cpuminer-multi) into a directory of your choice. Following the instructions in the project's README, run `./build.sh` in the new directory, and install any prerequisites as specified by your environment.

## Step 2: Run the Miner

### Step 2a: (Recommended) Run the Miner on a Pool

You'll need to specify the pool address, your wallet, and the algorithm:
`./cpuminer --algo=allium -o stratum+tcp://pool.grlc-bakery.fun:3333 -u <your wallet address here>`
This uses the following pool: `grlc-bakery.fun`, you can check out a list of pools [here](pool-mining.html#main-net)

### Step 2b: Run the Miner Solo

While running a node locally, you'll specify your node's address, your wallet, and the algorithm:
`./cpuminer --algo=allium -o 127.0.0.1:42070 -u <your wallet address here>`

You're should now see your hashrate and, eventually, confirmed blocks.

# Troubleshooting

## HTTP request failed: Failed to connect to 127.0.0.1 port 42070: Connection refused

If you are trying to Solo mine, make sure that your network is running! You can check out how to set it up on the wallet guides:

- [Windows](./wallet-win.html)
- [Mac](./wallet-mac.html)
- [Linux](./wallet-nix.html)

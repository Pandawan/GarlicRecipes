### Warning: CPU Mining isn't recommended as the likeliness of mining a block with it is very low. Try GPU mining instead.

# Table of Contents
- [Windows](#windows)
- [Mac](#mac)
- [Linux](#linux)

# Windows
Make sure that you have already setup a wallet and that your network is running correctly! You can check out the [Windows Wallet Guide](wallet-win.html) to learn more.

## Step 1: Downloading the Files
First you will need to dowload the CPU miner files [here](./files/miner-cpu-win.zip).  
Extract the files in your installation folder (if you have followed the wallet guides it should be `C:\Garlic\`).

![Image of CPU Miner Files](https://i.imgur.com/6Nwy2dC.png)

## Step 2: Set Up
This miner uses a different system for different types of CPUs. Follow the section for your own CPU.  
If you own an Intel i7, the instructions are different than for other Intel CPUs.

### Intel (regular) CPU
Edit the `Run-Miner-Solo-CPU.bat` file (Right Click > Edit), make sure that at the start of the file it says `.\Miner\cpuminer-gw64-core2`.  
Also, change the address (`ADDRESS`) after `--coinbase-addr=` to whatever you Garlicoin address is.

### Intel i7 CPU
Edit the `Run-Miner-Solo-CPU.bat` file (Right Click > Edit), and change the start of the file to `.\Miner\cpuminer-gw64-corei7` (**make sure it says corei7**).  
Also, change the address (`ADDRESS`) after `--coinbase-addr=` to whatever you Garlicoin address is.  
*If mining does not work, consider following the regular Intel steps instead.*

### AMD CPU
Edit the `Run-Miner-Solo-CPU.bat` file (Right Click > Edit), and change the start of the file to `.\Miner\cpuminer-gw64-avx2` (**make sure it says avx2**).  
Also, change the address (`ADDRESS`) after `--coinbase-addr=` to whatever you Garlicoin address is.  
*If mining does not work, consider following the regular Intel steps instead.*

![Image of Bat File For Solo](https://i.imgur.com/n6CyWMp.png)

## Step 3: Starting the Network
From the Wallet guide, make sure that you have your network running. (You can do so by running `Run-Network.bat` if you haven't already).  

## Step 4: (Optional) Using a Pool
If you wish to use a pool instead of solo mining (you can learn more about the difference [here](how-to-mine.html#solo-vs-pool)), then follow these steps.  
<br>

Edit the `Run-Miner-Pool-CPU.bat` file (Right Click > Edit), and follow the same steps as [Step 2](#step-2-set-up) (only this time, there won't be a `--coinbase-addr`).  
Then, replace the `POOL` to the pool's address (you can find some available pools [here](pool-mining.html#test-net)).  
Once that is done, replace the `ADDRESS` (which is right after `-u`) to your address.  

![Image of Bat File For Pool](https://i.imgur.com/puFRTqU.png)
<br>

You can now mine using a pool. Simply run your `Run-Miner-Pool-CPU.bat` and you should be good to go.  
If the console returns something like *[2018-01-06 23:00:23] accepted: 4/4 (diff 0.000), 82.67 kH/s yes!* then you have mined a block! 

# Mac
Mac guides are currently not available. If you wish to contribute to this site, please create a pull request [here](https://github.com/PandawanFr/GarlicoinHelp/pulls).  
For now, you can follow [this guide](https://pastebin.com/p1RksRwb) by `@Vilsol#2060`, which should get you going (although it is not as detailed as a normal guide). 

# Linux

## Step 1: Download and build cpuminer-multi
Clone from the [project Github repo](https://github.com/tpruvot/cpuminer-multi) into a directory of your choice. Following the instructions in the project's README, run `./build.sh` in the new directory, and install any prerequisites as specified by your environment. 

## Step 2: Run the miner

### Step 2a: Run the miner on a pool
You'll need to specify the pool address, your wallet, and the algorithm:
`./cpuminer --algo=scrypt:4096 -o stratum+tcp://5.196.13.45:3333 -u  <your wallet address here>`
This uses the following pool: `grlc-bakery.fun:3333`

### Step 2b: Run the miner solo
While running a node locally, you'll specify your node's address, your wallet, and the algorithm:
`./cpuminer --algo=scrypt:4096 -o 127.0.0.1:42070 -u  <your wallet address here>`

You're should now see your hashrate and, eventually, confirmed blocks. 

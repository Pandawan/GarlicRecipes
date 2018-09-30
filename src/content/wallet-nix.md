# Table of Contents

- [Setting Up The Network](#setting-up-the-network)
- [Getting A Wallet](#getting-a-wallet)

# Setting Up The Network

Setting up the network is fast and very easy. It allows your computer to connect to the Garlicoin Network.

## Step 1. Downloading the Files

First, you will need to download the latest release for linux [here](https://github.com/GarlicoinOrg/Garlicoin/releases) as well as the quick start files [here](ROOT/files/wallet-nix.zip).
Use the latest Garlicoin-x86_64-unknown-linux-gnu.tar.gz for any 64 bit system.
Once that is done, open the files and extract all of their content into a folder.

## Step 2. Connecting to the Network

Navigate to your Garlic folder using `cd`.  
Once that is done, run the command: `./garlicoind` in a terminal.
<br>

The program will not say anything, let it sit in the background. **Do not close it.**  
_You will have to run this any time you wish to use your wallet (or when solo mining)._

## Step 3. Moving .conf File to Roaming\Garlicoin

Back to your Garlic folder, there should be a file called `garlicoin.conf`. This file needs to be moved to the `.garlicoin` folder found in your home directory.

## Step 4. Restart the Network

Just to be sure that everything was done correctly. Close your Network connection by holding **Ctrl + C**. in the terminal where you started it, or by closing that terminal.
Now repeat **Step 2**, you should be good to go.  
<br>

## Step 5. Download the Blockchain

While keeping your network terminal open, open a new terminal.  
Navigate to your Garlicoin folder and type `./garlicoin-cli getblockchaininfo`.  
This command displays information about the blockchain you have downloaded, the `blocks` value at the top is the number of blocks that has been recieved. You can run this command a few times to check the status. Once it hits the value [here](https://garli.co.in/api/getblockcount) your blockchain sync is complete.

# Getting a Wallet

Once you have gotten the Network up and running, you will need to get a wallet address.  
Open a Terminal and navigate to the garlic folder again.

## Getting a New Address

In the terminal, type this command: `./garlicoin-cli getnewaddress`.  
This should return a series of letters and numbers. This is your address. Make sure that you copy it and keep it somewhere.

_Whenever someone wants to pay you, you can send them this address_

By default your wallet is created in your home directory in `~/.garlicoin/wallet.dat`

## Getting Wallet Info

To make sure that you have done everything right (or to view your balance), you can type: `./garlicoin-cli getwalletinfo` in a terminal while the network is running.  
This should give you information about your balance, wallet, when your last transaction was...  
<br>

## Backing Up the Wallet

Sometimes, the wallet app can fail and corrupt the wallet. If you wish to back it up before that happens (in order to recover it in case it does break), follow these steps:  
In a terminal (while the network is running), type the command: `./garlicoin-cli backupwallet <path>`.  
This will save a `wallet.dat` file in at the given path. If your wallet ever gets corrupted, navigate to this folder:
`~/.garlicoin/`
and overwrite the `wallet.dat` file inside the folder by the backup one.

## Sending to Someone Else

If you ever wish to send Garlicoin to someone. You can use this command `./garlicoin-cli sendtoaddress <address> <amount>`.

That's it! You are done!

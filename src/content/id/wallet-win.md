# Table of Contents

- [Setting Up The Network](#setting-up-the-network)
- [Getting A Wallet](#getting-a-wallet)
- [Troubleshooting](#troubleshooting)

# Setting Up The Network

Setting up the network is fast and very easy. It allows your computer to connect to the Garlicoin Network.

## Step 1. Downloading the Files

First, you will need to download the windows binaries [here](https://garlicoin.io/downloads) as well as the [Quick Start Files](ROOT/files/wallet-win.zip).
Once that is done, open the two files (both the `.tar.gz` AND the `.zip`) and extract all of their content into a folder (In this tutorial, we will use `C:\Garlic\`).  
![Garlic Folder With Files](https://i.imgur.com/YYqtODB.png)

## Step 2. Connecting to the Network

This can be done in two ways, the Graphical Way (Recommended) and the Command Line way.

### Graphical Way

In your installation folder, there should be a file called `Run-Network.bat`.  
Open that file; a command prompt window should open. Make sure you Allow Access through your firewall (if it asks you).  
<br>

The program will not say anything, let it sit in the background. **Do not close it.**  
_You will have to open this any time you wish to use your wallet (or when solo mining)._

### Command Line Way

For the more experienced, open a Command Prompt.  
Navigate to your Garlic folder using `cd`.  
Once that is done, run the command: `garlicoind`.
Windows might ask you for Firewall Access, Allow it.  
<br>

The program will not say anything, let it sit in the background. **Do not close it.**  
_You will have to run this any time you wish to use your wallet (or when solo mining)._

## Step 3. Moving .conf File to Roaming\Garlicoin

Back to your Garlic folder, there should be a file called `garlicoin.conf`. This file needs to be moved to the `Garlicoin` folder found in `AppData\Roaming`.  
<br>

To access this folder, Open **RUN** (Windows + R), and type `%appdata%`. This should open a folder, locate the `Garlicoin` folder and move the `garlicoin.conf` file to it.

## Step 4. Restart the Network

Just to be sure that everything was done correctly. Close your Network window (the one `Run-Network.bat` one) by holding **Ctrl + C**.  
Now repeat **Step 2**, you should be good to go.  
<br>

## Step 5. Download the Blockchain

While keeping your network window open, Open a new Command Prompt.  
Navigate to your Garlicoin folder (use `cd C:\Garlic\`), and type `garlicoin-cli getblockchaininfo`.  
This command displays information about the blockchain you have downloaded, the `blocks` value at the top is the number of blocks that has been recieved. You can run this command a few times to check the statu. Once it hits the value (https://garli.co.in/api/getblockcount)[here] your blockchain sync is complete.

# Getting a Wallet

Once you have gotten the Network up and running, you will need to get a wallet address.

## Step 1. Using the Command Prompt

Open a **Command Prompt**. You will now need to navigate to your installation folder; you can do so like this:  
If you have installed on a different drive, you need to type the letter of your drive followed by a colon. For example, drive F would be `F:`. Then press enter.
Type `cd C:\Garlic\` (or whatever your installation folder is) and press Enter .

## Step 2. Getting a New Address

In the Command Prompt, type this command: `garlicoin-cli getnewaddress`.  
This should return a series of letters and numbers. This is your address. Make sure that you copy it and keep it somewhere.  
(To copy from the Command Prompt, select the address with your mouse and then right click).

_Whenever someone wants to pay you, you can send them this address_

![Image of GetNewAddress](https://i.imgur.com/pjSUslM.png)

## Step 3. Getting Wallet Info

To make sure that you have done everything right (or to view your balance), you can type: `garlicoin-cli getwalletinfo` in that same Command Prompt.  
This should give you information about your balance, wallet, when your last transaction was...  
<br>

## Step 4. Backing Up the Wallet

Sometimes, the wallet app can fail and corrupt the wallet. If you wish to back it up before that happens (in order to recover it in case it does break), follow these steps:  
In a Command Prompt window (while the network is running), type the command: `garlicoin-cli backupwallet <path>`.  
This will save a `wallet.dat` file in at the given path. If your wallet ever gets corrupted, navigate to this folder:

- Windows: `%APPDATA%\Bitcoin`
- Linux: `~/.bitcoin/`
- MacOS: `~/Library/Application Support/Bitcoin/`

and overwrite the `wallet.dat` file inside the folder by the backup one.

## Step 5. Sending to Someone Else

If you ever wish to send Garlicoin to someone. You can use this command `garlicoin-cli sendtoaddress <bitcoinaddress> <amount>`.

That's it! You are done!

# Troubleshooting

## json_rpc_call failed, retry after 10 seconds

If you are getting this error, let it keep retrying. It should correct itself soon.

## garlicoind is not recognized

If you are getting this eror, it means that your Command Prompt is not opened in your installation directory.
Make sure that you have used `cd C:\Path\To\Garlic\Folder` before running your command.

## garlicoin-cli is not recognized

If you are getting this eror, it means that your Command Prompt is not opened in your installation directory.
Make sure that you have used `cd C:\Path\To\Garlic\Folder` before running your command.

## 0 blocks

Try changing your `.conf` file to have the content found on the [Changes page](./changes.html).

## HELP!

If the above troubleshooting steps do not work. You can ask in the Discord chat `#troubleshooting` or `#windows-mining` or contact me `@Pandawan#4158`.

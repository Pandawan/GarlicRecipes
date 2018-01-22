## 1/21/18 - Part 2
To anyone getting problems with nodes or your network not connecting. Please try replacing your `.conf` file to this:
```
rpcuser=test
rpcpassword=test
rpcallowip=192.168.1.0/24
rpcport=42068

upnp=1
server=1
listen=1
daemon=0
addnode=174.119.90.59
addnode=52.39.1.167
addnode=128.82.17.231
addnode=172.31.29.127
addnode=67.181.72.208
addnode=5.196.13.45
addnode=185.185.126.143
addnode=86.17.122.85
addnode=52.89.91.13
addnode=151.230.250.248
addnode=86.17.164.241
addnode=92.233.163.178
addnode=94.224.222.136
addnode=24.141.22.198
addnode=51.175.34.47
addnode=37.33.112.16
addnode=108.204.153.25
addnode=68.54.119.120
addnode=35.225.227.111
addnode=80.211.208.43
addnode=70.106.228.160
```

## 1/21/18 
The Main-Net has been released. If you wish to use that instead of the Test-Net, remove any occurences of `testnet` from your commands and config files (or start the tutorials over).  
The algorithm has been changed back to `scrypt:10` for release.  

## 1/18/18
Changed scrypt from 11 to 12. If you are mining on the Test-Net, make sure that you have changed the algorithm from `scrypt:11` to `scrypt:12`.
New binaries are also available on the [download page](https://garlicoin.io/downloads).

## 1/12/18
New Fork changed scrypt from 10 to 11. If you are mining, make sure that you have changed your algorithm from `scrypt:10` to `scrypt:11`.  
New binaries were also released, you can download them [here](https://drive.google.com/file/d/10NDfrLjVJ3K9A6xzPWCCwhrwRf6NZSk7/view).

## 1/8/18
New Fork changed scrypt to scrypt-N (scrypt:10) to combat ASIC mining. Make sure that you have changed your algorithm from `scrypt` to `scrypt:10`.

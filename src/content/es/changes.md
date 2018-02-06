## 1/21/18 - Part 2
Si el red o los nodos no contecta, por favor reemplace tu `.conf` archivo con esto:
```
rpcuser=test
rpcpassword=test
rpcallowip=192.168.1.0/24
rpcport=42070

upnp=1
server=1
listen=1
daemon=0
addnode=174.119.90.59
addnode=52.39.1.167
addnode=128.82.17.231
addnode=172.31.29.127
addnode=67.181.72.208release
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
Main-Net (red prinicipal) ha lanzado. Si desea user eso en vez de Test-Net, quita cualquier ocurrencia de 'testnet' de sus comandos y sus archivos de configuración (o empeza de nuevo los tutoriales). 
El algoritmo ha vuelto a 'scrypt:10' para el lanzamiento. 

## 1/18/18
Ha cambiado 'scrypt' de 11 a 12. Si mine con Test-Net, asegurase que ha cambiado el algoritmo de `scrypt:11` a `scrypt:12`.
Además, están disponible binarios nuevos en la [página de descarga](https://garlicoin.io/downloads).

## 1/12/18
Nuevo Fork ha cambiado 'scrypt' de 11 a 12. Si mine con Test-Net, asegurase que ha cambiado el algoritmo de `scrypt:11` a `scrypt:12`.
Además, están disponible binarios nuevos, puede descargarlos [aquí](https://drive.google.com/file/d/10NDfrLjVJ3K9A6xzPWCCwhrwRf6NZSk7/view).

## 1/8/18
Fork Nuevo ha cambiado 'scrypt' a 'scrypt-N' (scrypt:10) para combatir la minería ASIC. Se asegura que ha cambiado tu algoritmo de `scrypt` a `scrypt:10`.

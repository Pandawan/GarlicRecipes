## 16/02/18
¡Allium HardFork ha sido lanzado!
Consulte la guía de actualización de mineros [aquí](https://www.reddit.com/r/garlicoin/comments/7xwfc1/updating_miners_to_allium/).  
Puede obtener más información sobre el fork allium [aquí](https://docs.google.com/document/d/1SUoSfJVHHLDdWWBbmQdPtAwEHcGdVROScs7ey9cLEQU/edit).  

<br>

Garlium no requiere actualizaciones (a menos que sea propietario de un nodo Garlium).

## 1/21/18 - Parte 2
Para los que tengan problemas de que sus nodos o su red no se conecten. Intenten por favor reemplar su archivo `.conf` con esto:
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
Main-Net ha sido lanzada. Si deseas usarla en lugar de Test-Net, elimina cualquier aparición de `testnet` de tus comandos y archivos de configuración (o vuelve a realizar los tutoriales). El algoritmo volvió a cambiar a 
`scrypt:10` para el lanzamiento.  

## 1/18/18
Cambió el scrypt de 11 a 12. Si estás minando en Test-Net, asegúrate de haber cambiado el algoritmo de `scrypt:11` a `scrypt:12`.
Los nuevos binarios ya están disponibles también en la [página de descarga](https://garlicoin.io/downloads).

## 1/12/18
El nuevo Fork cambió el scrypt de 10 a 11. Si estás minando, asegúrate de haber cambiado tu algoritmo de `scrypt:10` a `scrypt:11`.  
Los nuevos vinarios ya fueron publicados también, puedes descargarlos [aquí](https://drive.google.com/file/d/10NDfrLjVJ3K9A6xzPWCCwhrwRf6NZSk7/view).

## 1/8/18
El nuevo Fork cambió el scrypt a scrypt-N (scrypt:10) para combatir la minación ASIC. Asegúrate de haber cambiado tu algoritmo de `scrypt` a `scrypt:10`.

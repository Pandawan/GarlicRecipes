### Aviso: La minería CPU no se recomienda como no es muy probable que va a minar un bloqueo. Recomendamos la minería GPU.

# El índice de contenidos
- [Windows](#windows)
- [Mac](#mac)
- [Linux](#linux)
- [Troubleshooting](#troubleshooting)

# Windows
Se asegura que ya configura una cartera y tu red se ejecuta correctamente!
Puede mirar la [Guía cartera Windows](wallet-win.html) para aprender más.

## Paso 1: Descargando los archivos
Primero, tiene que descargar los archivos minería de CPU [aquí](ROOT/files/miner-cpu-win.zip).  
Extrae los archivos en la carpet de instalación (si has seguido las guías de cartera debe ser `C:\Garlic\`).

![Image of CPU Miner Files](https://i.imgur.com/6Nwy2dC.png)

## Paso 2: Configurar
Esto minero usa una sistema diferente para tipos diferentes de CPU. Sigue la sección de tu propio CPU.
Si tiene un Intel i7, los instrucciones son diferente que para CPUs otros. 


### Intel (regular) CPU
Cambia el archivo llamado `Run-Miner-Solo-CPU.bat` (Haga clic derecho > Edita), se asegura que al comienzo del archivo, se dice `.\Miner\cpuminer-gw64-core2`.  
También, cambia la dirección (`ADDRESS`) despues `--coinbase-addr=` a tu dirección de cartera Garlicoin.

### Intel i7 CPU
Cambia el archivo llamado `Run-Miner-Solo-CPU.bat` (Haga clic derecho > Edita), y cambia el comienzo del archivo a `.\Miner\cpuminer-gw64-corei7` (**se asegura que se dice 'corei7' sin comillas**).  
También, cambia la dirección (`ADDRESS`) despues `--coinbase-addr=` a tu dirección de cartera Garlicoin.
*Si no funciona la minería, considera siguiendo los pasos Intel regular*

### AMD CPU
Cambia el archivo llamado `Run-Miner-Solo-CPU.bat` (Haga clic derecho > Edita), y cambia el comienzo del archivo a `.\Miner\cpuminer-gw64-avx2` (**se asegura que se dice 'avx2' sin comillas**).  
También, cambia la dirección (`ADDRESS`) después `--coinbase-addr=` a tu dirección de cartera Garlicoin.
*Si no funciona la minería, considera siguiendo los pasos Intel regular*

![Image of Bat File For Solo](https://i.imgur.com/n6CyWMp.png)

## Paso 3: Comenzar la red
De la guía de cartera. se asegura que se ejecuta la red. (Puede ejecutar `Run-Network.bat` si no lo ha hecho ya).  

## Paso 4: (Opcional) Usando un Pool
Si desea usar un pool en vez de la minería sola (puede aprender más sobre de la diferencia [aquí](how-to-mine.html#solo-vs-pool)), luego puede seguir estos pasos.
<br>

Cambia el archivo llamado `Run-Miner-Pool-CPU.bat` (Haga clic derecho > Edita), y sigue los pasos mismos como [Paso 2](#step-2-set-up) (esta vez, no hay un `--coinbase-addr`(pool-mining.html#main-net)).
Luego, reemplaza el `POOL` col la dirección del Pool (puede encontrar algunos de los Pools disponibles [aquí])
También, cambia la dirección (`ADDRESS`) (que viene después `-u`) a tu dirección de cartera Garlicoin.

![Image of Bat File For Pool](https://i.imgur.com/puFRTqU.png)
<br>

Ahora, puede minar con un Pool. Simplemente ejecuta el `Run-Miner-Pool-CPU.bat` and debería funcionar.
Si la consola dice algo como *[2018-01-06 23:00:23] accepted: 4/4 (diff 0.000), 82.67 kH/s yes!* entonces ha minado un bloqueo! 

# Mac
Las guías de Mac no están disponile acutalmente. Si desea contribuir a esto sitio, por favor crea un pull request [aquí](https://github.com/PandawanFr/GarlicoinHelp/pulls).  
Por ahora, puede seguir [esta guía](https://pastebin.com/p1RksRwb) por `@Vilsol#2060`, que le va a ayudar un poco (aunque no tiene el detalle de un guía normal).

# Linux

##Paso 1: Descargar y construir cpuminer-multi
Clonar del [proyecto Github repo](https://github.com/tpruvot/cpuminer-multi) a un directorio de tu elección. Seguir las instrucciones en el README del proyecto, ejecuta `./build.sh` en un directorio nuevo, y installa cualquier requisito indispensable que son necesarios.

## Paso 2: Ejecuta el minero

### Paso 2a: Ejecuta el minero en un Pool
Tendrá especificar la dirección del Pool, tu cartera, y el algoritmo:
`./cpuminer --algo=scrypt:4096 -o stratum+tcp://pool.grlc-bakery.fun:3333 -u  <tu dirección de cartera aquí>`
Esto usa el Pool: `grlc-bakery.fun`, puede mirar una lista de Pools [aquí](pool-mining.html#main-net)

### Paso 2b: Ejecuta el Minero Solo
Cuando ejecuta localmente un nodo, tiene que especificar la dirección del nodo, y el algoritmo:
`./cpuminer --algo=scrypt:4096 -o 127.0.0.1:42070 -u  <tu dirección de cartera aquí>`

Ahora debe ver el 'hashrate' y, eventualmente, bloques confirmado.

# Troubleshooting

## HTTP request failed: Failed to connect to 127.0.0.1 port 42070: Connection refused (Conexión rechazada)
Si intenta minar Solo, se asesgura que tu red se ejecuta! Puede averiguar cómo configurarlo en los guías de la cartera.
If you are trying to Solo mine, make sure that your network is running! You can check out how to set it up on the wallet guides:
- [Windows](./wallet-win.html)
- [Mac](./wallet-mac.html)
- [Linux](./wallet-nix.html)

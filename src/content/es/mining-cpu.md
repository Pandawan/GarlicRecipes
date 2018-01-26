### Advertencia: La minería con CPU  no se recomienda, puesto que la probabilidad de minar un bloque es muy baja. En su lugar, prueba con el GPU.

# Tabla de Contenido
- [Windows](#windows)
- [Mac](#mac)
- [Linux](#linux)
- [Solución de Problemas](#solución-de-problemas)

# Windows
¡Asegúrate de haber configurado ya una billetera y que tu red está funcionando correctamente! Puede revisar la [Guía de Billetera para Windows](wallet-win.html) para aprender más.

## Paso 1: Descarga de Archivos
Primero deberás descargar los archivos para minería con CPU [aquí](ROOT/files/miner-cpu-win.zip).  
Extrae los archivos a tu carpeta de instalación (si has seguido las guías para la billetera, debería estar en `C:\Garlic\`)

![Image of CPU Miner Files](https://i.imgur.com/6Nwy2dC.png)

## Paso 2: (Recomendado) Configura para Minería Pool
Esta minería usa un sistema diferente para distintos tipos de CPU. Sigue la sección para tu propio CPU.
Si tienenes un Intel i7, las instrucciones son distintas que para los otros CPU Intel.

**Debido a que la Minería Pool se recomienda ampliamente, es lo que haremos.**  
**Puedes aprender más sobre la diferenia entre la minería Solo y Pool [aquí](how-to-mine.html#solo-vs-pool).**  
**Si prefieres minar Solo, puedes saltarte a esa sección [aquí](#step-4-optional-solo-mining).**

### Intel (regular) CPU
Edita el archivo `Run-Miner-Pool-CPU.bat` (Clic derecho > Editar), asegúrate que al incio del archivo diga `.\Miner\cpuminer-gw64-core2`.  
Cambia la pool (`POOL`) a cualquier pool, cambia la dirección (`ADDRESS`) a la que sea tu dirección de Garlicoin.

### Intel i7 CPU
Edita el archivo `Run-Miner-Pool-CPU.bat` (Clic derecho > Editar), asegúrate que al inicio del archivo diga `.\Miner\cpuminer-gw64-corei7` (**verifica que diga corei7**).  
Cambia la pool (`POOL`) a cualquier pool, ambia la dirección (`ADDRESS`) a la que sea tu dirección de Garlicoin.
*Si esto no funciona, considera seguir los pasos para el Intel regular en su lugar.*

### AMD CPU
Edita el archivo `Run-Miner-Pool-CPU.bat` (Clic derecho > Editar), asegúrate que al inicio del archivo diga `.\Miner\cpuminer-gw64-avx2` (**verifica que diga avx2**).  
Cambia la pool (`POOL`) a cualquier pool, ambia la dirección (`ADDRESS`) a la que sea tu dirección de Garlicoin.
*Si esto no funciona, considera seguir los pasos para el Intel regular en su lugar.*

![Image of Bat File For Pool](https://i.imgur.com/puFRTqU.png)
*Esta imagen puede no estar actualizada, no intentes copiar su contenido. En su lugar, usa los archivos que se te entregan.*
<br />

## Step 3: Empieza el Minero
Ya puedes empezar a minar con una Pool. Simplemente ejecuta tu `Run-Miner-Pool-CPU.bat` y deberías poder empezar ya.
Si la consola retorna algo como *[2018-01-06 23:00:23] accepted: 4/4 (diff 0.000), 82.67 kH/s yes!* ¡tienes entonces una acción aceptada! 

## Step 4: (Opcional) Configuración para Minería Solo 
Si deseas Minar Solo en lugar de con una Pool (puedes aprender más sobre la diferencia [aquí](how-to-mine.html#solo-vs-pool)), después sigue estos pasos.  
<br>

### Red de Minería Solo
**Como hiciste la configuración con la guía de la billetera, revisa que tu red haya arrancado bien. (Puedes hacerlo ejecutando `Run-Network.bat` si no lo has hecho aún).**

### Configuración
Edita el archivo `Run-Miner-Solo-CPU.bat` (Clic derecho > Editar), y esta vez, sólo cambia la dirección (`ADDRESS`, la que está después `--coinbase-addr=`) a tu dirección.  
Como no existe una pool, no es necesario cambiar nada más en el archivo.

![Image of Bat File For Solo](https://i.imgur.com/n6CyWMp.png)
*Esta imagen puede no estar actualizada, no intentes copiar su contenido. En su lugar, usa los archivos que se te entregan.*
<br>

### Empieza a Minar
Ahora puedes minar solo. Simplemente ejecuta tu `Run-Miner-Solo-CPU.bat` y todo debería estar bien.  
Si la consola retorna algo como *[2018-01-06 23:00:23] accepted: 4/4 (diff 0.000), 82.67 kH/s yes!* ¡significa que has minado un bloque! 

# Mac
Las guías para Mac no están disponibles actualmente. Si deseas contribuir a este sitio, puedes crear un pull request [aquí](https://github.com/PandawanFr/GarlicoinHelp/pulls).  
Por ahora, puedes seguir [esta guía](https://pastebin.com/p1RksRwb) de `@Vilsol#2060`, la cual debería ponerte en marcha (aunque no es tan detallada como una guía normal). 

# Linux

## Paso 1: Descargar y configurar cpuminer-multi
Clona desde el [repositorio en GitHub](https://github.com/tpruvot/cpuminer-multi) a un directorio de tu elección. Siguiendo las instrucciones del README, ejecuta `./build.sh` en el nuevo directorio, e instala los prerequisitos para tu ambiente/sistema. 

## Paso 2: Ejecuta el Minero

### Paso 2a: (Recomendado) Ejecuta el Minero en una Pool
Necesitarás especificar la dirección de la pool, tu billetera y el algoritmo:
`./cpuminer --algo=scrypt:4096 -o stratum+tcp://pool.grlc-bakery.fun:3333 -u  <la dirección de tu billetera aquí>`
Este usa la siguiente pool: `grlc-bakery.fun`, puedes revisar la lista de pools [aquí](pool-mining.html#main-net)

### Paso 2b: Ejecuta el Minero Solo
Al ejecutar un nodo de manera local, especificarás la dirección de tu nodo, tu billetera y el algoritmo:
`./cpuminer --algo=scrypt:4096 -o 127.0.0.1:42070 -u  <la dirección de tu billetera aquí>`

Deberías poder ver tu hashrate ahora y eventualmente tus bloques confirmados. 

# Solución de Problemas

## HTTP request failed: Failed to connect to 127.0.0.1 port 42070: Connection refused
Si estás intentando minar solo, ¡verifica que tu red esté funcionando! Puedes revisar cómo se configura en las guías de la billetera:
- [Windows](./wallet-win.html)
- [Mac](./wallet-mac.html)
- [Linux](./wallet-nix.html)

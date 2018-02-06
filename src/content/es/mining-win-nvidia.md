# El Índice de Contenidos
- [Solo Mining](#solo-mining)
- [Pool Mining](#pool-mining)
- [Troubleshooting](#troubleshooting)

# Solo Mining
Asegurase que ya configura una cartera y tu red se ejecuta correctamente!
Puede mirar la [Guía cartera Windows](wallet-win.html) para aprender más.

## Paso 1: Descargando los archivos
Primero, tiene que descargar esto especial [Solo Miner](https://cryptomining-blog.com/wp-content/download/ccminer-1.7.6-r10-neoscrypt.zip)(esto sólo funciona para Solo Mining) y extraerlo a su propia carpeta(llamado quizas *Solo Nvidia Miner*)

## Paso 2: Configurar el minero
Ahora tiene que crear un nuevo archivo de texto y llamarlo `Run-Miner-Solo-Nvidia.bat`. (**Asegúrase de que el archivo tiene el final .bat**)
Edita el archivo (Haga clic derecho > Edita), escribe esto:
```
ccminer.exe --algo=scrypt:10 -o 127.0.0.1:42070 -u test -p test --no-longpoll --no-getwork --no-stratum --coinbase-addr=ADDRESS --max-temp=85
pause  
```
(Asegúrase que reemplaza `ADDRESS` con su dirección). Una medida de seguridad se ha añadido que impide que sobrecalenta la tarjeta gráfica  (`--max-temp=85`). Sólo quita esta opcion si sabe que usted hace.

## Paso 3: Comenzar la minería
Asegúrase que ejecuta tu red, y luego puede abrir `Run-Miner-Solo-Nvidia.bat`! 
El minero podría tomar un rato para calibrar, puede durar entre 1 a 10 minutos.

# Pool Mining
Se asegura que ya configura una cartera y tu red se ejecuta correctamente!
Puede mirar la [Guía cartera Windows](wallet-win.html) para aprender más.
Pool mining no necesita que ejecuta la red.

## Paso 1: Descargando los archivos
Descarga esto especial [Pool Miner](https://github.com/tpruvot/ccminer/releases (descarga `ccminer-x64-2.2.4-cuda9.7z` si tiene una computadora 64-bit o si tiene una 32-bit `ccminer-x86-2.2.4-cuda9.7z`). Extrae los archivos a sus carpera propia (llamado quizas *Pool Nvidia Miner*).

## Paso 2: Configurar el minero
Ahora tiene que crear un nuevo archivo de texto y da un nuevo nombre a `Run-Miner-Pool-Nvidia.bat` (**Asegúrase de que el archivo tiene el final .bat**)
Edita el archivo (Haga clic derecho > Edita), escribe esto:
```
ccminer-x64 --algo=scrypt:10 -o POOL -u ADDRESS -listen --max-temp=85
pause
```
Luego, reemplaza the `POOL` a la dirección del Pool (puede encontrar algunos Pools disponibles [aquí](pool-mining.html#main-net)).
Luego, reemplaza `ADDRESS` (que sigue después `-u`) a tu dirección.
Una medida de seguridad se ha añadido que impide que sobrecalenta la tarjeta gráfica  (`--max-temp=85`). Sólo quita esta opcion si usted sabe que hace.

## Paso 3: Comenzar la minería
Asegúrase que ejecuta tu red, y luego puede abrir `Run-Miner-Solo-Nvidia.bat`! 
El minero podría tomar un rato para calibrar, puede durar entre 1 a 10 minutos.

# Troubleshooting
## get_work errors
Si hay algun get_work errors, entonces algo es incorrecto con la red. **Asegúrase que ejecuta tu red** (y ha añadido tu .conf archivo a tu carpeta /Roaming/Garlicoin).
**Debe esperar un poco antes la minería (para tu minero), quizás descarga el blockchain la red** 
Si el minero sigue no funciona, asegúrase que está usando el minero correcto con el `bat` archivo correcto, El minero solo es diferente del uno del Pool. 

## all cuda capable devices are busy or unavailable
Desactiva factores DSR en nvidia panel de control debería arreglar esto error.

## Repitiendo 0 kH/s
Desactiva factores DSR en nvidia panel de control debería arreglar esto error.

## no CUDA-capable device detected
Asegúrase que ha actualizado los drivers Nvidia y que tu tarjeta gráfica está en [esta lista](https://developer.nvidia.com/cuda-gpus) (mínimo requerido es `Compute 5.0`).

## Access is denied
Comprueba tu antivirus, podría estar impidiendo la red funciona

##Socorro!
Si los pasos de arriba no funciona. Puede preguntar en el Discord chat `#troubleshooting` o `#windows-mining` o contactarte conmigo `@Pandawan#4158`.

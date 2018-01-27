# Tabla de Contenido
- [Minería Pool (Recomendada)](#minería-pool)
- [Minería Solo](#minería-solo)
- [Mejora del Desempeño](#mejora-del-desempeño)
- [Solución de Problemas](#solución-de-problemas)

# Minería Pool
¡Asegúrate de tener ya tu billetera contigurada! Puedes revisar la [Guía de billetera para Windows](wallet-win.html) para saber más.  
La minería Pool no requiere que la red esté en funcionamiento.

## Paso 1: Descarga de Archivos
Descarga este especial [Minero Pool](https://github.com/tpruvot/ccminer/releases) (descarga `ccminer-x64-2.2.4-cuda9.7z` si tienes una computadora de 64 bits o `ccminer-x86-2.2.4-cuda9.7z` si tienes una de 32). Extrae esos archivos a su propia carpeta (puede ser *Pool Nvidia Miner*).

## Paso 2: Configuración del Minero
Ahora deberás crear un nuevo archivo de texto y renombrarlo a `Run-Miner-Pool-Nvidia.bat` (**verifica que termine con/tenga la extensión .bat**).  
Edita el archivo (Clic derecho > Editar), y agrega lo siguiente: 
```
ccminer-x64 --algo=scrypt:10 -o POOL -u ADDRESS -listen --max-temp=85
pause
```
Después, reemplaza la `POOL` a la dirección de la pool (puede ver algunas disponibles [aquí](pool-mining.html#main-net)).  
Una vez hecho, reemplaza la `ADDRESS` (justo después de `-u`) por tu dirección.  
Una medida de seguridad se ha agregado, la cual previene que tu tarjeta de gráficos se sobrecaliente
(`--max-temp=85`). Sólo quita esta opción si estás seguro de lo que haces. 

## Paso 3: Empieza a Minar
¡Puedes abrir `Run-Miner-Pool-Nvidia.bat`!  
El minero puede tomar un tiempo en calibrase, entre 1 a 10 minutos.

# Minería Solo
Verifica ya tener configurada tu billetera y que tu red está funcionando correctamente. Puedes revisar la [Guía de billetera para Windows](wallet-win.html) para saber más.

## Paso 1: Descarga de Archivos
Primero deberás descargar este especial [Minero Solo](https://cryptomining-blog.com/wp-content/download/ccminer-1.7.6-r10-neoscrypt.zip) (este funciona exclusivametne para Minería Solo) y extráelo a su propia carpeta (puede ser *Solo Nvidia Miner*).  

## Paso 2: Configurar el Minero
Ahora deberás crear un nuevo archvo de texto dentro de la carpeta *Miner* y renombrarlo como `Run-Miner-Solo-Nvidia.bat` (**Verifica que termine con/tenga la extensión .bat**).  
Edita el archivo (Clic derecho > Editar), y agrega lo siguiente:
```
ccminer.exe --algo=scrypt:10 -o 127.0.0.1:42070 -u test -p test --no-longpoll --no-getwork --no-stratum --coinbase-addr=ADDRESS --max-temp=85
pause  
```
(cerciórate de reemplazar `ADDRESS` con tu dirección).
Una medida de seguridad se ha agregado, la cual previene que tu tarjeta de gráficos se sobrecaliente
(`--max-temp=85`). Sólo quita esta opción si estás seguro de lo que haces. 

## Paso 3: Empieza a Minar
Asegúrate que tu red esté funcionando, y puedes abrir `Run-Miner-Solo-Nvidia.bat`.  
Al minero le puede tomar un tiempo calibrarse, entre 1 y 10 minutos. 

# Mejora del Desempeño
Aquí algunos pasos que puedes seguir para mejorar tu desempeño. Puede que no funcionen para todos, así que siénte libre de probarlos. 

## Lookup-Gap
En tu archivo bat, puedes intentar agregar `--lookup-gap=2` y ejecutarlo de nuevo. Esto podría mejorar el rendimiento de algunos GPU Nvidia, pero no de todos. 

# Solución de Problemas

## Errores get_work 
Si recibes algunso errores de get_work, significa que algo anda mal con tu red. 
Aquí algunos pasos para solucionarlo: 
- Verifica que tu red (`garlicoind`) esté funcionando.
- Cerciórate de haber agregado un archivo .conf en /Roaming/Garlicoin.  
- Asegúrate que tu red ha descargado toda la cadena de bloques (blockchain). (Revisa [El paso 5 de la guía para billetera](./wallet-win.html#step-5-download-the-blockchain)) 
- Si aún no funciona, asegúrate de estar usando el minero correcto con el archivo `bat` correcto, el minero Solo es distinto al Pool.

## all cuda capable devices are busy or unavailable
Desabilitar DSR factors en el panel de control de Nvidia debería arreglarlo.

## Spamming 0 kH/s
Desabilitar DSR factors en el panel de control de Nvidia debería arreglarlo.

## no CUDA-capable device detected
Asegúrate de haber actualizado los controladores de Nvidia y que tu tarjeta de gráficos se encuentre en [esta lista](https://developer.nvidia.com/cuda-gpus) (mínimo requerido es `Compute 5.0`).

## Access is denied
Revisa tu antivirus, puede ser el que esté haciendo que tu red no funciones.

## ¡AYUDA!
Si los pasos de arriba no te sirven, puedes consultar en el chat `#troubleshooting` de Discord o `#windows-mining` o contáctame `@Pandawan#4158`. 

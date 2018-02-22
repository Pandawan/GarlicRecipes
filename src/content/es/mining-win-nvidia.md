# Tabla de Contenido
- [Minería Pool (Recomendada)](#minería-pool)
- [Minería Solo](#minería-solo)
- [Mejora del Desempeño](#mejora-del-desempeño)
- [Solución de Problemas](#solución-de-problemas)
- [MisasMinerSetup](https://github.com/MisaRistolainen/MisasMinerSetup)

# Minería Pool
¡Asegúrate de tener ya tu billetera contigurada! Puedes revisar la [Guía de billetera para Windows](wallet-win.html) para saber más.  
La minería Pool no requiere que la red esté en funcionamiento.

## Paso 1: Descarga de Archivos
Descarga este especial [Minero Pool](https://github.com/lenis0012/ccminer/releases/latest) (descarga `ccminer-x64.exe` si tienes una computadora de 64 bits o `ccminer-x86.exe` si tienes una de 32). Extrae esos archivos a su propia carpeta (puede ser *Pool Nvidia Miner*).

## Paso 2: Configuración del Minero
Ahora deberás crear un nuevo archivo de texto y renombrarlo a `Run-Miner-Pool-Nvidia.bat` (**verifica que termine con/tenga la extensión .bat**).  
Edita el archivo (Clic derecho > Editar), y agrega lo siguiente: 
```
ccminer-x64 --algo=allium -o POOL -u ADDRESS --max-temp=85
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
Primero deberás descargar este especial [Minero Solo](https://github.com/beanjo55/ccminer-nanashi/releases/latest) (este funciona exclusivametne para Minería Solo) y extráelo a su propia carpeta (puede ser *Solo Nvidia Miner*).  

## Paso 2: Configurar el Minero
O puede usar el archivo `run.bat` que se le da, o puede crear uno propio. Termina en lo mismo.
Si usa el archivo `run.bat`, asegúrese de cambiar la dirección a su propia dirección.

<br />

Ahora deberás crear un nuevo archvo de texto dentro de la carpeta *Miner* y renombrarlo como `Run-Miner-Solo-Nvidia.bat` (**Verifica que termine con/tenga la extensión .bat**).  
Edita el archivo (Clic derecho > Editar), y agrega lo siguiente:
```
ccminer.exe --algo=allium -o 127.0.0.1:42068 -u test -p test --coinbase-addr=ADDRESS --no-stratum --no-longpoll --max-temp=85
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

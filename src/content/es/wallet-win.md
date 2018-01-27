# Tabla de Contenido
- [Configuración de la Red](#configuración-de-la-red)
- [Obtención de la Billetera](#obtención-de-la-billetera)
- [Solución de Problemas](#solución-de-problemas)

# Configuración de la Red
Se trata de un proceso rápido y fácil. Le permite a tu computadora conectarse a la red de Garlicoin.

## Paso 1. Descarga de Archivos
Primero, necesitarás descargar los binarios para Windows [aquí](https://garlicoin.io/downloads) así como los [Archivos de inicio rápido](ROOT/files/wallet-win.zip).
Una vez que lo has hecho, abre los dos archivos (`.tar.gz` y `.zip`) y extraer todo su contenido en una carpeta (En este tutorial, usaremos `C:\Garlic\`).  
![Garlic Folder With Files](https://i.imgur.com/YYqtODB.png)

## Paso 2. Conexión a la Red
Esto se puede hacer de dos formas, la Gráfica (Recomendada) y la de Línea de Comandos.  

### La Gráfica
En tu carpeta de instalación, debería haber un archivo llamado `Run-Network.bat`.  
Abre ese archivo; se abrirá una ventana del sistema. Asegúrate de Permitir Acceso a través de tu firewall (si te lo solicita). 
<br>

El programa no dirá nada, déjalo así en el fondo. **No lo cierres.**  
*Deberás abrir esto cada vez que desees usar tu billetera (o cuando mines solo).*  

### La de Línea de Comandos
Para los más experimentados, abre una línea de comandos/símbolo del sistema.
Navega a tu carpeta de Garlic usando `cd`.  
Una vez que lo has hecho, ejecuta el comando: `garlicoind`.
Windows puede solicitar Acceso al Firewall, permítelo. 
<br>

El programa no dirá nada, déjalo así en el fondo. **No lo cierres.**  
*Deberás abrir esto cada vez que desees usar tu billetera (o cuando mines solo).*


## Paso 3. Mover el archivo .conf a Roaming\Garlicoin
De vuelta en tu carpeta de Garlic, debería haber un archivo llamado `garlicoin.conf`. Este archivo necesita ser movido a la carpeta `Garlicoin` que se encuentra en `AppData\Roaming`.  
<br>

Para acceder a esta Carpeta, Abre **RUN** (Windows + R), y escribe `%appdata%`. Esto debería abrir una carpeta, localiza la carpeta `Garlicoin` y mueve el archivo `garlicoin.conf` a la misma.

## Paso 4. Reiniciar la Red
Sólo para asegurarte que todo se hizo bien. Cierra tu ventana de Red (la del `Run-Network.bat`)
sosteniendo **Ctrl + C**.  
Ahora repite el **Paso 2**, todo debería salir bien.  
<br>

## Paso 5. Descarga la Cadena de Bloques (Blockchain)
Mientras está abierta la venta de tu red, abre una nueva línea de comandos/símbolo del sistema.
Navega a tu carpeta de Garlicoin (use `cd C:\Garlic\`), y escribe `garlicoin-cli getinfo`.  
Sigue usando ese comando hasta que el número de bloques deje de cambiar.
Si deja de cambiar (después de ejecutar el comando un montón de veces), significa que has descargado toda la Cadena de Bloques y puede entonces seguir con el siguiente paso.

# Obtención de la Billetera 
Una vez que tiene la red lista y ejecutándose, necesitarás una dirección de billetera.  

## Paso 1. Uso de la línea de comandos/símbolo del sistema
Abre una **Línea de comandos**. Necesitarás navegar a tu carpet de instalación; puedes hacerlo así: 
Si has instalado en un drive distinto, necesitas escribir la letra de tu drive seguida por dos puntos. Por ejemplo, el drive F sería `F:`. Luego presiona enter.
Escribre `cd C:\Garlic\` (or el que haya sido el nombre de la carpeta de instalación) y presiona Enter. 

## Paso 2. Conseguir una Nueva dirección
En la línea de comandos, escribe este comando: `garlicoin-cli getnewaddress`.  
Esto debería arrojar/retornar una serie de letras y números. Esta es tu dirección. Asegúrate de copiarla y mantenerla guardada en algún lugar.
(Para copiar desde la líena de comandos, selecciona la dirección con tu ratón y haz clic derecho).

*Cuando alguien quiera pagarte, puedes enviarles esa dirección*

![Image of GetNewAddress](https://i.imgur.com/pjSUslM.png)

## Step 3. Obtención de información de la Billetera
Para asegurarte de que todo se hizo bien (o para ver el estado de cuenta), puedes escribir: `garlicoin-cli getwalletinfo` en esa misma línea de comandos.  
Esto debería arrojarte información sobre tu estado de cuenta, billetera, cuándo fue tu última transacción...  
<br>

## Paso 4. Respaldo de la Billetera
En ocasiones, la app de la billetera falla y corrompe la billetera. Si deseas respaldarla antes de que pase (para poder recuperarla en caso de que sí falle), sigue los siguientes pasos:
En una ventana de línea de comandos (mientras aún está en funcionamiento la red), escribe el comando: `garlicoin-cli backupwallet <ruta>`.  
Esto guardará un archivo `wallet.dat` en la ruta especificada. Si tu billetera llegara a corromperse, navega a esta carpeta:
- Windows: `%APPDATA%\Bitcoin`
- Linux: `~/.bitcoin/`
- MacOS: `~/Library/Application Support/Bitcoin/`

y sobreescribe el archivo `wallet.dat` dentro de esa carpeta por el de respaldo.

## Paso 5. Envíos a alguien más
Si alguna vez quieres enviarle Garlicoin a alguien, puedes usar este comando `./garlicoin-cli sendtoaddress <dirección> <cantidad>`.

¡Eso es todo! ¡Terminaste!

# Solución de Problemas

## json\_rpc\_call failed, retry after 10 seconds
Si recibes este error, deja que siga reintentando. Debería corregirse solo pronto.

## garlicoind is not recognized
Si recibes este error, significa que tu línea de comandos no está abierta en tu directorio de instalación.
Cerciórate de que hayas usado `cd C:\Ruta\A\Carpeta\Garlic` antes de ejecutar tu comando.

## garlicoin-cli is not recognized
Si recibes este error, significa que tu línea de comandos no está abierta en tu directorio de instalación.
Cerciórate de que hayas usado `cd C:\Ruta\A\Carpeta\Garlic` antes de ejecutar tu comando.

## 0 blocks
Intenta cambiando el archivo `.conf` para que tenga el contenido que se encuentra en la [Página de cambios](./changes.html).

## ¡AYUDA!
Si los pasos de arriba no te sirven, puedes consultar en el chat `#troubleshooting` de Discord o `#windows-mining` o contáctame `@Pandawan#4158`. 
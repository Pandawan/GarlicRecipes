# El Índice de Contenidos
- [Configurar la Red](#setting-up-the-network)
- [Obtener una Cartera](#getting-a-wallet)
- [Troubleshooting](#troubleshooting)

# Configurar la Red
Configurar la red es rápido y muy fácil. Se permite tu ordenador conectar al red Garlicoin.

## Paso 1. Descargando los archivos
Primero, tiene que descargar los windows binaries [aquí](https://garlicoin.io/downloads) además del [Quick Start Files](ROOT/files/wallet-win.zip).
Después, abre el archivo y extraerlo a una carpeta (En esto tutorial, vamos a usar `C:\Garlic\`).

![Garlic Carpeta Con Archivos](https://i.imgur.com/YYqtODB.png)

## Paso 2. Contectar a la Red
Esto se puede hacer en dos maneras, La manera gráfica (recomendado) y la manera Command Line

### La manera gráfica
En la carpeta de installación, Debe de haber un archivo llamado `Run-Network.bat`.  
Abre esto archivo, se abre (command prompt window). Asegurase que permitirlo acceso por el cortafuego (si pidelo).

<br>
No decirá nada el programa, lo deja en el fondo. **No cierralo.**
*Tendrá que abrir esto cada vez que desea usar la cartera (o cuando hace la minería Solo).*


### La manera de Command Line
Para lo más experimentado, abre el Command Prompt. 
Navigar a la carpeta Garlicoin usando `cd`. 
Luego, ejecuta el mando: `garlicoind`.
Quizás le pide Windows para el accesso cortafuegos, Permitalo
<br>

No decirá nada el programa, lo deja en el fondo. **No cierralo.**
*Tendrá que abrir esto cada vez que desea usar la cartera (o cuando hace la minería Solo).*

## Paso 3. Mover .conf archivo a Roaming\Garlicoin
Regrese a la carpeta Garlic, Debe de haber un archivo llamado `garlicoin.conf`. Mueve esto archivo a la carpeta `Garlicoin` encontrado en `AppData\Roaming`. 
<br>

Para acceder a esta carpeta, Abre **RUN** (Windows tecla + R), y escribe `%appdata%`. Esto debe abrir una carpeta, luego usted ubica la carpeta `Garlicoin` y mueva el archivo `garlicoin.conf` allí a ello

## Paso 4. Reiniciar la Red
Para estar seguro de que todo fue hecho correctamente. Cierra su ventana de red (`Run-Network.bat`) manteniendo las teclas **Ctrl + C**. Ahora repite **Paso 2**, probablemente funciona.
<br>

## Paso 5. Descargar el Blockchain
Mientras mantenga abierto la ventana de red, abre un nuevo Command Prompt. Navigar a tu carpeta Garlicoin (usa `cd C:\Garlic\`), y escribir `garlicoin-cli getinfo`. 
Sigue usando ese mando, hasta que dejan de cambiar los numeros de bloques. Si deja de cambiar (después ejecuta el mando muchas veces), significa que usted ha descargado todo del blockchain y ahora puede mover al paso siguiente.  

# Conseguir una cartera
Una vez que empiece a functionar la red, tendrá que obtener una dirección de cartera.

## Paso 1. Usando el Command Prompt
Abre un **Command Prompt**. Navigar al carpeta de installación, puede hacerlo como esto:
Si lo installaba a un disco duro, usted tiene que escribir la letra de su disco duro seguido por los dos puntos. Por ejemplo, disco F estaría `F:`.
Luego apreta 'enter'.
Escribe `cd C:\Garlic\` (o lo que es su carpeta de instalación) y apreta 'enter'.

## Paso 2. Obtener una dirección nueva
En el Command Prompt, escribe esto mando:  `garlicoin-cli getnewaddress`.
Esto debería devolver una serie de letras y numeros. Esto es su dirección. Asegurase de copiarlo y guardarlo en un lugar seguro. 
(Para copiarlo del Command Prompt, selectionar la dirección con el ratón y luego clic derecho).

*Cuando alguien quiere pagarle, puede enviarle esta dirección*

![Image of GetNewAddress](https://i.imgur.com/pjSUslM.png)

## Paso 3. Obtener la información de la cartera
Para asegurase que ha hecho todo correcto (o ver el saldo), puede escribir: `garlicoin-cli getwalletinfo` es el mismo Command Prompt.
Debe darle información de tu saldo, cartera, cuando fue su ultima transación...
<br>

## Paso 4. Hacer una copia de seguridad
A veces, la applicación de cartera puede fallar y corromper la cartera. Si desea hacer una copia de seguridad antes de que esto suceda (para recuperarlo en caso de que romper), seguir estos pasos:
En una ventanna de Command Prompt (mientras ejecuta la red), escribe el mando: `garlicoin-cli backupwallet <path>`.
Esto archivará un archivo `wallet.dat` en la ruta de archivo. Si se corrompe su cartera, navigar a esta carpeta:
- Windows: `%APPDATA%\Bitcoin`
- Linux: `~/.bitcoin/`
- MacOS: `~/Library/Application Support/Bitcoin/`

y sobreescribir el archivo `wallet.dat` dentro la carpeta por la copia de seguridad.

## Paso 5. Enviando a alguien
Si desea enviar Garlicoin a alguien. Puede usar esto mando `garlicoin-cli sendtoaddress <direccióngarlicoin> <cantidad>`.

Ya está! Usted lo ha hecho!


# La resolución de problemas

## json\_rpc\_call failed, retry after 10 seconds
Si tiene este error, lo deja sigue intentar. Debe corregirse pronto.

## garlicoind is not recognized
Por esto error, significa que no se abre su Command Prompt en la carpeta de installación.
Asegurase que tiene la ruta `cd C:\Path\To\Garlic\Folder` antes de ejecutar el mando.

## garlicoin-cli is not recognized
Para esto error, significa que no se abre su Command Prompt en la carpeta de installación.
Asegurase que tiene la ruta `cd C:\Path\To\Garlic\Folder` antes de ejecutar el mando.

## 0 blocks
Intenta de cambiar el archivo `.conf` para tener el contenido encontrado en la [pagina de cambios](./changes.html).

## SOCORRO!
Si no funciona la resolución de problemas. Puede pedir ayuda en la charla Discord `#troubleshooting` o `#windows-mining` o enviarme un mensaje `@Pandawan#4158`.
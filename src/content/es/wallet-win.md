# El índice de contenidos
- [Setting Up The Network](#setting-up-the-network)
- [Getting A Wallet](#getting-a-wallet)
- [Troubleshooting](#troubleshooting)

# Configurar la Red
Configurar la red es rápido y muy fácil. Se permite tu ordenador conectar al red Garlicoin.

## Paso 1. Descargando los archivos
Primero, tiene que descargar el windows binaries [aquí](https://garlicoin.io/downloads) además de el [Quick Start Files](ROOT/files/wallet-win.zip).
Después, abre el archivo y extraerlo a una carpeta (En esto tutorial, vamos a usar `C:\Garlic\`).

![Garlic Carpeta Con Archivos](https://i.imgur.com/YYqtODB.png)

## Paso 2. Contectar a la Red
Esto se puede hacer en dos maneras, La manera gráfica (recomendado) y la manera Command Line

### La manera gráfica
En la carpeta de installación, Debe de haber un archivo llamado `Run-Network.bat`.  
Abre esto archivo, se abre (command prompt window). Asegurase que permitirlo acceso por el cortafuego (si pidelo).

Open that file; a command prompt window should open. Make sure you Allow Access through your firewall (if it asks you).  
<br>

No decirá nada el programa, deja que se siente en el fondo. **No cierralo.**
*Tendrá que abrir esto cada vez que desea usar la cartera (o cuando hace la minería Solo).*

The program will not say anything, let it sit in the background. **Do not close it.**  
*You will have to open this any time you wish to use your wallet (or when solo mining).*  

### La manera Command Line
Para lo más experimentado, abre el Command Prompt. 
Navigar a la carpeta Garlicoin usando `cd`. 
Luego, ejecuta el mando: `garlicoind`.
Quizás le pide Windows para el accesso cortafuegos, Permitalo

For the more experienced, open a Command Prompt.  
Navigate to your Garlic folder using `cd`.  
Once that is done, run the command: `garlicoind`.
Windows might ask you for Firewall Access, Allow it.  
<br>

No decirá nada el programa, deja que se siente en el fondo. **No cierralo.**
*Tendrá que abrir esto cada vez que desea usar la cartera (o cuando hace la minería Solo).*

The program will not say anything, let it sit in the background. **Do not close it.**  
*You will have to run this any time you wish to use your wallet (or when solo mining).*

## Paso 3. Mover .conf archivo a Roaming\Garlicoin
Regrese a la carpeta Garlic, Debe de haber un archivo llamado `garlicoin.conf`. Mueve esto archivo a la carpeta `Garlicoin` encontrado en `AppData\Roaming`. 
<br>

Para acceder a esta carpeta, Abre **RUN** (Windows tecla + R), y escribe `%appdata%`. Esto debería abrir una carpeta, ubicar la carpeta `Garlicoin` y mueva el archivo `garlicoin.conf` allí (a ello)?

## Step 3. Moving .conf File to Roaming\Garlicoin
Back to your Garlic folder, there should be a file called `garlicoin.conf`. This file needs to be moved to the `Garlicoin` folder found in `AppData\Roaming`.  
<br>

To access this folder, Open **RUN** (Windows + R), and type `%appdata%`. This should open a folder, locate the `Garlicoin` folder and move the `garlicoin.conf` file to it.

## Paso 4. Reiniciar la Red
Para estar seguro de que todo fue hecho correctamente. Cierra su ventana de red (`Run-Network.bat`) manteniendo las teclas **Ctrl + C**. Ahora repite **Paso 2**, probablemente funcionará.
<br>

## Paso 5. Descargar el Blockchain
Mientras mantenga abierto la ventana de red, abre un nuevo Command Prompt. Navigar a tu carpeta Garlicoin (usa `cd C:\Garlic\`), y escribir `garlicoin-cli getinfo`. 
Sigue usando ese mando, hasta que dejan de cambiar los numeros de bloques. Si deja de cambiar (después ejecuta el mando muchas veces), significa que usted ha descargado todo del blockchain y ahora puede mover al paso siguiente.  

# Conseguir una cartera
Una vez que empiece a functionar la red, tendrá que obtener una dirección de cartera.

## Paso 1. Usando el Command Prompt
Abre un **Command Prompt**. Navigar al carpeta de installación, puede hacerlo como esto:
Si lo installaba a un disco duro, usted tiene que escribir la letra de su disco duro seguido de los dos puntos. Por ejemplo, disco F estaría `F:`.
Luego apreta 'enter'.
Escribe (escirbe a máquina) `cd C:\Garlic\` (o lo que es su carpeta de instalación) y apreta 'enter'.

## Paso 2. Obtener una dirección nueva
En el Command Prompt, escribe esto mando:  `garlicoin-cli getnewaddress`.
Esto debería devolver una serie de letras y numeros. Esto es su dirección. Asegurase de copiarlo y guardarlo en un lugar seguro. 
(Para copiarlo del Command Prompt, selectionar la dirección con el ratón y luego clic derecho).

*Cuando sea alguien quiere pagarle, puede enviarle esta dirección*

![Image of GetNewAddress](https://i.imgur.com/pjSUslM.png)

## Paso 3. Obtener la información de la cartera
Para Asegurase que ha hecho todo correcto (o ver el saldo), puede escribir: `garlicoin-cli getwalletinfo`, cuando fue su ultima transación...
<br>

## Paso 4. Hacer una copia de seguridad
A veces, la applicación de cartera puede fallar y corromper la cartera. Si desea hacer una copia de seguridad antes de que esto suceda (para recuperarlo en caso de que romper), seguir estos pasos:
En una ventanna de Command Prompt (mientras ejecuta la red), escribe el mando: `garlicoin-cli backupwallet <path>`.
Esto ahorra blarghs

## Step 4. Backing Up the Wallet
Sometimes, the wallet app can fail and corrupt the wallet. If you wish to back it up before that happens (in order to recover it in case it does break), follow these steps:  
In a Command Prompt window (while the network is running), type the command: `garlicoin-cli backupwallet <path>`.  
This will save a `wallet.dat` file in at the given path. If your wallet ever gets corrupted, navigate to this folder:
- Windows: `%APPDATA%\Bitcoin`
- Linux: `~/.bitcoin/`
- MacOS: `~/Library/Application Support/Bitcoin/`

and overwrite the `wallet.dat` file inside the folder by the backup one.

## Step 5. Sending to Someone Else
If you ever wish to send Garlicoin to someone. You can use this command `garlicoin-cli sendtoaddress <bitcoinaddress> <amount>`.

That's it! You are done!

# Troubleshooting

## json\_rpc\_call failed, retry after 10 seconds
If you are getting this error, let it keep retrying. It should correct itself soon.

## garlicoind is not recognized
If you are getting this eror, it means that your Command Prompt is not opened in your installation directory. 
Make sure that you have used `cd C:\Path\To\Garlic\Folder` before running your command.

## garlicoin-cli is not recognized
If you are getting this eror, it means that your Command Prompt is not opened in your installation directory. 
Make sure that you have used `cd C:\Path\To\Garlic\Folder` before running your command.

## 0 blocks
Try changing your `.conf` file to have the content found on the [Changes page](./changes.html).

## HELP!
If the above troubleshooting steps do not work. You can ask in the Discord chat `#troubleshooting` or `#windows-mining` or contact me `@Pandawan#4158`.
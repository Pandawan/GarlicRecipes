# Tabla de Contenido
- [Configuración de la Red](#configuración-de-la-red)
- [Conseguir una billetera](#conseguir-una-billetera)

# Configuración de la Red
Este proceso es rápido y muy fácil. Le permite a tu computadora conectarse a la red de Garlicoin.

## Paso 1. Descarga de Archivos
Primero, necesitarás descargar la última versión para linux [aquí](https://github.com/GarlicoinOrg/Garlicoin/releases) así como los archivos del inicio rápido [aquí](ROOT/files/wallet-nix.zip). 
Usa el más recinte Garlicoin-x86_64-unknown-linux-gnu.tar.gz para cualquier sistema de 64 bits.
Una vez hecho, abre los archvos y extrae todo su contenido en una carpeta.

## Paso 2. Conexión a la Red
Navega a tu carpeta Garlic usando `cd`.  
Una vez hecho, ejecuta el comando: `./garlicoind` in a terminal.
<br>

El programa no dirá nada, déjalo así en el fondo. **No lo cierres.**  
*Deberás ejecutar esto cada vez que quieras usar tu billetera (o cuando hagas minería solo).*

## Paso 3. Moviendo el archivo .conf a Roaming\Garlicoin
De vuelta en tu carpeta Garlic, debería haber un arvhico llamado `garlicoin.conf`. Este archivo necesita moverse a la carpeta `.garlicoin` que se encuentra en tu directorio de inicio.

## Paso 4. Reinicia la Red
Sólo para aseguarte que todo se hizo de manera correcta. Cierra tu conexión a la red presionando
**Ctrl + C** en la terminal donde lo iniciaste, o sólo cerrando la terminal.
Ahora repite el **Paso 2**, todo debería estar bien.  
<br>

## Paso 5. Descarga la cadena de bloques (blockchain)
Mientras mantienes abierta la terminal de la red, abre una nueva terminal.
Navega hasta tu carpeta de Garlicoin y escribe `./garlicoin-cli getinfo`. 
Sigue usando ese comando hasta que el número de bloques deje de cambiar.
Si deja de cambiar (después de ejecutar el comando un montón de veces), significa que has descargado toda la blockchain y puedes ahora pasar al siguiente paso. 

# Conseguir una Billetera
Una vez que tienes la red funcionando, necesitarás una dirección de billetera.
Abre una terminal y navega a la carpeta de garlic.

## Una nueva dirección
En la terminal, escribe este comando: `./garlicoin-cli getnewaddress`.  
Esto debería retornar una serie de letras y número. Este es tu dirección. Cerciórate de copiarla y guardarla en algún lugar.

*Cuando alguien quiere pagarte, les puedes enviar esa dirección*

Por defecto tu billetera se crea en tu directorio de inicio en `~/.garlicoin/wallet.dat`

## Obtener información de la billetera
Para asegurarte que tienes todo bien (o para ver tu estado de cuenta), puedes escribir:
`./garlicoin-cli getwalletinfo` en una terminal mientras la red esté corriendo/funcionando.  
Esto debería arrojar información de tu estado de cuenta, billetera, cuándo fue tu última transacción... 
<br>

## Respaldar la billetera
En ocasiones, la aplicación de la billetera puede fallar y corromper la billetera. Si deseas respaldarla antes de que suceda (para poder recuperarla en caso de que se dañe), sigue estos pasos:
En una terminal (mientras está en función la red), escribe el comando: `./garlicoin-cli backupwallet <ruta>`.  
Esto guardará un archivo `wallet.dat` en la ruta especificada. Si tu billete se llega a corromper, navega a esta carpeta: 
`~/.garlicoin/`
y sobreescribe el archivo `wallet.dat` dentro de la carpeta por el del respaldo.

## Envíos a alguien más
Si alguna vez quieres enviarle Garlicoin a alguien, puedes usar este comando `./garlicoin-cli sendtoaddress <dirección> <cantidad>`.

¡Eso es todo! ¡Terminaste!

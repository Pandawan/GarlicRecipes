### Внимание: майнинг на процессоре не рекомендуется, так как шанс намайнить блок на нем очень низкий. Попробуйте майнить на видеокарте

### Warning: CPU Mining isn't recommended as the likeliness of mining a block with it is very low. Try GPU mining instead.

# Содержание
- [Windows](#windows)
- [Mac](#mac)
- [Linux](#linux)

# Windows
Удостоверьтесь, что вы уже настроили кошелек и сеть функционирует правильно. Ознакомьтесь с [инструкцией для кошелька в Windows](wallet-win.html), чтобы узнать больше.

## Шаг 1: Загрузка файлов
Сначала вы должны скачать CPU miner [здесь](ROOT/files/miner-cpu-win.zip)
Распакуйте файлы в папку с установкой кошелька (если вы следовали инструкции, она должна быть `C:\Garlic\`).


![Картинка файлов CPU Miner](https://i.imgur.com/6Nwy2dC.png)

## Шаг 2: Настройка
Эта программа использует разные методы для разных типов процессоров.
Если у вас Intel i7, обратите внимание, что инструкции отличаются от других процессоров Intel.


### Процессоры Intel (обычные)
Редактируйте файл `Run-Miner-Solo-CPU.bat` (Правый клик > Изменить), удостоверьтесь, что файл начинается с `.\Miner\cpuminer-gw64-core2`. 
Замените адрес (`ADDRESS`) после `--coinbase-addr=` на свой адрес Garlicoin

### Процессоры Intel i7
Редактируйте файл `Run-Miner-Solo-CPU.bat` (Правый клик > Изменить), измените начало файла на `.\Miner\cpuminer-gw64-corei7` (**удостоверьтесь, что там присутствует corei7**)
Замените адрес (`ADDRESS`) после `--coinbase-addr=` на свой адрес Garlicoin
*Если майнинг не работает, используйте инструкцию к обычным процессорам Intel.*

### Процессоры AMD
Редактируйте файл `Run-Miner-Solo-CPU.bat` (Правый клик > Изменить), измените начало файла на  `.\Miner\cpuminer-gw64-avx2` (**удостоверьтесь, что там присутствует avx2**).  
Замените адрес (`ADDRESS`) после `--coinbase-addr=` на свой адрес Garlicoin
*Если майнинг не работает, используйте инструкцию к обычным процессорам Intel.*

![Картинка bat-файла для соло](https://i.imgur.com/n6CyWMp.png)

## Шаг 3: Запуск Сети
Следуя инструкции настройки кошельке, убедитесь, что ваша Сеть запущена. (В противном случае запустите `Run-Network.bat`, если вы этого еще не сделали.)

## Шаг 4: (опционально) Используйте пул
Если вы хотите майнить в пуле (подробнее об отличиях [here](how-to-mine.html#solo-vs-pool)), тогда следуйте следующим шагам.

<br>

Редактируйте файл `Run-Miner-Pool-CPU.bat` (Правый клик > Изменить), и следуйте [Шагу 2](#step-2-set-up) (в этот раз здесь не будет `--coinbase-addr`).  
Затем, замените слово `POOL` на адрес пула (вы можете найти список доступных пулов [здесь](pool-mining.html#test-net)
Замените адрес (`ADDRESS`) после `-u` на свой адрес Garlicoin

![Картинка bat-файла для майнинга в пуле](https://i.imgur.com/puFRTqU.png)
<br>

Теперь вы можете майнить в пуле. Просто запустите `Run-Miner-Pool-CPU.bat`.
Если консоль говорить что-то вроде *[2018-01-06 23:00:23] accepted: 4/4 (diff 0.000), 82.67 kH/s yes!*, значит вы намайнили блок!

# Mac
Инструкции для Mac и Linux систем пока недоступны. 
Mac and Linux guides are currently not available. If you wish to contribute to this site, please create a pull request [here](https://github.com/PandawanFr/GarlicoinHelp/pulls).  
For now, you can follow [this guide](https://pastebin.com/p1RksRwb) by `@Vilsol#2060`, which should get you going (although it is not as detailed as a normal guide). 

# Linux
Инструкции для Mac и Linux систем пока недоступны. 
Mac and Linux guides are currently not available. If you wish to contribute to this site, please create a pull request [here](https://github.com/PandawanFr/GarlicoinHelp/pulls).  
For now, you can follow [this guide](https://pastebin.com/p1RksRwb) by `@Vilsol#2060`, which should get you going (although it is not as detailed as a normal guide). 

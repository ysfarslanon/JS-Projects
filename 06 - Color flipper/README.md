# Color Flipper

## Giriş

Rastgele hexadecimal ve rgb olarak renk üreten ve üretilen rengi arkaplan rengi olarak ayarlayan gerektiğinde rengi kopyalayalabildiğimiz JS dilinde yazılan projedir.

## Değişkenler

1. btnHex = [HTML dosyasındaki ](https://github.com/ysfarslanon/JS-Projects/blob/master/06%20-%20Color%20flipper/index.html) id değeri btnHex olan butonu temsil eder. Click eventinde hexadecimal renk kodu üretmek için kullanılmaktadır. (Create Color (Hex))
2. btnRGB = [HTML dosyasındaki ](https://github.com/ysfarslanon/JS-Projects/blob/master/06%20-%20Color%20flipper/index.html) id değeri btnRgb olan butonu temsil eder. Click eventinde rgb renk kodu üretmek için kullanılmaktadır.  (Create Color (RGB))
3. btnCopy = [HTML dosyasındaki ](https://github.com/ysfarslanon/JS-Projects/blob/master/06%20-%20Color%20flipper/index.html) id değeri btnCopy olan butonu temsil eder. Click eventinde üretilen rengin kodunu kopyalamak için kullanılmaktadır.
4. colorText = [HTML dosyasındaki ](https://github.com/ysfarslanon/JS-Projects/blob/master/06%20-%20Color%20flipper/index.html) id değeri colorText olan p elementini temsil eder. Üretilen rengi bildirmek için kullanılmaktadır.
5. colors = Hexadecimal renk kodlarını üretebilmek için 0 - 9 ve A - F karakterlerini içeren dizidir.

## Fonksiyonlar

1. `getRandomNumber(limit)`

    Rastgele sayı üretmek içiin kullanılır.
    
    `limit` = Üretilecek rastgele sayının 0 ila kaç arasında olması gerektiğini belirten parametredir. 
    
    `createHexColor()` ve `createRgbColor()` fonksiyonlarında yardımcı olmaktadır.
    
2. `createHexColor()`

    hexColor değişkenine colors dizisinden rastgele bir elemanını `getRandomNumber(limit)` fonksiyonu yardımıyla seçerek hexadecimal renk kodunu üreten ve return eden fonksiyondur.
    
3. ` applyHexColor()`

   `createHexColor()` fonksiyonu yardımıyla arkaplan rengini değiştiren ve colorText'in innerHTML'ine  üretilen renk kodunu yazan  ve ID değeri btnHex olan elementin click eventine atanan fonksiyondur.
    
4. `createRgbColor()`

    `createHexColor()` fonksiyonunda olduğu gibi RGB türünden renk üretimini `getRandomNumber(limit)` fonksiyonu yardımıyla üreten fonksiyondur.
   
5. `applyRgbColor()`

    `createRgbColor()` fonksiyonu yardımıyla arkaplan rengini değiştiren ve colorText'in innerHTML'ine  üretilen renk kodunu yazan ve ID değeri btnRgb olan elementin click eventine atanan fonksiyondur.
    
6. `copy()`

    Üretilen renk değerlerini kopyalayan ve bunu `alert()` fonksiyonu ile kullanıcıya bildiren fonksiyondur
    
## Uygulama ekran resimleri

1. Açılış ekranı
  
  ![Açılış ekranı](https://raw.githubusercontent.com/ysfarslanon/JS-Projects/master/06%20-%20Color%20flipper/img/ss-1.png)

2. Hexadecimal renk kodu üretildiği an

  ![Hexadecimal](https://raw.githubusercontent.com/ysfarslanon/JS-Projects/master/06%20-%20Color%20flipper/img/ss-2.png)

3. RGB renk kodu üretildiği an

  ![RGB](https://raw.githubusercontent.com/ysfarslanon/JS-Projects/master/06%20-%20Color%20flipper/img/ss-3.png)
   
4. Kopyalama işleminin yapıldığı an

  ![Kopyalama](https://raw.githubusercontent.com/ysfarslanon/JS-Projects/master/06%20-%20Color%20flipper/img/ss-4.png)

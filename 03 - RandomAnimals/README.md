# Random Animals

## Giriş
Javascripte fetch metodunu kullanarak belirli apilerden resimler getiren proje. Bootstrap card yapısı kullanılmıştır.

## APIs

- Köpek resimleri için `https://random.dog/woof.json` apisi kullanılmıştır.
    - Obje yapısı:  `{ "fileSizeBytes":2952867, "url":"https://random.dog/1b5d7726-f401-4f35-aff5-3ec47f0bf47b.mp4" }`
    - `fileSizeBytes` resmin/video boyutunu temsil etmektedir. 
    - `url` resim/video için url değerini temsil etmektedir. Projede bu özelliği kullanacağız. 

- Kedi resimleri için `https://aws.random.cat/meow` apisi kullanılmıştır.
    - Obje yapısı: `{ "file":"https:\/\/purr.objects-us-east-1.dream.io\/i\/051_-_Q0LtDmX.gif" }`
    - `file` resim için url değerini temsil etmektedir. Projede bu özelliği kullanacağız.
    
- Tilki resimleri için `https://randomfox.ca/floof/` apisi kullanılmıştır.
    - Obje yapısı `{ "image":"https:\/\/randomfox.ca\/images\/92.jpg", "link":"https:\/\/randomfox.ca\/?i=92" }`
    - `image` resim için url değerini temsil etmektedir. Projede bu özelliği kullanacağız.
    - `link` resim için image bilgisine ait link'i temsil etmektedir.


## Elements
dog = [HTML sayfasındaki ](https://github.com/ysfarslanon/JS-Projects/blob/master/03%20-%20RandomAnimals/index.html) dog için tasarlanan card yapısındaki card-body kısmını temsil etmektedir.

btnRandomDog = [HTML sayfasındaki ](https://github.com/ysfarslanon/JS-Projects/blob/master/03%20-%20RandomAnimals/index.html) dog için tasarlanan card yapısındaki card-footer içindeki butonu temsil etmektedir.

cat = [HTML sayfasındaki ](https://github.com/ysfarslanon/JS-Projects/blob/master/03%20-%20RandomAnimals/index.html) cat için tasarlanan card yapısındaki card-body kısmını temsil etmektedir.

btnRandomCat = [HTML sayfasındaki ](https://github.com/ysfarslanon/JS-Projects/blob/master/03%20-%20RandomAnimals/index.html) cat için tasarlanan card yapısındaki card-footer içindeki butonu temsil etmektedir.

fox = [HTML sayfasındaki ](https://github.com/ysfarslanon/JS-Projects/blob/master/03%20-%20RandomAnimals/index.html) fox için tasarlanan card yapısındaki card-body kısmını temsil etmektedir.

btnRandomFox = [HTML sayfasındaki ](https://github.com/ysfarslanon/JS-Projects/blob/master/03%20-%20RandomAnimals/index.html) fox için tasarlanan card yapısındaki card-footer içindeki butonu temsil etmektedir.

## Events
Id değeri btnRandomDog olan butonun click eventine `getRandomDog()` metodu atanmıştır.

Id değeri btnRandomCat olan butonun click eventine `getRandomCat()` metodu atanmıştır.

Id değeri btnRandomFox olan butonun click eventine `getRandomFox()` metodu atanmıştır.

## Functions
`getRandomDog()` metodunda `fetch()` metodunu kullanarak apiden veri çekmektedir. Gelen verinin uzantısı mp4 olarak geldiğinde tekrar kendisini çapırıp yeni veriyi dog için tasarlanan card yapısına img etiketi ekleyip src özelliğini ise apiden gelen url'ye eşitlemektedir.


`getRandomCat()` metodunda `fetch()` metodunu kullanarak apiden veri çekmektedir. Cat  için tasarlanan card yapısına img etiketi ekleyip src özelliğini ise apiden gelen file'a eşitlemektedir.


`getRandomFox()` metodunda `fetch()` metodunu kullanarak apiden veri çekmektedir. Fox için tasarlanan card yapısına img etiketi ekleyip src özelliğini ise apiden gelen image ye eşitlemektedir.

## Screenshots
![Screeshot 1](https://github.com/ysfarslanon/JS-Projects/blob/master/03%20-%20RandomAnimals/img/ss-1.png?raw=true)
![Screeshot 2](https://github.com/ysfarslanon/JS-Projects/blob/master/03%20-%20RandomAnimals/img/ss-2.png?raw=true)

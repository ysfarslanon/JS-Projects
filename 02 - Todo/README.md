# Todo uygulaması

- **Giriş**

Yapılacak işleri localStorage'a kaydedip ve tutabilen bootstrap card yapısında gösteren uygulamadır.

Javascript ve Bootstrap v5.1 kullanılmıştır.

- **Elements**

HTML dosyasında bulunan elementlerin document.querySelector() kullanarak değişkenlerde tutulduğu alandır.

- **Variables**

todos adındaki değişken Ternary Operator kullanarak eğer localStorage içerisinde todos key'i varsa onu almaktadır yoksa boş bir dizi ile başlamaktadır.

Bütün todoları bir dizi içerisinde obje olarak tutmaktadır. Obje özellikleri ID,Title ve Detail den oluşmaktadır.

***ID:*** Her todo'nun benzersiz bir kimlik numarası vardır ve birbirinlerinden ayırabilmek ve todo'nun silinmesinde kullanılmaktadır.

***Title:*** Her todo için başlığını tutabilmek için kullanılmaktadır.

***Detail:*** Her todo için ayrıntıları tutabilmek için kullanılmaktadır.

- **Load function**

Bu bölümde todos adındaki değişkenin içindeki objelere göre bootstrap card yapısını kullanarak bütün todo'ları sayfa yüklenirken oluşturan fonksiyondur.

- **Functions**

Kullanılan bütün fonksiyonlar bu bölümde tutulmuştur.

``resetInput()`` 
 
 [HTML sayfasında](https://github.com/ysfarslanon/JS-Projects/blob/master/02%20-%20Todo/index.html) bulunan input ve textarea'nın value'sini sıfırlamak için kullanılmaktadır.

``showAlerts()``
    
 Input ve textarea boş bırakıldığında classList.add() kullanarak [CSS dosyasında](https://github.com/ysfarslanon/JS-Projects/blob/master/02%20-%20Todo/style.css) bulunan alertInput sınıfını eklemek için kullanılmaktadır.
    
``hideAlerts()``

showAlert() çalışdıktan sonra Input ve textarea'yı eski haline getirmek için classList.remove() kullanarak [CSS dosyasında](https://github.com/ysfarslanon/JS-Projects/blob/master/02%20-%20Todo/style.css) bulunan alertInput sınıfını silmek için kullanılmaktadır.
    
    
``createTodoCard(id, title, detail)``

- ***id:*** card, title, detail, btn-done ve btn-remove için  id değerini belirtmektedir.
- ***title:*** card başlığını belirtmektedir.
- ***detail:*** card detayını belirtmektedir.

Template literals kullanarak [HTML sayfasında](https://github.com/ysfarslanon/JS-Projects/blob/master/02%20-%20Todo/index.html) bulunan id'si todo-list olan div etiketinin içine yeni card eklemek için kullanılmaktadır. card-(id), title-(id), detail-(id), btn-done-(id), btn-remove-(id) ve butonlara ait click eventleri burada otomatik eklemek için kullanılmaktadır.
    
``todoAdd()``

Add butonu için click fonksiyondur. Ekleme yaparken objeye ait id, title ve detail değerlerini alarak hafızada tutmayla başlar. title ve detail boş girildiğinde ``showAlert()`` fonksiyonunu çağır. Eğer title ve detail varsa  ilk önce ``hideAlert()`` fonksiyonu çağırır. ``createTodoCard(id, title, detail)`` fonksiyonu ile yeni bir card oluşturarak todos dizisine yeni objeyi ekleyerek todos dizisini de localStorage'a ***todos*** key olarak ekleyip ``resetInput()`` fonksiyonunu çağırarak işlemi tamamlar.
    
``loadTodosCard()``

Sayfa yüklenirken todos dizisi localStorage'da ***todos*** key'inde değerleri varsa almakdadır yoksa boş bir dizi olmaktadır. Bu fonksiyonda todos dizisindeki her eleman için `` createTodoCard(id, title, detail)`` fonksiyonunu kullanarak yeni card'lar eklemek için kullanılmaktadır.

``doneTodo(ID)``

Eklenen her bir todo card içindeki done butonunun click eventine atanan fonksiyondur. İşlevi başlık ve detay yazılarına ``classList.add()`` fonksiyonunu kullanarak  [CSS dosyasında](https://github.com/ysfarslanon/JS-Projects/blob/master/02%20-%20Todo/style.css) bulunan *completedTodo* sınıfını ekler eğer *completedTodo* sınıfı varsa ``classListremove()`` fonksiyonun kullanarak *completedTodo* sınıfını siler.
    
``deleteByID(ID)``
- ID: Silinmek istenen obje'nin id değeri

todos dizisindeki parametre olarak alınan ID değerine eşit olan objeyi silmek için kullanılmaktadır.

``removeTodo(ID)``
- ID: Silinmek istenen obje'nin id değeri

Eklenen her bir todo card içindeki remove butonunun click eventine atanan fonksiyondur. İşlevi oluşturulan todo card'ı HTML'den silmektedir. ``deleteByID(ID)`` fonksiyonunu kullanarak todos dizisinden çıkarıp todos dizisini tekrar localStorage'a todos key olarak eklemek için kullanılmaktadır.

``removeAllTodos()``
Remove All Todos butonu için click fonksiyonudur. İşlevi todos dizisini, todo card'larını ve localStorage'ı temizler. 

---
## Resimler
- Açılış ekranı
![Açılış ekranı](https://github.com/ysfarslanon/JS-Projects/blob/master/02%20-%20Todo/img/ss-1.png)

- Hata ekranı
![Hata ekranı](https://raw.githubusercontent.com/ysfarslanon/JS-Projects/master/02%20-%20Todo/img/ss-2.png)

- Todo ekleme ekranı
![Todo ekleme ekranı](https://github.com/ysfarslanon/JS-Projects/blob/master/02%20-%20Todo/img/ss-3.png?raw=true)

- Todo tamamlama ekranı
![Todo tamamlama ekranı](https://github.com/ysfarslanon/JS-Projects/blob/master/02%20-%20Todo/img/ss-4.png?raw=true)

- Todo silme ekranı
![Todo silme ekranı](https://github.com/ysfarslanon/JS-Projects/blob/master/02%20-%20Todo/img/ss-5.png?raw=true)
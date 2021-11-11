# Todo uygulaması

- **Giriş**

Yapılacak işleri localhosta kaydedip ve tutabilen bootstrap card yapısında gösteren uygulamadır.

Javascript ve Bootstrap v5.1 kullanılmıştır.

- **Elements**

HTML dosyasında bulunan elementlerin document.querySelector() kullanarak değişkenlerde tutulduğu alandır.

- **Variables**

todos adındaki değişken Ternary Operator kullanarak eğer localhost içerisinde todos key'i varsa onu almaktadır yoksa boş bir dizi ile başlamaktadır.

Bütün todoları bir dizi içerisinde obje şeklinde tutmaktadır. Obje özellikleri ID,Title ve Detail den oluşmaktadır.

***ID:*** Her todo'nun benzersiz bir kimlik numarası vardır ve birbirinlerinden ayırabilmek ve todo'nun silinmesinde kullanılmaktadır.

***Title:*** Her todo için başlığını tutabilmek için kullanılmaktadır.

***Detail:*** Her todo için ayrıntıları tutabilmek için kullanılmaktadır.

- **Load function**

Bu bölümde todos adındaki değişkenin içindeki objelere göre bootstrap card yapısını kullanarak bütün todo'ları sayfa yüklenirken oluşturan fonksiyondur.

- **Functions**

Kullanılan bütün fonksiyonlar bu bölümde tutulmuştur.

    - resetInput()
    - showAlerts()
    - hideAlerts()
    - resetInput()
    - createTodoCard(id, title, detail)
    - todoAdd()
    - loadTodosCard()
    - doneTodo(ID)
    - deleteByID(ID)
    - removeTodo(ID)
    - removeAllTodos()
    - resetInput()




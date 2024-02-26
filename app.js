// Деструктурирующее присваивание
// В JavaScript есть две чаще всего используемые структуры данных – это Object и Array.

// Объекты позволяют нам создавать одну сущность, которая хранит элементы данных по ключам.
// Массивы позволяют нам собирать элементы данных в упорядоченный список.
// Но когда мы передаём их в функцию, то ей может понадобиться не объект/массив целиком, а элементы по отдельности.

// Деструктурирующее присваивание – это специальный синтаксис, который позволяет нам «распаковать» массивы или объекты в несколько переменных, так как иногда они более удобны.

// Деструктуризация также прекрасно работает со сложными функциями, которые имеют много параметров, значений по умолчанию и так далее. Скоро мы увидим это.



// let arr = ['hi','man'];
// let str = 'hello bro'
// деструктурирующее присваивание
// записывает 
// first = arr[0]
// и second = arr[1]
// let [first,second] = arr;

// console.log(first);
// console.log(second);



// destrukturisacia enq anum string@ spliti mijocov
// let [first,second] = str.split(' ');
// console.log(first);
// console.log(second);

// «Деструктурирующее присваивание» не уничтожает массив.
//  Оно вообще ничего не делает с правой частью присваивания,
//   его задача – только скопировать нужные значения в переменные.

// Нежелательные элементы массива также могут быть отброшены с помощью дополнительной запятой:

// let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log(title);

// Мы можем использовать что угодно «присваивающее» с левой стороны.

// Например, можно присвоить свойству объекта:

// let user = {};
// [user.name, user.surname] = "Ilya Kantor".split(' ');

// alert(user.name); // Ilya
// alert(user.surname); // Kantor

// let obj = {}
// let arr = [1,2,3];

// [obj.first,obj.second,obj.third] = arr;
// console.log(obj.first);


// Существует хорошо известный трюк для обмена значений двух переменных
//  с использованием деструктурирующего присваивания:

// let guest = "Jane";
// let admin = "Pete";

// // Давайте поменяем местами значения: сделаем guest = "Pete", а admin = "Jane"
// [guest, admin] = [admin, guest];

// alert(`${guest} ${admin}`); // Pete Jane (успешно заменено!)


// ete menq cankanum enq vorpeszi mi popoxakan@ vercni erku arjeq uremn ogtagorcum enq spread@
// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest это массив элементов, начиная с 3-го
// alert(rest[0]); // Consul
// alert(rest[1]); // of the Roman Republic
// alert(rest.length); // 2

// console.log(rest);


// destructurizacian objectneri depqum

// У нас есть существующий объект с правой стороны, который мы хотим разделить на переменные.
//  Левая сторона содержит «шаблон» для соответствующих свойств. В простом случае это список названий переменных в {...}.

// let option = {
//     title:"Menu",
//     width: 100,
//     height: 200
// }
// let {title ,width ,height} = option;
// console.log(title);
// console.log(width);
// console.log(height);


// Если мы хотим присвоить свойство объекта переменной с другим названием, например, свойство options.
// width присвоить переменной w, то мы можем использовать двоеточие:

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// // { sourceProperty: targetVariable }
// let {width: w, height: h, title} = options;

// // width -> w
// // height -> h
// // title -> title

// alert(title);  // Menu
// alert(w);      // 100
// alert(h);      // 200


// Что если в объекте больше свойств, чем у нас переменных? Можем ли мы взять необходимые нам, а остальные присвоить куда-нибудь?

// Можно использовать троеточие, как и для массивов. В некоторых старых браузерах (IE) это не поддерживается, используйте Babel для полифила.

// Выглядит так:

// let options = {
//   title: "Menu",
//   height: 200,
//   width: 100
// };

// // title = свойство с именем title
// // rest = объект с остальными свойствами
// let {title, ...rest} = options;

// // сейчас title="Menu", rest={height: 200, width: 100}
// alert(rest.height);  // 200
// alert(rest.width);   // 100


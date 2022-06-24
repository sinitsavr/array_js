//1.Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);
//2.Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const array = [1, 2, 3];
const arrayRev = array.reverse();
console.log(arrayRev);
//3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const arrayEnd = [1, 2, 3];
const arrayPush = arrayEnd.push(4, 5, 6);
console.log(arrayPush);
//4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const arrayStart = [1, 2, 3];
const arrayUnshift = arrayStart.unshift(4, 5, 6);
console.log(arrayUnshift);
//5. Дан массив [&#39;js&#39;, &#39;css&#39;, ‘html&#39;]. Выведите на экран первый элемент и удалите его.
const arr_1 = ["js", "css", "html"];
const arrSh = arr_1.shift();
console.log(arrSh);
//6. Дан массив [&#39;js&#39;, &#39;css&#39;, ‘html&#39;]. Выведите на экран последний элемент и удалите его.
const arr_2 = ["js", "css", "html"];
const arrPop = arr_2.pop();
console.log(arrPop);
//7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
const array1 = [1, 2, 3, 4, 5];
const arraySlice = array1.slice(0, 3);
console.log(arraySlice);
//8.Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
const arraySlice1 = array1.slice(3, 5);
console.log(arraySlice1);
//9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
const array_1 = [1, 2, 3, 4, 5];
array_1.splice(1, 2);
console.log(array_1);
//10.Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
const array_2 = [1, 2, 3, 4, 5];
const arraySplice2 = array_2.splice(1, 3);
console.log(arraySplice2);
//11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a','b','c', 4, 5].
const arr4 = [1, 2, 3, 4, 5];
arr4.splice(2, 0, "a", "b", "c");
console.log(arr4);
//12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a','b', 2, 3, 4,'c', 5, 'e']
const arr5 = [1, 2, 3, 4, 5];
arr5.splice(1, 0, "a", "b");
arr5.splice(6, 0, "c");
arr5.splice(8, 0, "e");
console.log(arr5);
//13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
const arr6 = [3, 4, 1, 2, 7];
arr6.sort();
console.log(arr6);
//14. Дан объект {js:'test', jq:'hello, css:'world'}. Получите массив его ключей.
const obj = {
  js: "test",
  jq: "hello",
  css: "world",
};
console.log(Object.keys(obj));
// 1. Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет
const arrays = ["box", "pen", "table", "note"];
const hasElem = function (arrays, string) {
  return arrays.includes(string);
};
console.log(hasElem(arrays, "note"));
//2. Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.
const arraysNum = [1, 2, 3, 5];
const hasNum = function (arrays, num) {
  return arraysNum.includes(num);
};
console.log(hasNum(arrays, 5));
//3. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - вернуть true [2,2,1], а если нет - вернуть false [1,2,1].
arr_4 = [2, 2, 1];
const arrSome = function (arr_4) {
  return arr_4.some(function (j, i, arr_4) {
    return j === arr_4[i - 1];
  });
};
console.log(arrSome(arr_4));
//4. Функция, которая возвращает массив заполненный 10 случайными числами в интервале от 5 до 33. Math.random().

function getRandom(min, max, lenght) {
  let arrRandom = [];
  for (let i = 0; i < lenght; i++) {
    arrRandom.push(Math.random() * (max - min) + min);
  }
  return arrRandom;
}
console.log(getRandom(5, 33, 10));

//5. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
const arrMiddle = [12, 15, 20, 25, 59, 79];
const getMiddleArr = function (arrMiddle) {
  if (arrMiddle.length !== 0) {
    return (
      arrMiddle.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
      }) / arrMiddle.length
    );
  }
};
console.log(getMiddleArr(arrMiddle));

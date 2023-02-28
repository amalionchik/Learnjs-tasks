let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // выведет 'a', 'b', [function...], потому что this получает ссылку на массив и выводит его
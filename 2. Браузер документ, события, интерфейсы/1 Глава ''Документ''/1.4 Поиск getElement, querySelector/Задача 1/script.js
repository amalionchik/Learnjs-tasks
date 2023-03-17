// 1. Таблицу с id="age-table".
const table = document.getElementById('age-table')

// 2. Все элементы label внутри этой таблицы (их три).
table.getElementsByTagName('label')

// 3. Первый td в этой таблице (со словом «Age»).
table.querySelector('td')

// 4. Форму form с именем name="search".
document.querySelector('form[name="search"]')

// 5. Первый input в этой форме.
form.querySelector('input')

// 6. Последний input в этой форме.
let inputs = form.querySelectorAll('input')
inputs[inputs.length-1]
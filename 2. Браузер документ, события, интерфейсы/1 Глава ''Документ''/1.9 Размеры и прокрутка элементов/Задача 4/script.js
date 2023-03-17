// В чём отличие между getComputedStyle(elem).width и elem.clientWidth?
// Укажите хотя бы 3 отличия, лучше – больше

1. getComputedStyle(elem).width - возвращает значение с px, а elem.clientWidth без px (только число)
2. elem.clientWidth считает ширину вместе с padding, border и другими побочными элементами, влияющими на ширину блока
3. getComputedStyle(elem).width может вернуть еще и auto
// 1
selected = genres.options[genres.selectedIndex]
alert(selected.value)
alert(selected.text)



// 2
let newOption = new Option("Классика", "classic")
genres.append(newOption)



// 3
newOption.selected = true
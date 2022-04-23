//Задача 2.2. Оформи предыдущее задание в виде функции render(). Функция должна
// принимать в качестве параметра массив из слов, создавать указанные узлы и добавлять их в тег body.

function render(arr){
    let ul = document.createElement('ul');
    for(let i = 0; i < arr.length; i++){
        let li = document.createElement('li');
        li.textContent = arr[i];
        ul.append(li);
    }
    document.body.append(ul);
}
render(['html', 'css', 'js']);
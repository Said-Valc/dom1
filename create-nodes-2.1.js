//Задача 2.1. Есть массив из слов ["html", "css", "js"]. Создай узел ul. Затем с помощью цикла создавай и поочередно добавляй в 
//конец узла ul новые узлы тега li, текстовое содержимое которых будет равно элементам массива.
const arr = ['html', 'css', 'js'];
const ul = document.createElement('ul');

for(let i = 0; i < arr.length; i++){
    let li = document.createElement("li");
    li.textContent = arr[i];
    ul.append(li);
}
document.body.append(ul);
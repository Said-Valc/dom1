const div = document.createElement("div");
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
li1.innerHTML = '<a href="https://instagram.com/intocode">наш инстаграм</a>';
li2.innerHTML = '<a href="https://intocode.ru">наш сайт</a>';
ul.append(li1);
ul.append(li2);
div.append(ul);

document.body.append(div);
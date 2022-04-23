const div1 = document.createElement('div');
div1.className = 'red';
const div2 = document.createElement('div');
div2.className = 'green';
const div3 = document.createElement('div');
div3.className = 'blue';
div3.textContent = 'Я вложен';
div2.append(div3);
div1.prepend(div2);

console.log(div1);
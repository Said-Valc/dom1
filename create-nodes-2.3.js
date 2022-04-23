const arr = [
    {
      name: 'Google',
      url: 'https://google.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'intocode',
      url: 'https://intocode.ru'
    },
  ];

  function render(arr){
      let ul = document.createElement('ul');
      for(let obj of arr){
         let li = document.createElement('li');
         li.innerHTML = `<a href="${obj.url}">${obj.name}</a>`;
         ul.append(li);
      }
      document.body.append(ul);
  }
  render(arr);
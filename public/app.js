var app = function(){

  var ul = document.createElement('ul')
  ul.classList.add('cat')

  var name = document.createElement('li')
  name.innerText = 'Name: Ella the cat'

  var food = document.createElement('li')
  food.innerText = 'Favourite Food: Whiskas - the gravy ones'

  var image = document.createElement('img')
  image.setAttribute('src', 'https://68.media.tumblr.com/25cca447277ee236cc340bd57151f015/tumblr_oo529bZ7U41vt9xd0o1_250.jpg');
  image.setAttribute('width', '500');

  ul.appendChild(name)
  ul.appendChild(food)
  ul.appendChild(image)

  var cats = document.querySelector('#cats')
  cats.appendChild(ul)

}

window.onload = app
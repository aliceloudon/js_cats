var catsArray = [
  { name: 'Ella', favouriteFood: 'Baby birds', imageURL: 'http://68.media.tumblr.com/386355d7ce38d868d9ecba3309428aa9/tumblr_oo4xp0geNm1r8du5uo1_1280.jpg' },
]

var addCat = function(name, food, imageURL){
  var cat = createCat()
  var name = createName(name)
  var food = createFood(food)
  var image = createImage(imageURL) 

  appendElements(cat, name, food, image)
}

var createCat = function(){
  var cat = document.createElement('ul')
  cat.classList.add('cat')
  return cat
}

var createName = function(catName){
  var name = document.createElement('li')
  name.innerText = 'Name: ' + catName
  return name
}

var createFood = function(favouriteFood){
  var food = document.createElement('li')
  food.innerText = 'Favourite Food: ' + favouriteFood
  return food
}

var createImage = function(imageURL){
  var image = document.createElement('img')
  image.setAttribute('src', imageURL);
  image.setAttribute('width', '500');
  return image
}

var appendElements = function(cat, name, food, image){
  cat.appendChild(name)
  cat.appendChild(food)
  cat.appendChild(image)

  var cats = document.querySelector('#cats')
  cats.appendChild(cat)
}

var app = function(){

  catsArray.forEach(function(cat){
    addCat(cat.name, cat.favouriteFood, cat.imageURL)
  })

}

window.onload = app




// var cat = document.createElement('ul')
// cat.classList.add('cat')

// var name = document.createElement('li')
// name.innerText = 'Name: Ella the cat'

// var food = document.createElement('li')
// food.innerText = 'Favourite Food: Whiskas - the gravy ones'

// var image = document.createElement('img')
// image.setAttribute('src', 'https://68.media.tumblr.com/25cca447277ee236cc340bd57151f015/tumblr_oo529bZ7U41vt9xd0o1_250.jpg');
// image.setAttribute('width', '500');

// ul.appendChild(name)
// ul.appendChild(food)
// ul.appendChild(image)

// var cats = document.querySelector('#cats')
// cats.appendChild(ul)
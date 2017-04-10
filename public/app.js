var catsArray = [
  { name: 'Baloo', favouriteFood: 'Cream', imageURL: 'http://68.media.tumblr.com/0384f1f9fc56958c4b2d7f5865747a53/tumblr_oo4xseH5221r8du5uo1_1280.jpg'},
  { name: 'Boba', favouriteFood: 'Sock fluff', imageURL: 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'},
  { name: 'Barnaby', favouriteFood: 'Tuna', imageURL: 'http://68.media.tumblr.com/29643d90b62d9e0c31beacc6936a0a7c/tumblr_oo524833Uw1uvv5gho1_1280.jpg'},
  { name: 'Max', favouriteFood: 'Whiskas Temptations', imageURL: 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg'},
  { name: 'Ella', favouriteFood: 'Baby birds', imageURL: 'http://68.media.tumblr.com/386355d7ce38d868d9ecba3309428aa9/tumblr_oo4xp0geNm1r8du5uo1_1280.jpg' }
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
  name.classList.add('description')
  return name
}

var createFood = function(favouriteFood){
  var food = document.createElement('li')
  food.innerText = 'Favourite Food: ' + favouriteFood
  food.classList.add('description')
  return food
}

var createImage = function(imageURL){
  var image = document.createElement('img')
  image.setAttribute('src', imageURL);
  image.setAttribute('width', '400');
  image.classList.add('image')
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
//Let's explore some events samples!

var headOne = document.querySelector('#one')
var headTwo = document.querySelector('#two')
var headThree = document.querySelector('#three')
var headFour = document.querySelector('#four')
var headFive = document.querySelector('#five')
// Hover (mouseover and mouseout)
headOne.addEventListener('mouseover',function(){
  headOne.textContent = "Mouse currently Over";
  headOne.style.color = 'red';
})

headOne.addEventListener('mouseout',function(){
  headOne.textContent = "Mouse Not On me."
  headOne.style.color = 'blue';
})


// On Click
headTwo.addEventListener("click",function(){
  headTwo.textContent = "Clicked On";
  headTwo.style.color = 'blue';
})

// Double Click
headThree.addEventListener("dblclick",function(){
  headThree.textContent = "Double Clicked!";
  headThree.style.color = 'red';
})

headFour.addEventListener("wheel", function(){
  headFour.textContent = "weeee!";
  headFour.style.color = 'green';
})

headFour.addEventListener('mouseout',function(){
  headFour.textContent = "Wheel it!"
  headFour.style.color = 'black';
})


headFive.addEventListener("onLine", function(){
  headFive.textContent = "Online!";
  headFive.style.color = 'purple';
})
headFive.addEventListener("offline", function(){
  headFive.textContent = "Offline!";
  headFive.style.color = 'Gray';
  console.log("offline");
})
if (navigator.onLine){
  headFive.textContent = "Online!";
  headFive.style.color = 'pink';
}else{
  headFive.textContent = "Offline!";
  headFive.style.color = 'Gray';
  console.log("offline");
}

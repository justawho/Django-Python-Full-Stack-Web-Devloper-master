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

headFive.addEventListener("online", function(){
  headFour.textContent = "Online!";
  headFour.style.color = 'purple';
})

headFour.addEventListener("mouseleave ", function(){
  headFour.textContent = "Online!";
  headFour.style.color = 'purple';
})

headFive.addEventListener("focusin", function(){
  headFive.textContent ="focused!";
  headFive.style.color ="gray";
})

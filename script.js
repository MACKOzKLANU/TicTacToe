console.log("hello")
let player = document.getElementById("player")
player.addEventListener("click", setxy);
var xoro = "O"
function setxy(){
    if(xoro == "X"){
        player.innerHTML = "O"
        xoro = "O"

    }
    else{
        player.innerHTML = "X"
        xoro = "X"
    }


}
let b1 = document.getElementById("1")
let b2 = document.getElementById("2")
let b3 = document.getElementById("3")
let b4 = document.getElementById("4")
let b5 = document.getElementById("5")
let b6 = document.getElementById("6")
let b7 = document.getElementById("7")
let b8 = document.getElementById("8")
let b9 = document.getElementById("9")

b1.addEventListener("click", change);
// b2.addEventListener("click", change(b2));
// b3.addEventListener("click", change(b3));
// b4.addEventListener("click", change(b4));
// b5.addEventListener("click", change(b5));
// b6.addEventListener("click", change(b6));
// b7.addEventListener("click", change(b7));
// b8.addEventListener("click", change(b8));
// b9.addEventListener("click", change(b9));


// function change(num) {
//   if(num.value == "-"){
//     num.value = xoro
//     num.innerHTML = xoro
//     if(xoro == "X"){
//         xoro = "O"
//     }
//     else if(xoro == "O"){
//         xoro = "X"
//     }
//   }
// }
function change() {
    if(b1.value == "-"){
      b1.value = xoro
      b1.innerHTML = xoro
      if(xoro == "X"){
          xoro = "O"
          player.innerHTML = "O"
      }
      else if(xoro == "O"){
          xoro = "X"
          player.innerHTML = "X"

      }
    }
  }
  

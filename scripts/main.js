// SlideShow Bgs 
let imgArr = ["landingPage-1.jpg", "landingPage-2.jpg", "landingPage-3.jpg","landingPage-4.jpg","landingPage-5.jpg","landingPage-6.jpg","landingPage-7.jpg"];
let landingPage = document.querySelector(".mainPage");
//function to randomize imgs
function randomizeImg() {
  setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgArr.length);
    landingPage.style.backgroundImage =
      'url("Imgs/' + imgArr[randomNumber] + '")';
      console.log(randomNumber)
  }, 6000);
}

// Password Eye 
var state = true
function toggle() {
    let eye = document.getElementById("eye")
    let password = document.getElementById("password")
    if (state) {
        password.setAttribute("type", "text")
        eye.classList.replace("fa-eye","fa-eye-slash")    
        state = false
    } else {
        password.setAttribute("type", "password")
        eye.classList.replace("fa-eye-slash","fa-eye")  
        state = true
    }
}

// filterSection collapse
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
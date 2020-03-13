var link = document.querySelector(".open-form");

var link = document.querySelector(".open-form");

var popup = document.querySelector(".search-form");
var date_on = document.querySelector(".date-on");
var form = document.querySelector("form");
var date_off = document.querySelector(".date-off");
var number = document.querySelector(".number-parents");
        
          
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("search-form-show");
  date_on.focus();  
  })    

form.addEventListener("submit", function (evt) {
  if (!date_on.value || !date_off.value || !number.value){
    evt.preventDefault();
      popup.classList.remove("search-form-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("search-form-error");
      }
      })
 
window.addEventListener("keydown", function (evt){
 if (evt.keyCode === 27){
   if (popup.classList.contains("search-form-show")) {
     evt.preventDefault();
       popup.classList.remove("search-form-show");
       popup.classList.remove("search-form-error");
}
} 
})
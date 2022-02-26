
document.querySelector(".hcolor10").addEventListener("click", function () {
        window.location.href="createAccount.html";
      });

 document.querySelector(".hcolor4").addEventListener("click", function () {
        window.location.href="login.html";
      });     
document.querySelector(".hcolor6").addEventListener("click", function () {
        window.location.href="/airport11.html";
      });     

document.querySelector(".hcolor7").addEventListener("click", function () {
        window.location.href="/cars.html";
      });     
      


// more travel dropdown function
function MoreTravel(){
  var selectMoretravel = document.querySelector("#more").value;
  console.log(selectMoretravel);
 if(selectMoretravel=="stays"){
   window.location.href="stay_front.html"
 }
 else if(selectMoretravel=="Flight"){
   window.location.href="/airport11.html";
 }
 else if(selectMoretravel=="Cars"){
   window.location.href="/cars.html";
 }
 else if(selectMoretravel=="Packages"){
  
   window.location.href="/thingstodo.html"
 }
 else if(selectMoretravel=="Holiday Package"){
     window.location.href="/holidays.HTML";
 }
}

// expedia click function
document.querySelector(".bar").addEventListener("click",function(){
    window.location.href="index.html"
});

// search button function
document.querySelector("#search").addEventListener("click",function(){

})

document.querySelector(".hcolor5").addEventListener("click", function(){
  window.location.href="stay_front.html"
})
document.querySelector(".hcolor9").addEventListener("click", function(){
  window.location.href="holidays.HTML"
})

document.querySelector(".hcolor8").addEventListener("click", function(){
  window.location.href="/thingstodo.html"
})


// Login person name display functio
var login = JSON.parse(localStorage.getItem("login"));
// console.log(login);
if(login==null){
  document.querySelector(".hcolor4").innerHTML="Sign In";
  document.querySelector(".hcolor10").innerHTML="Create Account";
}
else{
  document.querySelector(".hcolor4").innerHTML=login[0].name;
  document.querySelector(".hcolor10").innerHTML=""
}

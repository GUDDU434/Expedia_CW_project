 document.querySelector("#form").addEventListener("submit", myFormSubmit);

   var signinArr = JSON.parse(localStorage.getItem("signinDetails")) || [];
   console.log(signinArr)
  function myFormSubmit(event) {
    event.preventDefault();
    var signinObj = {
      email: document.querySelector("#email").value,
      fname: document.querySelector("#fname").value,
      sname: document.querySelector("#sname").value,
      pass: document.querySelector("#password").value,
    };
    
    signinArr.push(signinObj);
    console.log(signinArr);
    localStorage.setItem("signinDetails", JSON.stringify(signinArr));

    document
      .querySelector("#loginPage")
      .addEventListener("click", function () {
        window.location. href="/welcomepage/welcome.html";
      });
  } 
  document.querySelector("#sign1").addEventListener("click", function(){
    window.location.href="/loginpage/login.html";
  })
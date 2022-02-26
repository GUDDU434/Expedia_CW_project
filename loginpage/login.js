    
 var realData = JSON.parse(localStorage.getItem("signinDetails"))


  

//   var email = document.querySelector("#email").value;
//   var password = document.querySelector("#password").value;

// console.log(email,password)

 
  document.querySelector("#form").addEventListener("submit", formSubmit);

  var form = document.querySelector("#form");

  function formSubmit(event) {
    event.preventDefault();
    
    var realData = JSON.parse(localStorage.getItem("signinDetails"));
     console.log(realData)
    var email = form.email.value;
    var password = form.password.value;
    console.log(email, password);
    

    
    for (var i = 0; i < realData.length; i++) {
      if (realData[i].email == email && realData[i].pass == password) {
          alert("login successful")
        return (login())

      } 
    
    else{
         return (alert("login failed"))
    }
    
  };
    
}

      
  

 
   function login(){
   document
      .querySelector("#loginPage")
      .addEventListener("click", function () {
        window.location.href="/expediaMainPage/index.html";
      });
    }

    document.querySelector("#create").addEventListener("click" , function(){
      window.location.href="/createAccount/createAccount.html";
    })

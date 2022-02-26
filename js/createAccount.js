 document.querySelector("#form").addEventListener("submit", myFormSubmit);

   var signinArr = JSON.parse(localStorage.getItem("signinDetails")) || [];
  //  console.log(signinArr)
  function myFormSubmit(event) {
    event.preventDefault();
    var  email= document.querySelector("#email").value;
    var fname = document.querySelector("#fname").value;
    var sname = document.querySelector("#sname").value;
    var pass= document.querySelector("#password").value;

    var signinObj = {
      email: email,
      fname:fname,
      sname: sname,
      pass: pass
    };
    
    if(email==""||fname==""||sname==""||pass==""){
      alert("please full all the field")
    }
    else{
      signinArr.push(signinObj);
      console.log(signinArr);
    localStorage.setItem("signinDetails", JSON.stringify(signinArr));
    window.location. href="login.html";
    }

  } 


  // sign In click function
  document.querySelector("#sign1").addEventListener("click", function(){
    window.location.href="login.html";
  })
    
 var realData = JSON.parse(localStorage.getItem("signinDetails"));

 document.querySelector("#form").addEventListener("submit", formSubmit);

  function formSubmit(event) {
    event.preventDefault();
    var emailId = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    var flag=false;
    var login = [];
    for(var a=0; a<realData.length; a++){
      if(realData[a].email=emailId && realData[a].pass==password){
        var obj={
          name:realData[a].fname,
          email:realData[a].email
        }
        login.push(obj)
        localStorage.setItem("login",JSON.stringify(login));
        flag=true;
        break;
      }
    }
    if(flag){
      alert("login Sucessfull");
        window.location.href="index.html";
    }
    else{
      alert("Wrong Email-id or Password");
    }
  }

  document.querySelector("#create").addEventListener("click",function(){
    window.location.href="createAccount.html"
  })
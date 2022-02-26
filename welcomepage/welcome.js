    var regUser =  JSON.parse(localStorage.getItem("signinDetails")) 
    console.log(regUser)

    var name = document.querySelector("#name").textContent;

    regUser.map(function(elem){
       document.querySelector("#name").textContent=elem.fname;
    })
    
    
        document.querySelector("#button").addEventListener("click" ,function(){
             window.location.href="/expediaMainPage/index.html";
        })


var overviewdata = JSON.parse(localStorage.getItem("overviewdata"));
console.log(overviewdata);

document.querySelector("#HotelName").innerHTML=overviewdata[0].name;
document.querySelector("#rating").innerHTML="Rating : "+overviewdata[0].rating+" / 5";
document.querySelector("#roomNo").innerHTML="Room : "+overviewdata[0].room
document.querySelector("#checkin").innerHTML="Check-In Date : "+overviewdata[0].checkin;
document.querySelector("#checkout").innerHTML="Check-out Date : "+overviewdata[0].checkout;
document.querySelector("#serviceFee").innerHTML="Rs."+(((overviewdata[0].Total_RoomPrice)*10)/100)
document.querySelector("#totalAmount").innerHTML="Rs. "+(overviewdata[0].Total_RoomPrice + (((overviewdata[0].Total_RoomPrice)*10)/100)) ;
document.querySelector("#roomData").innerHTML=overviewdata[0].room+" - Room x 1 - Night = " + overviewdata[0].Total_RoomPrice

// Address form

var InputData={}

document.querySelector("#form").addEventListener("submit",submitForm)

function submitForm(event){
    event.preventDefault();
    var travName=document.querySelector("#tname").value;
    var Fname=document.querySelector("#fname").value;
    var Lname=document.querySelector("#lname").value;
    var MobNo=document.querySelector("#mobileNumber").value;

    // console.log(travName,Fname,Lname,MobNo);
    if(travName==""||Fname==""||Lname==""||MobNo==""){
        alert("please fill all the mendetory field") 
    }
}

// Payment Form
document.querySelector("#myform").addEventListener("submit",cardDetails);

function  cardDetails(event){
    event.preventDefault();
    var nameOncard=document.querySelector("#cardNumber").value;
    var carNo=document.querySelector("#creditCard").value;
    var month=document.querySelector("#month").value;
    var year = document.querySelector("#month1").value;
    var securitycode=document.querySelector("#cvv").value;
    var PanNo=document.querySelector("#pan").value;

    console.log(nameOncard,carNo,month,year,securitycode,PanNo)
    if(nameOncard==""||carNo==""||month==""||year==""||securitycode==""||PanNo==""){
        alert("please fill all the mendetory field") 
    }
}

function CompleteBooking(){
  var login = JSON.parse(localStorage.getItem("login"));
  console.log(login)
  if(login==null){
    window.location.href="login.html"
  }else{
    window.location.href="otp.html";
  }
         
};

 // Login person name display functio
 var login = JSON.parse(localStorage.getItem("login"));
 // console.log(login);
 if(login==null){
   document.querySelector("#name1").innerHTML="Sign In";
   document.querySelector("#signAs").innerHTML="Email@gmail.com";
 }
 else{
   document.querySelector("#name1").innerHTML=login[0].name;
   document.querySelector("#signAs").innerHTML=login[0].email
 }
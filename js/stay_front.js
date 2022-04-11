// app image
var appimg = document.createElement("img");
appimg.src='https://a.travel-assets.com/mad-service/header/takeover/expedia_marquee_refresh.jpg';
document.querySelector("#app>div:first-child").append(appimg);

// saudi arabia image
var exploreAndSaveII = document.createElement("img");
exploreAndSaveII.src="https://tpc.googlesyndication.com/simgad/5524669151579644948?";
document.querySelector("#explore>div:last-child").append(exploreAndSaveII);

var Trav =2;
function addT(){
    Trav++;
    var display = "Traveler"+"~"+Trav
    document.querySelector("#travNo").innerHTML=display
}
function removeT(){
    if(Trav>2){
        Trav--
    }else{
        Trav=2;
    }
    var display = "Traveler"+"~"+Trav
    document.querySelector("#travNo").innerHTML=display;
};
var Room=1;
function addR(){
    Room++;
    var Rdisplay="Room"+"~"+Room
    document.querySelector("#roomNo").innerHTML=Rdisplay;
};
function removeR(){
    if(Room>1){
        Room--
    }else{
        Room=1
    }
    var Rdisplay="Room"+"~"+Room
    document.querySelector("#roomNo").innerHTML=Rdisplay;
};

var searchData=[];

function searchbtn(){
    // event.preventDefault()
    var place = document.querySelector("#place").value;
    var checkIn = document.querySelector("#checkInDate").value;
    var checkOut = document.querySelector("#checkOutDate").value;
    var data = {
        place:place,
        checkIn:checkIn,
        checkOut:checkOut,
        trav:Trav,
        room:Room
    }
    searchData.push(data);
    console.log(searchData)
    localStorage.setItem("searchData",JSON.stringify(searchData));
    if(place=="" || checkIn=="" || checkOut=="")
    {
        alert("please fill all the field")
    }else{
        window.location.href="stay_searched.html";
    }
}

// More travel Drop down function
function MoreTravel(){
    var selectMoretravel = document.querySelector(".select").value;
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
     window.location.href="holidays.HTML";
   }
 }

// flaxibility Matter larger div
document.querySelector("#idealDiv>div:first-child").addEventListener("click",flaxibility);
function flaxibility(){
    window.location.href="https://www.expedia.co.in/lp/b/free-cancellation?rfrr=editorial.undefined.click";
}
// flaxibility Matter smaller top div
document.querySelector("#idealDiv>div:last-child > div:first-child").addEventListener("click",idealtop);
function idealtop(){
    window.location.href="https://adclick.g.doubleclick.net/pcs/click%253Fxai%253DAKAOjstWmidvEV_jt_rLIHdbvmAoxPGh8V6p1WZnnVVKZ3-TCFF-jpp9KrXkZSwYMQanlrWet09gj4yiHFMGYgzqht-HZm-Z-vViI7aOtmchPxvIepo9tyfs7e1YRSOFI0meo4yfo_DnB_UAFRL-GL68ZtuJPLsS7G0gEsNqiRAuUqGg0m3QxieQudunYiGPscRCub22vbJgFFINYqETlz5fXZH5Z3-UTz4L1Z5HYOBe_sOlQUuPqUgyz03EiI1T1I4XfKYLVeoct3KwR8YR57eUHTZhp72ZlnWD3OgaKTefyqPdj_bJObXwC8-3SDLyPhUHyR6tzi7hy84%2526sai%253DAMfl-YTzt7fSfOg5oIN-vKHIw9W4Ltk31GuSqJNmim62KEVrgq04PhVVFpLFTtICJclWHKksNvmpRpSOprSw1ucjEE_pqcZ0EM9KxXJlYdyrXU2-42ta22-AI-HXJMua8cv8Z908%2526sig%253DCg0ArKJSzKoZH_xNhqi9EAE%2526fbs_aeid%253D%255Bgw_fbsaeid%255D%2526urlfix%253D1%2526adurl%253Dhttps://www.expedia.co.in/lastminutedeals"
}

// flaxibility Matter smaller bottom div
document.querySelector("#idealDiv>div:last-child > div:last-child").addEventListener("click",idealbottom);
function idealbottom(){
    window.location.href="https://adclick.g.doubleclick.net/pcs/click%253Fxai%253DAKAOjsvrss2nm9y-dGeNNg_QxRaWC6HH4e1mWMOBm1IQujdDClYixqaKOZxjsV0z12bH4-Gpru7-6VuFH_A6aQFViH71Wv6IE5RdItklR1lYEr3225OnbvwNxbjXPLJkd60uWnSsJk2_pN6kWQBlrMNqMVFp7dfWPfTskyhyQt7DetPmdc2JESBbo4vyX9XcdhUmjn1uZxsa2XLNNxtLs2h08XpR0z0t1psQ6H4yuN54I5bA4rop-tYRc58xV62WRlcGduHB4hGEB4DalAxpBGB-N74mrmmbwwUwaBQwMqIaYc2MUkmobS2hE3m0-W9JHk5OM5x0ZxKagY9NzpcZnw%2526sai%253DAMfl-YTe-0cCkLy9vYoYAGBIAL2xsKAQXFCJ57x2RPcwm2KUerjtS6cgtsn92XpIVcYGSNEmosINP4wLuq22h8_xc8mf-ZpmvUEhHaQHKheJnk4SBnDmP0R5QRsIm35PGGM7FLnK%2526sig%253DCg0ArKJSzBq5r4F9gusVEAE%2526fbs_aeid%253D%255Bgw_fbsaeid%255D%2526urlfix%253D1%2526adurl%253Dhttps://www.expedia.co.in/bookearly"
}


// Explore discover and more main div
document.querySelector("#explore>div:first-child").addEventListener("click", explore);
function explore(){
    window.location.href="https://www.expedia.co.in/bookearly/?rfrr=editorial.undefined.click";
}

// Explore discover and more last div
document.querySelector("#explore>div:last-child").addEventListener("click", explorelast);
function explorelast(){
    window.location.href="https://adclick.g.doubleclick.net/pcs/click%253Fxai%253DAKAOjsvtQwdAAJaFbf9i7y7Wu9qzzVSDY9J8cnw7Lwk8GMwIsr5faUq63Gs2rv6sSQhFiwMoloCMO1R2yWUiJZDk_A_rVSeJ7r9_HOfXI8unfH7trLjh3qr7U0tfZQqtFGcMN9O0rvqsfvCOclXZ0ZFAQXMMsDzyWh_jbJr0vYa6vQ9NfiZzUD-Y3GwUeINIhJEGuLVRRzCOn5SsbssnhCbcX20JRpS5bMfGuNPZm0xN9k4sXMe3n-qcvVBDcjr7mE3cFIUJp9s3lOLOu4t2_QqsLqSO1NGKyel6EEsjss-xaVitlXOm3QNrfpYoyy-XNynbs00iDQ4LyKmmuEw%2526sai%253DAMfl-YRhsR4TxE0cKhiXxVRJ4uSECv-rbCJlWZ8FrU8Afiv712yH2kpW7leptXr0bQ_EymDtihJ0SM6OHrggRHG5_nrkeCiO51nJFbWdmoSKlyaWZktnKMJP3lpN3GSTk1kqxvxE%2526sig%253DCg0ArKJSzKsoS1ElmA1BEAE%2526fbs_aeid%253D%255Bgw_fbsaeid%255D%2526urlfix%253D1%2526adurl%253Dhttps://www.expedia.co.in/lp/b/ms-b-dmo-exp-in-saudi?siteid=27&langId=2057";
}

document.querySelector(".bar").addEventListener("click",function(){
    window.location.href="index.html";
});

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
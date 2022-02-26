// getting data from local storage for search
var searchData = JSON.parse(localStorage.getItem("searchData"));
// console.log(searchData);
// console.log(searchData[0].place);
document.querySelector("#place").value = searchData[0].place;
document.querySelector("#checkInDate").value = searchData[0].checkIn;
document.querySelector("#checkOutDate").value = searchData[0].checkOut;
var display = "Traveler"+"~"+searchData[0].trav;
document.querySelector("#travNo").innerHTML=display;
var Rdisplay="Room"+"~"+searchData[0].room;
document.querySelector("#roomNo").innerHTML=Rdisplay;
// searched input data

var Trav = searchData[0].trav;
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
var Room=searchData[0].room;
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

// console.log(Trav)
// console.log(Room)

function searchbtn(){
    // event.preventDefault()
    var place = document.querySelector("#place").value;
    var checkIn = document.querySelector("#checkInDate").value;
    var checkOut = document.querySelector("#checkOutDate").value;
    // localStorage.setItem("searchData",JSON.stringify(searchData));
    if(place=="" || checkIn=="" || checkOut=="")
    {
        alert("please fill all the field")
    }
    // else if(checkIn<checkOut){
    //   alert("please give proper date combilantion")
    // }
    else{
      var filterByname = hotelData.filter(function(elem){
        return elem.name.includes(place)
      });
      displayHotel(filterByname)
      var resultByname = "Hotels Available  ~"+filterByname.length
      document.querySelector("#hotelAvailable").innerText=resultByname
    }
}

// Getting data from Local storage
var hotelData = JSON.parse(localStorage.getItem("hotelData"));

// maping the data of hotel
function displayHotel(hotelData){
  document.getElementById("hoteldata").innerHTML="";
  hotelData.map(function(elem,index,array){
    var frame = document.createElement("div");
    frame.setAttribute("id","frame")
    frame.addEventListener("click",function(){
      overview(elem)
    })

    var imgframe=document.createElement("div");

    var contentDiv = document.createElement("div");

    frame.append(imgframe,contentDiv);

    var namePara = document.createElement("div");

    var ratingPrice =  document.createElement("div");

    contentDiv.append(namePara,ratingPrice)

     var rating =  document.createElement("div");
     var price = document.createElement("div");
     
    ratingPrice.append(rating,price)

    document.getElementById("hoteldata").append(frame);

    var image = document.createElement("img")
    image.src = elem.img
    imgframe.append(image);

    var name = document.createElement("h2")
    name.innerText= elem.name
    // namePara.append();

    var local = document.createElement("p")
    local.innerText = elem.localLocation;
    // namePara.append(local);

    var dscrp = document.createElement("p")
    dscrp.innerText=elem.para;
    dscrp.setAttribute("id","hotelpara")
    namePara.append(name,local, dscrp)

    var ratText = document.createElement("h3").innerText="Rating"
    var ratingdisplay = document.createElement("h4")
    ratingdisplay.innerText=elem.rating +" / 5" ;
    rating.append(ratText, ratingdisplay);

    var priceD = document.createElement("h1")
    var D_Rs = "Rs. "+ elem.price;
    priceD.innerText=D_Rs
    
    var pricetext = document.createElement("h6").innerText="per night, Excluded tex and fees"
    price.append(priceD,pricetext)

  })    
}

displayHotel(hotelData);
 
var filterdata;

// filter Data according to place
  if(searchData[0].place != ""){
    var filterByname = hotelData.filter(function(elem){
      return elem.name.includes(searchData[0].place)
    });
    displayHotel(filterByname);
    filterdata=filterByname;
    var resultByname = "Hotels Available  ~"+filterByname.length
    document.querySelector("#hotelAvailable").innerText=resultByname
  }
  function searchplace(){
    var searchinput = document.querySelector("#place").value;
    var filterByname = hotelData.filter(function(elem){
      return elem.name.includes(searchinput)
    }) 
    filterdata=filterByname;
    displayHotel(filterByname)
    var resultByname = "Hotels Available  ~"+filterByname.length
    document.querySelector("#hotelAvailable").innerText=resultByname
  }

  // filter data according to price low to high or high to low
  function sortByPrice(){
    var data = filterdata
      var shorting = document.querySelector("#price").value;
      // console.log(shorting)
      if(shorting=="l2h"){
        data.sort((a,b) => a.price - b.price)
        displayHotel(data);
      }
      else if(shorting=="h2l"){
        data.sort((a,b) => b.price - a.price)
        displayHotel(data);
      }
  }

  // filter data according to rating low to high or high to low
  function sortByRating(){
    var dataForR=filterdata;
    var ratinginput = document.querySelector("#sortRating").value;
    if(ratinginput=="l2h"){
      dataForR.sort((a,b) => a.rating - b.rating)
        displayHotel(dataForR);
    }
    else if(ratinginput=="h2l"){
      dataForR.sort((a,b) => b.rating - a.rating)
        displayHotel(dataForR);
    }
  }

  // more travel dropdown function
  function MoreTravel(){
     var selectMoretravel = document.querySelector(".select").value;
    if(selectMoretravel=="stays"){
      window.location.href="stay_front.html"
    }
    else if(selectMoretravel=="Flight"){
      window.location.href="";
    }
    else if(selectMoretravel=="Cars"){
      window.location.href="";
    }
    else if(selectMoretravel=="Packages"){
      window.location.href="";
    }
  }
  
  // expedia click function
document.querySelector(".bar").addEventListener("click",function(){
  window.location.href="index.html"
});


  // overviw function
  var overviewdata = [];
  var gst=800;
  serviceTex=500;
  function overview(elem){
    elem.Total_RoomPrice=(Room*elem.price);
    elem.room=Room;
    elem.gst=gst;
    elem.checkin=searchData[0].checkIn;
    elem.checkout=searchData[0].checkOut;
    elem.serviceTex=serviceTex;
    overviewdata.push(elem)
    localStorage.setItem("overviewdata",JSON.stringify(overviewdata));
    window.location.href="review.html"; 
  }

document.querySelector(".hcolor4").addEventListener("click",function(){
  window.location.href="login.html"
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
var overviewdata = JSON.parse(localStorage.getItem("overviewdata"));
console.log(overviewdata);

overviewdata.map(function(elem,index,array){
    
    var total_price = document.querySelector("#overviewdata")
    var total = "Total Price =  " + (elem.Total_RoomPrice+elem.gst+elem.serviceTex)
    total_price.innerText=total

    var basicPrice = document.createElement("h1")
    basicPrice.innerText = "Basic Price = "+elem.Total_RoomPrice;
    document.querySelector("body").append(basicPrice)
})
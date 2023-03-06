window.onload = function(){
    // alert("worked")
    var dataFromLS = JSON.parse(localStorage.getItem("ajiouserProduct"));
    console.log(dataFromLS,"dataFromLS")
    

    array = [];
    for(var i=0; i<dataFromLS.length; i++){
        array += `<div id = "picture2"><img src="${ dataFromLS[i].proImg}" /><h1>${dataFromLS[i].proName}</h1><p>${dataFromLS[i].proPrice}</p><button id = "cartbutton" onclick='addToCart(${JSON.stringify(dataFromLS[i])})' >Add to cart</button></div>`
        // console.log(dataFromLS[i].proName)
    }
    var divFromHTML = document.getElementById("screen")
    divFromHTML.innerHTML = array;
}

function addToCart(pro){
    var product = JSON.stringify(pro);
    var dataFromLS = JSON.parse(localStorage.getItem("ajiouserData"));
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser){
        var allUsers = []
        for (var i=0; i <dataFromLS.length ; i++){
            if(dataFromLS[i].email === currentUser["User"]){
                var newObj = dataFromLS[i];
                newObj["cartProducts"] = newObj["cartProducts"] || [];
                newObj["cartProducts"].push(JSON.parse(product));
                allUsers.push(newObj)
            } else {
                allUsers.push(dataFromLS[i])
            }
        }
        localStorage.setItem("ajiouserData", JSON.stringify(allUsers));
        alert("product added to cart ")
    } else{
        alert(" login first to add product")
    }

}
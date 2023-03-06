function register(event) {
    // getting data from html to js
    event.preventDefault();
    var userName = document.getElementById("userName").value;
    var userPhone = document.getElementById("userPhone").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    var ajiouserData = { name: userName, number : userPhone, email: userEmail, password: userPassword }

    // storing data from js to ls
    var dataFromLS = JSON.parse(localStorage.getItem("ajiouserData")) || [];
    console.log(dataFromLS, 'dataFromLS')
    var flag = false;
    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].email === userEmail) {
            flag = true;
        }
    }
    if (flag === true) {
        alert("Email already present, use another one")
    } else if (userPassword.length < 1 && userName.length < 1 && userEmail.length < 1) {
        alert("must fill all fields")
    } else if (userPassword.length < 8) {
        alert("password must be more than 8 digit")
    } else {
        dataFromLS.push(ajiouserData);
        localStorage.setItem("ajiouserData", JSON.stringify(dataFromLS));
        document.getElementById("userName").value = " ";
        document.getElementById("userPhone").value = " ";
        document.getElementById("userEmail").value = " ";
        document.getElementById("userPassword").value = " ";
        window.location.href = "ajiologin.html";
        alert("Registration done");

    }
}

function login(event) {
    event.preventDefault();
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    var ajiouserData = { email: userEmail, password: userPassword }

    var dataFromLS = JSON.parse(localStorage.getItem("ajiouserData")) || [];
    console.log(dataFromLS, 'dataFromLS')
    var flag = false;
    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].email === userEmail && dataFromLS[i].password === userPassword) {
            flag = true;
        }
    }
    if (flag === true) {
        alert("login succecfully")
        dataFromLS.push(ajiouserData);
        localStorage.setItem("ajiouserData", JSON.stringify(dataFromLS));
        document.getElementById("email").value = " ";
        document.getElementById("password").value = " ";
        var User = {};
        User = { email: userEmail }
        localStorage.setItem("currentUser", JSON.stringify(User));


        window.location.href = 'ajio.html';
    } else {

        alert("Wrong cred, Please check your email and password");
    }
}

var gettingEmail;
function forgetPassword() {

    var dataFromLS = JSON.parse(localStorage.getItem("ajiouserData"));
    var userEmail = document.getElementById("email").value;
    gettingEmail = userEmail;

    var flag = false;
    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].email === userEmail) {
            flag = true;
        }
    }
    if (flag === true) {
        // window.location.href = '/newpass.html';

        var newCode = `<input type = "password" id ="password" > <br> <button id="regdiv" onclick="newPassword()">set new password</button>`
        var divFromHtml = document.getElementById("change")
        divFromHtml.innerHTML = newCode;
        alert(" now set new password")
    }
    else {
        alert(" email not found ,check email again ")
    }


}


function newPassword() {
    var userPassword = document.getElementById("password").value;
    var dataFromLS = JSON.parse(localStorage.getItem("ajiouserData"));
    //    alert ("worked")


    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].email === gettingEmail) {
            dataFromLS[i].password = userPassword
        }
    }
    localStorage.setItem('ajiouserData', JSON.stringify(dataFromLS));
    gettingEmail = "";

    window.location.href = 'ajiologin.html';
    alert("password change now login")

}

function addToLS() {
    alert("product added")
    var Name = document.getElementById("proName").value;
    var Imge = document.getElementById("proImg").value;
    var Price = document.getElementById("proPrice").value;

    var ajiouserProduct = {  proImg:Imge, proName: Name, proPrice:Price }
    // store deta from java script to local storage
    var dataFromLS = JSON.parse(localStorage.getItem("ajiouserProduct")) || [];
    console.log(dataFromLS, 'dataFromLS')
  
    dataFromLS.push(ajiouserProduct);
    localStorage.setItem("ajiouserProduct", JSON.stringify(dataFromLS));
    alert("product added")

    var Name = document.getElementById("proName").value ="" ;
    var Imge = document.getElementById("proImg").value ="";
    var Price = document.getElementById("proPrice").value ="";
}
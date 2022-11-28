const storage = window.localStorage
let userList=[];

function loadUsers(){
    let loadedUsers = localStorage.getItem("user");
    if(loadedUsers !==null){
        userList = JSON.parse(loadedUsers);
    };
}

loadUsers();
function saveUsers(){
    let json= JSON.stringify(userList);
    localStorage.setItem("user", json);
}

function validateEmail(email){
    if (email =="") {
        alert("The email section cannot be empty, please fill it");
        return true;
    }
    for (let index = 0; index < userList.length; index++){
        if (userList[index].email == email){
            return false;
        }
    }
    alert("The email is incorrect, please try again");
    return true;
}

function validatePassword(password, email){
    if (password =="") {
        alert("The password cannot be left empty, please fill it");
        return true;
    }
    for (let index = 0; index<userList.length; index++){
        if (userList[index].email == email){
            if (userList[index].password == password){
            return false;
            }
        }
    }
    alert("The password section cannot be left empty, please fill it");
    return true;
}
function updateUser(email){
    for(let index = 0; index < userList.length; index++){
        if (userList[index].email==email){
            userList[index].isLogged= true;
        }
    }
    saveUsers();
}

function login(){
    const email= document.getElementById("email").value
    const password = document.getElementById("password").value

    if (validateEmail(email)){
        return;
    } else if(validatePassword(password, email)){
        return;
    } else{
        updateUser(email);
        window.location.href = 'Registration.html'
    }
    //navego a la main page
}


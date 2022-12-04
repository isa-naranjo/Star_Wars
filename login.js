let userList=[];

function loadUsers(){
    let loadedUsers = localStorage.getItem("user");
    if(loadedUsers !==null){
        userList = JSON.parse(loadedUsers);
    };
}

const email = document.getElementById('email')
const password = document.getElementById('password')
const button = document.getElementById('button')
button.addEventListener('click', (e) =>{
    e.preventDefault()
    const data = {
        email: email.value,
        password: password.value
    }
    console.log(data)
    
})

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
    alert("You have entered correctly, please go back to the main page");
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
    //alert("The password section cannot be left empty, please fill it");
    return true;
    
}

function updateUser(email){
    for(let index = 0; index < userList.length; index++){
        if (userList[index].email==email){
            userList[index].isLogged= true;
        }
    }
    saveUsers();
    window.location.href = 'starwars.html'
}

function login(){
    const email= document.getElementById("email").value
    const password = document.getElementById("password").value

    if (validateEmail(email)){
        window.location.href = 'starwars.html'
        return;
    } else if(validatePassword(password, email)){
        //window.location.href = 'starwars.html'
        return;
    } else{
        updateUser(email);
        window.location.href = 'starwars.html'
    }
    //navego a la main page
    console.log("cons")
}

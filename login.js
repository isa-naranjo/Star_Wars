const storage=window.localStorage


function login(){
    const loggedUser = storage.getItem("user")
    const user = JSON.parse(loggedUser)
    const name=document.getElementById("name").value
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    
    if(user.email === email && user.password === password){
        user.isLogged = true
        const userJsonStr = JSON.stringify(user)
        storage.setItem("user", userJsonStr)

        window.location.href = 'main.html'
    }
//const user={
//        name : name,
  //      email : email,
    //    password: password
    //}
    //const userJsonStr= JSON.stringify(user)
    //storage.setItem("user", userJsonStr)

  //  window.location.href= 'login.html'
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
        window.location.href = 'starwars.html'
    }
    //navego a la main page
}
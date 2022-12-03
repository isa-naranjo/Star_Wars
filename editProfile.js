
function applyChanges() {
    for (let i = 0; i < users.length; i++) {
        console.log(users[i])
        if (users[i].isLogged == true) {
            console.log(users[i],"Entrada")
            users[i].img = newImg;
            users[i].name = newusernameInput.value;
            users[i].email = emailInput.value;
            users[i].password = passwordInput.value;
            let json = JSON.stringify(users);
            localStorage.setItem('users', json);
            console.log(users[i],"Salida")
        }
    }
}
const storage=window.localStorage

const UserInput = document.getElementById('UserInput');
const EmailInput = document.getElementById('EmailInput');
const PasswordInput = document.getElementById('PasswordInput');
const createBtn = document.getElementById('createBtn')
const Storage = window.localStorage;

let users = [];
let savedUsers = localStorage.getItem('users')
if (savedUsers !== null) {
    users = JSON.parse(savedUsers);
}

let userFavs = [];
for(i = 0; i<162; i++){
    userFavs.push(false);
}

function signup() {

    if (PasswordInput.value.length <= 5) {
        alert('The password needs at least 6 digits')
        return;
    }
    let flag = false;
    for (let i = 0; i < users.length; i++) {
        if (EmailInput.value == users[i].email) {
            flag = true;
            alert("This mail is already been used");
        }
    }
    if (flag == false) {
        let user = new UserC(
            UserInput.value,
            EmailInput.value,
            PasswordInput.value,
            users.length,
            false,
            userFavs,
            0
        );
        users.push(user);
        let json = JSON.stringify(users);
        localStorage.setItem('users', json);
        window.location.href = "login.html";
    }

}



createBtn.addEventListener('click', signup)
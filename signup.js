const storage=window.localStorage

let user=[]
let loadedUsers = localStorage.getItem("user");
    if (loadedUsers !== null) {
        user = JSON.parse(loadedUsers);
    };
console.log("usero")
function signup(){

    console.log("pala")
    const first=document.getElementById("first").value
    const last=document.getElementById("last").value
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
  
const user={
        first : first,
        last : last,
        email : email,
        password: password
    }
    const userJsonStr= JSON.stringify(user)
    storage.setItem("user", userJsonStr)

    window.location.href= './starwars.html'
  console.log("palabra")
}
console.log("pal")


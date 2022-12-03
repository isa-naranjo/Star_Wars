const cards = document.getElementById("cards")

let users = []
let savedUsers = localStorage.getItem("users");
    if (savedUsers !== null) {
        users = JSON.parse(savedUsers);
    };

    let userId = "";
for(let i = 0; i < users.length; i++){
    if(users[i].isLogged == true){
        userId = i;
    }
}

let loadedlist = localStorage.getItem("cardsList");
if(loadedlist === null){
    let cardsList = [];
} else{
    cardsList = JSON.parse(loadedlist);
    generate();
}

function generate(){
    cards.innerHTML = "";
    for(let i=0; i<cardsList.length; i++){
        let id = cardsList[i].id;
        let name = cardsList[i].name;
        let img = cardsList[i].img;
        let favorite = users[userId].favs[i];
        let card = new Card(id, name, rol, img, favorite);

        if(favorite === true){
            card.render(cards);
        }
    }
}

function addRemoveFavoriteList(i){
    if(users[userId].favs[i] === false){
        users[userId].favs[i] = true;

        let json = JSON.stringify(users);
        localStorage.setItem("users", json);
        generate();
    }

    else {
        users[userId].favs[i] = false;

        let json = JSON.stringify(users);
        localStorage.setItem("users", json);
        generate();
    }
}
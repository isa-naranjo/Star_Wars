// Logged user validation
const storage = window.localStorage
function validateLoggedUser() {
    const loggedUser = storage.getItem("user")
    const user = JSON.parse(loggedUser)
    if(!user.isLogged) {
        window.location.href = 'signln.html'
    } else {
        listButtons()
    }
}

// Mock data simulating that i get it from the API
const data = [
    {
        id: 1,
        label: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        img:"imagenes/luke.png"
    },
    {
        id: 2,
        label: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        img:"imagenes/luke.png"
    },
    {
        id: 3,
        label: "Obi-Wan Kenobi",
        height: "182",
        mass: "77",
        hair_color: "auburn, white",
        skin_color: "fair",
        eye_color: "blue-gray",
    },
    {
        id: 4,
        label: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        img:"imagenes/luke.png"
    },
    {
        id: 5,
        label: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        img:"imagenes/luke.png"
    },
    {
        id: 6,
        label: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        img:"imagenes/luke.png"
    },
    {
        id: 7,
        label: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        img:"imagenes/luke.png"
    },
    {
        id: 8,
        label: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        img:"imagenes/luke.png"
    },
    {
        id: 9,
        label: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        img:"imagenes/luke.png"
    },
    {
        id: 10,
        label: "Darth Vader",
        height: "202",
        mass: "136",
        hair_color: "none",
        skin_color: "white",
        eye_color: "yellow",
    },
    {
        id: 11,
        label: "Darth Vader",
        height: "202",
        mass: "136",
        hair_color: "none",
        skin_color: "white",
        eye_color: "yellow",
    },
    {
        id: 12,
        label: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        img:"imagenes/luke.png"
    },
    {
        id: 13,
        label: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        img:"imagenes/luke.png"
    },

]

    const buttonsDiv = document.getElementById("buttons-list")



function createButton(button, pos) {
    return "<button onclick='buttonClicked(" + pos + ")'>" + button.label + "</button>"
}

function listButtons() {
    var pos = 0
    data.forEach(button => {
        buttonsDiv.innerHTML += createButton(button, pos)
        pos++
    })
}

function buttonClicked(pos) {
    const button = data[pos]
    window.location.href = 'yoda.html?id=' + button.id
}




validateLoggedUser()



function fetchAsync() {
    const url = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=10'
    fetch(url)
        .then(response => {
            response.json().then(data => {
                console.log(data)
            })
        })
}

// Logged user validation
const storage = window.localStorage
function validateLoggedUser() {
    const loggedUser = storage.getItem("user")
    const user = JSON.parse(loggedUser)
    if(!user.isLogged) {
        window.location.href ='yoda.html'
    } else {
        getButtonInfo()
    }
}

// Mock data simulating that i get the current item from the API
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
        label: "",
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
        label: "",
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

function getButtonById(id) {
    const button = data.find(e => {
        return e.id + "" === id
    })
    return button
}

function getButtonInfo() {
    const params = new URLSearchParams(window.location.search)
    const buttonId = params.get('id')
    const button = getButtonById(buttonId)

    const idP = document.getElementById("id")
    const labelP = document.getElementById("label")
    const heightP = document.getElementById("height")
    const massP = document.getElementById("mass")
    const hair_colorP = document.getElementById("hair_color")
    const skin_colorP = document.getElementById("skin_color")
    const eye_colorP = document.getElementById("eye_color")
    const imgP = document.getElementById("img")

    idP.innerHTML = button.id
    labelP.innerHTML = button.label
    heightP.innerHTML = button. height
    massP.innerHTML = button.mass
    hair_colorP.innerHTML = button.hair_color
    skin_colorP.innerHTML = button.skin_color
    eye_colorP.innerHTML = button.eye_color
    imgP.innerHTML = button.img
}


validateLoggedUser()
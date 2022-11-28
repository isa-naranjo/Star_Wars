function fetchAsync(){
    const url='https://swapi.dev'
    fetch(url)
    .then(response => {
        response.json().then. {data=>{
            console.log(data)
            data.data.forEach {information=>{
                console.log(information)
            }}
        }}
    })
}
fetchAsync()
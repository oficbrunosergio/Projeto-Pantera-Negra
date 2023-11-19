


const bruno = { 
    name: "Bruno",
    age: 31,
    address: {
        street: "Rua Juripiranga",
        number: 0,
        city: "Igarassu",
        state: "PE",
        country: "Brasil",
    }
}

bruno.address.city = "Recife"
bruno.address.state = "JP"
bruno.address.number = 55


console.log(bruno.address.number)
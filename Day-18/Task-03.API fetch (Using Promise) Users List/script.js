let title = document.createElement("div");
title.className = "title"
title.innerText = "API fetch (Using Promise) Users List"
title.style.color = "white"
title.style.padding = "1.5rem"
title.style.backgroundColor = "blue"
title.style.fontSize = "1.5rem"
title.style.fontWeight = "bolder"
title.style.marginBottom = "1.5rem"
document.body.append(title)


let res = fetch("https://jsonplaceholder.typicode.com/users");
res.then((data) => data.json()).then((value) => bar(value))

let container = document.createElement("div");
container.className = "container"
let row = document.createElement("div");
row.className = "row"
container.append(row);

function bar(value) {
    console.log(value);
    for (let i = 0; i < value.length; i++) {
        row.innerHTML += ` 
        <div class = "col-lg-4">
        <div class="card border-primary mb-3" style="width: 20rem;">
       <div class="card-header text-white text-center bg-dark fw-bolder">Name: ${value[i].company.name}</div>
       <div class="card-body text-center bg-info-subtle">
       <p class="card-text">Email:${value[i].email}</p>
       <p class="card-text">Street:${value[i].address.street}</p>
       <p class="card-text">City:${value[i].address.city}</p>
       </div>
       </div>
       `
    }
    document.body.append(container)
}
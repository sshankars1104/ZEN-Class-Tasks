const Btn = document.getElementById("btn");
const Content = document.getElementById("content");

function fetchNewImage() {
    const url = "https://api.thecatapi.com/v1/images/search";
    fetch(url)
        .then((data) => data.json())
        .then((value) => {
            Content.innerHTML = "";
            Content.innerHTML += `<img src="${value[0].url}" alt="" width="400" height="350">
            `;

        });
}


fetchNewImage();


Btn.addEventListener("click", fetchNewImage);

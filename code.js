let picReq = new XMLHttpRequest();
// open a connection between me and the server
picReq.open(
    "GET",
    "https://api.unsplash.com/photos/random/?client_id=fJiaP6vTVdOLL99NUI9mg1Jb3HoI7tOvbYgZNI2FzlE&query=nature, lanscape, HD, sea, forest, desert, 1000px"
);
// send a request to the server that got unsplash API
picReq.send();

let user = document.querySelector(".picAuthor p");
let userPorfolio = document.querySelector(".picAuthor a");

picReq.onreadystatechange = function () {
    // if request is successfull and response is ready do:
    if (this.readyState === 4 && this.status === 200) {
        // transform the API to JS Object
        let res = JSON.parse(this.responseText);
        // make the body's background and put the picture owner and his portfolio on unsplash
        user.textContent = `Picture By ${res.user.name} At`;
        userPorfolio.href = `https://www.unsplash.com/@${res.user.username}`;
        let img = res.urls.raw;
        document.body.style.cssText = `background-image: url(${img}); background-repeat: no-repeat; background-size: cover; height: 100%`;
    }
};

let content = document.querySelector(".content");
let randomise = document.querySelector(".content i");

let QuoteReq = new XMLHttpRequest();
QuoteReq.open(
    "GET",
    "https://api.quotable.io/random?minLength=30&maxLength=135"
);

QuoteReq.send();

QuoteReq.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        // put the quote and the author in the content div
        let quote = document.createElement("h2");
        quote.textContent = `" ${response.content} "`;
        let author = document.createElement("span");
        author.textContent = `- ${response.author} -`;
        content.append(quote, author);
        randomise.onclick = () => {
            // reload the page to make new requests
            window.location.reload();
        };
    }
};

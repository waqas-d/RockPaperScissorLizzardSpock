// let item1 = document.getElementById("item1");
// let item2 = document.getElementById("item2");
// let item3 = document.getElementById("item3");
// let item4 = document.getElementById("item4");

// let injectHere = document.getElementById("injectHere");

// item1.addEventListener('click', function(e){
//     let h1 = document.createElement("h1");
//     injectHere.appendChild(h1);
//     h1.textContent = "Hello World";
// });

// item2.addEventListener('click', function(e){
//     MakeCard("Made from Item 2");
// });

// item3.addEventListener('click', function(e){
//     injectHere.innerHTML = "";
// });

// function MakeCard(cardTitle){
//     injectHere.innerHTML = "";
//     // Build inner portion of the card 
//     let h5 = document.createElement("h5");
//     h5.className = "card-title";
//     h5.textContent = cardTitle;

//     // Build the p tag
//     let p = document.createElement("p");
//     p.className = "card-text";
//     p.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content";

//     // Build the a tag
//     let a = document.createElement("a");
//     a.className = "btn btn-primary";
//     a.textContent = "Go somewhere";
//     a.addEventListener("click", function(e){
//         alert("I was clicked");
//     });

//     // Build the inner div
//     let bodyDiv = document.createElement("div");
//     bodyDiv.className = "card-body";

//     // Build out the inner portion
//     bodyDiv.appendChild(h5);
//     bodyDiv.appendChild(p);
//     bodyDiv.appendChild(a);

//     let img = document.createElement("img");
//     img.className = "card-img-top";
//     img.src = "...";
//     img.alt = "...";

//     // Build the outer div
//     let outerDiv = document.createElement("div");
//     outerDiv.className = "card";
//     outerDiv.style = "width: 18rem;";

//     outerDiv.appendChild(img);
//     outerDiv.appendChild(bodyDiv);
    
//     injectHere.appendChild(outerDiv);

// }

// let injectHere = document.getElementById("injectHere");

// item1.addEventListener('click', function(e){
//     let h1 = document.createElement("h1");
//     injectHere.appendChild(h1);
//     h1.textContent = "Hello World";
// });

let easyBtn = document.getElementById("easyBtn");
let gameModeOptions = document.getElementById("gameModeOptions");

easyBtn.addEventListener('click', function(e){
    let h6 = document.createElement("h6");
    gameModeOptions.appendChild(h6);
    h6.textContent = "You have chosen Easy. Please select your opponent.";
});

let mediumBtn = document.getElementById("mediumBtn");

mediumBtn.addEventListener('click', function(e){
    let h6 = document.createElement("h6");
    gameModeOptions.appendChild(h6);
    h6.textContent = "You have chosen Medium. Please select your opponent.";
});

let hardBtn = document.getElementById("hardBtn");

hardBtn.addEventListener('click', function(e){
    let h6 = document.createElement("h6");
    gameModeOptions.appendChild(h6);
    h6.textContent = "You have chosen Hard. Please select your opponent.";
});




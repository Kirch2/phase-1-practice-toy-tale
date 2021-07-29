let addToy = false;

// Function to fetch toys from the API
const getToys = () => {
  return fetch("http://localhost:3000/toys").then((res) => res.json());
};

// // // //

// Function to add a single toy to the #toy-collection element
const renderToy = (toy) => {
  // Store reference to #toy-collection element that we're going to use to hold all toyDiv elements
  const toyCollection = document.querySelector("#toy-collection");

  // Defines the toyDiv element
  const toyDiv = document.createElement("div");
  toyDiv.className = "card";

  // Create <h2> tag with the toy.name
  const h2 = document.createElement("h2");
  h2.innerText = toy.name;

  // Create <img> tag with the toy.image
  const img = document.createElement("img");
  img.src = toy.image;
  img.className = "toy-avatar";

  //P tag with likes for each toy
  const p = document.createElement("p");
  p.innerText = toy.likes + " Likes";

  //Create button, pull class name from JSON, attach string Like inside button
  const btn = document.createElement("button");
  btn.className = "like-btn";
  btn.id = toy.id;
  btn.innerText = "Like";

  //event listener first to increase likes
  //parseInt (function) + 1

  //Append variables defined above to page
  toyDiv.append(h2);
  toyDiv.append(img);
  toyDiv.append(p);
  toyDiv.append(btn);

  // Adds toyDiv to the toyCollection element
  toyCollection.append(toyDiv);
};

// // // // // // //

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  getToys().then((toys) => {
    toys.forEach((toy) => renderToy(toy));
  });
});

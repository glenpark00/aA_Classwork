
export const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};


export const dogLinkCreator = function(){
  let res = [];
  for (let breed in dogs) {
    let a = document.createElement("a");
    a.innerHTML = breed;
    a.setAttribute("src", dogs[breed]);
    let li = document.createElement("li");
    li.classList.add("dog-link");
    li.append(a);
    res.push(li);
  }
  return res;
};

export const attachDogLinks = function() {
  let links = dogLinkCreator();
  let ul = document.querySelector(".drop-down-dog-list");
  for (let link of links) ul.appendChild(link);
};



export function handleEnter() {
  let nav = document.querySelector(".drop-down-dog-nav");
    nav.addEventListener("mouseenter", e => {
    let links = document.querySelectorAll(".dog-link");
    for (let link of links) {
      link.classList.toggle("dog-link");
      // link.classList.add("show");
    }
  });
}

export function handleLeave() {
  let nav = document.querySelector(".drop-down-dog-nav");
  nav.addEventListener("mouseleave", e => {
    let ul = document.querySelector(".drop-down-dog-list");
    for (let child of ul.children) {
      child.classList.toggle("dog-link");
      // child.classList.remove("show");
    }
  });
}

attachDogLinks();
handleEnter();
handleLeave();
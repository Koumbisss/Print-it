const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let activeIndex = 0;
document.addEventListener("DOMContentLoaded", function () {
  const FlecheGauche = document.querySelector(".arrow_left");
  FlecheGauche.addEventListener("click", function () {
    activeIndex--;
    if (activeIndex < 0) {
      activeIndex = slides.length - 1;
    }
    console.log("fleche gauche");
    console.log(activeIndex);

    manageBanner(activeIndex);
    manageDot(activeIndex);
  });

  const FlecheDroite = document.querySelector(".arrow_right");
  FlecheDroite.addEventListener("click", function () {
    activeIndex++;
    if (activeIndex >= slides.length) {
      activeIndex = 0;
    }

    console.log("fleche droite");
    console.log(activeIndex);

    manageBanner(activeIndex);
    manageDot(activeIndex);
  });
});
function manageBanner(activeIndex) {
  const image = document.querySelector(".banner-img");
  const tagline = document.querySelector("#banner p");
  image.src = "./assets/images/slideshow/" + slides[activeIndex].image;
  tagline.innerHTML = slides[activeIndex].tagLine;
}


document.addEventListener("DOMContentLoaded", function () {
  const Points = document.querySelector(".dots");
  slides.forEach(function (slide, index) {
    const Point = document.createElement("span");
    Point.classList.add("dot");
    Points.appendChild(Point);
    if (index === 0) {
      Point.classList.add("dot_selected");
    }
  });
});

function manageDot(activeIndex) {
  const TableauPoint = document.querySelectorAll(".dot");
  TableauPoint.forEach((elementPoint) => {
    elementPoint.classList.remove("dot_selected");
  });
  TableauPoint[activeIndex].classList.add("dot_selected");
}

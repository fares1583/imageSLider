let imgs = document.querySelectorAll("img");
let slideNumber = document.querySelector(".slide-number");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let indecator = document.querySelector(".indicators");
let currentSlide = 0;

// create pagination
let pagination = document.createElement("ul");
pagination.classList.add("pagination");

// create li
for (let i = 0; i < imgs.length; i++) {
  let li = document.createElement("li");

  li.appendChild(document.createTextNode(i + 1));
  li.setAttribute("data-index", i);

  pagination.appendChild(li);
}
indecator.appendChild(pagination);

prevBtn.onclick = prevSlide;
nextBtn.onclick = nextSlide;

function prevSlide() {
  if (prevBtn.classList.contains("dis")) {
    return false;
  } else {
    currentSlide--;
    checker();
  }
}

function nextSlide() {
  if (nextBtn.classList.contains("dis")) {
    return false;
  } else {
    currentSlide++;
    checker();
  }
}

// onclick on bullets
let li = Array.from(pagination.children);

for (let i = 0; i < imgs.length; i++) {
  li[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    checker();
  };
}

// create a checker function

function checker() {
  slideNumber.innerHTML = `Slide #${currentSlide + 1} OF ${imgs.length} `;

  removeAllActive();

  imgs[currentSlide].classList.add("active");

  pagination.children[currentSlide].classList.add("active");

  if (currentSlide === 0) {
    prevBtn.classList.add("dis");
  } else {
    prevBtn.classList.remove("dis");
  }

  if (currentSlide === imgs.length - 1) {
    nextBtn.classList.add("dis");
  } else {
    nextBtn.classList.remove("dis");
  }
}

checker();

// remove all active class from (images and bullets)

function removeAllActive() {
  imgs.forEach((img) => {
    img.classList.remove("active");
  });

  Array.from(pagination.children).forEach((li) => {
    li.classList.remove("active");
  });
}

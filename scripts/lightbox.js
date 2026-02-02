const images = document.querySelectorAll(".gallery img");
let currentIndex = 0;

const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = `
  <span class="lightbox-close">&times;</span>
  <span class="lightbox-prev">&#10094;</span>
  <img src="" />
  <span class="lightbox-next">&#10095;</span>
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector("img");

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = images[index].src;
  lightbox.classList.add("active");
}

function closeLightbox() {
  lightbox.classList.remove("active");
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

function showPrev() {
  currentIndex =
    (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

images.forEach((img, i) => {
  img.addEventListener("click", () => openLightbox(i));
});

lightbox.querySelector(".lightbox-close").onclick = closeLightbox;
lightbox.querySelector(".lightbox-next").onclick = showNext;
lightbox.querySelector(".lightbox-prev").onclick = showPrev;

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});

/* ===== NAVBAR SCROLL ===== */
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

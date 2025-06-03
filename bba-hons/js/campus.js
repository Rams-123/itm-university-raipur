const campusData = [
  { image: "https://cdn.itm.edu/assets/DSC_3750_26fda33e72.webp" },
  { image: "https://cdn.itm.edu/assets/DSC_6433_f47ffbabab.webp" },
  { image: "https://cdn.itm.edu/assets/DSC_3738_a719907162.webp" },
  {
    image:
      "https://cdn.itm.edu/assets/3acdaf05_c475_4665_8a63_8a16757c4b64_be7d49acab.webp",
  },
  {
    image: "https://cdn.itm.edu/assets/IMG_20240406_183523852_a1762081f2.webp",
  },
  { image: "https://cdn.itm.edu/assets/P1050928_f9c8d29cd5.webp" },
  { image: "https://cdn.itm.edu/assets/P1050918_521653c5c1.webp" },
  { image: "https://cdn.itm.edu/assets/IMG_20230913_111527_f49a2da967.webp" },
  { image: "https://cdn.itm.edu/assets/IMG_1005_1ee2673d0e.webp" },
  { image: "https://cdn.itm.edu/assets/P1090906_3aa9faa347.webp" },
  {
    image:
      "https://cdn.itm.edu/assets/8a0dbcfa_f1ea_44a9_8874_aa34413e60bf_66477f6e6c.webp",
  },
];

function openImageModal(imageUrl) {
  const modal = document.getElementById("image-modal");
  const modalContent = document.getElementById("modal-content");
  const modalImg = document.getElementById("modal-img");

  modalImg.src = imageUrl;
  modal.classList.remove("hidden");

  requestAnimationFrame(() => {
    modalContent.classList.remove(
      "opacity-0",
      "scale-95",
      "pointer-events-none"
    );
    modalContent.classList.add(
      "opacity-100",
      "scale-100",
      "pointer-events-auto"
    );
  });

  document.body.style.overflow = "hidden";
}

function closeImageModal() {
  const modal = document.getElementById("image-modal");
  const modalContent = document.getElementById("modal-content");

  modalContent.classList.remove(
    "opacity-100",
    "scale-100",
    "pointer-events-auto"
  );
  modalContent.classList.add("opacity-0", "scale-95", "pointer-events-none");

  setTimeout(() => {
    modal.classList.add("hidden");
    document.getElementById("modal-img").src = "";
    document.body.style.overflow = "";
  }, 300);
}

function campusCard(data) {
  return `
    <div class="min-w-[300px] w-[300px] md:min-w-[320px] md:w-[320px] aspect-[4/3] mb-4 flex-shrink-0 relative cursor-pointer group rounded-lg overflow-hidden shadow-md" onclick="openImageModal('${data.image}')">
      <img src="${data.image}" alt="Campus" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
    </div>
  `;
}

const campusCardsContainer = document.getElementById("campus-data");
campusCardsContainer.innerHTML = campusData.map(campusCard).join("");

// Close on backdrop click
document
  .getElementById("modal-backdrop")
  .addEventListener("click", closeImageModal);

// Close on ESC key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeImageModal();
  }
});

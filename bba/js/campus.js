const campusData = [
  { image: "https://media.itm.ac.in/IMG_0469_20_11zon_670f11cbcf.webp" },
  { image: "https://media.itm.ac.in/IMG_0479_19_11zon_31a7a91353.webp" },
  { image: "https://media.itm.ac.in/IMG_2534_18_11zon_fc828d3173.webp" },
  { image: "https://media.itm.ac.in/IMG_4321_17_11zon_f905dd5612.webp" },
  { image: "https://media.itm.ac.in/IMG_4401_16_11zon_8f97129c22.webp" },
  { image: "https://media.itm.ac.in/IMG_4402_15_11zon_b62b9b646d.webp" },
  { image: "https://media.itm.ac.in/IMG_4414_14_11zon_20d64b7c01.webp" },
  { image: "https://media.itm.ac.in/IMG_5295_13_11zon_08e1a94fd1.webp" },
  { image: "https://media.itm.ac.in/IMG_5313_12_11zon_c1d45bc9d0.webp" },
  { image: "https://media.itm.ac.in/IMG_5890_11_11zon_3cf6eb1c61.webp" },
  { image: "https://media.itm.ac.in/IMG_6098_10_11zon_3d11bc4452.webp" },
  { image: "https://media.itm.ac.in/IMG_6145_9_11zon_46cf5ef7e8.webp" },
  { image: "https://media.itm.ac.in/IMG_6148_8_11zon_7e0e476b34.webp" },
  { image: "https://media.itm.ac.in/IMG_6175_7_11zon_4428845f60.webp" },
  { image: "https://media.itm.ac.in/IMG_6245_6_11zon_18dcb68553.webp" },
  { image: "https://media.itm.ac.in/IMG_6290_5_11zon_967c214cc0.webp" },
  { image: "https://media.itm.ac.in/IMG_6352_4_11zon_e8e5efbe32.webp" },
  { image: "https://media.itm.ac.in/IMG_6371_3_11zon_bb89c8683b.webp" },
  { image: "https://media.itm.ac.in/IMG_6380_2_11zon_6baac47d25.webp" },
  { image: "https://media.itm.ac.in/IMG_6390_1_11zon_641d8de823.webp" },
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
    <div class="min-w-[300px] w-[300px] md:min-w-[320px] md:w-[320px] aspect-[4/3] flex-shrink-0 relative cursor-pointer group rounded-lg overflow-hidden shadow-md" onclick="openImageModal('${data.image}')">
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

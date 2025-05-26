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

let campus = campusData.map(campusData1).join("");
let campusCards = document.getElementById("campus-data");
campusCards.innerHTML = campus;
function campusData1(campusData) {
  let listCard1 = `
        <div class="flex gap-5 flex-col w-80 aspect-video relative">
            <img src=${campusData.image} alt="event"
            class="flex w-full h-full object-cover rounded-md">
        </div>                  
    `;
  return listCard1;
}

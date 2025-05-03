const campusEvent = [
  {
    heading: "Nerul (Navi Mumbai) Campus Annual Fest - Melange",
    content:
      "Melange is our Annual Festival celebrated at our Nerul (Navi Mumbai) Campus. This is that time of the month when all our students, teachers, and staff come together to showcase their talents and enjoy dance performances, music concerts, and delicious food. During this time, the campus is bursting with energy and vibrance; Organized by an in-house team that fosters a sense of togetherness while creating lasting memories.",
    image: "https://cdn.itm.edu/assets/image_5_2118cd8910.png",
  },
  {
    heading: "Oshiwara (Mumbai) Campus Annual Fest - Elements",
    content:
      "Elements - our inter-collegiate competitions, bringing together industry peers to showcase their talents. These competitions include culinary, baking, patisserie, food, beverage services, and accommodation operations. As the culinary champs blend in the spices, creating that dish to impress, they build a lasting impression in the hospitality industry.",
    image: "https://cdn.itm.edu/assets/image_6_5f2cfffddb.png",
  },
];

let list4 = document.getElementById("campus-event");
list4.innerHTML = campusEvent.map(showData4).join("");
function showData4(campusEvent) {
  let listItems4 = `
      <div class="swiper-slide h-full w-full flex">
        <div class="border rounded-xl w-full justify-start md:items-center items-start h-full flex flex-col md:grid md:grid-cols-2 gap-4 p-4 md:p-6">
          <div class="flex w-full h-fit items-start md:items-center order-2 md:order-1">
            <div class="flex w-full flex-col gap-4">
              <strong class="text-lg md:text-xl lg:text-2xl font-Bebas-Neue text-[#a91d54]">${
                campusEvent.heading
              }</strong>
              <div class="flex flex-col w-full gap-2">
                <p class="text-sm md:text-base gap-2">
                  ${campusEvent.content}
                </p>
              </div>
            </div>
          </div>
          <div class="flex h-fit md:h-full w-full order-1 md:order-2">
            ${
              campusEvent.image
                ? `
                <div class="flex h-[177px] md:h-full w-full border overflow-hidden rounded-xl">
                  <img src="${campusEvent.image}" alt="${campusEvent.heading}" class="flex object-cover h-auto w-full">
                </div>`
                : `
                <div class="relative flex aspect-video w-full">
                  <lite-youtube videoid="TUmCJ5dYrNo" class="rounded-md" title="Play: Video">
                    <a class="lite-youtube-fallback" href="https://www.youtube.com/watch?v=TUmCJ5dYrNo"></a>
                  </lite-youtube>
                </div>`
            }
          </div>
        </div>
      </div>
    `;
  return listItems4;
}

const campusData = [
  {
    heading: "Modern Classrooms",
    content: [
      "Our campuses in Oshiwara (Mumbai) and Nerul (Navi Mumbai) have classrooms that are designed to promote interactive learning, equipped with modern technologies such as smart boards and projection systems, to facilitate engaging lectures and presentations. The flexible seating arrangements and abundant natural light create a comfortable and inviting atmosphere for learning. High-speed internet access is available in every classroom for seamless integration of digital resources.",
    ],
    image: "https://cdn.itm.edu/assets/image_8e831cd214.png",
  },
  {
    heading: "Well-Equipped Kitchens",
    content: [
      "Bakery and Confectionery Lab: A well-equipped space designed to teach and train students in the culinary arts of baking.",
      "Quantity Cooking Kitchen: Where high-volume meals are prepared for students during events and seminars.",
      "Demo Kitchen: Studio-style kitchen with a mirror near the chef’s table, where students perfect their plating techniques with live demonstrations.",
      "Training Restaurant and Bar: This is where students get hands-on experience in operating a bar, restaurant, and more firsthand.",
      "Basic & Advanced Training Kitchens: Here, students perfect their culinary arts from foundational to advanced techniques.",
    ],
    image: "https://cdn.itm.edu/assets/image_1_58f2d41c3d.png",
  },
  {
    heading: "Training Rooms",
    content: [
      "We have well-equipped training rooms, designed to give every student a live learning experience. Our specialized training rooms include:",
      "Front Office Training Room for Hotel Management",
      "Basic & Advanced Training Kitchens for Hospitality Management",
      "Guest Room for Training Guest",
      "To ensure our students hear real-life experiences and are better prepared for real-world scenarios in the hospitality sector, we conduct training sessions led by industry experts. These guest rooms are well maintained to ensure our outstation trainers are comfortable.",
    ],
    image: "https://cdn.itm.edu/assets/image_1_5b1c954620.png",
  },
  {
    heading: "Housekeeping Lab",
    content: [
      "As a part of our live training, we have a proper housekeeping lab where our hospitality management students get hands-on training on activities, such as cleaning, laundry, attending to guests, maintenance of the property, and more.",
    ],
    image: "https://cdn.itm.edu/assets/image_2_05250e43b3.png",
  },
  {
    heading: "Library",
    content: [
      "Our Library is a comprehensive resource center with books, journals, and digital resources related to hotel management. The library also hosts events such as author talks and workshops, providing opportunities for students to connect with industry leaders.",
    ],
    image: "https://cdn.itm.edu/assets/image_3_71056ea915.png",
  },
  {
    heading: "Cafeteria",
    content: [
      "Our vibrant Cafeteria provides a welcoming space for students to unwind and socialize. It features a diverse menu to cater to various tastes and serves as a central hub for student life, fostering the exchange of ideas and forming friendships.",
    ],
    image: "https://cdn.itm.edu/assets/image_4_80fbd7a0b3.png",
  },
];

let list1 = document.getElementById("campus-data");
list1.innerHTML = campusData.map(showData1).join("");

function showData1(campusData) {
  let content = campusData.content
    .map((p) => `<p class="text-sm md:text-base gap-2">${p}</p>`)
    .join("");

  let listItems1 = `
         <div class="swiper-slide h-full w-full flex">
            <div class="border rounded-xl w-full justify-start md:items-center items-start h-full flex flex-col md:grid  md:grid-cols-2 gap-4 p-4 md:p-6">
            <div class="flex w-full h-fit items-start md:items-center order-2 md:order-1">
                <div class="flex w-full flex-col gap-4">
                <strong class="text-lg md:text-xl lg:text-2xl font-Bebas-Neue text-[#a91d54]">${campusData.heading}</strong>
                <div class="flex flex-col w-full gap-2">
                    <p class="text-sm md:text-base gap-2">
                    ${content}
                    </p>
                </div>
                </div>
            </div>
            <div class="flex h-fit md:h-full w-full order-1 md:order-2">
                <div class="flex h-[177px] md:h-full w-full border overflow-hidden rounded-xl">
                <img src="${campusData.image}"
                    alt="${campusData.heading}" class="flex object-cover h-auto w-full">
                </div>
            </div>
            </div>
        </div>
    `;
  return listItems1;
}

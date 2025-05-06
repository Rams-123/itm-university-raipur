const students = [
  {
    studentImg: "https://media.itmuniversity.org/Kinjal_Jain_4994808b66.avif",
    name: "Kinjal Jain",
    batch: "MBA (2020-2022)",
    companyLogo: "https://media.itmuniversity.org/ib_group_99d9b2c7f3.webp",
    para: "5 years at ITM! and Landing in my Dream Corporation IB GROUP. My journey has been filled with learning and growing at ITM University, Raipur. I have been fortunate to be surrounded by great individuals who are generous in sharing knowledge. I am grateful to the training and placement team and all my mentors here who contributed to my journey so far.",
  },
  {
    studentImg: "https://media.itmuniversity.org/image_1_b532511061.webp",
    name: "G. Mayank Sharma",
    batch: "MBA (2020-2022)",
    companyLogo: "https://media.itmuniversity.org/luci_160af0b50b.webp",
    para: "I am delighted because ITM University, Raipur, has given me the opportunity to pursue my career in marketing by providing me campus placements in the following companies, i.e., IndusInd Bank, Lucintel, Club Mahindra , Muthoot Finance-Raipur. I sincerely thank the Training & Placement team of ITM University, Raipur. On behalf of all the students who are placed from MBA, I express my gratitude to ITM University, Raipur, for giving us a great start in our career.",
  },
  {
    studentImg: "https://media.itmuniversity.org/Mayank_142aa3bd85.webp",
    name: "Basu Singh",
    batch: "MBA (2020-2022)",
    companyLogo: "https://media.itmuniversity.org/Indus_bank_2ed2dcef0d.webp",
    para: "It gives me great pleasure to say with pride that I have completed my post-graduate MBA (Marketing) at ITM University, Raipur. The relationship between faculties and students is cordial, allowing me to excel in my area of interest. I am very happy to announce that I have been placed in Indusind bank for the Management Trainee (SDM) profile. I would like to thank ITM University & all the faculties and Training and Placement team for making me a 'Better Person'.",
  },
  {
    studentImg: "https://media.itmuniversity.org/Krupa_Rawal_2bd1d39fe0.webp",
    name: "Krupa Rawal",
    batch: "MBA - Marketing (2020-2022)",
    companyLogo: "https://media.itmuniversity.org/steelmint_8b93c0265c.webp",
    para: "My journey with ITM University, Raipur, has been great, from the induction program to the placement. The relationship between the faculty and the student is cordial, allowing me to grow in my interest. It helped me in grooming myself very well, professionally and personally. I would like to thank the training and placement team and all our faculties for making me a person and giving back the confidence I lost.",
  },
  {
    studentImg: "https://media.itmuniversity.org/radhika_bd1d6c5f8f.avif",
    name: "Radhika Sharma",
    batch: "MBA - Marketing (2020-2022)",
    companyLogo: "https://media.itmuniversity.org/itc_c33168d1a4.webp",
    para: "I would like to express my sincere gratitude and gratitude towards my faculty and training & placement team, who supported me throughout my MBA program and gave me this wonderful opportunity. My journey with ITM University has been great, from the induction program to the placement. I had a great learning experience with the ITMUR family, who provided me with constant support and guidance to achieve my goals.",
  },
  {
    studentImg: "https://media.itmuniversity.org/Varsha_Bajaj_1cf26d800c.webp",
    name: "Varsha Bajaj",
    batch: "MBA - HR (2020-2022)",
    companyLogo: "https://media.itmuniversity.org/JC_ent_86b7bbe29f.webp",
    para: "My life at ITM University Raipur was enriched by the constant guidance provided with efficient teaching & learning. I have been nourished with a plethora of knowledge by dynamic faculties and immense fun with my great classmates. ITM provided me a platform to build my personality by enhancing my presentation skills through various Activity Based Learning.",
  },
  {
    studentImg:
      "https://media.itmuniversity.org/Ririshikant_Ojha_c719cc5e23.webp",
    name: "Ririshikant Ojha",
    batch: "B.Tech (Mechanical)",
    companyLogo: "https://media.itmuniversity.org/tata_motors_da4ce17424.webp",
    para: "Rishikant Ojha graduated from ITM UR (C.G.) with a B. Tech. (Mech.) in the academic session 2014-18. ITM University offers a rich learning environment with outstanding & inspired faculty members who have always been a source of motivation & guidance for me. The campus is a delight to see, with all its resources, including the library and laboratories. Due to excellent hard work and focus on my career goal, I got placed in one of the famous companies in India named Tata Motors as an automobile service engineer.",
  },
];

function renderStudentCard(students) {
  console.log(students);

  return `
      <div class="w-full rounded-xl border bg-white p-4 shadow">
        <img src="${students.studentImg}" alt="${students.name}" class="w-full h-fit object-cover rounded-lg mb-4" />
        <div class="flex items-center gap-2 mb-2">
          <img src="${students.companyLogo}" class="h-20 w-20 object-contain rounded-lg" alt="Company Logo" />
          <span class="font-bold text-lg">${students.name}</span>
        </div>
        <p class="text-sm text-gray-600 mb-2 px-6">${students.batch}</p>
        <p class="text-gray-700 text-sm">${students.para}</p>
      </div>
    `;
}

const container = document.getElementById("studentCards");
container.innerHTML = students.map(renderStudentCard).join("");

const rankingData = [
  {
    heading: "NAAC Accredited",
    paragraph: "Prestigious B+ grade certification by NAAC for excellence.",
  },
  {
    heading: "Academic Excellence",
    paragraph: "Consistent A3 Band achievement in OBE Rankings.",
  },
  {
    heading: "Top University",
    paragraph: "UniRank No. 1 in Chhattisgarh for three years (2021–2024).",
  },
  {
    heading: "Green Champion",
    paragraph:
      "One District One Green Champion Award for Swachhta Action Plan excellence by the Ministry of Education (2021).",
  },
  {
    heading: "Clean Campus",
    paragraph:
      "Recognized as the Cleanest Non-Residential Campus by MHRD (2018).",
  },
  {
    heading: "Innovation Leader",
    paragraph:
      "4-star rating in Institution Innovation Council (IIC) Rankings (2020–2021).",
  },
  {
    heading: "Brand Promising",
    paragraph: "Ranked 13th in India, 1st in Chhattisgarh ARIIA.",
  },
  {
    heading: "Swachh Bharat Recognition",
    paragraph:
      "Contributions to cleanliness and sustainability honored nationally.",
  },
  {
    heading: "MSME Host Institute",
    paragraph:
      "Implementing Incubation under MSME Innovative Scheme recognition.",
  },
  {
    heading: "Badminton Academy",
    paragraph:
      "Partnered with Pulela Gopichand Academy for excellence program.",
  },
  {
    heading: "Toyotathon Host",
    paragraph: "Exclusive Chhattisgarh nodal center for Toyotathon 2021 event.",
  },
  {
    heading: "Sports Leadership",
    paragraph: "Hosted State-Level Chief Minister Badminton Championship 2021.",
  },
  {
    heading: "Hospitality Recognition",
    paragraph:
      "Served the Hon'ble President during Raj Bhavan's official visit.",
  },
  {
    heading: "Training Certificate",
    paragraph: "Conducted service etiquette course for Raj Bhavan staff.",
  },
  {
    heading: "Blood Donation Award",
    paragraph: "Honored for outstanding efforts on World Blood Donor Day.",
  },
  {
    heading: "Cultural Excellence",
    paragraph: "Recognized at CII Young Indians Yuva Mahotsav annually.",
  },
  {
    heading: "1st Ranked",
    paragraph:
      "In Swachh Campus Rankings (2018) for the Cleanest University Campus in the Country.",
  },
];

let ranking = rankingData.map(showRankingData).join("");
let rankingCards = document.getElementById("ranking-container");
rankingCards.innerHTML = ranking;

function showRankingData(rankingData) {
  let rankingCard = `
           <div class="flex w-64 rounded-r-3xl group transition-all border rounded-b-lg bg-white flex-col shadow-md">
              <div
                  class="flex w-full px-6 py-4 rounded-r-3xl rounded-b-3xl group-hover:bg-[#a91d54] group-hover:text-white transition-all bg-[#feefdf]">
                  <span class="text-lg md:text-lg font-normal">${rankingData.heading}</span>
              </div>
              <div class="flex w-full p-6">
                  <p class="text-sm">
                      ${rankingData.paragraph}
                  </p>
              </div>
          </div>                       
      `;
  return rankingCard;
}

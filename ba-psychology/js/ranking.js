const rankingData = [
  {
    heading: "NAAC Accredited",
    paragraph:
      "Prestigious B+ grade certification by NAAC for excellence",
  },
  {
    heading: "Academic Excellence",
    paragraph:
      "Consistent A3 Band achievement in OBE Rankings.",
  },
  {
    heading: "Top University",
    paragraph:
      "UniRank No. 1 in Chhattisgarh for four years.",
  },
  {
    heading: "Green Champion",
    paragraph:
      "Award for Swachhta Action Plan performance excellence.",
  },
  {
    heading: "Clean Campus",
    paragraph:
      "Recognized as Cleanest Non-Residential Campus by MHRD (2018).",
  },
  {
    heading: "Innovation Leader",
    paragraph:
      "A 4-star rating in ARIIA and was awarded.",
  },
  {
    heading: "Entrepreneurship Leader",
    paragraph:
      "A 3-star rating in IIC Rankings was awarded.",
  },
  {
    heading: "Brand Promising",
    paragraph:
      "Ranked 13th in India, 1st in Chhattisgarh ARIIA.",
  },
];

let ranking = rankingData.map(showRankingData).join("");
let rankingCards = document.getElementById("ranking-container");
rankingCards.innerHTML = ranking;

function showRankingData(rankingData) {
  let rankingCard = `
         <div class="flex w-64 rounded-r-3xl group transition-all border border-gray-200 rounded-b-lg bg-white flex-col shadow-md">
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

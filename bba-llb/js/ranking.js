const rankingData = [
  {
    heading: "ARIIA 2021",
    paragraph:
      "Ranked 1st in Chhattisgarh and 13th in India under the ‘Band Promising’ category by the Atal Ranking of Institutions on Innovation Achievements (ARIIA) 2021, announced by the Ministry of Education Innovation Cell (MIC).",
  },
  {
    heading: "UniRank",
    paragraph:
      "Ranked 1st in Chhattisgarh for 2024-2025 by UniRank for academic and institutional excellence.",
  },
  {
    heading: "Top IIC Rating",
    paragraph:
      "3 Stars by the Institutions Innovation Council (IIC), the highest rating in India, awarded by the Ministry of Education Innovation Cell (MIC) in 2023-24.",
  },
  {
    heading: "Green Champion",
    paragraph:
      "Honored with the prestigious Green Champion Award by the Ministry of Education for its sustainability and eco-friendly practices.",
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

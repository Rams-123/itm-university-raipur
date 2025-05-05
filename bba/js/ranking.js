const rankingData = [
  {
    heading: "NAAC Accreditation",
    paragraph: "Awarded a prestigious B+ Grade by NAAC.",
  },
  {
    heading: "UGC Recognition",
    paragraph: "Recognized under Section 2(f) by UGC.",
  },
  {
    heading: "Top B-School:",
    paragraph:
      "Ranked among the Top B-Schools of Excellence 2023 by Competition Success Review.",
  },
  {
    heading: "NEP 2020 Implementation",
    paragraph:
      "Successfully integrated the National Education Policy 2020 into the curriculum.",
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

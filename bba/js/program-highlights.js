// JSON data for program highlights
const programHighlights = [
  {
    title: "Comprehensive Curriculum for Career Readiness",
    description:
      "The BBA program offers an interdisciplinary curriculum that combines core business acumen with leadership and managerial skills. Students specialize in Marketing, Finance, HR, and Operations, ensuring a strong foundation for professional success.",
  },
  {
    title: "5-Month Industry Internship",
    description:
      "Gain real-world business insights through project-based learning, internships, and industry tie-ups with organizations like Young India and CII-YI. A 5-month internship in the final semester bridges academics with industry demands, providing invaluable practical experience.",
  },
  {
    title: "Soft Skills & Professional Development",
    description:
      "Dedicated communication, teamwork, and leadership sessions prepare students to excel in professional environments. Activities like business simulations, group discussions, and workshops ensure well-rounded development.",
  },
  {
    title: "Tailored Specializations for Industry Needs",
    description:
      "Choose from in-demand specializations such as Finance, Marketing, HR, Digital Marketing, and Operations. Each specialization equips students with targeted skills to thrive in competitive business roles.",
  },
  {
    title: "Industry-Integrated Exposure",
    description:
      "Internship opportunities with top companies connect academic learning to real-world business practices. Students engage in case studies, simulations, and live projects to develop hands-on business expertise.",
  },
  {
    title: "State-of-the-Art Infrastructure & Expert Faculty",
    description:
      "Hi-tech labs, modern infrastructure, and industry-experienced faculty provide a nurturing academic and professional growth environment. Faculty with a blend of academic and industry expertise guide students toward achieving their career aspirations.",
  },
  {
    title: "Sustainability and Entrepreneurial Mindset",
    description:
      "The BBA program nurtures future business leaders by emphasizing innovation and social responsibility. Students are equipped with entrepreneurial skills to identify opportunities and drive impactful ventures while adopting sustainable practices in business strategies. This approach ensures a balance between profitability and environmental consciousness.",
  },
];

// Function to create highlight cards
function createHighlightCards() {
  const container = document.getElementById("highlights-container");

  programHighlights.forEach((highlight) => {
    const card = document.createElement("div");
    card.className =
      "flex flex-col gap-4 w-80 md:w-96 rounded-3xl transition-all bg-white border border-[#a91d54] shadow-md justify-between p-6";

    card.innerHTML = `
                    <div class="flex flex-col gap-4 w-full">
                        <span class="text-lg md:text-xl font-semibold text-[#a91d54]">
                            ${highlight.title}
                        </span>
                        <p class="text-sm">
                            ${highlight.description}
                        </p>
                    </div>
                `;

    container.appendChild(card);
  });
}

// Initialize the cards when the page loads
window.addEventListener("DOMContentLoaded", createHighlightCards);

// Sample JSON data for specializations
const specializationsData = [
  {
    id: "finance",
    title: "1. Finance",
    description:
      "The Finance specialization gives students a deep understanding of financial markets, investment strategies, and risk management. This program is designed for those aspiring to build careers in financial analysis, portfolio management, investment banking, or corporate finance.",
    highlights: [
      "In-depth knowledge of financial institutions, stock markets, and derivatives.",
      "Hands-on training in investment planning, risk assessment, and corporate finance.",
      "Practical exposure through case studies, simulations, and industry projects.",
    ],
    topics: [
      "Financial Markets & Institutions",
      "Fundamentals of Investment & Portfolio Management",
      "Corporate Finance & Financial Planning",
      "Risk Analysis & Wealth Management",
    ],
    jobRoles: [
      "Financial Analyst",
      "Portfolio Manager",
      "Investment Banker",
      "Risk Manager",
      "Tax Consultant",
      "Corporate Finance Associate",
    ],
    brochureLink: "Download Brochure",
  },

  {
    id: "banking",
    title: "2. Banking",
    description:
      "The Banking specialization equips students with a comprehensive understanding of banking systems, credit management, and insurance principles. This program prepares students for dynamic careers in risk management, credit analysis, and insurance consultancy, ensuring financial services and regulatory compliance expertise.",
    highlights: [
      "In-depth knowledge of credit management, banking operations, and financial regulations.",
      "Expertise in insurance practices, risk mitigation strategies, and policy frameworks.",
      "Hands-on learning through industry visits, case studies, and simulation-based training.",
    ],
    topics: [
      "Indian Banking System & Financial Services",
      "Credit Management & SME Financing",
      "Principles & Practices of Insurance",
      "Financial Risk Assessment & Mitigation",
    ],
    jobRoles: [
      "Risk Analyst",
      "Banking Operations Manager",
      "Credit Analyst",
      "Insurance Consultant",
      "Loan & Mortgage Advisor",
      "Compliance & Risk Officer",
    ],
    brochureLink: "Download Brochure",
  },
  {
    id: "marketing",
    title: "3. Marketing",
    description:
      "The Marketing specialization equips students with modern marketing tools and strategies, focusing on consumer behavior, advertising, and international marketing. This specialization prepares students for creative and analytical roles in various industries.",
    highlights: [
      "Emphasis on strategic marketing and brand management.",
      "Hands-on training through advertising and brand simulations.",
      "Exposure to global marketing practices and consumer trends.",
    ],
    topics: [
      "Advertising and Brand Management",
      "Consumer Behavior",
      "International Marketing",
      "Digital Marketing Strategies",
    ],
    jobRoles: [
      "Marketing Manager",
      "Brand Strategist",
      "Digital Marketing Analyst",
      "Sales Manager",
    ],
    brochureLink: "Download Brochure",
  },
  {
    id: "entrepreneurship",
    title: "4. Entrepreneurship",
    description:
      "Designed for aspiring entrepreneurs, this specialization provides a comprehensive understanding of business strategy, innovation, and operational management. Students learn to build and sustain successful business ventures in competitive markets.",
    highlights: [
      "Focus on entrepreneurship and business planning.",
      "Training in operational management and innovation strategies.",
      "Mentorship by industry leaders to support business ideas.",
    ],
    topics: [
      "Business Strategy and Innovation",
      "Financial Planning for Startups",
      "Leadership and Organizational Skills",
      "Scaling and Growth Strategies",
    ],
    jobRoles: [
      "Business Owner",
      "Startup Consultant",
      "Operations Manager",
      "Innovation Strategist",
    ],
    brochureLink: "Download Brochure",
  },
];

// Function to create specialization accordion items from JSON data
function createSpecializationAccordion() {
  const accordionContainer = document.getElementById(
    "specialization-accordion"
  );
  if (!accordionContainer) return;

  // Clear existing content to prevent duplication
  accordionContainer.innerHTML = "";

  specializationsData.forEach((specialization, index) => {
    const accordionItem = document.createElement("div");
    accordionItem.id = specialization.id;
    accordionItem.className =
      "specialization-accordion-item mb-3 scroll-mt-12 w-full";

    // Create the HTML structure for each accordion item
    accordionItem.innerHTML = `
                    <button class="specialization-accordion-button flex justify-between items-center w-full bg-white border border-gray-300 p-3 rounded-md">
                        <span class="font-inter text-base text-left font-medium">
                            ${specialization.title}
                        </span>
                        <span class="specialization-accordion-icon transition-transform duration-300">⌃</span>
                    </button>
                    <div class="specialization-accordion-content border border-t-0 border-gray-200 bg-white p-4 gap-4 flex-col ${
                      index === 0 ? "flex" : "hidden"
                    }">
                        <p class="text-sm mb-4">
                            ${specialization.description}
                        </p>

                     <div class="grid grid-cols-1 gap-4">
                            <div>
                                <h5 class="font-inter text-base text-[#a91d54] mb-2 font-semibold">
                                   Specialization Highlights
                                </h5>
                               <ul class="flex  flex-wrap w-full gap-2">
                      ${specialization?.highlights
                        ?.map(
                          (topic) => `
                         <li class="flex gap-2 w-fit px-4 py-2 bg-gray-100 rounded-md">
                          <span class="pt-1">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          fill="currentColor" class="size-3 text-[#a91d54]">
                          <path fill-rule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                      <span>${topic}</span>
                         </li>
                  `
                        )
                        .join("")}
                       </ul>
                            </div>
                        <div class="grid grid-cols-1 gap-4">
                            <div>
                                <h5 class="font-inter text-base text-[#a91d54] mb-2 font-semibold">
                                    Key Topics Covered
                                </h5>
                                <ul class="flex flex-wrap w-full gap-2">
                                    ${specialization.topics
                                      .map(
                                        (topic) => `
                                        <li class="flex gap-2 w-fit px-4 py-2 bg-gray-100 rounded-md">
                                            <span class="pt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    fill="currentColor" class="size-3 text-[#a91d54]">
                                                    <path fill-rule="evenodd"
                                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                            <span>
                                                ${topic}
                                            </span>
                                        </li>
                                    `
                                      )
                                      .join("")}
                                </ul>
                            </div>
                            <div>
                                <h5 class="font-inter text-base text-[#a91d54] mb-2 font-semibold">
                                    Indicative Job Roles on Program Completion
                                </h5>
                                <ul class="flex flex-wrap w-full gap-2">
                                    ${specialization.jobRoles
                                      .map(
                                        (role) => `
                                        <li class="flex gap-2 w-fit px-4 py-2 bg-gray-100 rounded-md">
                                            <span class="pt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    fill="currentColor" class="size-3 text-[#a91d54]">
                                                    <path fill-rule="evenodd"
                                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                            <span>
                                                ${role}
                                            </span>
                                        </li>
                                    `
                                      )
                                      .join("")}
                                </ul>
                            </div>
                        </div>

                        <div class="flex items-center justify-center py-2">
                            <button onclick="openModal()"
                                class="bg-[#DBA28F] rounded-full gap-2 inline-flex text-black px-5 py-2 w-full md:w-fit text-center items-center justify-center ">
                                Download Brochure
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-3">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3">
                                        </path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                `;

    accordionContainer.appendChild(accordionItem);
  });

  // Initialize accordion functionality
  setupSpecializationAccordion();
}

// Function to handle specialization accordion functionality
function setupSpecializationAccordion() {
  const accordionButtons = document.querySelectorAll(
    ".specialization-accordion-button"
  );

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector(".specialization-accordion-icon");

      // Toggle the current accordion item
      content.classList.toggle("hidden");
      content.classList.toggle("flex");
      icon.style.transform = content.classList.contains("hidden")
        ? "rotate(0deg)"
        : "rotate(180deg)";
    });
  });
}

// Load specialization accordion items when the page loads
document.addEventListener("DOMContentLoaded", createSpecializationAccordion);

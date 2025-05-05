// Sample JSON data for specializations
const specializationsData = [
  {
    id: "marketing-management",
    title: "1. Marketing Management",
    description:
      "This specialization equips students with essential skills in market research, branding, and digital marketing strategies. Students gain hands-on experience creating and implementing marketing campaigns through case studies and practical projects. Emphasis is placed on understanding consumer behavior, utilizing analytics, and fostering innovation to drive business success.",
    topics: [
      "Market Research",
      "Consumer Behavior Analysis",
      "Branding and Advertising",
      "Digital Marketing Strategies",
      "Marketing Analytics",
    ],
    jobRoles: [
      "Marketing Executive",
      "Marketing Manager",
      "Brand Manager",
      "Digital Marketing Specialist",
      "Market Research Analyst",
      "Advertising Manager",
      "Sales Manager",
      "Product Marketing Manager",
      "Public Relations Specialist",
    ],
    brochureLink: "Download Brochure",
  },
  {
    id: "finance",
    title: "2. Finance",
    description:
      "This specialization provides in-depth financial planning, investment analysis, and budgeting knowledge. Students learn to interpret financial statements, assess risks, and develop strategies to ensure organizational profitability. With a strong focus on taxation, auditing, and financial reporting, the program prepares students to excel in dynamic financial environments.",
    topics: [
      "Financial Accounting",
      "Managerial Accounting",
      "Corporate Finance",
      "Investment Analysis",
      "Taxation",
      "Budgeting and Financial Planning",
    ],
    jobRoles: [
      "Financial Analyst",
      "Accountant",
      "Investment Banker",
      "Tax Consultant",
      "Budget Analyst",
      "Financial Planner",
      "Internal Auditor",
      "Risk Manager",
    ],
    brochureLink: "Download Brochure",
  },
  {
    id: "human-resource-management",
    title: "3. Human Resource Management",
    description:
      "This specialization focuses on workforce management, recruitment, and organizational development. Students learn to foster collaboration, enhance employee engagement, and implement effective HR policies. The curriculum emphasizes the strategic role of HR in driving organizational success and adapting to changing workforce dynamics.",
    topics: [
      "Recruitment and Selection",
      "Employee Engagement",
      "Performance Management",
      "Organizational Development",
      "Labor Laws and Ethics",
      "Compensation and Benefits",
    ],
    jobRoles: [
      "HR Executive",
      "HR Manager",
      "Talent Acquisition Specialist",
      "Training and Development Manager",
      "Employee Relations Manager",
      "Compensation Analyst",
    ],
    brochureLink: "Download Brochure",
  },
  {
    id: "international-business",
    title: "4. International Business",
    description:
      "This specialization trains students in global business practices, cultural adaptability, and international market strategies. Students learn to analyze global market trends, manage cross-border operations, and navigate international trade regulations. The program prepares graduates to lead businesses in a globalized economy.",
    topics: [
      "International Trade Policies",
      "Market Entry Strategies",
      "Cross-Border Operations",
      "Cultural Adaptability in Business",
      "Global Market Analysis",
    ],
    jobRoles: [
      "International Business Manager",
      "Trade Analyst",
      "Global Marketing Specialist",
      "Export Manager",
      "Cross-Cultural Consultant",
    ],
    brochureLink: "Download Brochure",
  },
  {
    id: "entrepreneurship",
    title: "5. Entrepreneurship",
    description:
      "This specialization builds entrepreneurial skills in business planning, innovation management, and venture capital. Students are trained to identify market opportunities, develop business plans, and manage start-ups. The program fosters a creative and resilient mindset essential for navigating the challenges of entrepreneurship.",
    topics: [
      "Business Planning and Strategy",
      "Innovation Management",
      "Market Research for Start-Ups",
      "Venture Capital and Funding",
      "Start-Up Operations",
    ],
    jobRoles: [
      "Entrepreneur",
      "Business Consultant",
      "Product Manager",
      "Start-Up Founder",
      "Innovation Consultant",
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
    accordionItem.className = "specialization-accordion-item mb-3 scroll-mt-12";

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

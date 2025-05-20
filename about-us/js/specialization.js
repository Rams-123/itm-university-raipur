// Sample JSON data for specializations
const specializationsData = [
  {
    id: "marketing-management",
    title: "1. Marketing Management",
    description:
      "The Marketing specialization prepares students to develop and implement effective strategies that promote products and services. The program focuses on understanding consumer behavior, branding, digital marketing, and advertising. Students will gain expertise in creating innovative marketing campaigns, leveraging digital tools, and measuring campaign success through data analytics. This specialization equips students to work in fast-paced marketing roles, manage brands, and lead digital marketing strategies for businesses in any sector.",
    topics: [
      "Brand Management",
      "Digital Marketing Strategies",
      "Consumer Behavior",
      "Marketing Analytics",
      "Advertising and Promotions",
    ],
    jobRoles: [
      "Marketing Manager",
      "Brand Manager",
      "Digital Marketing Specialist",
      "Market Research Analyst",
      "Advertising Manager",
    ],
    brochureLink: "Download Brochure",
  },
  {
    id: "finance",
    title: "2. Finance",
    description:
      "The Finance specialization at ITM Vocational University equips students with the in-depth knowledge and skills required to manage financial operations and investments. The program covers key areas like corporate finance, investment banking, and risk management, preparing students to navigate complex financial landscapes. Through practical learning, case studies, and internships, students will gain a strong foundation in Financial Analysis, Budgeting, and Decision-Making. This track is ideal for students aiming for careers in Financial Institutions, Corporate Finance, or Investment Management.",
    topics: [
      "Corporate Finance",
      "Investment Banking",
      "Financial Analysis and Reporting",
      "Risk Management",
      "Portfolio Management",
    ],
    jobRoles: [
      "Financial Analyst",
      "Investment Banker",
      "Corporate Finance Manager",
      "Risk Manager",
      "Tax Consultant",
    ],
    brochureLink: "Download Brochure",
  },
  {
    id: "human-resource-management",
    title: "3. Human Resource Management",
    description:
      "The Human Resource Management (HRM) specialization focuses on developing students' abilities to manage people and foster a productive work environment. The curriculum includes talent acquisition, employee engagement, performance management, and HR strategies. Students will learn how to design training programs, handle organizational behavior, and ensure compliance with labor laws. This track prepares students to lead HR departments, create effective HR policies, and manage diverse teams to drive organizational success.",
    topics: [
      "Talent Acquisition and Retention",
      "Organizational Behavior",
      "Employee Engagement",
      "Performance Management",
      "HR Analytics",
    ],
    jobRoles: [
      "HR Manager",
      "Talent Acquisition Specialist",
      "Organizational Development Manager",
      "Compensation Analyst",
      "Training and Development Manager",
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

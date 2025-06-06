// Sample JSON data for specializations
const specializationsData = [
  {
    id: "marketing-management",
    title: "1. Marketing",
    description:
      "The Marketing specialization equips students with essential skills in market research, brand building, and digital marketing strategies. Through practical projects and case studies, students learn to create impactful campaigns, analyze market trends, and enhance consumer engagement. This specialization combines theoretical knowledge with real-world applications, preparing students to contribute effectively to business growth and innovation.",
    topics: [
      "Market Research",
      "Brand Management",
      "Consumer Behavior Analysis",
      "Digital Marketing Strategies",
      "Advertising and Public Relations",
      "Marketing Analytics",
    ],
    jobRoles: [
      "Marketing Executive",
      "Brand Manager",
      "Digital Marketing Specialist",
      "Market Research Analyst",
      "Advertising Manager",
      "Sales Manager",
      "Product Marketing Manager",
      "Public Relations Specialist",
    ],
    certifications: "(If Available - Data Pending)",
    brochureLink: "Download Brochure",
  },
  {
    id: "human-resource",
    title: "2. Human Resource",
    description:
      "The Human Resource specialization focuses on developing recruitment, employee engagement, and organizational development expertise. Students learn to create positive work environments, foster collaboration, and implement effective HR strategies to support organizational success. This specialization emphasizes interpersonal skills and workforce management and prepares students to lead high-performing teams.",
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
      "Talent Acquisition Specialist",
      "Training and Development Manager",
      "HR Analyst",
      "Employee Relations Manager",
      "Compensation and Benefits Specialist",
      "Organizational Development Consultant",
      "Payroll Manager",
    ],
    certifications: "(If Available - Data Pending)",
    brochureLink: "Download Brochure",
  },
  {
    id: "finance-management",
    title: "3. Finance",
    description:
      "This specialization provides in-depth financial planning, and investment analysis knowledge, helping students develop financial management skills. Students gain critical skills in interpreting economic data, managing budgets, and ensuring organizational profitability. The curriculum emphasizes theoretical understanding and practical applications, preparing students to excel in the dynamic financial sector.",
    topics: [
      "Financial Accounting",
      "Managerial Accounting",
      "Corporate Finance",
      "Investment Analysis",
      "Taxation",
      "Auditing and Financial Reporting",
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
    certifications: "(If Available - Data Pending)",
    brochureLink: "Download Brochure",
  },
  {
    id: "digital-marketing",
    title: "4. Digital Marketing",
    description:
      "The Digital Marketing specialization trains students to excel in the rapidly growing digital economy. Courses cover key topics such as search engine optimization (SEO), social media strategies, content marketing, and digital campaign management. Students learn to harness digital platforms for business growth and develop analytical skills to measure campaign success effectively.",
    topics: [
      "SEO and SEM",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Analytics and Data Insights",
      "Digital Advertising and PPC",
    ],
    jobRoles: [
      "Digital Marketing Strategist",
      "SEO Analyst",
      "Social Media Manager",
      "E-commerce Specialist",
      "Content Marketing Manager",
      "Performance Marketing Manager",
      "Email Marketing Specialist",
      "Analytics and Insights Manager",
    ],
    certifications: "(If Available - Data Pending)",
    brochureLink: "Download Brochure",
  },
  {
    id: "entrepreneurship-management",
    title: "5. Entrepreneurship",
    description:
      "The Entrepreneurship specialization is designed for students aspiring to become business leaders and innovators. It focuses on building skills in business planning, strategic management, and innovation. Students learn to identify market opportunities, develop new ventures, and sustain business growth. This specialization fosters a mindset of resilience and creativity, which is essential for entrepreneurial success.",
    topics: [
      "Business Planning and Strategy",
      "Innovation Management",
      "Market Research for Start-Ups",
      "Venture Capital and Funding",
      "Start-Up Operations",
      "Entrepreneurial Leadership",
    ],
    jobRoles: [
      "Start-Up Founder",
      "Business Development Manager",
      "Business Consultant",
      "Entrepreneur",
      "Venture Capital Analyst",
      "Innovation Consultant",
      "Franchise Owner",
      "Operations Manager",
    ],
    certifications: "(If Available - Data Pending)",
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

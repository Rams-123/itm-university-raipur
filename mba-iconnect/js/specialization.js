// Sample JSON data for specializations
const specializationsData = [
  {
    id: "marketing",
    title: "1. Marketing",
    description:
      "The Marketing specialization focuses on developing the skills required for successful marketing strategies, including market research, brand management, and consumer behavior analysis. Students learn to create campaigns that resonate with target audiences and drive business growth. Practical case studies and industry projects help reinforce these concepts, providing real-world applications to theoretical knowledge.\n\nThis specialization prepares students to lead marketing initiatives in various sectors. By mastering consumer engagement strategies and brand-building techniques, graduates are well-equipped to drive organizational innovation and growth.",
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
    brochureLink: "Download Brochure",
  },
  {
    id: "human-resource",
    title: "2. Human Resource",
    description:
      "The Human Resource specialization provides a deep dive into recruitment strategies, employee engagement, and organizational development. Students learn the intricacies of building high-performance teams, managing workplace dynamics, and ensuring that HR practices align with organizational goals. Through real-world case studies and fieldwork, students develop the skills to navigate complex HR challenges.\n\nGraduates of this specialization are prepared to take on leadership roles in HR departments across industries, fostering a productive and harmonious work environment. Focusing on interpersonal and organizational skills ensures students can effectively manage talent and contribute to an organization's success.",
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
    brochureLink: "Download Brochure",
  },
  {
    id: "finance",
    title: "3. Finance",
    description:
      "The Finance specialization provides students with a comprehensive understanding of financial management, investment analysis, and budgeting. Students learn to evaluate financial statements, manage risks, and create effective financial strategies for short-term and long-term goals. Real-world financial simulations and case studies ensure that students gain practical experience in applying their knowledge.\n\nBy the end of the program, graduates will possess the expertise needed to make informed financial decisions and drive organizational growth, excelling in both the corporate and investment sectors.",
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
    brochureLink: "Download Brochure",
  },
  {
    id: "business-analytics",
    title: "4. Business Analytics",
    description:
      "The Business Analytics specialization equips students with the tools and techniques to leverage data for better business decision-making. Students learn to analyze large datasets, create predictive models, and apply analytics to improve business processes. With hands-on training in various analytics tools, this specialization offers students practical experience in extracting meaningful insights from data.\n\nGraduates are prepared to work in diverse roles requiring data-driven decision-making, helping organizations improve performance, optimize processes, and stay ahead of market competitors.",
    topics: [
      "Data Analytics Techniques",
      "Predictive Modeling",
      "Statistical Analysis for Business Decisions",
      "Data Visualization",
      "Business Intelligence Tools",
      "Decision Support Systems",
    ],
    jobRoles: [
      "Data Analyst",
      "Business Intelligence Analyst",
      "Data Scientist",
      "Business Analyst",
      "Operations Analyst",
      "Financial Analyst",
      "Marketing Analyst",
      "Data-Driven Decision Maker",
    ],
    brochureLink: "Download Brochure",
  },
  {
    id: "entrepreneurship-family-business",
    title: "5. Entrepreneurship & Family Business",
    description:
      "The Entrepreneurship & Family Business specialization gives students the knowledge and skills to start and run businesses. Students learn about business planning, idea generation, funding strategies, and family business dynamics. This program is ideal for those who wish to launch new ventures or take over and innovate within family-owned businesses.\n\nGraduates are prepared to handle the complexities of starting a business, managing growth, and addressing challenges unique to family-run enterprises. This specialization fosters entrepreneurial thinking and prepares students to become leaders in the business world.",
    topics: [
      "Business Planning and Strategy",
      "Innovation and Product Development",
      "Family Business Dynamics",
      "Venture Capital and Funding",
      "Business Growth and Scaling",
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

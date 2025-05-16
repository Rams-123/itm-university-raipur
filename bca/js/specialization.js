// Sample JSON data for specializations
const specializationsData = [
  {
    id: "cloud-technology-information-security",
    elective: "",
    title: "1. Cloud Technology & Information Security (CTIS)",
    description:
      "The CTIS specialization equips students with expertise in cloud computing, cybersecurity, and data protection. Through hands-on projects and industry-driven coursework, students gain practical skills in securing cloud environments, managing data privacy, and mitigating cyber threats.\n\nThis specialization blends theoretical knowledge with real-world applications to prepare students for the evolving demands of the IT sector.",
    topics: [
      "Cloud Architecture & Deployment",
      "Network & Information Security",
      "Cyber Threats & Risk Management",
      "Data Encryption & Privacy",
      "Ethical Hacking & Penetration Testing",
      "Cloud Compliance & Governance",
    ],
    jobRoles: [
      "Cloud Security Analyst",
      "Cybersecurity Specialist",
      "Cloud Solutions Architect",
      "Information Security Consultant",
      "Ethical Hacker",
      "Data Protection Officer",
      "Security Operations Engineer",
    ],
    brochureLink: "Download Brochure",
  },
  {
    id: "artificial-intelligence-machine-learning",
    elective: "Elective",
    title: "1. Artificial Intelligence & Machine Learning (AIML)",
    description:
      "The AIML specialization empowers students with advanced skills in AI-driven innovation, machine learning algorithms, and intelligent automation. Through hands-on projects and industry collaborations, students gain expertise in building AI models, deep learning applications, and natural language processing.\n\nThis specialization prepares graduates to develop intelligent solutions for various industries, from healthcare to finance and beyond.",
    topics: [
      "Machine Learning Algorithms",
      "Deep Learning & Neural Networks",
      "Natural Language Processing (NLP)",
      "Computer Vision & Image Processing",
      "AI Ethics & Responsible AI",
      "Reinforcement Learning",
    ],
    jobRoles: [
      "AI Engineer",
      "Machine Learning Developer",
      "Data Scientist",
      "Computer Vision Engineer",
      "NLP Engineer",
      "AI Researcher",
      "Robotics Engineer",
    ],
    brochureLink: "Download Brochure",
  },
  {
    id: "data-science",
    elective: "Elective",
    title: "3. Data Science (DS)",
    description:
      "The Data Science specialization equips students with expertise in data analytics, statistical modeling, and predictive insights. Students learn to extract meaningful information from complex datasets, applying machine learning and AI techniques to solve real-world business challenges.\n\nThis specialization focuses on practical applications, ensuring students are industry-ready for data-driven roles.",
    topics: [
      "Big Data Analytics",
      "Data Visualization & Storytelling",
      "Predictive Analytics & Forecasting",
      "Statistical Modeling & Data Mining",
      "AI-Driven Data Processing",
      "Business Intelligence & Decision Making",
    ],
    jobRoles: [
      "Data Scientist",
      "Data Analyst",
      "Business Intelligence Analyst",
      "Machine Learning Engineer",
      "Data Engineer",
      "Statistician",
      "Data Consultant",
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
                    ${
                      specialization.elective
                        ? `<span class="text-[#a91d54] font-semibold">${specialization.elective}</span> `
                        : ""
                    }
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

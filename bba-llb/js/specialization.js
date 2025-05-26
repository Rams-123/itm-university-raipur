// Sample JSON data for specializations
const specializationsData = [
  {
    id: "business-laws",
    title: "1. Business Laws",
    description:
      "The specialization in Business Laws at ITM University, Raipur, is designed to provide students with a comprehensive understanding of the legal frameworks governing businesses. This program equips students with the skills to navigate and manage legal complexities in corporate environments. Emphasizing the intersection of law and business, the curriculum prepares students for roles requiring expertise in corporate governance, financial regulations, and legal compliance.",

    specializationTopic: {
      highlight: [
        "Comprehensive knowledge of corporate law, including mergers, acquisitions, and bankruptcy.",
        "Practical insights into competition law and its implications on businesses.",
        "Training in legal frameworks for banking and investment operations.",
        "Case studies and projects to enhance understanding of real-world corporate scenarios.",
      ],
    },

    topics: [
      "Banking and Investment Laws",
      "Competition Law and Market Regulations",
      "Corporate Mergers and Acquisitions",
      "Infrastructure and Transportation Laws",
      "Bankruptcy and Insolvency Procedures",
    ],

    jobRoles: [
      "Corporate Legal Advisor",
      "Compliance Manager",
      "Banking Law Specialist",
      "Legal Consultant for Mergers and Acquisitions",
      "Financial Market Analyst",
    ],

    brochureLink: "Download Brochure",
  },
  {
    id: "crime-and-criminology",
    title: "2. Crime and Criminology",
    description:
      "The Crime and Criminology specialization explores the complex world of criminal justice, focusing on the sociological and psychological aspects of crime. This program integrates legal studies with criminology, forensic science, and victimology, preparing students for roles in criminal law enforcement and the justice system. Students gain expertise in addressing modern challenges such as cybercrime, juvenile offenses, and white-collar crimes.",

    specializationTopic: {
      highlight: [
        "In-depth understanding of criminal psychology and its impact on legal outcomes.",
        "Training in forensic science techniques for evidence-based legal practice.",
        "Focus on cyber law and IT-related offenses.",
        "Exposure to penology and victimology to understand rehabilitation and justice mechanisms.",
      ],
    },

    topics: [
      "Criminal Psychology and Sociology",
      "Forensic Science and Legal Evidence",
      "IT Offenses and Cybersecurity Laws",
      "Juvenile Justice and Women’s Rights in Criminal Law",
      "White-Collar Crimes and Financial Systemic Fraud",
    ],

    jobRoles: [
      "Criminal Lawyer",
      "Forensic Legal Consultant",
      "Juvenile Justice Advocate",
      "Cybercrime Investigator",
      "White-Collar Crime Analyst",
    ],

    brochureLink: "Download Brochure",
  },
  {
    id: "intellectual-property-laws",
    title: "3. Intellectual Property Laws",
    description:
      "The Intellectual Property Laws specialization focuses on the protection and management of intellectual assets in a globalized economy. This program is ideal for students interested in pursuing careers in IP law, where they can address challenges related to patents, trademarks, copyrights, and industrial designs. With a growing need for IP protection across industries, this specialization prepares graduates to handle cross-border legal transactions and disputes.",

    specializationTopic: {
      highlight: [
        "Thorough understanding of intellectual property rights and their global implications.",
        "Focus on cross-border acquisitions and international legal standards.",
        "Training in legal frameworks for managing patents, trademarks, and copyrights.",
        "Case-based learning to develop practical problem-solving skills in IP disputes.",
      ],
    },

    topics: [
      "Patent Law and Industrial Designs",
      "Trademarks and Copyrights",
      "Global IP Frameworks and Trade Agreements",
      "Cross-Border IP Acquisitions and Licensing",
      "Legal Disputes in Intellectual Property",
    ],

    jobRoles: [
      "Intellectual Property Lawyer",
      "Patent Agent",
      "Trademark Specialist",
      "Legal Consultant for IP Acquisitions",
      "Cross-Border IP Legal Advisor",
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
    <ul class="flex flex-wrap w-full gap-2">
      ${specialization?.specializationTopic?.highlight
        .map(
          (topic) => `
          <li class="flex gap-2 w-fit px-4 py-2 bg-gray-100 rounded-md">
            <span class="pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                fill="currentColor" class="size-3 text-[#a91d54]">
                <path fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd">
                </path>
              </svg>
            </span>
            <span class="text-sm text-gray-800">
              ${topic}
            </span>
          </li>
        `
        )
        .join("")}
    </ul>
  </div>
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

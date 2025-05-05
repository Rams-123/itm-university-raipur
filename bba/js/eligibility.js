// JSON data for eligibility accordion content
const eligibilityAccordionData = [
  {
    title: "Eligibility",
    content: `
      <p class="text-sm md:text-base mb-4">
        To apply for the BBA program at ITM Vocational University, candidates must have passed the Higher Secondary School Certificate Examination (10+2) from a recognized board.
        Students who are in their final year of school can also apply.
      </p>
    `,
  },
  {
    title: "Scholarships",
    content: `
      <p class="text-sm md:text-base mb-4">
        At ITM Vocational University, we offer a range of scholarships to support students financially and make quality education accessible. Here’s an overview:
      </p>
      <div class="flex flex-col gap-2">
        <span class="font-bold">1. Early Decision Benefit</span>
        <ul class="list-decimal pl-5 list-inside">
          <li>Encourages early admissions and fee payments.</li>
          <li><span>Slabs:</span>
            <ul class="list-disc pl-5 list-inside">
              <li>₹15,000/- till 10th April</li>
              <li>₹10,000/- till CBSE 12th results (tentative 15th May)</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-2">
        <span class="font-bold">2. Special Scholarship</span>
        <ul class="list-disc pl-5 list-inside">
          <li>Event-based Scholarships</li>
          <li>Single Parents, Orphans, and Physically Disabled Parents</li>
          <li>Sports Achievers (SAI-approved, International/National/State level)</li>
        </ul>
      </div>
      <div class="flex flex-col gap-2">
        <span class="font-bold">3. Merit Scholarship</span>
        <p>Awarded based on academic excellence (10th, 12th and Graduation aggregate):</p>
        <ul class="list-decimal pl-5 list-inside">
          <li><strong>65%-74.99%:</strong> 10% of 1st-year tuition fee</li>
          <li><strong>75%-84.99%:</strong> 25% of 1st-year tuition fee</li>
          <li><strong>85% & above:</strong> 50% of 1st-year tuition fee</li>
        </ul>
      </div>
      <div class="flex flex-col gap-2">
        <span class="font-bold">4. Sibling Scholarship</span>
        <ul class="list-decimal pl-5 list-inside">
          <li>20% of 1st-year tuition fee</li>
        </ul>
      </div>
      <div class="flex flex-col gap-2">
        <span class="font-bold">5. Campus Workshop Scholarship</span>
        <ul class="list-decimal pl-5 list-inside">
          <li>₹10,000/- discount</li>
        </ul>
      </div>
      <div class="flex flex-col gap-2">
        <span class="font-bold">6. Event Scholarship</span>
        <ul class="list-decimal pl-5 list-inside">
          <li>₹20,000/- discount</li>
        </ul>
      </div>
      <div class="flex flex-col gap-2">
        <span class="font-bold">7. Defence Category Scholarship</span>
        <ul class="list-decimal pl-5 list-inside">
          <li>Applicable to 1st-year tuition fees</li>
          <li>Defence and CAPF personnel (serving, ex-servicemen, and retired) and their dependents are eligible for a 20% fee concession</li>
        </ul>
      </div>
      <div class="flex flex-col gap-2">
        <span class="font-bold">8. Eligible Services</span>
        <ul class="list-decimal pl-5 list-inside">
          <li><strong>Indian Defence Forces:</strong> Army, Navy, Air Force, Coast Guard</li>
          <li><strong>CAPF:</strong> CRPF, BSF, ITBP, SSB, CISF, RPF, NSG, SFF, Assam Rifles</li>
          <li><strong>Other Defence Services:</strong> BRO, GREF, DRDO, MES, DSC, Ordnance Factory Board</li>
        </ul>
      </div>
      <p class="text-sm md:text-base mb-4">
        <strong>Note:</strong> Students are eligible to avail only one scholarship.
        In case of multiple eligibility, the scholarship with the highest value will be awarded.
      </p>
    `,
  },
  {
    title: "How to Apply",
    content: `
      <div class="flex flex-col gap-2">
        <span class="font-bold">Step 1:</span>
        <p>Register on the ITM Vocational University website.</p>
      </div>
      <div class="flex flex-col gap-2">
        <span class="font-bold">Step 2:</span>
        <p>Verify your email ID.</p>
      </div>
      <div class="flex flex-col gap-2">
        <span class="font-bold">Step 3:</span>
        <p>Fill out the online application form.</p>
      </div>
      <div class="flex flex-col gap-2">
        <span class="font-bold">Step 4:</span>
        <p>Upload the required documents.</p>
      </div>
      <div class="flex flex-col gap-2">
        <span class="font-bold">Step 5:</span>
        <p>Pay the application fee.</p>
      </div>
      <div class="flex flex-col gap-2">
        <span class="font-bold">Step 6:</span>
        <p>Pay ₹15,000 to reserve your seat.</p>
      </div>
    `,
  },
];

// Function to generate eligibility accordion items from JSON data
function renderEligibilityAccordion() {
  const accordionContainer = document.getElementById("eligibility-accordion");
  if (!accordionContainer) return;

  // Clear existing content to prevent duplication
  accordionContainer.innerHTML = "";

  eligibilityAccordionData.forEach((item, index) => {
    const accordionItem = document.createElement("div");
    accordionItem.className = "eligibility-accordion-item mb-3";

    // Create accordion button
    const button = document.createElement("button");
    button.className =
      "eligibility-accordion-button flex justify-between items-center w-full bg-white border border-gray-300 p-3 rounded-md transition-all duration-300";

    // Create a more accessible and visually consistent arrow icon
    const arrowSVG = `
      <svg class="eligibility-accordion-icon transition-transform duration-300 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    `;

    button.innerHTML = `
      <span class="font-Bebas-Neue text-sm md:text-lg">${item.title}</span>
      ${arrowSVG}
    `;

    // Create accordion content
    const content = document.createElement("div");
    content.className = `eligibility-accordion-content ${
      index === 0 ? "" : "hidden"
    } border border-t-0 border-gray-200 bg-white p-4 flex flex-col space-y-4 rounded-b-md transition-all duration-300`;
    content.innerHTML = item.content;

    // Append elements to accordion item
    accordionItem.appendChild(button);
    accordionItem.appendChild(content);

    // Append accordion item to container
    accordionContainer.appendChild(accordionItem);

    // Set initial arrow rotation for open accordion
    if (index === 0) {
      const arrowIcon = button.querySelector(".eligibility-accordion-icon");
      arrowIcon.style.transform = "rotate(180deg)";
    }
  });

  // Add event listeners to accordion buttons
  addEligibilityAccordionListeners();
}

// Function to add event listeners to eligibility accordion buttons
function addEligibilityAccordionListeners() {
  const accordionButtons = document.querySelectorAll(
    ".eligibility-accordion-button"
  );

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const arrowIcon = this.querySelector(".eligibility-accordion-icon");

      // Toggle content visibility
      content.classList.toggle("hidden");

      // Animate the arrow rotation
      if (content.classList.contains("hidden")) {
        arrowIcon.style.transform = "rotate(0deg)";
      } else {
        arrowIcon.style.transform = "rotate(180deg)";
      }

      // Optional: close other open accordions (uncomment if you want this behavior)
      /*
      const allContents = document.querySelectorAll(".eligibility-accordion-content");
      const allArrows = document.querySelectorAll(".eligibility-accordion-icon");
      
      allContents.forEach((item, i) => {
        if (item !== content) {
          item.classList.add("hidden");
          allArrows[i].style.transform = "rotate(0deg)";
        }
      });
      */
    });
  });
}

// Initialize the eligibility accordion when the page loads
document.addEventListener("DOMContentLoaded", renderEligibilityAccordion);

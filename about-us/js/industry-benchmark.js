// JSON data for specializations
const specializations = [
  {
    title: "Marketing",
    description:
      "This specialization focuses on developing advanced skills in branding, consumer behavior analysis, and strategic marketing. Students learn to create impactful marketing campaigns, manage brand strategies, and leverage digital tools to engage consumers and drive business growth in a competitive market.",
    linkText: "Know More",
    linkHref: "#Marketing",
  },
  {
    title: "Finance",
    description:
      "Students specializing in Finance gain a deep understanding of financial management, investment strategies, and risk analysis. This track equips graduates to handle financial operations, corporate finance, and investment decision-making, preparing them to excel in banking, investment firms, and financial advisory roles.",
    linkText: "Know More",
    linkHref: "#Finance",
  },
  {
    title: "Human Resource",
    description:
      "This specialization focuses on the strategic management of human capital. Students develop talent acquisition, employee development, performance management, and organizational behavior skills. The track prepares students to build high-performing teams and create a positive work culture that drives organizational success.",
    linkText: "Know More",
    linkHref: "#HumanResource",
  },
];

// Function to create specialization cards
function createSpecializationCards() {
  const container = document.getElementById("benchmark-container");
  container.innerHTML = ""; // Clear previous cards if needed

  specializations.forEach((spec) => {
    const card = document.createElement("div");
    card.className =
      "flex-shrink-0 flex flex-col gap-3 p-4 justify-between h-full w-80 bg-white rounded-lg shadow-md";

    card.innerHTML = `
      <div class="flex w-full flex-col gap-3">
        <strong class="text-lg">${spec.title}</strong>
        <p class="text-sm md:text-base">${spec.description}</p>
      </div>
      <a href="${spec.linkHref}" class="text-[#a91d54] text-sm md:text-base hover:underline">${spec.linkText}</a>
    `;

    container.appendChild(card);
  });
}

// Function to add new specialization dynamically
function addSpecialization(title, description, linkText, linkHref) {
  specializations.push({
    title: title,
    description: description,
    linkText: linkText || "Know More",
    linkHref: linkHref || "#",
  });

  // Clear container and regenerate all cards
  const container = document.getElementById("specializations-container");
  container.innerHTML = "";
  createSpecializationCards();
}

// Initialize the cards when the page loads
window.addEventListener("DOMContentLoaded", createSpecializationCards);

// JSON data for specializations
const specializations = [
  {
    title: "Marketing Management",
    description:
      "Master the art of market research, branding, and consumer engagement. This specialization equips students to create innovative strategies that drive business growth.",
    linkText: "Know More",
    linkHref: "#Marketing",
  },
  {
    title: "Finance",
    description:
      "Gain expertise in financial management, investment strategies, and analysis to excel in the financial sector.",
    linkText: "Know More",
    linkHref: "#Finance",
  },
  {
    title: "Human Resource Management",
    description:
      "Develop expertise in people management and build high-performing teams. This specialization focuses on fostering collaboration and driving organizational success.",
    linkText: "Know More",
    linkHref: "#Human Resource",
  },
  {
    title: "International Business",
    description:
      "Explore global trade strategies and develop skills to navigate international markets. This specialization prepares students for leadership roles in a globalized economy.",
    linkText: "Know More",
    linkHref: "#Operations",
  },
  {
    title: "Entrepreneurship",
    description:
      "Cultivate an entrepreneurial mindset to turn innovative ideas into successful ventures. This specialization focuses on business planning, innovation, and venture management.",
    linkText: "Know More",
    linkHref: "#Operations",
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

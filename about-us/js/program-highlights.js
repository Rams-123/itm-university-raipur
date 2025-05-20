// JSON data for program highlights
const programHighlights = [
  {
    title: "Industry-Relevant Curriculum",
    description:
      "The program emphasizes practical skills and hands-on knowledge directly applicable to the current job market. Designed in collaboration with industry experts, the curriculum integrates case studies, real-world projects, and emerging business trends to prepare students for dynamic professional roles.",
  },
  {
    title: "Flexible Learning Options",
    description:
      "The program accommodates the needs of working professionals and individuals with diverse schedules. Students can balance their education with other commitments through interactive sessions, blended learning methods, and flexible approaches while gaining a high-quality learning experience.",
  },
  {
    title: "Career Development Support",
    description:
      "The program focuses on career readiness and offers dedicated career counseling, resume-building workshops, and mock interview sessions. These initiatives ensure students are well-prepared to navigate the job market successfully and secure roles in reputed organizations.",
  },
  {
    title: "Strong Industry Partnerships",
    description:
      "Collaborations with leading companies provide students with opportunities for internships, mentorship, and live industry projects. These partnerships bridge the gap between academic knowledge and practical application, enabling students to gain real-world business exposure and build professional networks.",
  },
  {
    title: "5-Month Industry Internship",
    description:
      "The program integrates a 5-month internship as an essential component, providing students with hands-on exposure to current industry trends and cutting-edge technologies. This practical learning approach ensures graduates are well-equipped to meet the demands of the competitive job market.",
  },
  {
    title: "Focus on Entrepreneurship and Sustainability",
    description:
      "The program fosters an entrepreneurial mindset and emphasizes sustainable business practices. Students are encouraged to develop innovative ideas, build business plans, and explore opportunities for start-ups while learning to integrate socially responsible practices into their ventures.",
  },
  {
    title: "Specializations Tailored to Industry Needs",
    description:
      "With specialized tracks in Marketing, Finance, and Human Resource, students gain targeted expertise in their chosen career paths. Each specialization includes industry-recognized certifications and hands-on learning, ensuring graduates are future-ready for leadership roles in their domains.",
  },
];

// Function to create highlight cards
function createHighlightCards() {
  const container = document.getElementById("highlights-container");

  programHighlights.forEach((highlight) => {
    const card = document.createElement("div");
    card.className =
      "flex flex-col gap-4 w-80 md:w-96 rounded-3xl transition-all bg-white border border-[#a91d54] shadow-md justify-between p-6";

    card.innerHTML = `
                    <div class="flex flex-col gap-4 w-full">
                        <span class="text-lg md:text-xl font-semibold text-[#a91d54]">
                            ${highlight.title}
                        </span>
                        <p class="text-sm">
                            ${highlight.description}
                        </p>
                    </div>
                `;

    container.appendChild(card);
  });
}

// Initialize the cards when the page loads
window.addEventListener("DOMContentLoaded", createHighlightCards);

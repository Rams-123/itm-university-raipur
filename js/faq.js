document.addEventListener("DOMContentLoaded", function () {
  const faqData = [
    {
      question: "Is the ITM MBA degree accredited?",
      answer: {
        title: "Accreditation",
        content:
          "The ITM MBA builds on the legacy of the ITM PGDM program, which has been AICTE approved, NBA Accredited, and AIU accredited for over 25 years. In 2023, ITM established ITM Skills University, a UGC Recognized skill university established under the Govt. of Maharashtra.",
      },
    },
    {
      question: "What degree will I receive at the end of the MBA program?",
      answer: {
        title: "Degree",
        content:
          'On successful completion of the program, you will be awarded the degree of "Master of Business Administration", by ITM SKILLS University, a UGC Approved, private skills University incorporated under the government of Maharashtra.',
      },
    },
    {
      question: "Is ITM Navi Mumbai a good option for an MBA?",
      answer: {
        title: "ITM Navi Mumbai MBA",
        content:
          "ITM Navi Mumbai is an excellent choice for an MBA, especially given its reputation for strong placements and industry connections. The program offers a quality management education in a conducive learning environment, with a focus on hands-on learning through experience.",
      },
    },
    {
      question:
        "What is the placement record of ITM Business School, Navi Mumbai?",
      answer: {
        title: "Placement Record",
        content:
          "ITM Navi Mumbai's placement record is outstanding, with 99 percent of students securing placements. In 2023, the highest package offered was ₹15 lacs, and the average package was ₹8.4 lacs. Top recruiting companies include Deloitte, PWC, and ICICI, a testament to the institute's strong industry connections.",
      },
    },
    {
      question: "What is the MBA admission process for ITM Navi Mumbai?",
      answer: {
        title: "Admission Process",
        content:
          "To apply for the MBA program at ITM Navi Mumbai, candidates need a UGC-recognized bachelor's degree with at least 50% marks or be in their final year. The admission process involves a written case study evaluation and a personal interview conducted online. ITM accepts scores from several entrance tests like CAT, XAT, CMAT, etc.",
      },
    },
    {
      question: "How good is ITM Navi Mumbai for Finance?",
      answer: {
        title: "Finance Specialization",
        content:
          "ITM Navi Mumbai is highly regarded for Finance and offers strong opportunities for students through its specialized programs. The Global Immersion Program (GIP) offers experiences in Dubai, Singapore, and Malaysia, providing exposure to international financial markets.",
      },
    },
    {
      question: "What specializations are available at ITM, Navi Mumbai?",
      answer: {
        title: "Specializations",
        content:
          "ITM Navi Mumbai offers a wide range of specializations including Marketing Management, International Business, Human Resources Management, Operations, Finance, Fintech, Digital Marketing, Business Analytics, and more.",
      },
    },
    {
      question: "What's the difference between an MBA and a PGDM?",
      answer: {
        title: "MBA vs. PGDM",
        content:
          "An MBA is a degree program typically offered by universities and is UGC-approved. A PGDM is a diploma offered by autonomous institutions. Both are widely recognized, but an MBA carries the benefit of being a formal degree.",
      },
    },
    {
      question: "Is the Global Immersion Program mandatory?",
      answer: {
        title: "Global Immersion Program",
        content:
          "The Global Immersion Program (GIP) is mandatory for students specializing in International Business. For others, it is optional but highly encouraged, offering exposure to international markets and business practices.",
      },
    },
    {
      question: "Do students get paid a stipend for internships?",
      answer: {
        title: "Internship Stipend",
        content:
          "Yes, most companies offer a stipend to students during internships. ITM Navi Mumbai has strong corporate tie-ups that provide students with valuable industry exposure and hands-on experience through these internships.",
      },
    },
    {
      question: "What is the class size of the MBA program?",
      answer: {
        title: "Class Size",
        content:
          "Each specialization at ITM Navi Mumbai admits around 60 students per batch, allowing for personalized attention and ensuring an optimal learning experience with sufficient peer-to-peer interaction.",
      },
    },
    {
      question: "What extracurricular opportunities are there?",
      answer: {
        title: "Extracurriculars",
        content:
          "ITM Navi Mumbai offers a variety of extracurricular activities including clubs, sports, cultural events, guest lectures, and more. These provide opportunities for students to develop leadership and teamwork skills, engage with peers, and network with industry professionals.",
      },
    },
    {
      question: "What is the teaching methodology at ITM Navi Mumbai?",
      answer: {
        title: "Teaching Methodology",
        content:
          "The teaching methodology at ITM Navi Mumbai focuses on experiential learning, including case studies, live projects, internships, and simulations. This ensures that students are equipped with practical knowledge to solve real-world business problems.",
      },
    },
    {
      question: "How is the campus life at ITM Navi Mumbai?",
      answer: {
        title: "Campus Life",
        content:
          "ITM Navi Mumbai offers a vibrant campus life with state-of-the-art facilities. Students engage in a wide range of academic, cultural, and social activities. The campus includes a library, sports facilities, cafeterias, and modern classrooms to foster a conducive learning environment.",
      },
    },
    {
      question: "What are the fees for the MBA program?",
      answer: {
        title: "Fees",
        content:
          "The fees for the MBA program at ITM Navi Mumbai are approximately ₹12 lacs for the two-year duration. This fee includes tuition, course materials, and access to campus facilities.",
      },
    },
    {
      question: "What is the hostel facility like at ITM Navi Mumbai?",
      answer: {
        title: "Hostel Facility",
        content:
          "ITM Navi Mumbai offers on-campus hostel facilities for both boys and girls. The hostels are well-maintained and provide amenities such as Wi-Fi, laundry, and common rooms for recreational activities. The hostel fees range between ₹1 lac to ₹1.5 lacs annually.",
      },
    },
    {
      question: "How are the faculty members at ITM Navi Mumbai?",
      answer: {
        title: "Faculty",
        content:
          "ITM Navi Mumbai boasts experienced faculty members with both academic and industry experience. They are committed to providing students with a high-quality education and practical insights into the business world through a mix of lectures, case studies, and projects.",
      },
    },
    {
      question: "What is the admission cut-off for the MBA program?",
      answer: {
        title: "Admission Cut-Off",
        content:
          "The cut-off for the ITM Navi Mumbai MBA program varies each year based on the entrance exams. Generally, a percentile above 70 in entrance exams like CAT, XAT, CMAT, and MAT increases your chances of admission.",
      },
    },
    {
      question: "Are there any scholarships available?",
      answer: {
        title: "Scholarships",
        content:
          "Yes, ITM Navi Mumbai offers merit-based scholarships to deserving students. Scholarships are awarded based on the student's performance in the entrance exams, academic record, and overall profile.",
      },
    },
    {
      question: "Does ITM offer international placements?",
      answer: {
        title: "International Placements",
        content:
          "Yes, ITM Navi Mumbai has tie-ups with various international companies, especially in Dubai and Singapore, offering students opportunities to secure placements overseas. The Global Immersion Program also helps students connect with international job markets.",
      },
    },
  ];

  let faqHTML = "";

  faqData.forEach((faq, index) => {
    faqHTML += `
      <div class="accordion-item mb-3">
        <button
          class="accordion-button flex justify-between items-center w-full bg-white border border-gray-300 text-black p-3 rounded-md"
          data-index="${index}">
          <span class="font-Bebas-Neue text-left text-lg md:text-xl">${faq.question}</span>
          <span class="accordion-icon">+</span>
        </button>
        <div class="accordion-content hidden border border-t-0 border-gray-200 bg-white p-4">
          <h4 class="font-Bebas-Neue text-2xl text-[#a91d54] mb-2">${faq.answer.title}</h4>
          <p class="text-sm md:text-base mb-4">${faq.answer.content}</p>
        </div>
      </div>
    `;
  });

  // Append the generated HTML to the FAQ container
  const faqList = document.getElementById("faqList");
  if (faqList) {
    faqList.innerHTML = faqHTML;
  }

  // Add click functionality to toggle the FAQ accordion
  const accordionButtons = document.querySelectorAll(".accordion-button");
  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector(".accordion-icon");

      // Toggle the visibility of the accordion content
      content.classList.toggle("hidden");

      // Change the icon depending on the visibility
      icon.textContent = content.classList.contains("hidden") ? "+" : "-";

      // Change button color based on the visibility of the content
      button.classList.toggle(
        "bg-[#a91d54]",
        !content.classList.contains("hidden")
      );
      button.classList.toggle(
        "text-black",
        !content.classList.contains("hidden")
      );
    });
  });
});

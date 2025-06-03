// JSON data for MBA programs
const programsData = {
  programs: [
    {
      name: "B.Sc. (Hons.) in Biotechnology Program",
      semesters: [
        {
          name: "Year 1 - Semester 1",
          courses: [
            "Basic Microbiology",
            "Concepts of Biotechnology",
            "Food Biotechnology",
            "Basic Instrumentation Techniques",
            "Financial Literacy/Academic Writing/Professional Image Build/Yoga & Mental Wellness/Creative Arts",
            "Selling Skills/Digital Marketing/Introduction to Python/Web Designing/Event Planning & Management/Techniques of Food Preservation",
            "English Communication – I",
          ],
        },
        {
          name: "Year 1 - Semester 2",
          courses: [
            "Basic Biochemistry",
            "Cell Biology",
            "Organic Chemistry",
            "Agricultural Biotechnology",
            "English Communication – II",
            "Financial Literacy/Academic Writing/Professional Image Build/Yoga & Mental Wellness/Creative Arts",
            "Selling Skills/Digital Marketing/Introduction to Python/Web Designing/Event Planning & Management/Techniques of Food Preservation",
          ],
        },
        {
          name: "Year 2 - Semester 1",
          courses: [
            "Environmental Biotechnology",
            "Microbial Physiology & Metabolism",
            "Molecular Biology",
            "Biomechanics & Biophysics",
            "Enzymology",
            "Environmental Studies – I",
            "Selling Skills/Digital Marketing/Introduction to Python/Web Designing/Event Planning & Management/Techniques of Food Preservation",
          ],
        },
        {
          name: "Year 2 - Semester 2",
          courses: [
            "Advanced Instrumentation Techniques",
            "Immunology",
            "Recombinant DNA Technology",
            "Bioenergetics & Metabolism",
            "Microbial Genetics",
            "Environmental Studies – II",
            "Financial Literacy/Academic Writing/Professional Image Build/Yoga & Mental Wellness/Creative Arts",
          ],
        },
        {
          name: "Year 3 - Semester 1",
          courses: [
            "Basic Concepts of Genetics & Genomics",
            "Microbial Biotechnology",
            "Basics of Forensic Science",
            "Pharmaceutical Biotechnology",
            "Animal Biotechnology",
            "Molecular Diagnostics",
            "Mushroom Cultivation",
            "Financial Literacy/Academic Writing/Professional Image Build/Yoga & Mental Wellness/Creative Arts",
          ],
        },
        {
          name: "Year 3 - Semester 2",
          courses: [
            "Medical Biotechnology",
            "Biofertilizers & Biopesticides",
            "Genomics & Proteomics",
            "Project Work",
          ],
        },
        {
          name: "Year 4 - Semester 1",
          courses: [
            "Bioinformatics",
            "Bioprocess Technology",
            "Biostatistics",
            "Nanobiotechnology",
            "Plant Biotechnology",
            "Selling Skills/Digital Marketing/Introduction to Python/Web Designing/Event Planning & Management/Techniques of Food Preservation",
          ],
        },
        {
          name: "Year 4 - Semester 2",
          courses: [
            "Bioentrepreneurship",
            "Research Methodology",
            "Biodiversity & Conservation",
            "Biosafety and IPR",
            "Selling Skills/Digital Marketing/Introduction to Python/Web Designing/Event Planning & Management/Techniques of Food Preservation",
            "Research Project",
          ],
        },
      ],
    },
  ],
};

// Add some CSS styles
const styleElement = document.createElement("style");
styleElement.textContent = `
  .program-container {
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
    transition: all 0.3s ease;
  }
  
  .program-container:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
    transform: translateY(-3px);
  }
  
  .program-header {
    background: linear-gradient(135deg, #a91d54, #770d3a);
    color: white;
    padding: 1.5rem 2rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  
  .tabs-container {
    display: flex;
    overflow-x: auto;
    background-color: #f8f8f8;
    padding: 0.5rem;
    gap: 0.25rem;
  }
  
  .tab-button {
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    border: none;
    font-weight: 500;
    transition: all 0.2s ease;
    white-space: nowrap;
    background-color: #f0f0f0;
    border: 1px solid transparent;
  }
  
  .tab-button:hover {
    background-color: #e6e6e6;
  }
  
  .tab-button.active {
    background-color: #a91d54;
    color: white;
    border: 1px solid #8c1646;
  }
  
  .tab-content {
    padding: 2rem;
    animation: fadeIn 0.3s ease;
  }
  
  .course-list {
    list-style-type: none;
    padding: 0;
  }
  
  .course-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 0.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #f8f8f8;
    transition: all 0.2s ease;
  }
  
  .course-item:hover {
    background-color: #f0f0f0;
    transform: translateX(5px);
  }
  
  .course-icon {
    color: #a91d54;
    margin-right: 0.75rem;
    flex-shrink: 0;
  }
  
  .semester-title {
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
    color: #a91d54;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 0.5rem;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
document.head.appendChild(styleElement);

// Function to render all programs
function renderPrograms() {
  const programsContainer = document.getElementById("programsContainer");
  programsContainer.innerHTML = "";

  //   // Add page header
  //   const pageHeader = document.createElement("div");
  //   pageHeader.className = "text-center my-8";
  //   pageHeader.innerHTML = `
  //     <h1 class="text-4xl font-bold mb-2" style="color: #a91d54;">PROGRAM STRUCTURE</h1>
  //     <!--<p class="text-gray-600 max-w-2xl mx-auto">Explore our comprehensive MBA programs designed to prepare you for leadership in various business domains.</p>-->
  //   `;
  //   programsContainer.appendChild(pageHeader);

  programsData.programs.forEach((program, programIndex) => {
    // Create program container
    const programDiv = document.createElement("div");
    programDiv.className = "program-container my-8";

    // Create program header
    const programHeader = document.createElement("div");
    programHeader.className = "program-header";
    programHeader.innerHTML = `
      <h2 class="text-2xl font-bold">${program.name}</h2>
      <p class="text-sm opacity-80 mt-1">${program.semesters.length} semesters • Comprehensive curriculum</p>
    `;
    programDiv.appendChild(programHeader);

    // Create tabs container
    const tabsContainer = document.createElement("div");
    tabsContainer.className = "tabs-container";
    programDiv.appendChild(tabsContainer);

    // Create tab contents container
    const tabContentsContainer = document.createElement("div");
    tabContentsContainer.className = "tab-contents";
    programDiv.appendChild(tabContentsContainer);

    // Add program to container
    programsContainer.appendChild(programDiv);

    // Create tabs and content for each semester
    program.semesters.forEach((semester, semIndex) => {
      const tabId = `program-${programIndex}-sem-${semIndex}`;

      // Create tab button
      const tabButton = document.createElement("button");
      tabButton.className = "tab-button";
      tabButton.textContent = semester.name;
      tabButton.setAttribute("data-target", tabId);
      tabButton.setAttribute("data-program", programIndex);

      // Set first tab as active by default
      if (semIndex === 0) {
        tabButton.classList.add("active");
      }

      tabsContainer.appendChild(tabButton);

      // Create tab content
      const tabContent = document.createElement("div");
      tabContent.id = tabId;
      tabContent.className = "tab-content";
      if (semIndex !== 0) tabContent.style.display = "none";

      const contentInner = `
        <h3 class="semester-title">${semester.name} Courses</h3>
        <ul class="course-list">
          ${semester.courses
            .map(
              (course) => `
            <li class="course-item">
              <span class="course-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                </svg>
              </span>
              <div>
                <strong>${course}</strong>
                <!--<p class="text-sm text-gray-600 mt-1">Core course for ${program.name}</p>-->
              </div>
            </li>
          `
            )
            .join("")}
        </ul>
      `;

      tabContent.innerHTML = contentInner;
      tabContentsContainer.appendChild(tabContent);
    });
  });

  //   // Add a nice footer
  //   const footer = document.createElement("div");
  //   footer.className = "text-center py-8 text-gray-600 mt-12";
  //   footer.innerHTML = `
  //     <p>Ready to start your MBA journey? Contact our admissions team for more information.</p>
  //     <button class="mt-4 px-6 py-3 bg-[#a91d54] text-white rounded-lg hover:bg-[#8c1646] transition-all">
  //       Apply Now
  //     </button>
  //   `;
  //   programsContainer.appendChild(footer);

  // Add event listeners to all tabs
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", function () {
      const programIndex = this.getAttribute("data-program");
      const targetId = this.getAttribute("data-target");

      // Get all tabs in this program
      const programDiv = this.closest(".program-container");

      // Deactivate all tabs in this program
      programDiv.querySelectorAll(".tab-button").forEach((btn) => {
        btn.classList.remove("active");
      });

      // Hide all tab contents for this program
      programDiv.querySelectorAll(".tab-content").forEach((content) => {
        content.style.display = "none";
      });

      // Activate clicked tab
      this.classList.add("active");

      // Show corresponding content with animation
      const targetContent = document.getElementById(targetId);
      targetContent.style.display = "block";
      targetContent.style.animation = "none";
      setTimeout(() => {
        targetContent.style.animation = "fadeIn 0.3s ease";
      }, 10);
    });
  });
}

// Initialize the page
window.onload = renderPrograms;

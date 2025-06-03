const programsData = {
  programs: [
    {
      name: "LLM",
      semesters: [
        {
          name: "Year 1 - Sem 1",
          courses: [
            "Comparative Public Law Andsystem Of Governance",
            "Corporate Crime",
            "Corporate Governance",
            "Criminal Justice System",
            "Criminology",
            "Intellectual Property Law",
            "Laws On Securities And Financial Markets",
            "Research Methodology"
          ],
        },
        {
          name: "Year 1 - Sem 2",
          courses: [
            "Banking & Insurance Law",
            "Competition Law",
            "International Criminal Law",
            "International Trade Law",
            "Penology And Victimology",
            "Cyber Crimes",
            "Dissertation",
            "Law And Justice In A Globalizing World"
          ],
        },
      ],
    },
  ],
};

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
    margin-bottom: 1rem;
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

function renderPrograms() {
  const programsContainer = document.getElementById("programsContainer");
  programsContainer.innerHTML = "";

  programsData.programs.forEach((program, programIndex) => {
    const programDiv = document.createElement("div");
    programDiv.className = "program-container";

    const programHeader = document.createElement("div");
    programHeader.className = "program-header";
    programHeader.innerHTML = `
      <h2 class="text-2xl font-bold">${program.name}</h2>
      <p class="text-sm opacity-80 mt-1">${program.semesters.length} semesters • Comprehensive curriculum</p>
    `;
    programDiv.appendChild(programHeader);

    const tabsContainer = document.createElement("div");
    tabsContainer.className = "tabs-container";
    programDiv.appendChild(tabsContainer);

    const tabContentsContainer = document.createElement("div");
    tabContentsContainer.className = "tab-contents";
    programDiv.appendChild(tabContentsContainer);

    programsContainer.appendChild(programDiv);

    program.semesters.forEach((semester, semIndex) => {
      const tabId = `program-${programIndex}-sem-${semIndex}`;

      const tabButton = document.createElement("button");
      tabButton.className = "tab-button";
      tabButton.textContent = semester.name;
      tabButton.setAttribute("data-target", tabId);
      tabButton.setAttribute("data-program", programIndex);

      if (semIndex === 0) {
        tabButton.classList.add("active");
      }

      tabsContainer.appendChild(tabButton);

      const tabContent = document.createElement("div");
      tabContent.id = tabId;
      tabContent.className = "tab-content";
      if (semIndex !== 0) tabContent.style.display = "none";

      const contentInner = `
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


  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", function () {
      const programIndex = this.getAttribute("data-program");
      const targetId = this.getAttribute("data-target");

      const programDiv = this.closest(".program-container");

      programDiv.querySelectorAll(".tab-button").forEach((btn) => {
        btn.classList.remove("active");
      });

      programDiv.querySelectorAll(".tab-content").forEach((content) => {
        content.style.display = "none";
      });

      this.classList.add("active");

      const targetContent = document.getElementById(targetId);
      targetContent.style.display = "block";
      targetContent.style.animation = "none";
      setTimeout(() => {
        targetContent.style.animation = "fadeIn 0.3s ease";
      }, 10);
    });
  });
}

window.onload = renderPrograms;

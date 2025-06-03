const programsData = {
  programs: [
    {
      name: "BBA LLB",
      semesters: [
        {
          name: "Year 1 - Sem 1",
          courses: [
            "Computer Application",
            "English – I",
            "Financial Accounting",
            "Law of Torts, Consumer Protection & Motor Vehicle Act",
            "Legal Method",
            "Management Foundation",
            "Managerial Economics",
          ],
        },
        {
          name: "Year 1 - Sem 2",
          courses: [
            "Constitutional Law – I",
            "English – II",
            "Environmental Studies",
            "Human Resource Management",
            "Human Values and Professional Ethics",
            "Law of Contract – I",
            "Organisational Behaviour",
          ],
        },
        {
          name: "Year 2 - Sem 3",
          courses: [
            "Constitutional Law – II",
            "Family Law – I",
            "Interpretation of Statutes",
            "Law of Contract – II",
            "Marketing Management",
            "Mergers & Acquisitions",
            "Strategic Management",
            "Summer Internship – I (Evaluation)"
          ],
        },
        {
          name: "Year 2 - Sem 4",
          courses: [
            "Citizenship & Emigration Law (Elective)",
            "Comparative Constitution (Elective)",
            "Consumer Behaviour",
            "Family Law – II",
            "Human Rights Law and Practice (Elective)",
            "Industrial Psychology",
            "International Business",
            "International Organizations (Elective)",
            "Law of Crimes – I"
          ],
        },
        {
          name: "Year 3 - Sem 5",
          courses: [
            "Administrative Law",
            "Gender Justice and Feminist Jurisprudence (Elective)",
            "Labour Law – I",
            "Law of Crimes – II",
            "Law of Evidence",
            "Law on Education (Elective)",
            "Offenses Against Child & Juvenile Offence (Elective)",
            "Organisational Development and Change (Specialization in HR)",
            "Summer Internship – II (Evaluation)",
            "Training and Development (Specialization in HR)"
          ],
        },
        {
          name: "Year 3 - Sem 6",
          courses: [
            "Banking Laws (Specialization in Business Laws)",
            "Code of Civil Procedure",
            "Compensation and Reward Management (Specialization in HR)",
            "Criminal Psychology (Specialization in Crime & Criminology)",
            "International Dispute Resolution Bodies (Elective)",
            "International Environmental Law (Elective)",
            "International Trade Economics (Elective)",
            "IPR Management (Specialization in Intellectual Property Laws)",
            "Labour Law – II",
            "Performance Management System (Specialization in HR)",
            "Private International Law (Elective)",
            "Public International Law"
          ],
        },
        {
          name: "Year 4 - Sem 7",
          courses: [
            "Arbitration & Alternative Dispute Resolution",
            "Company Law",
            "Copyright Law (Specialization in Intellectual Property Laws)",
            "Corporate Governance (Specialization in Business Laws)",
            "Forensic Science (Specialization in Crime & Criminology)",
            "Intellectual Property Law",
            "Investment Laws (Specialization in Business Laws)",
            "IPR Transactions (Specialization in Intellectual Property Laws)",
            "Jurisprudence",
            "Summer Internship – III (Evaluation)",
            "Women and Criminal Law (Specialization in Crime & Criminology)"
          ],
        },
        {
          name: "Year 4 - Sem 8",
          courses: [
            "Bankruptcy Law (Specialization in Business Laws)",
            "Competition Law",
            "Environmental Law",
            "Insurance Law (Specialization in Business Laws)",
            "International Criminal Law (Specialization in Crime & Criminology)",
            "Patent Right Creation & Registration (Specialization in Intellectual Property Laws)",
            "Penology & Victimology (Specialization in Crime & Criminology)",
            "Property Law",
            "Taxation Law",
            "Trademark and Design (Specialization in Intellectual Property Laws)",
          ],
        },
        {
          name: "Year 5 - Sem 9",
          courses: [
            "Drafting Pleading & Conveyance",
            "IPR in SMEs (Specialization in Intellectual Property Laws)",
            "IPR Litigation (Specialization in Intellectual Property Laws)",
            "IT Offenses (Specialization in Crime & Criminology)",
            "Law on Corporate Finance (Specialization in Business Laws)",
            "Law on Infrastructure Development (Specialization in Business Laws)",
            "Prison Administration (Specialization in Crime & Criminology)",
            "Probation and Parole (Specialization in Crime & Criminology)",
            "Professional Ethics",
            "Summer Internship – IV (Evaluation)",
            "Trade Secret and Technology Transfer (Specialization in Intellectual Property Laws)",
            "Transportation Law (Specialization in Business Laws)"
          ],
        },
        {
          name: "Year 5 - Sem 10",
          courses: [
            "Internship/Corporate Legal Training",
            "Seminar Paper/Project"
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

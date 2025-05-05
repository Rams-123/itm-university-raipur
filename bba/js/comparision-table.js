// JSON data for the comparison table
const comparisonData = {
  headers: ["Feature", "Conventional BBA", "BBA at ITM Vocational University"],
  headerColors: [
    "bg-[#f8f8f8] text-[#333333]",
    "bg-[#333333] text-white",
    "bg-[#a91d54] text-white",
  ],
  rows: [
    {
      feature: "Internships",
      conventional: "Limited",
      itm: "6-Month Industry-Integrated Internships, Live Projects",
    },
    {
      feature: "Certifications",
      conventional: "Not Included",
      itm: "Industry-Recognized Certifications (e.g., Google Ads, SHRM)",
    },
    {
      feature: "Placements",
      conventional: "Limited Assistance",
      itm: "Comprehensive 100% Placement Assistance",
    },
    {
      feature: "Practical Exposure",
      conventional: "Predominantly Theoretical Learning",
      itm: "Case Studies, Guest Lectures, Simulations, and Industry Visits",
    },
    {
      feature: "Curriculum",
      conventional: "Outdated",
      itm: "Modern, Industry-Aligned Curriculum with Specializations",
    },
    {
      feature: "Faculty Expertise",
      conventional: "Primarily Academic Background",
      itm: "Faculty with Blend of Academic & Industry Expertise",
    },
    {
      feature: "Specializations Offered",
      conventional: "Limited Options",
      itm: "Industry Benchmarked Specializations",
    },
    {
      feature: "Infrastructure",
      conventional: "Basic Facilities",
      itm: "Hi-Tech Labs, Cutting-Edge Infrastructure",
    },
    {
      feature: "Soft Skills Development",
      conventional: "Minimal Focus",
      itm: "Dedicated Focus on Leadership, Communication, and Teamwork",
    },
    {
      feature: "Global Opportunities",
      conventional: "Rare",
      itm: "International Collaborations and Global Internship Opportunities",
    },
  ],
};

// Function to create the mobile view
function createMobileView() {
  const mobileView = document.createElement("div");
  mobileView.className = "flex lg:hidden w-full py-4";

  let mobileHtml = `
        <table class="flex flex-col w-full rounded-md">
          <thead class="flex w-full">
            <tr class="flex w-full">
              <th class="border-x w-2/5 font-bold p-2 items-center justify-center text-sm bg-[#a91d54] rounded-tl-md text-white">
                ${comparisonData.headers[1]}
              </th>
              <th class="border-x w-3/5 font-bold p-2 items-start text-left justify-left text-sm bg-[#333333] rounded-tr-md text-white">
                ${comparisonData.headers[2]}
              </th>
            </tr>
          </thead>
          <tbody class="flex flex-col w-full border">
      `;

  comparisonData.rows.forEach((row) => {
    mobileHtml += `
          <div>
            <tr class="flex border-y w-full odd:text-sm odd:font-bold even:text-sm">
              <td colspan="2" class="w-full px-2 py-2 border-x text-[#a91d54]">
                ${row.feature}
              </td>
            </tr>
            <tr class="flex border-y w-full odd:text-sm odd:font-bold even:text-sm">
              <td class="w-2/5 px-2 py-2 bg-gray-100 border-x items-center justify-start flex">
                ${row.conventional} <!-- Corrected from row.traditional to row.conventional -->
              </td>
              <td class="flex bg-[#ffeede] items-start w-3/5 px-2 py-2 border-x">
                ${row.itm}
              </td>
            </tr>
          </div>
        `;
  });

  mobileHtml += `
          </tbody>
        </table>
      `;

  mobileView.innerHTML = mobileHtml;
  return mobileView;
}

// Function to create the desktop view
function createDesktopView() {
  const desktopView = document.createElement("div");
  desktopView.className = "hidden lg:flex w-full";

  let desktopHtml = `
        <div class="flex xl:gap-5 gap-y-10 w-full">
          <table class="flex w-full max-w-7xl mx-auto flex-col">
            <thead>
              <tr class="flex w-full mx-auto">
      `;

  comparisonData.headers.forEach((header, index) => {
    const width = index === 0 ? "w-[40%]" : "w-[30%]";
    const roundedCorner =
      index === 0 ? "rounded-tl-md" : index === 2 ? "rounded-tr-md" : "";
    const padding = index === 0 ? "px-5" : "px-3";
    const justify = index === 0 ? "justify-start" : "justify-center";

    desktopHtml += `
          <td class="flex border-x ${width} ${roundedCorner} ${padding} py-2 border-y border-gray-300 text-base font-bold items-center ${justify} ${comparisonData.headerColors[index]}">
            ${header}
          </td>
        `;
  });

  desktopHtml += `
              </tr>
            </thead>
            <tbody class="flex flex-col w-full">
      `;

  comparisonData.rows.forEach((row) => {
    desktopHtml += `
          <tr class="flex w-full">
            <td class="flex w-[40%] items-center border-y border-l">
              <span class="flex px-5 py-2 h-full">
                ${row.feature}
              </span>
            </td>
            <td class="flex border-x w-[30%] px-3 pt-3 pb-2 bg-white border-b text-sm">
              ${row.conventional} <!-- Corrected from row.traditional to row.conventional -->
            </td>
            <td class="flex border-x items-start w-[30%] px-3 pt-3 pb-2 border-b border-gray-300 bg-[#ffeede] text-sm">
              ${row.itm}
            </td>
          </tr>
        `;
  });

  desktopHtml += `
            </tbody>
          </table>
        </div>
      `;

  desktopView.innerHTML = desktopHtml;
  return desktopView;
}

// Render both views to the container
function renderComparisonTable() {
  const container = document.getElementById("comparison-table-container");
  container.appendChild(createMobileView());
  container.appendChild(createDesktopView());
}

// Initialize the table when the DOM is loaded
document.addEventListener("DOMContentLoaded", renderComparisonTable);

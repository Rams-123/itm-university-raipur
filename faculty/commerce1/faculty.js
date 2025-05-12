// Specify the correct ID from the JSON
const desiredId = "School of Commerce, Management and Research";

fetch("faculty.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Failed to fetch faculty data (${response.status} ${response.statusText})`
      );
    }
    return response.json();
  })
  .then((facultyData) => {
    const desiredCategory = facultyData.find(
      (category) => category.id === desiredId
    );

    if (!desiredCategory) {
      console.error(`Category with ID ${desiredId} not found.`);
      return;
    }

    let output = `
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4 py-5 items-center justify-center w-full flex">
          ${desiredCategory.id}
        </h2>
        <ul class="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-fit">
          ${desiredCategory.data.map(showData).join("")}
        </ul>
      </div>
    `;

    const facultyList = document.getElementById("facultyList");
    facultyList.innerHTML = output;
  })
  .catch((error) => {
    console.error("Error fetching faculty data:", error.message);
  });

function showData(faculty) {
  return `
    <li class="relative grid grid-cols-1 md:grid-cols-2 md:w-96 text-xs gap-1 px-3 py-3 w-80 border border-gray-300 cursor-pointer transition-all group hover:shadow-md hover:border-brand-red rounded-md items-center justify-center max-w-sm">
      <div class="flex flex-col w-full rounded-md border border-gray-300">
        <div class="flex w-full rounded-md">
          <img src="${
            faculty.img
          }" class="flex w-full object-contain rounded-md" alt="${
    faculty.name
  }">
        </div>
        <div class="flex flex-col px-2 py-3 w-full">
          <h4 class="flex w-full text-center items-center justify-center text-brand-red">${
            faculty.name
          }</h4>
          <p class="text-center font-semibold">${faculty.designation}</p>
        </div>
      </div>
      <div class="flex flex-col w-full h-full pl-5 rounded-md gap-3 items-center justify-around">
        <div class="w-full text-left">
          <strong class="font-bold text-brand-red">Qualification:</strong> ${
            faculty.qualification
          }
        </div>
        <div class="w-full text-left">
          <strong class="font-bold text-brand-red">Field of Expertise:</strong> ${
            faculty.fieldOfExpertise || "N/A"
          }
        </div>
        <div class="w-full text-left">
          <strong class="font-bold text-brand-red">Experience:</strong> ${
            faculty.yearOfExp
          }
        </div>
      </div>
    </li>
  `;
}

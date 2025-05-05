// 1. Define the desired category ID
const desiredId = "School of Engineering and Research";

// 2. Fetch the faculty.json file
fetch("faculty.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Failed to load data: ${res.status} ${res.statusText}`);
    }
    return res.json();
  })
  .then((facultyData) => {
    // 3. Find the category matching the desired ID
    const category = facultyData.find((item) => item.id === desiredId);

    if (!category) {
      console.error(`Category "${desiredId}" not found in faculty data.`);
      return;
    }

    console.log(category);

    // 4. Render the category content
    const output = `
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4 py-5 flex justify-center">${
          category.id
        }</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">${category.data
          .map(showData)
          .join("")}</ul>
      </div>
    `;

    document.getElementById("facultyList").innerHTML = output;
  })
  .catch((err) => {
    console.error("Error fetching faculty data:", err.message);
  });

// 5. Template for individual faculty card
function showData(faculty) {
  return `
    <li class="group relative grid grid-cols-1 md:grid-cols-2 w-80 md:w-96 text-xs gap-1 px-3 py-3 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-all cursor-pointer">
      <div class="flex flex-col w-full rounded-md border border-gray-300 overflow-hidden">
        <img src="${faculty.img}" alt="${faculty.name}" class="object-contain w-full h-auto" />
        <div class="px-2 py-3">
          <h4 class="text-center text-brand-red font-semibold">${faculty.name}</h4>
        </div>
      </div>
      <div class="flex flex-col gap-4 pl-5 justify-center">
        <div>
          <strong class="text-brand-red">Qualification:</strong> ${faculty.qualification}
        </div>
        <div>
          <strong class="text-brand-red">Field of Expertise:</strong> ${faculty.fieldOfExpertise}
        </div>
      </div>
    </li>
  `;
}

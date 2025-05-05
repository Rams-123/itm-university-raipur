// Specify the desired ID you want to display
const desiredId = "School of Life & Allied Science"; // Change this to the desired ID

fetch("faculty.json")
  .then((response) => {
    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error(
        `Failed to fetch faculty data (${response.status} ${response.statusText})`
      );
    }
    // Parse the JSON data
    return response.json();
  })
  .then((facultyData) => {
    // Find the category with the desired ID
    const desiredCategory = facultyData.find(
      (category) => category.id === desiredId
    );

    if (!desiredCategory) {
      console.error(`Category with ID ${desiredId} not found.`);
      return;
    }

    // Once the JSON data is successfully fetched and parsed, you can use it
    // console.log(desiredCategory);
    // Process desiredCategory data or call your rendering function here
    let output = `
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4 py-5 items-center justify-center w-full flex">${
          desiredCategory.id
        }</h2>
        <ul class="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-fit">${desiredCategory.data
          .map(showData)
          .join("")}</ul>
      </div>
    `;

    let facultyList = document.getElementById("facultyList");
    facultyList.innerHTML = output;
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error("Error fetching faculty data:", error.message);
  });

// Your showData function remains the same
function showData(faculty) {
  let facultylistItems = `
    <li class="relative grid grid-cols-1 md:grid-cols-2 md:w-96 text-xs gap-1 px-3 py-3 w-80 border border-gray-300 cursor-pointer transition-all group hover:shadow-md hover:border-brand-red group h-auto rounded-md items-center justify-center max-w-sm">
      <div class="flex flex-col w-full rounded-md border border-gray-300">
          <div class="flex w-full rounded-md">
          <img src="${faculty.img}" class="flex w-full object-contain rounded-md" alt="">
          </div>
          <div class="flex flex-col px-2 py-3 w-full">
              <h4 class="flex w-full text-center items-center justify-center text-brand-red">${faculty.name}</h4>
          </div>
      </div>
      <div class="flex flex-col w-full h-full pl-5 rounded-md gap-5 items-center justify-around">
          <div class="flex flex-col gap-4 w-full ">
              <div class="w-full text-left items-start justify-start">
                  <strong class="font-bold text-brand-red">Qualification :</strong> ${faculty.qualification}
              </div>
              <div class="w-full text-left items-start justify-start">
                  <strong class="font-bold text-brand-red">Field of Expertise :</strong> ${faculty.fieldOfExpertise}
              </div>
          </div>
      </div>
    </li>
  `;
  return facultylistItems;
}

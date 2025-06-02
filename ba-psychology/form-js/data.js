const baseUrl = "/ba-psychology/form-js";


const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching data from ${url}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return null;
    }
};

const populateDropdown = (dropdown, data, valueKey, textKey, defaultText = "Select State") => {
    dropdown.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = defaultText;
    defaultOption.disabled = true;
    defaultOption.selected = true;
    dropdown.appendChild(defaultOption);

    data.forEach((item) => {
        const option = document.createElement("option");
        option.value = item[valueKey];
        option.textContent = item[textKey];
        dropdown.appendChild(option);
    });
};

const initStateCityDropdowns = async (stateId, cityId) => {
    const stateSelect = document.getElementById(stateId);
    const citySelect = document.getElementById(cityId);

    if (!stateSelect || !citySelect) {
        // console.error(`Dropdowns with IDs "${stateId}" or "${cityId}" not found.`);
        return;
    }

    const data = await fetchData(`${baseUrl}/data.json`);
    if (!data) return;

    populateDropdown(stateSelect, data, "name", "name", "Select State");

    stateSelect.addEventListener("change", () => {
        const selectedState = stateSelect.value;
        const stateObj = data.find((state) => state.name === selectedState);

        if (stateObj) {
            populateDropdown(citySelect, stateObj.cities, "name", "name", "Select City");
            citySelect.disabled = false; // Enable city dropdown
        } else {
            populateDropdown(citySelect, [], "name", "name", "Select City");
        }
    });
};

const initCountryDropdown = async (countryId, locationClass) => {
    const countrySelect = document.getElementById(countryId);

    if (!countrySelect) {
        // console.error(`Dropdown with ID "${countryId}" not found.`);
        return;
    }

    const data = await fetchData(`${baseUrl}/country.json`);
    if (!data) return;

    populateDropdown(countrySelect, data, "countryCode", "countryCode", "Select Country");
    countrySelect.value = "+91";

    countrySelect.addEventListener("change", () => {
        const countryCode = countrySelect.value;

        const parentForm = countrySelect.closest("form");
        if (!parentForm) return;

        const locationDivs = parentForm.querySelectorAll(`.${locationClass}`);
        locationDivs.forEach((div) => {
            div.style.display = countryCode === "+91" ? "block" : "none";
        });
    });
};

const populateProgramDropdown = (dropdown, data, valueKey, textKey, defaultText = "Select Option") => {
    dropdown.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = defaultText;
    defaultOption.disabled = true;
    defaultOption.selected = true;
    dropdown.appendChild(defaultOption);

    data.forEach((item) => {
        const option = document.createElement("option");
        option.value = item[valueKey];
        option.textContent = item[textKey];
        dropdown.appendChild(option);
    });
};

const initProgramDropdowns = async (programId, courseId, specializationId) => {
    let programSelect = document.getElementById(programId);
    let courseSelect = document.getElementById(courseId);
    let specializationSelect = document.getElementById(specializationId);

    if (!programSelect || !courseSelect || !specializationSelect) {
        return;
    }

    const data = await fetchData(`${baseUrl}/program.json`);
    if (!data) return;

    populateProgramDropdown(programSelect, data, "name", "name", "Select Program");

    programSelect.addEventListener("change", () => {
        const selectedProgram = programSelect.value;
        const programObj = data.find((program) => program.name === selectedProgram);

        if (programObj) {
            populateProgramDropdown(courseSelect, programObj.course, "name", "name", "Select Course");
            courseSelect.disabled = false;
            specializationSelect.disabled = true;
            // specializationSelect.innerHTML = "";     
        } else {
            populateProgramDropdown(courseSelect, [], "name", "name", "Select Course");
            courseSelect.disabled = true;
            specializationSelect.disabled = true;
        }
    });

    courseSelect.addEventListener("change", () => {
        const selectedProgram = programSelect.value;
        const selectedCourse = courseSelect.value;
        const programObj = data.find((program) => program.name === selectedProgram);
        const courseObj = programObj?.course.find((course) => course.name === selectedCourse);

        if (courseObj) {
            populateProgramDropdown(specializationSelect, courseObj.specialization, "name", "name", "Select Specialization");
            specializationSelect.disabled = false;
        } else {
            populateProgramDropdown(specializationSelect, [], "name", "name", "Select Specialization");
            specializationSelect.disabled = true;
        }
    });
};

initStateCityDropdowns("state", "city");
initStateCityDropdowns("state1", "city1");
initCountryDropdown("countrySelect", "location");
initCountryDropdown("countrySelect1", "location1");
// initProgramDropdowns("program", "course", "specialization");
